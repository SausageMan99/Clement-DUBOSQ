"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import LanguageSwitch from "./LanguageSwitch";

const navItems = [
  { id: "about", label: translations.nav.about },
  { id: "experience", label: translations.nav.experience },
  { id: "projects", label: translations.nav.projects },
  { id: "skills", label: translations.nav.skills },
  { id: "contact", label: translations.nav.contact },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/[0.03]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative group"
              aria-label="Retour en haut de page"
            >
              <Image
                src="/logo.svg"
                alt="Clément Dubosq"
                width={36}
                height={36}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="relative px-4 py-2 text-[13px] tracking-[0.05em] uppercase text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{t(item.label)}</span>
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-[1px] transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-indigo-400/70"
                        : "bg-white/0 group-hover:bg-white/30"
                    }`}
                  />
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-indigo-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitch />
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="relative overflow-hidden rounded-full border border-white/10 px-6 py-2.5 text-[13px] tracking-[0.05em] uppercase text-white group"
              >
                <span className="relative z-10">{t(translations.nav.cta)}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </button>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-4">
              <LanguageSwitch />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[1px] bg-white origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[1px] bg-white origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <div className="space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="block text-[clamp(2rem,8vw,4rem)] font-bold text-white/80 hover:text-white transition-colors leading-tight"
                  >
                    {t(item.label)}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
