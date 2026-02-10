"use client";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/40 transition-colors hover:border-indigo-500/30 hover:bg-indigo-500/5">
      {children}
    </span>
  );
}
