"use client";

import { MotionConfig, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type MotionChildrenProps = {
  children: ReactNode;
  className?: string;
};

type TimedMotionProps = MotionChildrenProps & {
  delay?: number;
};

export function MotionPreferences({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function SiteHeaderFrame({ children, className = "" }: MotionChildrenProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <motion.header
      className={className}
      data-scrolled={isScrolled}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.header>
  );
}

export function Entrance({
  children,
  className = "",
  delay = 0,
}: TimedMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: TimedMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function RevealCard({
  children,
  className = "",
  delay = 0,
}: TimedMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -7% 0px" }}
      transition={{
        duration: 0.62,
        delay,
        ease: easeOut,
        y: { duration: 0.28, ease: easeOut },
      }}
    >
      {children}
    </motion.div>
  );
}

