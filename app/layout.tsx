import type { Metadata } from "next";
import { Stack_Sans_Text } from "next/font/google";
import type { ReactNode } from "react";

import { MotionPreferences } from "./components/Motion";
import { absoluteUrl, seoConfig, siteUrl } from "./seo";
import "./globals.css";

const stackSansText = Stack_Sans_Text({
  subsets: ["latin"],
  variable: "--font-stack-sans-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: seoConfig.siteName,
  title: {
    default: seoConfig.title,
    template: "%s | IB Studio",
  },
  description: seoConfig.description,
  keywords: [
    "diseño web",
    "diseño web para negocios locales",
    "desarrollo web",
    "tiendas online",
    "SEO local",
    "Google Business Profile",
  ],
  authors: [{ name: seoConfig.siteName }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: absoluteUrl("/logo-big.png"),
        alt: "IB Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [absoluteUrl("/logo-big.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    <html lang="es" className={stackSansText.variable}>
      <body>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
