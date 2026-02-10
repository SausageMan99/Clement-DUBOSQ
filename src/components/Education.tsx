"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { LineReveal } from "./ui/TextReveal";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            05 — {t(translations.education.title)}
          </span>
        </LineReveal>

        <div className="mt-16 space-y-0">
          {translations.education.entries.map((entry, index) => (
            <EducationRow key={index} entry={entry} index={index} t={t} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}

function EducationRow({
  entry,
  index,
  t,
}: {
  entry: (typeof translations.education.entries)[number];
  index: number;
  t: (obj: { fr: string; en: string }) => string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border-t border-white/[0.06] py-10 md:py-14 grid md:grid-cols-[200px_1fr_auto] gap-4 md:gap-12 items-start"
    >
      <div className="text-sm text-white/30 tracking-wide">
        {t(entry.period)}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-white">
          {t(entry.title)}
        </h3>
        <p className="mt-2 text-sm text-white/40">{entry.school}</p>
      </div>
      {entry.status && (
        <span className="inline-flex self-start items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs text-indigo-400 tracking-wide">
          {t(entry.status)}
        </span>
      )}
    </motion.div>
  );
}
