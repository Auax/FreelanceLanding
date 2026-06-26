import type { Metadata } from "next";

import { Contact } from "./components/sections/Contact";
import { FAQ } from "./components/sections/FAQ";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { SelectedWork } from "./components/sections/SelectedWork";
import { absoluteUrl, homeStructuredData, seoConfig, siteUrl } from "./seo";

export const metadata: Metadata = {
  title: {
    absolute: seoConfig.title,
  },
  description: seoConfig.description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: absoluteUrl("/logo-big.webp"),
        alt: seoConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [absoluteUrl("/logo-big.webp")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeatureGrid />
        <SelectedWork />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
