import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { meta, site } from "@/content/site";
import { isLocale, otherLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: lang,
    name: meta.title[lang],
    url: `${site.url}/${lang}`,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      url: site.url,
      email: `mailto:${site.email}`,
      sameAs: [site.linkedin],
      jobTitle: lang === "fr" ? "Business developer" : "Business developer",
      description: meta.description[lang],
      knowsLanguage: ["fr", "en", "zh"],
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
      alumniOf: ["EDC Paris Business School", "IPAC Bachelor Factory", "Institut Lemonnier"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} altHref={`/${otherLocale(lang)}`} />
      <Home lang={lang} />
    </>
  );
}
