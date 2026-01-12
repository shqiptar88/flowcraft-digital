// src/templates/sections/Services.tsx
import React from "react";

export type ServicesVariant = "bento" | "list" | "icons";

export type ServiceItem = {
  title: string;
  text: string;
  badge?: string;
};

export type ServicesProps = {
  variant?: ServicesVariant;

  heading?: string;
  subheading?: string;

  items?: ServiceItem[];

  className?: string;
};

function SectionHeader({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
        {heading}
      </h2>
      {subheading ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
          {subheading}
        </p>
      ) : null}
    </div>
  );
}

export default function Services({
  variant = "bento",
  heading = "Was FlowCraft für Sie umsetzt",
  subheading = "Ein klarer Standard-Stack, der für viele Branchen funktioniert — ohne Overkill, aber mit Wirkung.",
  items = [
    { title: "Premium Onepager / Landingpage", text: "Struktur, Design, CTA-Logik — gebaut für Anfragen.", badge: "Core" },
    { title: "Schnell & stabil (Vercel-ready)", text: "Performance, Core Web Vitals, saubere Builds.", badge: "Tech" },
    { title: "Local SEO Basis", text: "Titel/Meta, Struktur, interne Logik — damit man gefunden wird.", badge: "SEO" },
    { title: "Proof / Vertrauen", text: "Bewertungen, Logos, KPIs — damit Besucher schneller Ja sagen.", badge: "Trust" },
    { title: "Texte die konvertieren", text: "Klar, ohne Floskeln: Nutzen → Ablauf → CTA.", badge: "Copy" },
    { title: "Mobile-first UX", text: "Saubere Abstände, gute Lesbarkeit, klare Touch-Zonen.", badge: "UX" },
  ],
  className = "",
}: ServicesProps) {
  return (
    <section className={["mx-auto w-full max-w-6xl px-6 py-16 md:py-20", className].join(" ")}>
      <SectionHeader heading={heading} subheading={subheading} />

      {/* ===== Variant: bento ===== */}
      {variant === "bento" ? (
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {items.map((it, idx) => {
            // simple bento sizing rule
            const span =
              idx === 0 ? "md:col-span-7" :
              idx === 1 ? "md:col-span-5" :
              idx === 2 ? "md:col-span-4" :
              idx === 3 ? "md:col-span-8" :
              "md:col-span-6";

            return (
              <div
                key={it.title}
                className={[
                  "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
                  span,
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-semibold text-slate-900">{it.title}</div>
                  {it.badge ? (
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      {it.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {it.text}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* ===== Variant: list ===== */}
      {variant === "list" ? (
        <div className="mt-10 grid gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-base font-semibold text-slate-900">{it.title}</div>
                {it.badge ? (
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {it.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {/* ===== Variant: icons (clean grid) ===== */}
      {variant === "icons" ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-2xl bg-teal-50 ring-1 ring-teal-100" />
                <div>
                  <div className="text-base font-semibold text-slate-900">{it.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}