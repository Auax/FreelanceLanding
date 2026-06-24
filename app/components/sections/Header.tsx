import { Button } from "../Button";
import { Logo } from "../Logo";
import { MobileMenu } from "../MobileMenu";
import { SiteHeaderFrame } from "../Motion";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { navItems, getNavHref } from "../site-data";

export function Header() {
  return (
    <SiteHeaderFrame className="fixed z-50 w-full border-b border-transparent bg-transparent py-4 backdrop-blur-none transition-[background-color,border-color,backdrop-filter] duration-300 data-[scrolled=true]:border-black/5 data-[scrolled=true]:bg-white/80 data-[scrolled=true]:backdrop-blur-md">
      <div className="container mx-auto grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav
          className="hidden justify-self-center lg:col-start-2 lg:row-start-1 lg:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item} className="px-4 py-2">
                <a
                  href={getNavHref(item)}
                  className="text-sm font-light text-text-secondary transition-colors hover:text-primary focus-visible:outline-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-self-end gap-3 lg:col-start-3 lg:flex">
          <Button variant="outline" href="#contacto">
            Pedir auditoría
          </Button>
          <Button variant="primary" href="#contacto" className="gap-2">
            WhatsApp
            <WhatsAppIcon className="size-4 shrink-0" />
          </Button>
        </div>

        <div className="col-start-2 row-start-1 justify-self-end lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </SiteHeaderFrame>
  );
}
