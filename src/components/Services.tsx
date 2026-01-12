// src/components/Services.tsx
export default function Services() {
  return (
    <section id="leistungen" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 md:text-4xl">
            Was FlowCraft für Sie umsetzt
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Von der ersten Idee bis zum Launch – eine Website, die verständlich ist, schnell lädt und neue Anfragen bringt.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className={[
              "group rounded-2xl border border-slate-200 bg-white/70 p-6",
              "shadow-sm transition",
              "hover:border-teal-200 hover:bg-teal-50",
              "active:border-teal-200 active:bg-teal-50",
              "focus-within:ring-2 focus-within:ring-teal-600/40",
            ].join(" ")}
          >
            <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
              Webseiten-Erstellung
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Moderne Praxis- und Business-Websites mit klarer Struktur, mobil optimiert und auf Vertrauen ausgelegt.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Inhalte, die Patient:innen und Kund:innen verstehen
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Responsive Design für Desktop & Smartphone
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Schnelle Ladezeiten & technisches SEO-Fundament
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            className={[
              "group rounded-2xl border border-slate-200 bg-white/70 p-6",
              "shadow-sm transition",
              "hover:border-teal-200 hover:bg-teal-50",
              "active:border-teal-200 active:bg-teal-50",
              "focus-within:ring-2 focus-within:ring-teal-600/40",
            ].join(" ")}
          >
            <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
              Landingpages für Sichtbarkeit & Anfragen
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Spezielle Seiten für Leistungen und Schwerpunkte – passend zu Google-Suche und Werbeanzeigen.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Klarer Aufbau: Problem → Lösung → Ablauf → FAQ
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Starke, aber seriöse Call-to-Actions
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Vorbereitet fürs Tracking (z. B. Conversion-Messung)
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div
            className={[
              "group rounded-2xl border border-slate-200 bg-white/70 p-6",
              "shadow-sm transition",
              "hover:border-teal-200 hover:bg-teal-50",
              "active:border-teal-200 active:bg-teal-50",
              "focus-within:ring-2 focus-within:ring-teal-600/40",
            ].join(" ")}
          >
            <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-teal-700 group-active:text-teal-700">
              SEO & technisches Setup
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Saubere Meta-Daten, Struktur und Performance – damit Google versteht, worum es geht und Nutzer bleiben.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Meta-Titles, Descriptions & klare H1-H3 Struktur
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Schema.org (z. B. Dentist/MedicalClinic/LocalBusiness)
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                Core Web Vitals & Local-SEO Basics (Maps/Umgebung)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}