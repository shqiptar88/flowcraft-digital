// src/data/cases.ts

export type CaseSlug =
  | "bleaching-landingpage"
  | "praxis-hamburg"
  | "lokaler-dienstleister";

export type CaseMeta = {
  slug: CaseSlug;
  title: string;
  subtitle: string;
  tags: string[];
  excerpt: string;
  // optional: für später (z.B. dental/coach/trade)
  vertical?: string;
};

export const cases: CaseMeta[] = [
  {
    slug: "bleaching-landingpage",
    title: "Zahnarztpraxis München",
    subtitle: "Bleaching-Landingpage",
    tags: ["LANDINGPAGE", "ZAHNBLEACHING", "CONVERSION"],
    excerpt:
      "Neue Landingpage mit klarem Aufbau (Vorteile, Ablauf, FAQ) und technischem SEO-Grundlagen-Setup.",
    vertical: "dental",
  },
  {
    slug: "praxis-hamburg",
    title: "Praxis Hamburg",
    subtitle: "Komplette Website-Modernisierung",
    tags: ["WEBSITE", "REDESIGN", "MOBILE"],
    excerpt:
      "Moderne, mobil-optimierte Website mit klarer Struktur, verständlichen Inhalten und Local-SEO-Basics.",
    vertical: "dental",
  },
  {
    slug: "lokaler-dienstleister",
    title: "Lokaler Dienstleister",
    subtitle: "Schlanker Onepager mit Termin-Fokus",
    tags: ["ONEPAGER", "LOCAL SEO", "KONTAKT"],
    excerpt:
      "Übersichtlicher Onepager mit Leistungen, klaren Texten, Kontaktmöglichkeiten und Google-Maps-Setup.",
    vertical: "trade",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}