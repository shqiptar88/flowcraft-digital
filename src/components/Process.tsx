// src/components/Process.tsx
export default function Process() {
  const steps = [
    {
      nr: "01",
      title: "Kennenlernen & Analyse",
      text: "Kurzes Gespräch oder Video-Call: Wir schauen uns Status, Ziele und Rahmen an – ohne Druck, ohne Verkaufstheater.",
    },
    {
      nr: "02",
      title: "Konzept & Struktur",
      text: "Seitenstruktur, Inhalte und erste Textvorschläge. Im Fokus: Was muss der Besucher verstehen – und was soll er tun?",
    },
    {
      nr: "03",
      title: "Design & Umsetzung",
      text: "Aufbau der Website, Anpassung von Texten & Bildern, mobil sauber und technisch schlank – klar und performant.",
    },
    {
      nr: "04",
      title: "Launch & Optimierung",
      text: "Go-Live, Basics fürs Tracking und kleine Nachbesserungen nach den ersten Nutzerreaktionen. Messbar verbessern statt Bauchgefühl.",
    },
  ];

  return (
    <section id="ablauf" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
            In 4 Schritten zur neuen Website
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Klarer Prozess statt Agentur-Blackbox: Sie wissen jederzeit, was passiert – und was als Nächstes ansteht.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.nr}
              className={[
                "group rounded-2xl border border-slate-200 bg-white/70 p-6",
                "shadow-sm transition",
                "hover:border-teal-200 hover:bg-teal-50",
                "active:border-teal-200 active:bg-teal-50",
                "focus-within:ring-2 focus-within:ring-teal-600/40",
              ].join(" ")}
            >
              <div className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition group-hover:border-teal-200 group-active:border-teal-200">
                {s.nr}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}