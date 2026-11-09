import Link from "next/link";
import type { Note } from "@/content/notes";
import { notesLabels } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function NotesList({ lang, notes }: { lang: Locale; notes: Note[] }) {
  const total = notes.length;
  return (
    <ol className="notes-list">
      {notes.map((n, i) => (
        <li key={n.slug}>
          <Link href={`/${lang}/notes/${n.slug}`} className="note-row">
            <span className="note-num">n°{total - i}</span>
            <span className="note-title x">{n.title}</span>
            <span className="note-meta">
              {n.minutes} {notesLabels.read[lang]}
              {n.lang !== lang && <em> · {n.lang.toUpperCase()}</em>}
              {n.status === "draft" && <em> · draft</em>}
            </span>
            <span className="note-dek">{n.dek}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
