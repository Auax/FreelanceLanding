"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

type UniqueAccordionProps = {
  items: AccordionItem[];
  defaultActiveId?: string | null;
  className?: string;
};

export function UniqueAccordion({
  items,
  defaultActiveId,
  className,
}: UniqueAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    defaultActiveId === undefined ? (items[0]?.id ?? null) : defaultActiveId,
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className={cn("w-full max-w-xl", className)}>
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;
          const contentId = `accordion-content-${item.id}`;
          const triggerId = `accordion-trigger-${item.id}`;

          return (
            <div key={item.id}>
              <motion.button
                type="button"
                id={triggerId}
                aria-expanded={isActive}
                aria-controls={contentId}
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative w-full cursor-pointer text-left"
                initial={false}
              >
                <div className="flex items-center gap-4 px-1 py-5 sm:gap-6 lg:py-6">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                    <motion.span
                      className="relative z-10 text-xs tracking-wide"
                      animate={{
                        color: isActive || isHovered
                          ? "var(--color-primary-foreground)"
                          : "var(--color-text-secondary)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="text-lg font-medium tracking-tight xl:text-xl"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color:
                        isActive || isHovered
                          ? "var(--color-text-primary)"
                          : "var(--color-text-secondary)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <div className="ml-auto flex shrink-0 items-center gap-3">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-text-primary"
                        animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={false}
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                <motion.div className="absolute right-0 bottom-0 left-0 h-px origin-left bg-border" initial={false} />
                <motion.div
                  className="absolute bottom-0 left-0 h-px origin-left bg-text-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </motion.button>

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={false}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="py-6 pr-12 pl-16 leading-relaxed text-text-secondary"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
