import Script from "next/script";
import { FitMap } from "@/components/open-pipeline/FitMap";
import { OpenPipelineEffects } from "@/components/open-pipeline/OpenPipelineEffects";
import { PipelineExperience } from "@/components/open-pipeline/PipelineExperience";
import { profile, proofItems } from "@/data/open-pipeline";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Clément Dubosq — Open Pipeline",
  url: "https://clement-dubosq.com",
  mainEntity: {
    "@type": "Person",
    name: "Clément Dubosq",
    email: profile.email,
    url: "https://clement-dubosq.com",
    sameAs: [profile.linkedin],
    jobTitle: "Business Development / Sales B2B",
    description:
      "Candidat en alternance Business Development / Sales B2B à Paris dès septembre 2026. Bachelor MCN à l'IPAC Bachelor Factory.",
    knowsAbout: ["Business Development", "Sales B2B", "Prospection", "Qualification", "CRM", "Recrutement tech"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  },
};

export default function Home() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OpenPipelineEffects />
      <a className="skip" href="#content">
        Aller au contenu
      </a>
      <header className="topbar">
        <div className="wrap">
          <a className="mark" href="#top">
            Open Pipeline / Clément Dubosq
          </a>
          <nav className="nav" aria-label="Navigation">
            <a href="#brief">Brief</a>
            <a href="#proof">Ledger</a>
            <a href="#pipeline">Pipeline</a>
            <a href="#fit">Fit</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="progress-rail" aria-hidden="true">
            <span id="page-progress" />
          </div>
        </div>
      </header>

      <main id="content" className="wrap dossier-shell">
        <div className="scanner" aria-hidden="true" />
        <section id="top" className="cover" aria-labelledby="title">
          <div className="cover-main">
            <div className="corner-id">
              File CD-2026
              <br />
              BD / Paris
            </div>
            <p className="kicker">Dossier chaud / alternance septembre 2026</p>
            <div className="eyebrow-stack">
              <span className="chip">Sales B2B</span>
              <span className="chip">IPAC Bachelor MCN</span>
              <span className="chip">Paris</span>
              <span className="chip">1 an</span>
            </div>
            <h1 id="title" className="hero-title">
              <span className="line"><span>Business</span></span>
              <span className="line"><span>Development</span></span>
              <span className="line"><span>B2B</span></span>
            </h1>
            <p className="subtitle">
              Un dossier de prospection interactif pour comprendre comment Clément cible, contacte, qualifie et relance —
              avant même le premier entretien.
            </p>
            <button className="open-file" type="button" data-open-file>
              <span className="dot" />
              Ouvrir le dossier
            </button>
            <div className="stamp" aria-label="Disponible à Paris en septembre 2026">
              Paris
              <br />
              Septembre
              <br />
              2026
              <br />
              Alternance
            </div>
          </div>
          <aside className="cover-side" id="brief">
            <div className="brief">
              <p className="kicker">Recruiter brief</p>
              <h2>
                Clément
                <br />
                Dubosq
              </h2>
              <dl>
                <div><dt>Recherche</dt><dd>{profile.role}</dd></div>
                <div><dt>Lieu</dt><dd>{profile.place} — {profile.date}</dd></div>
                <div><dt>Formation</dt><dd>{profile.school}</dd></div>
                <div><dt>Terrain</dt><dd>{profile.field}</dd></div>
                <div><dt>Anglais</dt><dd>{profile.english}</dd></div>
              </dl>
              <p className="note">
                Junior en niveau d’expérience, déjà rigoureux dans la méthode : trouver un signal utile, écrire court,
                qualifier proprement, relancer avec mémoire.
              </p>
            </div>
          </aside>
        </section>

        <section className="section" id="proof">
          <div className="section-head">
            <h2>Proof<br />Ledger</h2>
            <span className="folio">Preuves terrain — pas de survente</span>
          </div>
          <div className="ledger" aria-label="Registre des preuves">
            {proofItems.map((item) => (
              <article className="ledger-row" key={item.number}>
                <div className="num">{item.number}</div>
                <div><h3>{item.title}</h3></div>
                <div className="proof"><p>{item.proof}</p></div>
                <div className="read"><p>{item.reading}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pipeline">
          <div className="section-head">
            <h2>Pipeline<br />Method</h2>
            <span className="folio">Interaction signature — scroll, clic ou clavier</span>
          </div>
          <PipelineExperience />
        </section>

        <section className="section" id="fit">
          <div className="section-head">
            <h2>Fit<br />Map</h2>
            <span className="folio">Où le profil devient intéressant</span>
          </div>
          <FitMap />
        </section>

        <section className="section" id="contact">
          <div className="contact-sheet">
            <div>
              <p className="kicker">Decision / First call</p>
              <h2 className="contact-line">Prenons<br />15 minutes</h2>
              <span className="final-stamp">Ready for first call</span>
            </div>
            <address className="contact-box">
              <a href={`mailto:${profile.email}?subject=Alternance Business Development — Clément Dubosq`}>{profile.email}</a>
              <a href={profile.linkedin} rel="noreferrer">linkedin.com/in/clement-dubosq</a>
              <a href={profile.cv}>Télécharger le CV PDF</a>
              <p className="smallprint">Clément Dubosq — Bachelor MCN IPAC — Business Development / Sales B2B — Paris, septembre 2026.</p>
            </address>
          </div>
        </section>
      </main>
    </>
  );
}
