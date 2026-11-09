import Link from "next/link";
import { site, ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { getNotes } from "@/content/notes";

export function Header({ lang, altHref, home = true }: { lang: Locale; altHref: string; home?: boolean }) {
  const base = `/${lang}`;
  const anchor = (id: string) => (home ? `#${id}` : `${base}#${id}`);
  const hasNotes = getNotes().length > 0;
  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {ui.skip[lang]}
      </a>
      <Link className="signature" href={base} aria-label={site.name}>
        {site.name}
      </Link>
      <nav className="site-nav" aria-label="Navigation">
        <a href={anchor("work")}>{ui.nav.work[lang]}</a>
        {hasNotes && <Link href={`${base}/notes`}>{ui.nav.notes[lang]}</Link>}
        <a href={anchor("faq")}>{ui.nav.faq[lang]}</a>
      </nav>
      <div className="header-actions">
        <Link className="lang" href={altHref} hrefLang={lang === "en" ? "fr" : "en"} title={ui.langSwitchLabel[lang]}>
          {ui.langSwitch[lang]}
        </Link>
        <a className="btn-call" href={anchor("contact")}>
          {ui.nav.call[lang]}
        </a>
      </div>
    </header>
  );
}
