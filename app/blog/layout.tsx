import type { ReactNode } from "react";

import { Footer } from "@/app/components/sections/Footer";
import { Header } from "@/app/components/sections/Header";

export default function BlogLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
