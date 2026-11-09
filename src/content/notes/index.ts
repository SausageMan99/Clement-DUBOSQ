import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n";
import * as premierRdv from "./premier-rendez-vous-diagnostic.mdx";

export type NoteMeta = {
  slug: string;
  lang: Locale;
  status: "draft" | "published";
  title: string;
  dek: string;
  date: string;
};

export type Note = NoteMeta & { Body: ComponentType; minutes: number };

type MdxModule = { default: ComponentType };
function entry(mod: MdxModule, words: number) {
  return { meta: (mod as unknown as { meta: NoteMeta }).meta, Body: mod.default, words };
}

/** Register every note here (newest first is not required: the list is sorted by date). */
const registry: { meta: NoteMeta; Body: ComponentType; words: number }[] = [
  // words: rough word count, used for the reading time. Update it when you finish a note.
  entry(premierRdv, 900),
];

/** Drafts are visible in development (or with SHOW_DRAFTS=1), never in a production build. */
export const showDrafts = process.env.NODE_ENV !== "production" || process.env.SHOW_DRAFTS === "1";

export function getNotes(): Note[] {
  return registry
    .filter((n) => showDrafts || n.meta.status === "published")
    .map((n) => ({ ...n.meta, Body: n.Body, minutes: Math.max(1, Math.round(n.words / 220)) }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | undefined {
  return getNotes().find((n) => n.slug === slug);
}
