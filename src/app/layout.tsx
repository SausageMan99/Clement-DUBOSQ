import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clement-dubosq.com"),
  title: "Clément Dubosq — Alternance Business Development B2B Paris",
  description:
    "Open Pipeline — dossier de prospection interactif de Clément Dubosq, candidat en alternance Business Development / Sales B2B à Paris dès septembre 2026.",
  keywords: [
    "Clément Dubosq",
    "Alternance Business Development",
    "Sales B2B",
    "Business Developer junior",
    "Paris",
    "Prospection B2B",
    "IPAC Bachelor Factory",
  ],
  authors: [{ name: "Clément Dubosq" }],
  openGraph: {
    title: "Clément Dubosq — Business Development B2B",
    description: "Un dossier de prospection interactif pour comprendre comment Clément cible, contacte, qualifie et relance.",
    url: "https://clement-dubosq.com",
    type: "website",
    locale: "fr_FR",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clément Dubosq — Business Development B2B",
    description: "Open Pipeline — dossier interactif de prospection et qualification.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://clement-dubosq.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4efe4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
