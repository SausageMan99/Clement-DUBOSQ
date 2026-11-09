import localFont from "next/font/local";

/** Archivo variable (wght 100–900, wdth 62–125): one family for giant condensed titles and body text. */
export const archivo = localFont({
  src: "./fonts/archivo-latin-wdth-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

/** Stand-ins for Clément's handwriting and signature until the real ones are scanned. */
export const hand = localFont({ src: "./fonts/reenie-beanie-latin-400-normal.woff2", variable: "--font-hand", display: "swap" });
export const signature = localFont({
  src: "./fonts/caveat-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-signature",
  display: "swap",
});

/** Typewriter face, used only on the work orders. */
export const typed = localFont({
  src: "./fonts/courier-prime-latin-400-normal.woff2",
  variable: "--font-typed",
  display: "swap",
});
