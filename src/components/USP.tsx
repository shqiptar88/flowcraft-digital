// src/components/USP.tsx
export default function USP() {
  const items = [
    {
      icon: "⚡",
      title: "Schlanke Websites statt Baukasten-Chaos",
      text: "Spezialisiert auf klare, performante Websites ohne überflüssigen Ballast – Fokus auf das, was Besucher wirklich brauchen.",
    },
    {
      icon: "🔎",
      title: "Technisches SEO inklusive",
      text: "Struktur, Titles, Schema.org, Core Web Vitals – alles direkt mitgedacht, statt später als separates Add-on.",
    },
    {
      icon: "💬",
      title: "Verständliche Kommunikation",
      text: "Fokus auf echte Patient:innen und Kund:innen – keine Fachsprache, sondern klare Texte, die man sofort versteht.",
    },
    {
      icon: "🤝",
      title: "KI als Werkzeug, nicht als Ersatz",
      text: "Moderne KI-Tools helfen bei Struktur und Entwürfen – Strategie, Inhalte und Feinschliff kommen von mir persönlich.",
    },
  ];

  return (
    <section id="zielgruppe" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
            Warum FlowCraft die richtige Wahl ist
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Klarer Prozess, faire Kommunikation, transparente Zusammenarbeit.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className={[
                "group rounded-2xl border border-slate-200 bg-white/70 p-6",
                "shadow-sm transition",
                // Hover/Tap in TEAL (wie Headline)
                "hover:border-teal-200 hover:bg-teal-50",
                "active:border-teal-200 active:bg-teal-50",
                // Tastatur-Fokus (sauber)
                "focus-within:ring-2 focus-within:ring-teal-600/40",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg">{it.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {it.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}