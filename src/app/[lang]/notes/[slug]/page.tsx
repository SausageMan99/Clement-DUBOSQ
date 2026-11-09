import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getNote, getNotes } from "@/content/notes";
import { notesLabels, site } from "@/content/site";
import { isLocale, locales, otherLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) => getNotes().map((n) => ({ lang, slug: n.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/notes/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const note = getNote(slug);
  if (!isLocale(lang) || !note) return {};
  return {
    title: note.title,
    description: note.dek,
    alternates: { canonical: `/${note.lang}/notes/${slug}` },
    openGraph: { type: "article", title: note.title, description: note.dek, publishedTime: note.date },
    robots: note.status === "draft" ? { index: false } : undefined,
  };
}

function formatDate(iso: string, lang: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function NotePage({ params }: PageProps<"/[lang]/notes/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const note = getNote(slug);
  if (!note) notFound();
  const notes = getNotes();
  const idx = notes.findIndex((n) => n.slug === slug);
  const next = notes[idx + 1] ?? (notes.length > 1 ? notes[0] : undefined);
  const { Body } = note;

  return (
    <>
      <Header lang={lang} altHref={`/${otherLocale(lang)}/notes/${slug}`} home={false} />
      <main id="content" className="essay">
        <article lang={note.lang}>
          <Link className="back" href={`/${lang}/notes`}>
            {notesLabels.back[lang]}
          </Link>
          <p className="essay-meta">
            {notesLabels.heading[lang]} n°{notes.length - idx} · {formatDate(note.date, note.lang)} · {note.minutes} min
            {note.status === "draft" && <span className="draft-tag">{notesLabels.draft[lang]}</span>}
          </p>
          <h1 className="x">{note.title}</h1>
          <p className="dek">{note.dek}</p>
          <div className="prose">
            <Body />
          </div>
          <footer className="essay-end">
            {next && next.slug !== slug && (
              <Link href={`/${lang}/notes/${next.slug}`}>
                <span className="lbl">{notesLabels.next[lang]}</span>
                <span className="x">{next.title} →</span>
              </Link>
            )}
            <a href={`mailto:${site.email}`}>
              <span className="lbl">{notesLabels.hiring[lang]}</span>
              <span className="x">{notesLabels.hiringCta[lang]}</span>
            </a>
          </footer>
        </article>
      </main>
    </>
  );
}
