"use client";

import { useSearchParams } from "next/navigation";
import { forCompanies } from "@/content/for";
import type { Locale } from "@/lib/i18n";

/** ?for=<slug> → a one-line personal note for that company. Unknown slugs render nothing. */
export function ForBanner({ lang }: { lang: Locale }) {
  const params = useSearchParams();
  const slug = (params.get("for") ?? params.get("pour") ?? "").toLowerCase();
  const entry = slug ? forCompanies[slug] : undefined;
  if (!entry) return null;
  return (
    <p className="for-banner">
      <span className="for-label">{lang === "fr" ? `Pour ${entry.company}` : `For ${entry.company}`}</span>
      <span>{entry.line[lang]}</span>
    </p>
  );
}
