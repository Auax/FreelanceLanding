"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Tool = {
  name: string;
  logo: string;
  alt: string;
};

type ToolCarouselProps = {
  tools: readonly Tool[];
};

const VISIBLE_TOOL_COUNT = 3;
const ROTATION_INTERVAL_MS = 2400;

export function ToolCarousel({ tools }: ToolCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [visibleIndexes, setVisibleIndexes] = useState(() =>
    Array.from(
      { length: Math.min(VISIBLE_TOOL_COUNT, tools.length) },
      (_, index) => index,
    ),
  );

  useEffect(() => {
    if (tools.length <= VISIBLE_TOOL_COUNT) return;

    let slotIndex = 0;
    let nextToolIndex = VISIBLE_TOOL_COUNT;

    const interval = window.setInterval(() => {
      setVisibleIndexes((currentIndexes) => {
        const nextIndexes = [...currentIndexes];
        nextIndexes[slotIndex] = nextToolIndex;
        return nextIndexes;
      });

      slotIndex = (slotIndex + 1) % VISIBLE_TOOL_COUNT;
      nextToolIndex = (nextToolIndex + 1) % tools.length;
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [tools.length]);

  return (
    <>
      <ul
        className="mt-6 grid grid-cols-3 items-center justify-items-center lg:hidden"
        aria-label="Herramientas utilizadas"
      >
        {visibleIndexes.map((toolIndex, slotIndex) => {
          const tool = tools[toolIndex];

          return (
            <li
              key={slotIndex}
              className="flex min-w-0 items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={tool.name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { y: 8, scale: 0.98 }
                  }
                  animate={{ y: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { y: -8, scale: 0.98 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.12 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex min-h-14 w-full min-w-0 items-center justify-center gap-1.5 text-center text-xs leading-tight font-medium text-text-tertiary"
                >
                  <Image
                    src={tool.logo}
                    alt={tool.alt}
                    width={24}
                    height={24}
                    className="size-5 shrink-0"
                  />
                  <span className="text-lg font-medium text-text-tertiary">{tool.name}</span>
                </motion.div>
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <ul
        className="mt-6 hidden grid-cols-5 items-center justify-items-center lg:grid"
        aria-label="Herramientas utilizadas"
      >
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="flex items-center gap-2.5 whitespace-nowrap text-base font-medium text-text-tertiary"
          >
            <Image
              src={tool.logo}
              alt={tool.alt}
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
