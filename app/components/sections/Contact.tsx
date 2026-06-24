import { ContactForm } from "../ContactForm";
import { Reveal } from "../Motion";
import { SectionHeader } from "../SectionHeader";
import { contactInfo } from "../site-data";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-surface py-16 lg:py-24">
      <div className="container mx-auto">
      <SectionHeader
          title="Contacta conmigo"
          subtitle="¿Tienes alguna pregunta? ¿Quieres hablar de tu proyecto?"
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.14}>
            <aside className="space-y-10 lg:pt-2">
              <div>
                <h3 className="text-lg font-medium text-text-primary">¿Prefieres correo?</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  También puedes contactarme en{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-medium text-primary transition-colors hover:text-primary-hover"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary">¿Prefieres teléfono?</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  También puedes llamarme al{" "}
                  <a
                    href={contactInfo.phoneHref}
                    className="font-medium text-primary transition-colors hover:text-primary-hover"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
