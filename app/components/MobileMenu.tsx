"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { navItems, getNavHref } from "./site-data";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const iconTransition = {
  type: "spring",
  stiffness: 520,
  damping: 38,
  mass: 0.7,
} as const;

const panelVariants = {
  closed: {
    opacity: 0,
    y: -16,
    scaleY: 0.96,
    filter: "blur(6px)",
  },
  open: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scaleY: 0.97,
    filter: "blur(4px)",
    transition: {
      duration: 0.26,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
    },
  },
};

const listVariants = {
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.055,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

const reducedListVariants = {
  closed: {},
  open: {},
  exit: {},
};

const itemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const reducedVariants = {
  closed: { opacity: 0, y: 0, scaleY: 1, filter: "blur(0px)" },
  open: { opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: 0, scaleY: 1, filter: "blur(0px)" },
};

function MenuMorphIcon({
  open,
  reducedMotion,
}: {
  open: boolean;
  reducedMotion: boolean;
}) {
  const transition = reducedMotion ? { duration: 0 } : iconTransition;

  return (
    <motion.svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      initial={false}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <motion.path
        animate={{ d: open ? "M 6.5 6.5 L 17.5 17.5" : "M 5 7 L 19 7" }}
        transition={transition}
      />
      <motion.path
        animate={{
          d: open ? "M 12 12 L 12 12" : "M 5 12 L 19 12",
          opacity: open ? 0 : 1,
        }}
        transition={transition}
      />
      <motion.path
        animate={{ d: open ? "M 6.5 17.5 L 17.5 6.5" : "M 5 17 L 19 17" }}
        transition={transition}
      />
    </motion.svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const activePanelVariants = shouldReduceMotion ? reducedVariants : panelVariants;
  const activeListVariants = shouldReduceMotion ? reducedListVariants : listVariants;
  const activeItemVariants = shouldReduceMotion ? reducedVariants : itemVariants;
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const inertElements = [document.querySelector("main")]
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    for (const element of inertElements) {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusable = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      const firstLink = menuPanelRef.current?.querySelector<HTMLElement>("a[href]");
      firstLink?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;

      for (const element of inertElements) {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      }

      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [open]);

  const menuLayer = typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="mobile-menu-layer"
              className="pointer-events-none fixed inset-0 z-40"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
            >
              <motion.button
                type="button"
                aria-label="Cerrar navegaci\u00f3n"
                tabIndex={-1}
                onClick={closeMenu}
                className="pointer-events-auto absolute inset-x-0 bottom-0 top-[72px] cursor-default bg-black/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
              />

              <motion.div
                ref={menuPanelRef}
                id="mobile-navigation"
                className="pointer-events-auto absolute inset-x-0 top-[72px] origin-top overflow-hidden border-b border-black/5 bg-white/80 px-5 pb-8 pt-2 shadow-[0_20px_40px_rgb(16_23_34/0.12)] backdrop-blur-sm"
                style={{
                  WebkitBackdropFilter: "blur(10px) saturate(1.25)",
                  backdropFilter: "blur(10px) saturate(1.25)",
                }}
                variants={activePanelVariants}
                initial="closed"
                animate="open"
                exit="exit"
                onClickCapture={(event: ReactMouseEvent<HTMLDivElement>) => {
                  const target = event.target;

                  if (target instanceof Element && target.closest("a")) {
                    closeMenu();
                  }
                }}
              >
                <nav aria-label="Mobile navigation">
                  <motion.ul
                    className="flex flex-col"
                    variants={activeListVariants}
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={activeItemVariants}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                      >
                        <a
                          href={getNavHref(item)}
                          className="block border-b border-black/5 py-3.5 text-xl font-light text-text-secondary transition-colors last:border-0 hover:text-primary"
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                <motion.div
                  className="mt-5 flex flex-col gap-3 border-t border-black/5 pt-10"
                  variants={activeItemVariants}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/70 backdrop-blur-sm"
                    href="#contacto"
                  >
                    Pedir auditoría
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full gap-2"
                    href="#contacto"
                  >
                    WhatsApp
                    <WhatsAppIcon className="size-4 shrink-0" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <div className="lg:hidden">
      <motion.button
        ref={menuButtonRef}
        type="button"
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar navegaci\u00f3n" : "Abrir navegaci\u00f3n"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 cursor-pointer place-items-center rounded-lg border border-black/10 bg-white/80 text-text-primary backdrop-blur-sm transition hover:bg-white/90"
        whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
      >
        <MenuMorphIcon open={open} reducedMotion={Boolean(shouldReduceMotion)} />
      </motion.button>

      {menuLayer}
    </div>
  );
}
