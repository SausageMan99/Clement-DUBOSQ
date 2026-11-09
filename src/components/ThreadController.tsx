"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Draws every [data-thread] path according to how far its section has scrolled into view.
 * No library: one passive scroll listener + rAF. Respects prefers-reduced-motion (threads stay drawn).
 */
export function ThreadController() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const paths = Array.from(document.querySelectorAll<SVGPathElement>("[data-thread]"));
    if (!paths.length) return;
    paths.forEach((p) => {
      p.style.strokeDasharray = "1 2";
      p.style.strokeDashoffset = "1";
    });

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const p of paths) {
        const host = (p.closest("[data-thread-host]") as HTMLElement | null) ?? (p.ownerSVGElement as unknown as HTMLElement);
        const r = host.getBoundingClientRect();
        // 0 when the host's top enters the bottom of the viewport, 1 when ~60% of it has scrolled past the middle.
        const start = vh * 0.92;
        const end = vh * 0.35 - r.height * 0.35;
        const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
        p.style.strokeDashoffset = String(1 - progress);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return null;
}
