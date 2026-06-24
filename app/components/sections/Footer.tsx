import { Logo } from "../Logo";
import { Reveal } from "../Motion";
import { getNavHref, navItems } from "../site-data";

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
        <div className="flex gap-5">
          <a href="#" className="hover:text-text-primary">
            Términos
          </a>
          <a href="#" className="hover:text-text-primary">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
