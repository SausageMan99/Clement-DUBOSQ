import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

/** Margin note: sits in the margin on wide screens, under the paragraph on mobile. */
function Note({ children }: { children: ReactNode }) {
  return <aside className="note-margin">{children}</aside>;
}

const components: MDXComponents = { Note };

export function useMDXComponents(): MDXComponents {
  return components;
}
