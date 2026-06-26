import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Analytics />
    </>
  );
}
