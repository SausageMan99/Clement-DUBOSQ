"use client";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Clément Dubosq",
  url: "https://clement-dubosq.com",
  jobTitle: "Business Developer",
  description:
    "Étudiant en Bachelor Responsable du Développement Commercial, entrepreneur et Business Developer passionné par la tech et l'IA.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caen",
    addressRegion: "Normandie",
    addressCountry: "FR",
  },
  email: "clement.dubosq@wanadoo.fr",
  sameAs: [
    "https://www.linkedin.com/in/cl%C3%A9ment-dubosq-0311701a0/",
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <CustomCursor />
      <SmoothScroll />
      <ScrollProgress />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <Hero />

        {/* Marquee divider */}
        <div className="py-8 border-y border-white/[0.03] overflow-hidden">
          <Marquee
            items={[
              "BUSINESS DEVELOPER",
              "TECH ENTHUSIAST",
              "AI ADVOCATE",
              "ENTREPRENEUR",
              "B2B SALES",
              "GROWTH HACKER",
            ]}
            separator="✦"
            className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white/[0.04] tracking-wider"
          />
        </div>

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
