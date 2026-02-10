export const projects = [
  {
    name: "WebVision",
    emoji: "🎬",
    description: {
      fr: "Agence de production audiovisuelle B2B. Prospection, vente et livraison de contenus vidéo et 3D pour PME et indépendants.",
      en: "B2B audiovisual production agency. Prospecting, selling and delivering video & 3D content for SMEs and freelancers.",
    },
    tags: ["B2B Sales", "Video Production", "3D", "Blender"],
    link: null,
    status: { fr: "Actif", en: "Active" },
  },
  {
    name: "RunCoach.AI",
    emoji: "🏃",
    description: {
      fr: "SaaS B2C utilisant l'IA pour générer des programmes d'entraînement running personnalisés. MVP déployé.",
      en: "B2C SaaS using AI to generate personalized running training programs. MVP deployed.",
    },
    tags: ["SaaS", "AI", "Product", "Next.js"],
    link: "https://runcoach-ai.vercel.app/",
    status: { fr: "MVP lancé", en: "MVP launched" },
  },
  {
    name: "WAV'ARTS",
    emoji: "🏋️",
    description: {
      fr: "Salle de cross-training & parkour à Caen. Stratégie de croissance, contenu digital et merchandising.",
      en: "Cross-training & parkour gym in Caen. Growth strategy, digital content and merchandising.",
    },
    tags: ["Growth Marketing", "Content Strategy", "Merchandising"],
    link: "https://wavarts.fr/",
    status: { fr: "Contribution", en: "Contributor" },
  },
];

export const videoShowcase = [
  {
    title: {
      fr: "Finale Coupe de France de Cyclocross",
      en: "French Cyclocross Cup Finals",
    },
    description: {
      fr: "Captation et montage vidéo de la finale de la Coupe de France de Cyclocross — 14 décembre 2025",
      en: "Video capture and editing of the French Cyclocross Cup Finals — December 14, 2025",
    },
    src: "/videos/cyclocross.mp4",
    tags: ["Video Production", "Sport", "Event"],
  },
  {
    title: {
      fr: "Mercedes-Benz Caen",
      en: "Mercedes-Benz Caen",
    },
    description: {
      fr: "Réalisation vidéo promotionnelle pour la concession Mercedes-Benz de Caen",
      en: "Promotional video production for the Mercedes-Benz dealership in Caen",
    },
    src: "/videos/mercedes-benz.mp4",
    tags: ["Video Production", "Automotive", "B2B"],
  },
];
