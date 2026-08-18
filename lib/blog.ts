import "server-only";

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostStatus = "draft" | "published";

export type BlogPostMeta = {
  title: string;
  description: string;
  slug: string;
  editorialId: string;
  status: BlogPostStatus;
  author: string;
  cluster: string;
  primaryTopic: string;
  searchIntent: string;
  featuredImage: string;
  featuredImageAlt: string;
  relatedPosts: string[];
  ctaLabel: string;
  ctaHref: string;
  sources: string[];
  datePublished?: string;
  dateModified?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  readingTime: number;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");
const wordsPerMinute = 220;

function calculateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function parsePost(filename: string): BlogPost {
  const source = readFileSync(path.join(blogDirectory, filename), "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as BlogPostMeta),
    content: content.trim(),
    readingTime: calculateReadingTime(content),
  };
}

export function getAllBlogPosts() {
  return allBlogPosts;
}

const allBlogPosts = readdirSync(blogDirectory)
  .filter((filename) => filename.endsWith(".md") && filename !== "README.md")
  .map(parsePost);

export function getPublishedBlogPosts() {
  return getAllBlogPosts()
    .filter(
      (post): post is BlogPost & Required<Pick<BlogPost, "datePublished" | "dateModified">> =>
        post.status === "published" &&
        Boolean(post.datePublished) &&
        Boolean(post.dateModified),
    )
    .sort((left, right) => {
      const dateOrder = right.datePublished.localeCompare(left.datePublished);
      return dateOrder || left.editorialId.localeCompare(right.editorialId);
    });
}

export function getPublishedBlogPost(slug: string) {
  return getPublishedBlogPosts().find((post) => post.slug === slug);
}

export function getRelatedPublishedPosts(post: BlogPost, limit = 3) {
  const publishedPosts = getPublishedBlogPosts();
  const bySlug = new Map(publishedPosts.map((candidate) => [candidate.slug, candidate]));
  const selected: BlogPost[] = post.relatedPosts.flatMap((slug) => {
    const candidate = bySlug.get(slug);
    return candidate ? [candidate] : [];
  });
  const selectedSlugs = new Set(selected.map((candidate) => candidate.slug));

  for (const candidate of publishedPosts) {
    if (
      selected.length >= limit ||
      candidate.slug === post.slug ||
      selectedSlugs.has(candidate.slug) ||
      candidate.cluster !== post.cluster
    ) {
      continue;
    }

    selected.push(candidate);
    selectedSlugs.add(candidate.slug);
  }

  return selected.slice(0, limit);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

const clusterLabels: Record<string, string> = {
  "decidir-y-planificar-una-web": "Planificación web",
  "conversion-reservas-experiencia-usuario": "Conversión y reservas",
  "proceso-diseno-web": "Proceso de diseño web",
  "rendimiento-web": "Rendimiento web",
  "seo-local": "SEO local",
  "tiendas-online": "Tiendas online",
  "webs-por-sector": "Webs por sector",
};

export function getClusterLabel(cluster: string) {
  return clusterLabels[cluster] ?? cluster.replaceAll("-", " ");
}
