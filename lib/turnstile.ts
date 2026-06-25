type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
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

  let response: Response;
  try {
    response = await fetch(
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
  } catch (error) {
    console.error(
      "Turnstile verification request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return false;
  }

  if (!response.ok) {
    console.error("Turnstile verification failed with HTTP status:", response.status);
    return false;
  }

  const result = (await response.json()) as TurnstileVerifyResponse;
  if (!result.success) {
    console.error("Turnstile rejected a contact form token:", result["error-codes"]);
  }

  return result.success === true;
}
