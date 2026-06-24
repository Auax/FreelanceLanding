import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.CONTACT_TEST_BASE_URL ?? "http://localhost:3000";

function buildPayload(overrides = {}) {
  return {
    submissionId: crypto.randomUUID(),
    name: "Test User",
    email: "test@example.com",
    phone: "+34 600 00 00 00",
    details: "Mensaje de prueba",
    website: "",
    company: "",
    turnstileToken: "",
    ...overrides,
  };
}

test("contact route rejects non-JSON requests", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    body: "name=test",
  });

  assert.equal(response.status, 415);
});

test("contact route rejects invalid payloads", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "x" }),
  });

  assert.equal(response.status, 400);
});

test("contact route accepts honeypot submissions silently", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload({ company: "Acme Corp" })),
  });

  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.message, "Mensaje enviado.");
});
