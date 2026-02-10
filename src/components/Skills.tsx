"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { skills } from "@/data/skills";
import { LineReveal } from "./ui/TextReveal";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            04 — {t(translations.skills.title)}
          </span>
        </LineReveal>

        <div className="mt-16 grid gap-0">
          {skills.map((group, index) => (
            <SkillGroup key={index} group={group} index={index} t={t} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}

function SkillGroup({
  group,
  index,
  t,
}: {
  group: (typeof skills)[number];
  index: number;
  t: (obj: { fr: string; en: string }) => string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="border-t border-white/[0.06] py-8 md:py-10 grid md:grid-cols-[250px_1fr] gap-4 md:gap-12 items-start"
    >
      <h3 className="text-sm font-medium text-white/60 tracking-wide">
        {t(group.category)}
      </h3>
      <div className="flex flex-wrap gap-3">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
            className="inline-block rounded-full border border-white/[0.08] px-4 py-2 text-sm text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.03] hover:-translate-y-[1px] transition-all duration-300"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
