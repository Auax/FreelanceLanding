import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { absoluteUrl, seoConfig } from "@/app/seo";
import {
  formatBlogDate,
  getClusterLabel,
  getPublishedBlogPost,
  getPublishedBlogPosts,
  getRelatedPublishedPosts,
} from "@/lib/blog";

import { MarkdownContent } from "../_components/MarkdownContent";
import { PostCard } from "../_components/PostCard";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  const socialImage = absoluteUrl("/logo-big.webp");

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryTopic, getClusterLabel(post.cluster), "IB Studio"],
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      locale: seoConfig.locale,
      url,
      siteName: seoConfig.siteName,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [{ url: socialImage, alt: seoConfig.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [socialImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPublishedPosts(post);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: seoConfig.language,
      mainEntityOfPage: url,
      image: absoluteUrl("/logo-big.webp"),
      author: { "@type": "Organization", name: post.author, url: absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        "@id": absoluteUrl("/#business"),
        name: seoConfig.siteName,
        logo: { "@type": "ImageObject", url: absoluteUrl("/logo-bg.webp") },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-surface pb-24 pt-32 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al blog
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
              <span>{getClusterLabel(post.cluster)}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min de lectura</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-[3.5rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary sm:text-xl sm:leading-9">
              {post.description}
            </p>
          </div>
        </header>

        <div className="container mx-auto mt-14">
          <div className="mx-auto max-w-3xl border-t border-border pt-2">
            <MarkdownContent content={post.content} />

            <aside className="mt-14 rounded-3xl bg-surface-raised p-7 sm:p-9">
              <h2 className="text-2xl font-medium tracking-[-0.025em] text-text-primary">
                ¿Quieres aplicar estas ideas a tu negocio?
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-text-secondary">
                Cuéntame qué quieres mejorar y revisaré contigo el siguiente paso más útil para tu web.
              </p>
              <Link
                href={post.ctaHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-0 focus-visible:ring-4 focus-visible:ring-primary/10"
              >
                {post.ctaLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </aside>

            {post.sources.length ? (
              <section className="mt-12 border-t border-border pt-8" aria-labelledby="sources-title">
                <h2 id="sources-title" className="text-xl font-medium text-text-primary">
                  Fuentes consultadas
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
                  {post.sources.map((source) => (
                    <li key={source}>
                      <a
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="break-words text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                      >
                        {new URL(source).hostname.replace(/^www\./, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      {relatedPosts.length ? (
        <section className="container mx-auto mt-24" aria-labelledby="related-title">
          <h2 id="related-title" className="text-3xl font-medium tracking-[-0.03em] text-text-primary">
            Sigue leyendo
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
