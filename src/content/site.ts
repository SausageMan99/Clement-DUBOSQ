/**
 * Single source of truth for the site.
 *
 * Every fact here comes from the resume in /public/cv.pdf.
 * Lines marked TODO(clement) are tone/opinion proposals: validate or rewrite them
 * in your own words before publishing.
 */
import type { T } from "@/lib/i18n";

export const site = {
  name: "Clément Dubosq",
  url: "https://clement-dubosq.com",
  email: "clement.dubosq@wanadoo.fr", // TODO(clement): switch to a pro address (e.g. hello@clement-dubosq.com)
  linkedin: "https://www.linkedin.com/in/clement-dubosq",
  cv: "/cv.pdf",
  photo: "/img/clement-cyano.jpg",
  /** Update this whenever your situation changes: it feeds the header sticker, the hero and the metadata. */
  status: {
    en: "Looking for a V.I.E · China · Nov 2027",
    fr: "Cherche un V.I.E · Chine · nov. 2027",
  } satisfies T,
  statusUpdated: "2026-11-09",
};

export const ui = {
  skip: { en: "Skip to content", fr: "Aller au contenu" },
  nav: {
    work: { en: "Work orders", fr: "Interventions" },
    notes: { en: "Field notes", fr: "Notes de terrain" },
    faq: { en: "Before you ask", fr: "Avant que vous demandiez" },
    call: { en: "Let’s talk?", fr: "On s’appelle ?" },
  },
  langSwitch: { en: "FR", fr: "EN" },
  langSwitchLabel: { en: "Lire en français", fr: "Read in English" },
  resume: { en: "Resume (PDF)", fr: "CV (PDF)" },
  emailMe: { en: "Email me", fr: "M’écrire" },
} satisfies Record<string, unknown>;

export const hero = {
  kicker: {
    en: "Business developer & recruitment consultant",
    fr: "Business developer & consultant en recrutement",
  },
  titleA: { en: "I never lose", fr: "Je ne lâche" },
  titleB: { en: "the", fr: "pas le" },
  titleThread: { en: "thread.", fr: "fil." },
  sub: {
    en: "I sell recruitment by phone and email to accounting firms and energy companies, and I closed my first placement on my own within two months. Next stop: a V.I.E in China, November 2027.",
    fr: "Je vends du recrutement par téléphone et par mail à des cabinets comptables et des industriels de l’énergie, et j’ai signé mon premier placement seul en moins de deux mois. Prochaine étape : un V.I.E en Chine, en novembre 2027.",
  },
  photoAlt: { en: "Clément Dubosq, cyanotype portrait", fr: "Clément Dubosq, portrait en cyanotype" },
  noteMe: { en: "that’s me ↓", fr: "c’est moi ↓" },
  // TODO(clement): only keep this promise if you can hold it.
  notePromise: { en: "I reply within 24 h. promise.", fr: "je réponds en moins de 24 h. promis." },
  scroll: { en: "Pull the thread ↓", fr: "Tirez le fil ↓" },
};

export const manifesto = {
  before: {
    en: "A deal isn’t signed on the first message. It’s signed on ",
    fr: "Un client ne se signe pas au premier message. Il se signe à ",
  },
  highlight: {
    en: "the follow-up that actually brings something.",
    fr: "la relance qui apporte vraiment quelque chose.",
  },
  // TODO(clement): have your Mandarin teacher confirm this one.
  note: {
    en: "in Mandarin, a sales lead is 线索: literally a thread you follow.",
    fr: "en mandarin, un lead se dit 线索 : littéralement, un fil qu’on suit.",
  },
};

export type Proof = { value: string; label: T; hand?: T; circled?: boolean };

export const proofs: Proof[] = [
  {
    value: "2 mo.",
    label: {
      en: "to close my first placement on my own, at HANTO",
      fr: "pour signer mon premier placement seul, chez HANTO",
    },
    circled: true,
  },
  {
    value: "+1",
    label: {
      en: "new client won by presenting a candidate before they even asked",
      fr: "nouveau client signé en présentant un candidat avant même qu’il le demande",
    },
  },
  {
    value: "3",
    label: {
      en: "industrial internships before business school, incl. Schneider Electric",
      fr: "stages en industrie avant l’école de commerce, dont Schneider Electric",
    },
    hand: { en: "yes, I’ve welded.", fr: "oui, j’ai soudé." },
  },
  {
    value: "860",
    label: {
      en: "on the TOEIC. Mandarin: 一点点, currently learning.",
      fr: "au TOEIC. Mandarin : 一点点, en cours d’apprentissage.",
    },
  },
];

export type WorkOrder = {
  no: string;
  title: string;
  role: T;
  place: string;
  period: T;
  stamp: T;
  client: T;
  issue: T;
  intervention: T;
  result?: T;
};

