"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type BackLinkProps = {
  children: ReactNode;
  className?: string;
  fallbackHref?: string;
};

export function BackLink({
  children,
  className,
  fallbackHref = "/",
}: BackLinkProps) {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.replace(fallbackHref);
  }

  return (
    <button type="button" onClick={handleBack} className={className}>
      {children}
    </button>
  );
}
