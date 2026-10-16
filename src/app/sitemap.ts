import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/site";
import { projects, serviceSlugs } from "@/data/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...nav.map((n) => n.href),
    "/contact/",
    "/privacy/",
    "/terms/",
    ...serviceSlugs.map((s) => `/services/${s}/`),
    ...projects.map((p) => `/projects/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: site.url + p }));
}
