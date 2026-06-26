import type { MetadataRoute } from "next";

import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/aviso-legal", priority: 0.2 },
  { path: "/privacidad", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
  { path: "/terminos", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
