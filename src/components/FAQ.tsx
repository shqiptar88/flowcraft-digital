import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "Wie schnell ist eine neue Website online?",
    a: "Typischerweise 2–4 Wochen – abhängig von Umfang, Feedback-Schleifen und ob Inhalte (Texte/Bilder) bereits vorliegen.",
  },
  {
    q: "Ist die Website mobil optimiert?",
    a: "Ja. Alle Seiten werden responsive umgesetzt (Smartphone, Tablet, Desktop) und auf saubere Darstellung geprüft.",
  },
  {
    q: "Unterstützt ihr auch SEO?",
    a: "Ja. Technische SEO-Basics (Struktur, Titles, Performance, Core Web Vitals) sind Teil der Umsetzung. Optional auch Local-SEO und Inhaltsberatung.",
  },
  {
    q: "Kann ich später Inhalte selbst ändern?",
    a: "Ja, je nach Setup. Entweder über ein CMS oder durch schlanke Komponenten-Struktur. Ich richte das so ein, dass Änderungen unkompliziert sind.",
  },
  {
    q: "Was kostet das ungefähr?",
    a: "Das hängt vom Umfang ab (Onepager vs. mehrere Unterseiten, Texte, Bilder, SEO). Nach einem kurzen Gespräch bekommst du ein klares Angebot.",
  },
];

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900">{item.q}</span>
        <span
          className={[
            "flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700",
            "transition-transform duration-200",
            isOpen ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-sm leading-6 text-slate-600">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            FAQ SECTION (ID = faq)
           ========================= */}
        <div id="faq" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Kurze Antworten auf die wichtigsten Punkte – wenn etwas fehlt,
            schreib einfach kurz.
          </p>

          <div className="mt-8 grid gap-4">
            {FAQS.map((item, idx) => (
              <FaqRow
                key={item.q}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-slate-200/80" />

        {/* =========================
            CONTACT SECTION (ID = kontakt)
           ========================= */}
        <div id="kontakt" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-700 sm:text-4xl">
            Lassen Sie uns Ihre Website modernisieren
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Schreiben Sie mir kurz, wie Ihre aktuelle Situation aussieht – ich
            melde mich mit einer ehrlichen Einschätzung und einem klaren
            Vorschlag für Ihre neue Website oder Landingpage.
          </p>

          <form className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Ihr Name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  type="text"
                  name="name"
                  placeholder=""
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  E-Mail
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  type="email"
                  name="email"
                  placeholder=""
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-slate-700">
                Aktuelle Website (optional)
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                type="url"
                name="website"
                placeholder="https://ihre-website.de"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-slate-700">
                Kurze Beschreibung Ihrer Situation & Wünsche
              </label>
              <textarea
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                name="message"
                rows={6}
                placeholder=""
              />
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-full bg-teal-600 px-8 py-3 text-white shadow-sm transition hover:bg-teal-700"
              >
                Unverbindlich anfragen
              </button>

              <p className="text-sm text-slate-600">
                oder direkt an{" "}
                <a
                  className="text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800"
                  href="mailto:kontakt@flowcraft-studio.de"
                >
                  kontakt@flowcraft-studio.de
                </a>{" "}
                schreiben
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}