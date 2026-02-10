"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { LineReveal, CharReveal } from "./ui/TextReveal";
import { MagneticButton } from "./ui/MagneticButton";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            06 — Contact
          </span>
        </LineReveal>

        {/* Giant CTA text */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight">
            <CharReveal delay={0}>
              {t(translations.contact.title)}
            </CharReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-lg text-white/40 max-w-lg"
        >
          {t(translations.contact.subtitle)}
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 space-y-0"
        >
          {/* Email */}
          <a
            href={`mailto:${translations.contact.email}`}
            className="contact-link group flex items-center justify-between border-t border-white/[0.06] py-6 md:py-8 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-white/20" aria-hidden="true" />
              <span className="text-lg md:text-xl text-white/60 group-hover:text-white transition-colors duration-300">
                {translations.contact.email}
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+33680055429"
            className="contact-link group flex items-center justify-between border-t border-white/[0.06] py-6 md:py-8 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-white/20" aria-hidden="true" />
              <span className="text-lg md:text-xl text-white/60 group-hover:text-white transition-colors duration-300">
                {translations.contact.phone}
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-dubosq-0311701a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group flex items-center justify-between border-t border-white/[0.06] py-6 md:py-8 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Linkedin size={18} className="text-white/20" aria-hidden="true" />
              <span className="text-lg md:text-xl text-white/60 group-hover:text-white transition-colors duration-300">
                LinkedIn
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </a>

          {/* Location */}
          <div className="flex items-center justify-between border-t border-b border-white/[0.06] py-6 md:py-8">
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-white/20" aria-hidden="true" />
              <span className="text-lg md:text-xl text-white/40">
                {translations.contact.location}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <MagneticButton
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
          >
            <Download size={18} />
            {t(translations.contact.downloadCV)}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
