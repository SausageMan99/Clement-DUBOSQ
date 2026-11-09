import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { archivo, hand, signature, typed } from "../fonts";
import { ThreadController } from "@/components/ThreadController";
import { meta, site } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title[lang], template: `%s — ${site.name}` },
    description: meta.description[lang],
    authors: [{ name: site.name }],
    alternates: { canonical: `/${lang}`, languages: { en: "/en", fr: "/fr", "x-default": "/en" } },
    openGraph: {
      title: meta.title[lang],
      description: meta.description[lang],
      url: `/${lang}`,
      siteName: site.name,
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_GB",
    },
    twitter: { card: "summary_large_image", title: meta.title[lang], description: meta.description[lang] },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1F3FD8", colorScheme: "light" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${archivo.variable} ${hand.variable} ${signature.variable} ${typed.variable}`}>
      <body>
        {children}
        <ThreadController />
      </body>
    </html>
  );
}