export const workLabels = {
  heading: { en: "Work orders", fr: "Bons d’intervention" },
  intro: {
    en: "Every job I’ve done, filed like the work orders from my industrial maintenance years: what was wrong, what I did, what came out of it.",
    fr: "Chaque poste, classé comme les bons d’intervention de mes années de maintenance industrielle : ce qui n’allait pas, ce que j’ai fait, ce qui en est sorti.",
  },
  order: { en: "Order no.", fr: "Bon n°" },
  client: { en: "Client", fr: "Client" },
  issue: { en: "Reported issue", fr: "Panne constatée" },
  intervention: { en: "Intervention", fr: "Intervention" },
  result: { en: "Result", fr: "Résultat" },
};

export const workOrders: WorkOrder[] = [
  {
    no: "004",
    title: "HANTO",
    role: { en: "Recruitment consultant · work-study", fr: "Consultant en recrutement · alternance" },
    place: "Paris",
    period: { en: "Sept 2026 → now", fr: "sept. 2026 → auj." },
    stamp: { en: "In progress", fr: "En cours" },
    client: {
      en: "Accounting firms, industrial and energy companies",
      fr: "Cabinets comptables, industriels et énergéticiens",
    },
    issue: {
      en: "Finance, accounting, CFO and engineering roles to fill.",
      fr: "Des postes finance, comptabilité, DAF et ingénierie à pourvoir.",
    },
    intervention: {
      en: "Phone and email prospecting, needs qualification, full-cycle recruitment on LinkedIn Recruiter. Built an interactive map of industrial and energy companies currently hiring to target outreach.",
      fr: "Prospection téléphone et mail, qualification des besoins, recrutement de bout en bout sur LinkedIn Recruiter. Construction d’une carte interactive des industriels et énergéticiens qui recrutent pour cibler la prospection.",
    },
    result: {
      en: "First placement closed on my own within two months. A new client won through a proactive candidate presentation.",
      fr: "Premier placement signé seul en moins de deux mois. Un nouveau client signé grâce à une présentation de candidat proactive.",
    },
  },
  {
    no: "003",
    title: "W hub",
    role: { en: "Business developer · internship", fr: "Business developer · stage" },
    place: "Paris",
    period: { en: "Apr → Sept 2026", fr: "avr. → sept. 2026" },
    stamp: { en: "Done", fr: "Terminé" },
    client: { en: "An IT staffing and consulting firm", fr: "Une ESN, conseil et régie IT" },
    issue: { en: "New business to open with IT decision-makers.", fr: "Du nouveau business à ouvrir auprès des décideurs IT." },
    intervention: {
      en: "Prospected IT decision-makers on LinkedIn Sales Navigator, sourced and qualified consultants in BoondManager, and designed an AI-assisted pipeline to match candidate profiles against client requirements.",
      fr: "Prospection des décideurs IT sur LinkedIn Sales Navigator, sourcing et qualification de consultants dans BoondManager, et conception d’un pipeline assisté par IA pour comparer les profils aux besoins clients.",
    },
    // TODO(clement): add a result if you have one you can defend (meetings booked, consultants placed…).
  },
  {
    no: "002",
    title: "Wav’Arts",
    role: { en: "Brand & marketing · intern, then freelance", fr: "Marque & marketing · stage puis freelance" },
    place: "Caen",
    period: { en: "Apr 2025 → Mar 2026", fr: "avr. 2025 → mars 2026" },
    stamp: { en: "Done", fr: "Terminé" },
    client: { en: "A parkour gym and a streetwear label", fr: "Une salle de parkour et une marque streetwear" },
    issue: {
      en: "E-commerce product launches to ship on time, on budget.",
      fr: "Des lancements e-commerce à tenir dans les délais et le budget.",
    },
    intervention: {
      en: "Visual identity, social, email and paid campaigns. Coordinated suppliers, workshop and warehouse. Monthly performance reports and the TikTok, Instagram and YouTube Shorts calendar.",
      fr: "Identité visuelle, réseaux sociaux, emailing et campagnes payantes. Coordination fournisseurs, atelier et entrepôt. Reporting mensuel et calendrier TikTok, Instagram et YouTube Shorts.",
    },
    result: { en: "Launches delivered on schedule, costs under control.", fr: "Lancements livrés dans les temps, coûts maîtrisés." },
  },
  {
    no: "001",
    title: "Shop floor",
    role: { en: "Maintenance & metalwork · internships", fr: "Maintenance & métallerie · stages" },
    place: "Normandy",
    period: { en: "2020 → 2022", fr: "2020 → 2022" },
    stamp: { en: "Done", fr: "Terminé" },
    client: { en: "Schneider Electric · 2MP · ACTIMA", fr: "Schneider Electric · 2MP · ACTIMA" },
    issue: {
      en: "Production equipment, fuel trucks and metal parts to maintain and fix.",
      fr: "Équipements de production, camions-citernes et pièces métalliques à entretenir et réparer.",
    },
    intervention: {
      en: "Maintenance on production equipment at Schneider Electric, fuel trucks prepared for inspection at 2MP, metalwork and welding at ACTIMA.",
      fr: "Maintenance des équipements de production chez Schneider Electric, préparation de camions-citernes au contrôle chez 2MP, métallerie et soudure chez ACTIMA.",
    },
    result: {
      en: "A vocational baccalaureate in industrial maintenance, and the habit of diagnosing before repairing.",
      fr: "Un bac pro maintenance industrielle, et le réflexe de diagnostiquer avant de réparer.",
    },
  },
];

