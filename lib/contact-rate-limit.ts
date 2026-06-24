import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

type RateLimitEntry = { count: number; resetAt: number };

const globalRateLimit = globalThis as typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>;
};

const memoryStore =
  globalRateLimit.contactRateLimit ??
  (globalRateLimit.contactRateLimit = new Map<string, RateLimitEntry>());

function checkMemoryRateLimit(key: string) {
  const now = Date.now();

  if (memoryStore.size > 1_000) {
    for (const [storedKey, entry] of memoryStore) {
      if (entry.resetAt <= now) memoryStore.delete(storedKey);
    }
  }

  if (memoryStore.size > 5_000) memoryStore.clear();

  const current = memoryStore.get(key);

  if (!current || current.resetAt <= now) {
    memoryStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function createUpstashRateLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  const redis = new Redis({ url, token });

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, "10 m"),
    prefix: "contact-form",
    analytics: false,
  });
}

const upstashRateLimiter = createUpstashRateLimiter();

export async function checkContactRateLimit(key: string) {
  if (!upstashRateLimiter) {
    return checkMemoryRateLimit(key);
  }

  const result = await upstashRateLimiter.limit(key);

  return {
    allowed: result.success,
    retryAfter: Math.max(1, Math.ceil((result.reset - Date.now()) / 1000)),
  };
}
