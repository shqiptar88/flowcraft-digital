// src/pages/cases/CasePage.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";

type CaseKey = "bleaching-landingpage" | "praxis-hamburg" | "lokaler-dienstleister";

const CASES: Record<
  CaseKey,
  {
    title: string;
    subtitle: string;
    tags: string[];
    problem: string;
    solution: string[];
    results: string[];
    ctaHref: string;
    ctaLabel: string;
  }
> = {
  "bleaching-landingpage": {
    title: "Zahnarztpraxis München",
    subtitle: "Bleaching-Landingpage (Conversion)",
    tags: ["Landingpage", "Zahnbleaching", "Conversion"],
    problem:
      "Bleaching wurde auf der alten Website nur nebenbei erwähnt. Kein klarer Ablauf, kein Vertrauen, keine messbaren Anfragen.",
    solution: [
      "Eigene Landingpage mit klarem Nutzen + Ablauf + FAQ",
      "Trust-Layer (Behandler, Bewertungen/Platzhalter, Hygiene/Qualität)",
      "Schnelle Ladezeit + mobile-first",
      "CTA/Termin-Fokus (Kontakt/Terminlink)",
    ],
    results: [
      "Klare Nutzerführung (weniger Absprünge)",
      "Mehr Terminanfragen über klaren CTA",
      "Besseres Google-Snippet durch saubere Struktur",
    ],
    ctaHref: "/vertical?v=dental",
    ctaLabel: "Demo-Vertical Dental ansehen",
  },
  "praxis-hamburg": {
    title: "Praxis Hamburg",
    subtitle: "Website-Redesign (Mobile & Struktur)",
    tags: ["Website", "Redesign", "Mobile"],
    problem:
      "Unübersichtliche Navigation, Inhalte schwer auffindbar, mobil wirkt es wie ein Baukasten – Vertrauen leidet.",
    solution: [
      "Neue Informationsarchitektur (Leistung → Vertrauen → Kontakt)",
      "Mobile Optimierung (Spacing, Typografie, CTAs)",
      "SEO-Basis (Titles, Headings, semantische Struktur)",
      "Performance-Fokus (Core Web Vitals)",
    ],
    results: [
      "Professioneller Eindruck (mehr Vertrauen)",
      "Bessere Auffindbarkeit der Leistungen",
      "Verbesserte Ladezeiten + Nutzererlebnis",
    ],
    ctaHref: "/vertical?v=dental",
    ctaLabel: "Dental-Template als Demo öffnen",
  },
  "lokaler-dienstleister": {
    title: "Lokaler Dienstleister",
    subtitle: "Onepager (Local SEO & Kontakt)",
    tags: ["Onepager", "Local SEO", "Kontakt"],
    problem:
      "Kein klarer Onepager für schnelle Anfragen. Local SEO-Signale waren schwach, Kontakt war zu versteckt.",
    solution: [
      "Onepager mit klaren Sektionen + CTA-Hooks",
      "Local SEO: Leistungen, Standort-Signale, klare Kontaktwege",
      "Google Maps/Öffnungszeiten als Bereich (optional)",
    ],
    results: [
      "Mehr Direktanfragen über klare CTA-Flows",
      "Bessere lokale Signale (Nutzer + SEO)",
      "Schnelles Setup für Kampagnen",
    ],
    ctaHref: "/vertical?v=trade",
    ctaLabel: "Trade-Vertical als Demo ansehen",
  },
};

function CaseOverview() {
  const items = Object.entries(CASES) as Array<[CaseKey, (typeof CASES)[CaseKey]]>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Beispiele aus der Praxis</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Demo-Cases, damit Interessenten sofort sehen, wie Struktur, Design und Conversion bei euch aussehen können.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map(([key, c]) => (
          <Link
            key={key}
            to={`/cases/${key}`}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-xs uppercase tracking-widest text-slate-500">
              {c.tags.join(" · ")}
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-900">{c.title}</div>
            <div className="mt-1 text-sm text-slate-600">{c.subtitle}</div>
            <div className="mt-4 text-sm text-teal-700">Case öffnen →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CaseDetail({ slug }: { slug: CaseKey }) {
  const c = CASES[slug];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/cases" className="text-sm text-slate-600 hover:text-slate-900">
        ← Zurück zu allen Cases
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900">{c.title}</h1>
      <p className="mt-3 text-slate-600">{c.subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {c.tags.map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white/70 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Ausgangslage</h2>
        <p className="mt-2 text-slate-700">{c.problem}</p>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white/70 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Lösung</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {c.solution.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white/70 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Ergebnis</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {c.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={c.ctaHref}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
        >
          {c.ctaLabel}
        </a>
        <a
          href="/angebot"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Angebot ansehen
        </a>
      </div>
    </div>
  );
}

export default function CasePage() {
  const params = useParams();
  const slug = (params.slug ?? "") as CaseKey;

  // /cases => overview
  if (!params.slug) return <CaseOverview />;

  // /cases/:slug => detail
  if (!(slug in CASES)) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/cases" className="text-sm text-slate-600 hover:text-slate-900">
          ← Zurück zu allen Cases
        </Link>
        <h1 className="mt-6 text-2xl font-semibold text-slate-900">Case nicht gefunden</h1>
        <p className="mt-2 text-slate-600">Der Link ist ungültig oder der Case existiert nicht.</p>
      </div>
    );
  }

  return <CaseDetail slug={slug} />;
}