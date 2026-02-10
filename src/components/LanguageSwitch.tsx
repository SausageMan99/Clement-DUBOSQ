"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center rounded-full bg-white/[0.06] border border-white/[0.08] p-[3px]">
      {/* Sliding indicator */}
      <div
        className="absolute h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-full bg-white/[0.12] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: language === "fr" ? "translateX(3px)" : "translateX(calc(100% + 3px))",
        }}
      />
      <button
        onClick={() => setLanguage("fr")}
        className={`relative z-10 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200 ${
          language === "fr" ? "text-white" : "text-white/30 hover:text-white/60"
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`relative z-10 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200 ${
          language === "en" ? "text-white" : "text-white/30 hover:text-white/60"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
