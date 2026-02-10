"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { Marquee } from "./ui/Marquee";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.03]">
      {/* Marquee */}
      <div className="py-6 border-b border-white/[0.03] overflow-hidden">
        <Marquee
          items={[
            "BUSINESS DEVELOPMENT",
            "TECH & AI",
            "ENTREPRENEURSHIP",
            "B2B SALES",
            "GROWTH",
            "INNOVATION",
          ]}
          separator="✦"
          className="text-[clamp(1rem,3vw,1.5rem)] font-bold text-white/[0.04] tracking-wider"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 tracking-wide">
            &copy; 2025 Clément Dubosq. {t(translations.footer.rights)}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-dubosq-0311701a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/60 transition-colors tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${translations.contact.email}`}
              className="text-xs text-white/20 hover:text-white/60 transition-colors tracking-wide"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-white/20 hover:text-white/60 transition-colors tracking-wide group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
