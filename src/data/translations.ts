export const translations = {
  nav: {
    about: { fr: "À propos", en: "About" },
    experience: { fr: "Expériences", en: "Experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    contact: { fr: "Contact", en: "Contact" },
    cta: { fr: "Me contacter", en: "Contact me" },
  },
  hero: {
    headline: {
      fr: "Business Developer passionné par la tech et l'IA",
      en: "Business Developer passionate about tech & AI",
    },
    subtitle: {
      fr: "Étudiant en Bachelor Responsable du Développement Commercial | En recherche d'alternance pour septembre 2026",
      en: "Bachelor in Commercial Development Student | Looking for a work-study position starting September 2026",
    },
    cta1: { fr: "Voir mon parcours", en: "View my journey" },
    cta2: { fr: "Télécharger mon CV", en: "Download my CV" },
  },
  about: {
    title: { fr: "À propos", en: "About me" },
    text: {
      fr: "Étudiant en Bachelor Responsable du Développement Commercial à IPAC Bachelor Factory Caen, j'ai développé une double compétence business et tech à travers mes expériences entrepreneuriales. Fondateur de WebVision (agence audiovisuelle B2B), j'ai prospecté, négocié et livré des projets générant +12 000 € de CA en moins d'un an.",
      en: "Student in a Bachelor's in Commercial Development at IPAC Bachelor Factory Caen, I've developed dual business and tech expertise through my entrepreneurial experiences. Founder of WebVision (B2B audiovisual agency), I prospected, negotiated and delivered projects generating €12,000+ in revenue in under a year.",
    },
    text2: {
      fr: "Passionné par l'intelligence artificielle et l'innovation, j'ai également lancé RunCoach.AI (SaaS de coaching running par IA). Je cherche une alternance en Business Development / Sales B2B dans une entreprise tech innovante où je pourrai allier ma compréhension du produit tech et mes compétences commerciales.",
      en: "Passionate about artificial intelligence and innovation, I also launched RunCoach.AI (AI-powered running coaching SaaS). I'm looking for a work-study position in Business Development / B2B Sales at an innovative tech company where I can combine my understanding of tech products with my commercial skills.",
    },
    stats: {
      revenue: { value: "12 000 €+", label: { fr: "CA généré", en: "Revenue generated" } },
      clients: { value: "50+", label: { fr: "Clients gérés", en: "Clients managed" } },
      ventures: { value: "3", label: { fr: "Projets lancés", en: "Ventures launched" } },
      toeic: { value: "860", label: { fr: "Score TOEIC", en: "TOEIC Score" } },
    },
  },
  experience: {
    title: { fr: "Expériences", en: "Experience" },
  },
  projects: {
    title: { fr: "Projets", en: "Projects" },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
  },
  education: {
    title: { fr: "Formation", en: "Education" },
    entries: [
      {
        period: { fr: "2024 – 2027", en: "2024 – 2027" },
        title: { fr: "Bachelor Responsable du Développement Commercial", en: "Bachelor in Commercial Development" },
        school: "IPAC Bachelor Factory, Caen",
        status: { fr: "En cours", en: "In progress" },
      },
      {
        period: { fr: "2022", en: "2022" },
        title: {
          fr: "Bac Pro Maintenance des Équipements Industriels — Mention Bien",
          en: "Vocational Diploma in Industrial Equipment Maintenance — With Honours",
        },
        school: "Institut Lemonnier",
        status: null,
      },
    ],
  },
  contact: {
    title: { fr: "Discutons", en: "Let's talk" },
    subtitle: {
      fr: "Intéressé par mon profil ? N'hésitez pas à me contacter.",
      en: "Interested in my profile? Don't hesitate to reach out.",
    },
    email: "clement.dubosq@wanadoo.fr",
    phone: "06 80 05 54 29",
    location: "Caen, Normandie, France",
    downloadCV: { fr: "Télécharger mon CV", en: "Download my CV" },
  },
  footer: {
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  },
} as const;

export type Language = "fr" | "en";
