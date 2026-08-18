import type { Metadata } from "next";

import { absoluteUrl, seoConfig } from "@/app/seo";
import { getPublishedBlogPosts } from "@/lib/blog";

import { PostCard } from "./_components/PostCard";

const title = "Blog de diseño web y SEO local";
const description =
  "Guías prácticas sobre diseño web, conversión y SEO local para ayudar a negocios pequeños a conseguir más contactos desde internet.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: absoluteUrl("/blog"),
    siteName: seoConfig.siteName,
    title,
    description,
    images: [{ url: absoluteUrl("/logo-big.webp"), alt: seoConfig.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl("/logo-big.webp")],
  },
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();

  return (
    <main className="min-h-screen bg-surface pb-24 pt-36 sm:pt-40">
      <section className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-medium leading-tight tracking-[-0.035em] text-text-primary sm:text-5xl">
            Ideas claras para mejorar tu presencia digital
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            Guías prácticas de diseño web, conversión y SEO local pensadas para negocios que quieren conseguir más contactos sin complicarse con la parte técnica.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
