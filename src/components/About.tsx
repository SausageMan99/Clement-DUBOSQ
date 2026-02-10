"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { LineReveal } from "./ui/TextReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const stats = [
  translations.about.stats.revenue,
  translations.about.stats.clients,
  translations.about.stats.ventures,
  translations.about.stats.toeic,
];

export default function About() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section label */}
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            01 — {t(translations.about.title)}
          </span>
        </LineReveal>

        <div
          ref={containerRef}
          className="mt-16 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24 items-start"
        >
          {/* Photo with parallax */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden rounded-sm"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
                <Image
                  src="/photo.png"
                  alt="Clément Dubosq"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
            </motion.div>

            {/* Decorative frame offset */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 w-full max-w-[500px] aspect-[3/4] border border-white/[0.05] rounded-sm -z-10"
            />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <LineReveal delay={0.1}>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight">
                {t({
                  fr: "Entre business et technologie",
                  en: "Between business and technology",
                })}
              </h2>
            </LineReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 space-y-5"
            >
              <p className="text-[15px] md:text-base text-white/50 leading-[1.8]">
                {t(translations.about.text)}
              </p>
              <p className="text-[15px] md:text-base text-white/50 leading-[1.8]">
                {t(translations.about.text2)}
              </p>
            </motion.div>

            {/* Stats — 1 col on tiny screens, 2 cols otherwise */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 min-[380px]:grid-cols-2 gap-8 border-t border-white/[0.06] pt-8"
            >
              {stats.map((stat, i) => (
                <AnimatedCounter
                  key={i}
                  value={stat.value}
                  label={t(stat.label)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
