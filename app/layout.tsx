import type { Metadata } from "next";
import { Stack_Sans_Text } from "next/font/google";
import type { ReactNode } from "react";

import { MotionPreferences } from "./components/Motion";
import "./globals.css";

const stackSansText = Stack_Sans_Text({
  subsets: ["latin"],
  variable: "--font-stack-sans-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IB Studio",
  description:
    "Crea tu web con nosotros. Diseño web, SEO, marketing digital, e-commerce, etc.",
  icons: {
    icon: "/logo-bg.png",
    shortcut: "/logo-bg.png",
    apple: "/logo-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansText.variable}>
      <body>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
