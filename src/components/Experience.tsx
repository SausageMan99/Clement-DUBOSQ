"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { experiences } from "@/data/experiences";
import { LineReveal } from "./ui/TextReveal";
import { Badge } from "./ui/Badge";

export default function Experience() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section label */}
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            02 — {t(translations.experience.title)}
          </span>
        </LineReveal>

        <div className="mt-16 space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceRow key={index} exp={exp} index={index} language={language} t={t} />
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}

function ExperienceRow({
  exp,
  index,
  language,
  t,
}: {
  exp: (typeof experiences)[number];
  index: number;
  language: "fr" | "en";
  t: (obj: { fr: string; en: string }) => string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Parallax on the index number
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const indexY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group border-t border-white/[0.06] py-10 md:py-14"
    >
      <div className="grid md:grid-cols-[200px_1fr_auto] gap-6 md:gap-12 items-start">
        {/* Period */}
        <div className="text-sm text-white/30 tracking-wide">
          {t(exp.period)}
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
              {t(exp.title)}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-white/20 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </div>
          <p className="text-base text-white/60 font-medium mb-5">
            {exp.company}
          </p>

          <ul className="space-y-3 mb-6">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-white/40 leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-indigo-500/60 shrink-0" />
                {item[language]}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Index number with parallax */}
        <motion.div style={{ y: indexY }} className="hidden md:block text-right">
          <span className="text-[80px] font-bold leading-none text-white/[0.03] tracking-tighter">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
