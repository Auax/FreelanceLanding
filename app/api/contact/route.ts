import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { Resend } from "resend";

const MAX_BODY_BYTES = 16_384;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9 ()-]{8,30}$/;
const SUBMISSION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type ContactPayload = {
  submissionId: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  website: string;
  company: string;
  turnstileToken: string;
};

function json(message: string, status: number, extraHeaders?: HeadersInit) {
  return Response.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...extraHeaders,
      },
    },
  );
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  ).slice(0, 64);
}

async function readJsonBody(request: Request) {
  if (!request.body) throw new Error("EMPTY_BODY");

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let body = "";
  let receivedBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    receivedBytes += value.byteLength;
    if (receivedBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("BODY_TOO_LARGE");
    }

    body += decoder.decode(value, { stream: true });
  }

  body += decoder.decode();
  return JSON.parse(body) as unknown;
}

function cleanString(value: unknown) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001F\u007F]/g, "").trim()
    : "";
}

function cleanMultilineString(value: unknown) {
  return typeof value === "string"
    ? value
        .replace(/\r\n?/g, "\n")
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
        .trim()
    : "";
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const input = value as Record<string, unknown>;
  const payload: ContactPayload = {
    submissionId: cleanString(input.submissionId),
    name: cleanString(input.name),
    email: cleanString(input.email).toLowerCase(),
    phone: cleanString(input.phone),
    details: cleanMultilineString(input.details),
    website: cleanString(input.website),
    company: cleanString(input.company),
    turnstileToken: cleanString(input.turnstileToken),
  };

  if (!SUBMISSION_ID_PATTERN.test(payload.submissionId)) return null;
  if (payload.name.length < 2 || payload.name.length > 80) return null;
  if (payload.email.length > 254 || !EMAIL_PATTERN.test(payload.email)) return null;
  if (!PHONE_PATTERN.test(payload.phone)) return null;
  if (payload.details.length > 1200 || payload.website.length > 500) return null;

  if (payload.website) {
    try {
      const url = new URL(payload.website);
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    } catch {
      return null;
    }
  }

  return payload;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function buildEmailHtml(payload: ContactPayload) {
  const rows = [
    ["Nombre", payload.name],
    ["Email", payload.email],
    ["Teléfono", payload.phone],
    ["Web actual", payload.website || "No indicada"],
    ["Detalles", payload.details || "No indicados"],
  ];

  return `
    <!doctype html>
    <html lang="es">
      <body style="margin:0;background:#f5f5f5;font-family:Arial,sans-serif;color:#171717">
        <div style="max-width:640px;margin:0 auto;padding:32px 16px">
          <div style="background:#ffffff;border:1px solid #e5e5e5;border-radius:12px;padding:28px">
            <h1 style="font-size:22px;margin:0 0 24px">Nuevo contacto desde IB Studio</h1>
            <table role="presentation" style="width:100%;border-collapse:collapse">
              ${rows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="width:120px;padding:10px 12px 10px 0;vertical-align:top;font-weight:700;border-top:1px solid #eeeeee">${label}</td>
                      <td style="padding:10px 0;white-space:pre-wrap;overflow-wrap:anywhere;border-top:1px solid #eeeeee">${escapeHtml(value)}</td>
                    </tr>`,
                )
                .join("")}
            </table>
          </div>
        </div>
      </body>
    </html>`;
}

function buildEmailText(payload: ContactPayload) {
  return [
    "Nuevo contacto desde IB Studio",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Teléfono: ${payload.phone}`,
    `Web actual: ${payload.website || "No indicada"}`,
    `Detalles: ${payload.details || "No indicados"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json("Tipo de contenido no permitido.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json("La solicitud es demasiado grande.", 413);
  }

  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if ((origin && origin !== requestOrigin) || (fetchSite && fetchSite !== "same-origin")) {
    return json("Solicitud no permitida.", 403);
  }

  const clientIp = getClientIp(request);
  const rateLimit = await checkContactRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return json("Demasiados intentos. Espera unos minutos.", 429, {
      "Retry-After": String(rateLimit.retryAfter),
    });
  }

  let rawPayload: unknown;
  try {
    rawPayload = await readJsonBody(request);
  } catch (error) {
    return error instanceof Error && error.message === "BODY_TOO_LARGE"
      ? json("La solicitud es demasiado grande.", 413)
      : json("Solicitud no válida.", 400);
  }

  const payload = parsePayload(rawPayload);
  if (!payload) {
    return json("Revisa los datos del formulario.", 400);
  }

  const turnstileValid = await verifyTurnstileToken(
    payload.turnstileToken,
    clientIp,
  );
  if (!turnstileValid) {
    return json("No se pudo verificar la solicitud. Inténtalo de nuevo.", 403);
  }

  // Silently accept honeypot submissions so bots do not learn how to bypass it.
  if (payload.company) {
    return json("Mensaje enviado.", 200);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form email environment variables are not configured.");
    return json("El formulario no está disponible temporalmente.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send(
      {
        from,
        to: [to],
        replyTo: payload.email,
        subject: `Nuevo proyecto de ${payload.name}`,
        html: buildEmailHtml(payload),
        text: buildEmailText(payload),
      },
      { idempotencyKey: `contact/${payload.submissionId}` },
    );

    if (error) {
      console.error("Resend rejected a contact form email:", error.name);
      return json("No se pudo enviar el mensaje. Inténtalo de nuevo.", 502);
    }

    return json("Mensaje enviado.", 200);
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return json("No se pudo enviar el mensaje. Inténtalo de nuevo.", 502);
  }
}
