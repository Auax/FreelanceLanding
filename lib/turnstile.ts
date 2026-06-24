type TurnstileVerifyResponse = {
  success: boolean;
};

export async function verifyTurnstileToken(token: string, remoteIp: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.error("TURNSTILE_SECRET_KEY is not configured.");
      return false;
    }

    return true;
  }

  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: remoteIp,
      }),
    },
  );

  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileVerifyResponse;
  return result.success === true;
}
