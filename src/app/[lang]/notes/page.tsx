import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hand } from "@/components/bits";
import { NotesList } from "@/components/NotesList";
import { getNotes } from "@/content/notes";
import { notesLabels } from "@/content/site";
import { isLocale, otherLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/notes">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: notesLabels.heading[lang],
    description: notesLabels.intro[lang],
    alternates: { canonical: `/${lang}/notes`, languages: { en: "/en/notes", fr: "/fr/notes" } },
  };
}

export default async function NotesIndex({ params }: PageProps<"/[lang]/notes">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const notes = getNotes();
  if (notes.length === 0) notFound();
  return (
    <>
      <Header lang={lang} altHref={`/${otherLocale(lang)}/notes`} home={false} />
      <main id="content" className="section notes-page">
        <div className="notes-intro">
          <h1 className="x">{notesLabels.heading[lang]}</h1>
          <p>{notesLabels.intro[lang]}</p>
          <Hand>{notesLabels.hand[lang]}</Hand>
        </div>
        <NotesList lang={lang} notes={notes} />
      </main>
    </>
  );
}
