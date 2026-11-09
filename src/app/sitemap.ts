import type { MetadataRoute } from "next";
import { getNotes } from "@/content/notes";
import { site } from "@/content/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getNotes().filter((n) => n.status === "published");
  const pages: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    lastModified: site.statusUpdated,
    alternates: { languages: { en: `${site.url}/en`, fr: `${site.url}/fr` } },
  }));
  if (notes.length) {
    pages.push(...locales.map((lang) => ({ url: `${site.url}/${lang}/notes` })));
    pages.push(...notes.map((n) => ({ url: `${site.url}/${n.lang}/notes/${n.slug}`, lastModified: n.date })));
  }
  return pages;
}
