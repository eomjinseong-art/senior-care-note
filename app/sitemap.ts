import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/about", ...services.map((s) => `/${s.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "weekly", priority: path === "" ? 1 : 0.8 }));
}
