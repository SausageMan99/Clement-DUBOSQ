import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { contact, faq, faqLabels, hero, manifesto, notesLabels, proofs, site, ui, workLabels, workOrders } from "@/content/site";
import { getNotes } from "@/content/notes";
import type { Locale } from "@/lib/i18n";
import { ForBanner } from "./ForBanner";
import { Hand, Seal, Stamp, Sticker } from "./bits";
import { Circle, Thread } from "./Thread";
import { NotesList } from "./NotesList";

export function Home({ lang }: { lang: Locale }) {
  const notes = getNotes();
  return (
    <main id="content">
      {/* HERO */}
      <section className="hero" data-thread-host="">
        <div className="hero-copy">
          <Suspense fallback={null}>
            <ForBanner lang={lang} />
          </Suspense>
          <p className="kicker">{hero.kicker[lang]}</p>
          <h1 className="x hero-title">
            {hero.titleA[lang]}
            <br />
            {hero.titleB[lang]} <span className="blue">{hero.titleThread[lang]}</span>
          </h1>
          <p className="hero-sub">{hero.sub[lang]}</p>
          <div className="hero-ctas">
            <a className="btn" href="#contact">
              {ui.nav.call[lang]} <span aria-hidden="true">→</span>
            </a>
            <a className="btn ghost" href={site.cv} download>
              {ui.resume[lang]} <span aria-hidden="true">↓</span>
            </a>
            <Hand className="hero-note-promise">{hero.notePromise[lang]}</Hand>
          </div>
        </div>
        <Hand className="hero-note-me">{hero.noteMe[lang]}</Hand>
        <figure className="hero-photo">
          <span className="tape" aria-hidden="true" />
          <Image src={site.photo} alt={hero.photoAlt[lang]} width={800} height={1000} priority sizes="(max-width: 700px) 60vw, 360px" />
        </figure>
        <Sticker className="hero-sticker">{site.status[lang]}</Sticker>
        <Thread
          className="hero-thread"
          viewBox="0 0 1400 860"
          d="M330,300 C 390,286 450,312 500,300 C 630,270 670,220 730,230 C 890,255 1030,170 1130,200 C 1210,222 1290,170 1330,210 C 1380,260 1270,310 1210,285 C 1150,260 1220,220 1270,240 C 1360,280 1330,470 1180,520 C 1010,575 1090,750 1400,800"
        />
        <p className="x hero-name" aria-hidden="true">
          Clément
        </p>
        <a className="hero-scroll" href="#manifesto">
          {hero.scroll[lang]}
        </a>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto" id="manifesto">
        <p className="x">
          {manifesto.before[lang]}
          <mark>{manifesto.highlight[lang]}</mark>
        </p>
        <div className="manifesto-note">
          <Seal />
          <Hand>{manifesto.note[lang]}</Hand>
        </div>
      </section>

      {/* PROOFS */}
      <section className="proofs" aria-label={lang === "fr" ? "Preuves" : "Proof"} data-thread-host="">
        {proofs.map((p) => (
          <div className="proof" key={p.value}>
            <b className="x">
              {p.value}
              {p.circled && <Circle />}
            </b>
            <span>{p.label[lang]}</span>
            {p.hand && <Hand>{p.hand[lang]}</Hand>}
          </div>
        ))}
      </section>

      {/* WORK ORDERS */}
      <section className="section work" id="work">
        <div className="section-head">
          <h2 className="x">{workLabels.heading[lang]}</h2>
          <p>{workLabels.intro[lang]}</p>
        </div>
        <div className="orders">
          {workOrders.map((w) => (
            <article className="order" key={w.no}>
              <header>
                <h3 className="x">{w.title}</h3>
                <span className="typed">
                  {workLabels.order[lang]} {w.no}
                </span>
              </header>
              <p className="order-role">
                {w.role[lang]} · {w.place}
              </p>
              <dl>
                <dt>{workLabels.client[lang]}</dt>
                <dd>{w.client[lang]}</dd>
                <dt>{workLabels.issue[lang]}</dt>
                <dd>{w.issue[lang]}</dd>
                <dt>{workLabels.intervention[lang]}</dt>
                <dd>{w.intervention[lang]}</dd>
                {w.result && (
                  <>
                    <dt>{workLabels.result[lang]}</dt>
                    <dd>{w.result[lang]}</dd>
                  </>
                )}
              </dl>
              <Stamp>{w.stamp[lang]}</Stamp>
              <footer>
                <span>{w.period[lang]}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* FIELD NOTES (hidden until at least one note is published) */}
      {notes.length > 0 && (
        <section className="section notes-home" id="notes">
          <div className="notes-intro">
            <h2 className="x">{notesLabels.heading[lang]}</h2>
            <p>{notesLabels.intro[lang]}</p>
            <Hand>{notesLabels.hand[lang]}</Hand>
          </div>
          <div>
            <NotesList lang={lang} notes={notes.slice(0, 4)} />
            <Link className="more" href={`/${lang}/notes`}>
              {notesLabels.all[lang]}
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section faq" id="faq">
        <h2 className="x">{faqLabels.heading[lang]}</h2>
        <div className="qa">
          {faq.map((f) => (
            <div key={f.q.en}>
              <h3 className="x">{f.q[lang]}</h3>
              <p>{f.a[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact" data-thread-host="">
        <Hand className="contact-note">{contact.hand[lang]}</Hand>
        <div>
          <h2 className="x">{contact.heading[lang]}</h2>
          <div className="contact-ctas">
            <a className="btn light" href={`mailto:${site.email}?subject=${encodeURIComponent(lang === "fr" ? "On s’appelle ?" : "Let’s talk")}`}>
              {ui.emailMe[lang]} <span aria-hidden="true">→</span>
            </a>
            <a className="btn outline" href={site.linkedin} rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn outline" href={site.cv} download>
              {ui.resume[lang]} <span aria-hidden="true">↓</span>
            </a>
            <Hand className="hero-note-promise">{hero.notePromise[lang]}</Hand>
          </div>
        </div>
        <Thread
          className="contact-thread"
          viewBox="0 0 400 200"
          stroke="#fff"
          d="M400,20 C300,30 250,120 300,150 C350,180 380,120 330,100 C270,80 220,170 120,160 C60,154 20,120 0,90"
        />
        <footer className="contact-foot">
          <span className="signature">{site.name}</span>
          <span className="lbl">{contact.foot[lang]}</span>
        </footer>
      </section>
    </main>
  );
}
