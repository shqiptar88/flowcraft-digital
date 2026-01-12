// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
        {/* Eyebrow */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-xs tracking-widest uppercase text-slate-500">
            Websites für Praxen · Schwerpunkt Zahnärzte
          </span>

          
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
  Eine Praxiswebsite, die überzeugt und Anfragen auslöst.
</h1>
        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Premium-Design für Vertrauen – kombiniert mit klarer Struktur, schneller Performance
          und SEO-Basis. Damit Menschen euch finden, verstehen – und Termine anfragen.
        </p>

        {/* Bullets */}
        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
            Modernes Erscheinungsbild (kein „Baukasten-Look“)
          </li>
          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
            Inhalte, die Leistungen & Vorteile sofort verständlich machen
          </li>
          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
            SEO-Basis + saubere Technik für mehr Sichtbarkeit & Conversion
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#kontakt"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Unverbindliches Erstgespräch anfragen →
          </a>

          <a
            href="#ablauf"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            So läuft’s ab
          </a>
        </div>

        {/* Hinweiszeile UNTER den Buttons -> entfernt (wie gewünscht) */}
      </div>

      {/* Dezenter Hintergrundverlauf (wenn du ihn magst) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(20,184,166,.10),transparent_60%),radial-gradient(900px_400px_at_90%_10%,rgba(59,130,246,.08),transparent_60%)]" />
    </section>
  );
}