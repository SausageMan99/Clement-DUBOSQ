import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clement-dubosq.com"),
  title: "Clément Dubosq — Business Developer | Portfolio",
  description:
    "Étudiant en Bachelor Responsable du Développement Commercial, entrepreneur et Business Developer passionné par la tech et l'IA. En recherche d'alternance.",
  keywords: [
    "Clément Dubosq",
    "Business Developer",
    "Portfolio",
    "Alternance",
    "Tech",
    "IA",
    "B2B Sales",
    "Caen",
  ],
  authors: [{ name: "Clément Dubosq" }],
  openGraph: {
    title: "Clément Dubosq — Business Developer",
    description: "Portfolio & CV en ligne",
    url: "https://clement-dubosq.com",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clément Dubosq — Business Developer",
    description: "Portfolio & CV en ligne",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://clement-dubosq.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
