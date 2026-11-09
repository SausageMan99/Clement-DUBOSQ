import type { CSSProperties } from "react";

/**
 * The hand-drawn blue thread. Server-rendered fully drawn (works without JS);
 * <ThreadController/> then ties its drawing to the scroll position.
 */
export function Thread({
  d,
  viewBox,
  className,
  style,
  stroke = "var(--blue)",
  width = 4,
}: {
  d: string;
  viewBox: string;
  className?: string;
  style?: CSSProperties;
  stroke?: string;
  width?: number;
}) {
  return (
    <svg className={`thread ${className ?? ""}`} viewBox={viewBox} preserveAspectRatio="none" style={style} aria-hidden="true" focusable="false">
      <path data-thread="" pathLength={1} d={d} style={{ stroke, strokeWidth: width }} />
    </svg>
  );
}

/** Hand-drawn circle around a word or number. */
export function Circle({ className }: { className?: string }) {
  return (
    <svg className={`circle ${className ?? ""}`} viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path data-thread="" pathLength={1} d="M60,15 C10,25 5,100 70,110 C140,118 190,70 160,30 C135,0 70,5 40,30" />
    </svg>
  );
}
