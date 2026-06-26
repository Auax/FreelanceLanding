import { contactInfo, faqs } from "./components/site-data";

const fallbackSiteUrl = "https://www.ibstudio.es";

function normalizeSiteUrl(url: string) {
  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export const seoConfig = {
  siteName: "IB Studio",
  title: "IB Studio | Diseño web para negocios locales",
  description:
    "Diseño web, tiendas online y SEO local para negocios que quieren más llamadas, reservas y clientes desde Google.",
  locale: "es_ES",
  language: "es",
};

export const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("#business"),
    name: seoConfig.siteName,
    url: siteUrl,
    logo: absoluteUrl("/logo-bg.webp"),
    image: absoluteUrl("/logo-big.webp"),
    description: seoConfig.description,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    priceRange: "300 EUR - 800 EUR",
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    knowsAbout: [
      "Diseño web",
      "Desarrollo web",
      "Tiendas online",
      "SEO local",
      "Google Business Profile",
      "Analítica web",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("#website"),
    name: seoConfig.siteName,
    url: siteUrl,
    inLanguage: seoConfig.language,
    publisher: {
      "@id": absoluteUrl("#business"),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("#faq"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];
