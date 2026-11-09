export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string available in every locale. */
export type T = Record<Locale, string>;

export function otherLocale(lang: Locale): Locale {
  return lang === "en" ? "fr" : "en";
}
