"use client";

import { useEffect, useState } from "react";

type MotionState = {
  reduce: boolean;
  desktopPointer: boolean;
};

export function OpenPipelineEffects() {
  const [motion, setMotion] = useState<MotionState>({ reduce: true, desktopPointer: false });

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const update = () => setMotion({ reduce: reduceQuery.matches, desktopPointer: pointerQuery.matches });
    update();
    reduceQuery.addEventListener("change", update);
    pointerQuery.addEventListener("change", update);
    return () => {
      reduceQuery.removeEventListener("change", update);
      pointerQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const bar = document.getElementById("page-progress");
    const onScroll = () => {
      if (!bar) return;
      const root = document.documentElement;
      const max = Math.max(1, root.scrollHeight - root.clientHeight);
      bar.style.width = `${(root.scrollTop / max) * 100}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const open = document.querySelector<HTMLElement>("[data-open-file]");
    const target = document.getElementById("proof");
    if (!open || !target) return;
    const onClick = () => target.scrollIntoView({ behavior: motion.reduce ? "auto" : "smooth" });
    open.addEventListener("click", onClick);
    return () => open.removeEventListener("click", onClick);
  }, [motion.reduce]);

  useEffect(() => {
    if (motion.reduce) {
      document.querySelectorAll<HTMLElement>(".hero-title .line span").forEach((line) => {
        line.style.transform = "none";
      });
      return;
    }

    let ctx: { revert: () => void } | undefined;
    let alive = true;

    async function run() {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      if (!alive) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-title .line span",
          { y: "108%", rotate: 2 },
          { y: 0, rotate: 0, duration: 0.9, stagger: 0.08, ease: "power4.out" },
        );
        gsap.from(".chip,.subtitle,.open-file", {
          opacity: 0,
          y: 18,
          duration: 0.65,
          stagger: 0.06,
          delay: 0.28,
          ease: "power2.out",
        });
        gsap.fromTo(
          ".stamp",
          { scale: 0.68, rotate: -18, opacity: 0 },
          { scale: 1, rotate: -10, opacity: 0.86, duration: 0.42, delay: 0.72, ease: "back.out(3)" },
        );
        gsap.from(".brief", { opacity: 0, y: 22, duration: 0.75, delay: 0.24, ease: "power2.out" });
        gsap.to(".scanner", {
          opacity: 0.75,
          x: () => document.querySelector<HTMLElement>(".dossier-shell")?.offsetWidth ?? 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".dossier-shell", start: "top 70%", toggleActions: "play none none reverse" },
        });
        gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
          gsap.from(section.querySelectorAll("h2,.folio,.ledger-row,.control-room,.canvas-box,.map,.fit-card,.contact-line,.contact-box"), {
            opacity: 0,
            y: 28,
            duration: 0.75,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 76%" },
          });
        });
      });
    }

    run();
    return () => {
      alive = false;
      ctx?.revert();
    };
  }, [motion.reduce]);

  useEffect(() => {
    if (!motion.desktopPointer || motion.reduce) return;
    const cursor = document.querySelector<HTMLElement>(".cursor");
    if (!cursor) return;
    const onMove = (event: MouseEvent) => {
      cursor.style.opacity = "0.9";
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [motion.desktopPointer, motion.reduce]);

  return <div className="cursor" aria-hidden="true" />;
}
