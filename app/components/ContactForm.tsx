"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import dynamic from "next/dynamic";
import { FormEvent, useRef, useState } from "react";
import { Button } from "./Button";

const PhoneInput = dynamic(
  () => import("./PhoneInput").then((module) => module.PhoneInput),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-[50px] animate-pulse rounded-lg border border-border bg-surface-raised"
      />
    ),
  },
);

const inputClasses =
  "w-full rounded-lg border border-border bg-surface-raised px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

const labelClasses = "mb-2 block text-sm font-medium text-text-primary";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const [formVersion, setFormVersion] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const submissionIdRef = useRef<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submissionId = submissionIdRef.current ?? crypto.randomUUID();
    submissionIdRef.current = submissionId;
    setSubmission({ status: "submitting" });

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          details: formData.get("details"),
          website: formData.get("website"),
          company: formData.get("company"),
          turnstileToken,
        }),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "No se pudo enviar el mensaje.");
      }

      form.reset();
      setFormVersion((version) => version + 1);
      submissionIdRef.current = null;
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setSubmission({
        status: "success",
        message: "Mensaje enviado. Me pondré en contacto contigo pronto.",
      });
    } catch (error) {
      turnstileRef.current?.reset();
      setTurnstileToken("");

      const message =
        error instanceof DOMException && error.name === "AbortError"
          ? "El envío tardó demasiado. Inténtalo de nuevo."
          : error instanceof Error
            ? error.message
            : "No se pudo enviar el mensaje. Inténtalo de nuevo.";

      setSubmission({ status: "error", message });
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => {
        submissionIdRef.current = null;
        if (submission.status !== "idle" && submission.status !== "submitting") {
          setSubmission({ status: "idle" });
        }
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Número de teléfono
        </label>
        <PhoneInput key={formVersion} />
      </div>

      <div>
        <label htmlFor="details" className={labelClasses}>
          Detalles del Proyecto <span className="font-normal text-text-secondary">(opcional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Cuéntame más sobre lo que necesitas..."
          maxLength={1200}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="website" className={labelClasses}>
          Web Actual <span className="font-normal text-text-secondary">(opcional)</span>
        </label>
        <input
          id="website"
          name="website"
          type="url"
          maxLength={500}
          placeholder="https://tuweb.com"
          className={inputClasses}
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {turnstileSiteKey ? (
        <Turnstile
          ref={turnstileRef}
          siteKey={turnstileSiteKey}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken("")}
          onError={() => setTurnstileToken("")}
          options={{ theme: "light", size: "flexible" }}
        />
      ) : null}

      <div>
        <Button
          type="submit"
          disabled={
            submission.status === "submitting" ||
            (Boolean(turnstileSiteKey) && !turnstileToken)
          }
          className="w-full px-8 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submission.status === "submitting" ? "Enviando…" : "Enviar"}
        </Button>

        <p
          role={submission.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-3 min-h-5 text-sm ${
            submission.status === "error" ? "text-red-600" : "text-text-secondary"
          }`}
        >
          {submission.status === "success" || submission.status === "error"
            ? submission.message
            : ""}
        </p>
      </div>
    </form>
  );
}
