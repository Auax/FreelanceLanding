import Link from "next/link";

import { Logo } from "../Logo";
import { Reveal } from "../Motion";
import { getNavHref, navItems } from "../site-data";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
  { label: "Términos", href: "/terminos" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Reveal>
        <div className="container mx-auto flex flex-col gap-8 pt-10 pb-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Logo />
            <p className="max-w-xs text-sm text-text-secondary">
              Diseño web claro y eficaz para negocios locales.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={getNavHref(item)}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>

      <div className="container mx-auto flex flex-col gap-3 pb-10 text-xs text-text-secondary md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 IB Studio. Todos los derechos reservados.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
