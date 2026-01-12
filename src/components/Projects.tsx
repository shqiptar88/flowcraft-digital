// src/components/Projects.tsx
export default function Projects() {
  const items = [
    {
      tag: "LANDINGPAGE · ZAHNBLEACHING · CONVERSION",
      title: "Zahnarztpraxis München",
      subtitle: "Bleaching-Landingpage",
      text: "Neue Landingpage mit klarem Aufbau (Vorteile, Ablauf, FAQ) und technischem SEO-Grundlagen-Setup.",
    },
    {
      tag: "WEBSITE · REDESIGN · MOBILE",
      title: "Praxis Hamburg",
      subtitle: "Komplette Website-Modernisierung",
      text: "Moderne, mobil-optimierte Website mit klarer Struktur, verständlichen Inhalten und Local-SEO-Basics.",
    },
    {
      tag: "ONEPAGER · LOCAL SEO · KONTAKT",
      title: "Lokaler Dienstleister",
      subtitle: "Schlanker Onepager mit Termin-Fokus",
      text: "Übersichtlicher Onepager mit Leistungen, klaren Texten, Kontaktmöglichkeiten und Google-Maps-Setup.",
    },
  ];

  return (
    <section id="projekte" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
            Beispiele aus der Praxis
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Ein Einblick in typische Projekte und Ergebnisse – reale Situationen, wie sie in Praxen und Dienstleistungs-Businesses vorkommen.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.title}
              className={[
                "group rounded-2xl border border-slate-200 bg-white/70 p-6",
                "shadow-sm transition",
                "hover:border-teal-200 hover:bg-teal-50",
                "active:border-teal-200 active:bg-teal-50",
                "focus-within:ring-2 focus-within:ring-teal-600/40",
              ].join(" ")}
            >
              <div className="text-xs font-semibold tracking-widest text-slate-500">
                {p.tag}
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}