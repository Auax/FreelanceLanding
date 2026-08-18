import Link from "next/link";
import { Phone } from "lucide-react";

import { Logo } from "../Logo";
import { Reveal } from "../Motion";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { contactInfo, getNavHref, navItems } from "../site-data";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
  { label: "Términos", href: "/terminos" },
] as const;

const footerNavItems = [
  ...navItems.map((label) => ({ label, href: getNavHref(label) })),
  { label: "Blog", href: "/blog" },
] as const;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-raised">
      <Reveal>
        <div className="container mx-auto grid gap-7 pb-5 pt-8 sm:pb-6 sm:pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8 lg:pb-7 lg:pt-12">
          <div>
            <Logo />
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary sm:text-base">
              Diseño web claro y eficaz para negocios locales.
            </p>

            <div className="mt-4 flex items-center gap-6" aria-label="Canales de contacto">
              <a
                href={contactInfo.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de IB Studio"
                className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={contactInfo.phoneHref}
                aria-label={`Llamar a IB Studio al ${contactInfo.phone}`}
                className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Phone className="size-5" strokeWidth={1.8} />
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Contactar con IB Studio por WhatsApp"
                className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie de página" className="md:self-center md:justify-self-end">
            <ul className="flex flex-wrap gap-x-7 gap-y-3.5 md:flex-nowrap md:justify-end">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-text-secondary transition-colors hover:text-primary sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>

      <div className="container mx-auto">
        <div className="flex flex-col gap-3 pb-6 text-xs text-text-secondary sm:pb-8 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 IB Studio. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
