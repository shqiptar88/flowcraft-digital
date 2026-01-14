// src/components/Projects.tsx
import { Link } from "react-router-dom";

type ProjectCard = {
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  description: string;
};

const projects: ProjectCard[] = [
  {
    eyebrow: "LANDINGPAGE · ZAHNBLEACHING · CONVERSION",
    title: "Zahnarztpraxis München",
    subtitle: "Bleaching-Landingpage",
    href: "/beispiele/bleachinglandingpage-muenchen",
    description:
      "Neue Landingpage mit klarem Aufbau (Vorteile, Ablauf, FAQ) und technischem SEO-Grundlagen-Setup.",
  },
  {
    eyebrow: "WEBSITE · REDESIGN · MOBILE",
    title: "Praxis Hamburg",
    subtitle: "Komplette Website-Modernisierung",
    href: "/beispiele/praxis-hamburg",
    description:
      "Moderne, mobil-optimierte Website mit klarer Struktur, verständlichen Inhalten und Local-SEO-Basics.",
  },
  {
    eyebrow: "ONEPAGER · LOCAL SEO · KONTAKT",
    title: "Lokaler Dienstleister",
    subtitle: "Schlanker Onepager mit Termin-Fokus",
    href: "/beispiele/lokaler-dienstleister",
    description:
      "Übersichtlicher Onepager mit Leistungen, klaren Texten, Kontaktmöglichkeiten und Google-Maps-Setup.",
  },
];

export default function Projects() {
  return (
    <section id="projekte" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
            Beispiele aus der Praxis
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Ein Einblick in typische Projekte und Ergebnisse – reale Situationen, wie sie in Praxen
            und Dienstleistungs-Businesses vorkommen.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className={[
                "group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm transition",
                "hover:border-teal-200 hover:bg-teal-50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40",
              ].join(" ")}
            >
              <div className="text-xs font-medium tracking-wide text-slate-500">
                {p.eyebrow}
              </div>

              <div className="mt-3 text-lg font-semibold text-slate-900">
                {p.title}
              </div>
              <div className="text-sm text-slate-600">{p.subtitle}</div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>

              <div className="mt-5 text-sm font-medium text-teal-700">
                Öffnen <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}