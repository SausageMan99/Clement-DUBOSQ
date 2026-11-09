import type { CSSProperties, ReactNode } from "react";

/** Handwritten annotation. Simulated with a font until Clément's real handwriting is scanned. */
export function Hand({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span className={`hand ${className ?? ""}`} style={style}>
      {children}
    </span>
  );
}

export function Sticker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={`sticker ${className ?? ""}`}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

export function Stamp({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={`stamp ${className ?? ""}`}>{children}</span>;
}

/** Square seal (印章 style) with 线索 — "lead", literally a thread to follow. */
export function Seal({ className }: { className?: string }) {
  return (
    <span className={`seal ${className ?? ""}`} lang="zh-Hans" aria-label="线索 (xiànsuǒ)">
      <span>线</span>
      <span>索</span>
    </span>
  );
}