export const notesLabels = {
  heading: { en: "Field notes", fr: "Notes de terrain" },
  intro: {
    en: "What I learn selling, written down to think more clearly. Roughly one a month.",
    fr: "Ce que j’apprends en vendant, écrit pour penser plus clairement. Une note par mois, environ.",
  },
  hand: { en: "no “5 tips to close”. promise.", fr: "pas de « 5 astuces pour closer ». promis." },
  read: { en: "min", fr: "min" },
  all: { en: "All field notes →", fr: "Toutes les notes →" },
  back: { en: "← Field notes", fr: "← Notes de terrain" },
  next: { en: "Next note", fr: "Note suivante" },
  hiring: { en: "Hiring for China?", fr: "Vous recrutez pour la Chine ?" },
  hiringCta: { en: "Let’s talk for 15 minutes.", fr: "Parlons-en 15 minutes." },
  draft: { en: "Draft · not published", fr: "Brouillon · non publié" },
  writtenIn: { en: "Written in", fr: "Écrit en" },
};

export const faqLabels = {
  heading: { en: "Before you ask…", fr: "Avant que vous demandiez…" },
};

/** TODO(clement): these answers are proposals in your tone. Rewrite every one you wouldn’t say out loud. */
export const faq: { q: T; a: T }[] = [
  {
    q: { en: "Why China?", fr: "Pourquoi la Chine ?" },
    a: {
      en: "Energy transition, electric mobility, industrial automation: the industries I care about are scaling fastest there. I’d rather learn to sell where it’s happening.",
      fr: "Transition énergétique, mobilité électrique, automatisation industrielle : les secteurs qui m’intéressent grandissent plus vite là-bas qu’ailleurs. Je préfère apprendre à vendre là où ça se passe.",
    },
  },
  {
    q: { en: "Do you speak Mandarin?", fr: "Vous parlez mandarin ?" },
    a: {
      en: "一点点: a little. I’m learning now, so that by November 2027 I can do a lot more than say hello.",
      fr: "一点点 : un peu. J’apprends maintenant, pour qu’en novembre 2027 je sache faire bien plus que dire bonjour.",
    },
  },
  {
    q: { en: "Recruiter or salesperson?", fr: "Recruteur ou commercial ?" },
    a: {
      en: "Same job, different product: qualify the need, find the match, close. At HANTO, I sell recruitment by phone.",
      fr: "Même métier, autre produit : qualifier le besoin, trouver le bon match, signer. Chez HANTO, je vends du recrutement au téléphone.",
    },
  },
  {
    q: { en: "Shop floor to sales?", fr: "De l’atelier à la vente ?" },
    a: {
      en: "I fixed machines before I sold anything. Diagnose before you repair, qualify before you sell: same reflex, different machine.",
      fr: "J’ai réparé des machines avant de vendre quoi que ce soit. Diagnostiquer avant de réparer, qualifier avant de vendre : même réflexe, autre machine.",
    },
  },
  {
    q: { en: "Who shouldn’t hire me?", fr: "Qui ne devrait pas me recruter ?" },
    a: {
      en: "A team looking for someone who waits to be told what to do.",
      fr: "Une équipe qui cherche quelqu’un qui attend qu’on lui dise quoi faire.",
    },
  },
  {
    q: { en: "What are you still bad at?", fr: "Ce que vous faites encore mal ?" },
    a: {
      en: "I talk too fast when a topic excites me. I record my calls to fix it.",
      fr: "Je parle trop vite quand un sujet m’emballe. Je réécoute mes appels pour corriger ça.",
    },
  },
];

export const contact = {
  heading: { en: "Let’s talk?", fr: "On s’appelle ?" },
  hand: {
    en: "you scrolled all the way down. that’s a buying signal.",
    fr: "vous êtes arrivé·e jusqu’ici. c’est un signal d’achat, ça.",
  },
  foot: {
    en: "Business developer · Paris → China, 2027",
    fr: "Business developer · Paris → Chine, 2027",
  },
};

export const meta = {
  title: {
    en: "Clément Dubosq — Business developer, heading to China (V.I.E 2027)",
    fr: "Clément Dubosq — Business developer, cap sur la Chine (V.I.E 2027)",
  },
  description: {
    en: "Business developer and recruitment consultant in Paris, with an industrial maintenance background. Looking for a V.I.E in China from November 2027.",
    fr: "Business developer et consultant en recrutement à Paris, passé par la maintenance industrielle. Cherche un V.I.E en Chine à partir de novembre 2027.",
  },
  ogLine: { en: "I never lose the thread.", fr: "Je ne lâche pas le fil." },
};
