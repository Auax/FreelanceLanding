import { absoluteUrl } from "../seo";

import { getPublishedBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacidad", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terminos", priority: 0.2, changeFrequency: "yearly" },
] as const;

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => {
    switch (character) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return character;
    }
  });
}

export function GET() {
  const lastModified = new Date().toISOString();
  const staticUrls = routes
    .map(
      (route) => `
  <url>
    <loc>${escapeXml(absoluteUrl(route.path))}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("");

  const blogPosts = getPublishedBlogPosts();
  const blogUrls = [
    {
      path: "/blog",
      lastModified: blogPosts[0]?.dateModified ?? lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: post.dateModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ]
    .map(
      (route) => `
  <url>
    <loc>${escapeXml(absoluteUrl(route.path))}</loc>
    <lastmod>${escapeXml(route.lastModified)}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${blogUrls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
