"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { MagneticButton } from "./ui/MagneticButton";
import { CharReveal } from "./ui/TextReveal";

export default function Hero() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  const line1 = "CLÉMENT";
  const line2 = "DUBOSQ";

  return (
    <section ref={ref} className="relative h-[100vh] flex items-end overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Gradient orbs with floating animation */}
      <div
        className="absolute top-[20%] left-[10%] h-[500px] w-[500px] max-w-[300px] sm:max-w-none rounded-full bg-indigo-600/[0.07] blur-[120px] animate-float-slow"
      />
      <div
        className="absolute bottom-[10%] right-[5%] h-[400px] w-[400px] max-w-[300px] sm:max-w-none rounded-full bg-violet-600/[0.07] blur-[120px] animate-float-slow-alt"
      />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-12"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-[13px] text-white/50 tracking-wide">
              <span className="h-2 w-2 rounded-full bg-green-400/80 animate-pulse" />
              {t({
                fr: "Disponible pour une alternance — Septembre 2026",
                en: "Available for work-study — September 2026",
              })}
            </span>
          </motion.div>

          {/* Giant name — single h1 */}
          <div className="leading-[0.85] tracking-[-0.04em]">
            <h1>
              <span className="block text-[clamp(3.5rem,12vw,12rem)] font-bold text-white">
                <CharReveal delay={2.2} stagger={0.04}>
                  {line1}
                </CharReveal>
              </span>
              <span className="block text-[clamp(3.5rem,12vw,12rem)] font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                <CharReveal delay={2.5} stagger={0.04}>
                  {line2}
                </CharReveal>
              </span>
            </h1>
          </div>

          {/* Subtitle & CTAs row */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="max-w-md"
            >
              <p className="text-[15px] md:text-base text-white/40 leading-relaxed">
                {t(translations.hero.subtitle)}
              </p>
              <p className="mt-3 text-lg md:text-xl text-white/70 font-medium">
                Business Developer <span className="text-indigo-400">&times;</span> Tech & AI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <MagneticButton
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                {t(translations.hero.cta1)}
              </MagneticButton>
              <MagneticButton
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm text-white/70 hover:text-white hover:border-white/20 transition-all"
              >
                <Download size={16} />
                CV
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-6 right-6 md:right-12 flex items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/20 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="mt-2 w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
