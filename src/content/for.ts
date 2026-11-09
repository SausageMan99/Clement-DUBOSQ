/**
 * Personalized hero lines: share clement-dubosq.com/en?for=<slug> with a company.
 * Add one entry per application. Keep each line factual and short (2 lines max).
 */
import type { T } from "@/lib/i18n";

export const forCompanies: Record<string, { company: string; line: T }> = {
  // Example, based on a real line of the resume. TODO(clement): edit or replace before using it.
  "schneider-electric": {
    company: "Schneider Electric",
    line: {
      en: "My first industrial internship was on your production lines in Beaumont-le-Roger. I’d like my next mission to be in your China business.",
      fr: "Mon premier stage en industrie, c’était sur vos lignes de production à Beaumont-le-Roger. J’aimerais que ma prochaine mission soit dans votre activité en Chine.",
    },
  },
};
