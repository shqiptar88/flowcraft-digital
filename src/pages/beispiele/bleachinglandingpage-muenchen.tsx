// src/pages/beispiele/bleachinglandingpage-muenchen.tsx
import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Clock3,
  BadgeCheck,
  Zap,
  Coffee,
  Wine,
  Cigarette,
  Smile,
  ChevronDown,
} from "lucide-react";

/**
 * Bleaching Landingpage – München (Demo)
 * Fixes:
 * - Stärkerer Hover-Effekt auf Karten/Baukästen (Teal blinkt auf)
 * - Mehr Abstand zwischen Sections
 * - Hero: rechter Button teal wie linker
 * - Section-Headlines teal
 * - CTA: helle Buttons bleiben, aber Textfarbe sichtbar teal
 */

const TEAL_TEXT = "text-teal-700";
const TEAL_BG = "bg-teal-600";
const TEAL_BG_HOVER = "hover:bg-teal-700";
const TRANSITION = "transition-all duration-200 ease-out";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type FAQ = { q: string; a: string };

export default function BleachingLandingpageMuenchen() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "Tut Bleaching weh?",
        a: "In der Regel nicht. Manche Personen spüren kurzfristig eine leichte Empfindlichkeit – das ist normal und klingt meist schnell ab.",
      },
      {
        q: "Wie lange hält das Ergebnis?",
        a: "Das hängt von Gewohnheiten (Kaffee, Tee, Rotwein, Rauchen) und der Zahnpflege ab. Oft hält das Ergebnis mehrere Monate bis über ein Jahr.",
      },
      {
        q: "Ist Bleaching schädlich für die Zähne?",
        a: "Bei fachgerechter Anwendung und zahnärztlicher Kontrolle gilt Bleaching als sicher. Wir prüfen vorher, ob es bei Ihnen sinnvoll ist.",
      },
      {
        q: "Was kostet ein Bleaching ungefähr?",
        a: "Je nach Ausgangssituation und Methode variieren die Kosten. In der Demo-Seite nennen wir bewusst keinen Fixpreis – Beratung klärt den passenden Ablauf.",
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2400&q=70)",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/35 to-white/0" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Professionelles Zahnbleaching in München
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Bleaching in München –<br />
              strahlendes Lächeln mit professioneller Zahnaufhellung
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              In unserer Demo-Praxis in München hellen wir Ihre Zähne schonend unter zahnärztlicher Kontrolle auf – für
              ein natürlich wirkendes, strahlendes Lächeln, das zu Ihnen passt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm",
                  TEAL_BG,
                  TEAL_BG_HOVER,
                  TRANSITION
                )}
              >
                Bleaching-Beratung vereinbaren
              </button>

              {/* Rechts jetzt identisch teal wie links */}
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm",
                  TEAL_BG,
                  TEAL_BG_HOVER,
                  TRANSITION
                )}
              >
                Mehr erfahren
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-200" />
                Kontrolliert & sicher
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-200" />
                Planbare Ergebnisse
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-200" />
                Zahnarztpraxis (Demo)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hinweisband */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-slate-50 px-5 py-3 text-sm text-slate-600 ring-1 ring-slate-200">
          Hinweis: Diese Seite dient ausschließlich als Beispielprojekt (Demo) und stellt keine echte Praxis in München
          dar.
        </div>
      </section>

      {/* Vorteile */}
      <SectionShell>
        <SectionHeader
          title="Vorteile von professionellem Zahnbleaching in München"
          subtitle="Ein professionelles Bleaching beim Zahnarzt sorgt für sichere und planbare Ergebnisse. Diese Vorteile erwarten Sie in unserer Demo-Praxis in München:"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Smile className="h-5 w-5" />}
            title="Helleres Lächeln"
            text="Deutlich aufgehellte Zähne für ein strahlendes Erscheinungsbild – ohne unkontrollierte Experimente."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Schonende Behandlung"
            text="Moderne Bleaching-Gele und individuelle Dosierung – abgestimmt auf Ihre Ausgangssituation."
          />
          <FeatureCard
            icon={<Stethoscope className="h-5 w-5" />}
            title="Zahnärztliche Kontrolle"
            text="Aufhellung unter zahnärztlicher Aufsicht – inklusive Voruntersuchung und Ergebnis-Check."
          />
          <FeatureCard
            icon={<Clock3 className="h-5 w-5" />}
            title="Schnelle Ergebnisse"
            text="Schon nach kurzer Zeit sichtbarer Unterschied – ideal vor Events, Fotoshootings oder wichtigen Terminen."
          />
          <FeatureCard
            icon={<BadgeCheck className="h-5 w-5" />}
            title="Planbar & transparent"
            text="Klarer Ablauf, realistische Zielsetzung und nachvollziehbare Beratung – ohne Marketing-Nebel."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Moderne Technik"
            text="Aktivierung mit Licht oder Laser je nach Situation – effizient und kontrolliert."
          />
        </div>
      </SectionShell>

      {/* Ablauf */}
      <SectionShell>
        <SectionHeader
          title="Ablauf der Bleaching-Behandlung in 4 Schritten"
          subtitle="Klarer Prozess statt Agentur-Blackbox: Sie wissen jederzeit, was passiert – und was als Nächstes ansteht."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <StepCard
            nr="01"
            title="Beratung & Untersuchung"
            text="Wir sprechen über Ihre Wünsche, prüfen den Zustand Ihrer Zähne und klären, ob ein Bleaching für Sie sinnvoll und sicher ist."
          />
          <StepCard
            nr="02"
            title="Professionelle Zahnreinigung"
            text="Vor dem Bleaching entfernen wir Beläge und Verfärbungen, damit das Bleaching-Gel gleichmäßig wirken kann."
          />
          <StepCard
            nr="03"
            title="Bleaching in der Praxis"
            text="Das schonende Bleaching-Gel wird aufgetragen und mit Licht oder Laser aktiviert. Sie können sich entspannen, während Ihre Zähne aufgehellt werden."
          />
          <StepCard
            nr="04"
            title="Kontrolle & Pflegetipps"
            text="Nach der Behandlung kontrollieren wir das Ergebnis und geben Ihnen Tipps, wie Sie Ihr strahlendes Lächeln möglichst lange erhalten."
          />
        </div>
      </SectionShell>

      {/* Für wen geeignet */}
      <SectionShell>
        <SectionHeader
          title="Für wen eignet sich ein Zahnbleaching?"
          subtitle="Viele Menschen wünschen sich hellere Zähne. Ein professionelles Bleaching kann helfen – besonders bei:"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FeatureCard
            icon={<Coffee className="h-5 w-5" />}
            title="Verfärbungen durch Kaffee oder Tee"
            text="Typische Alltagsverfärbungen werden sichtbar reduziert – ohne aggressives „DIY-Bleaching“."
          />
          <FeatureCard
            icon={<Wine className="h-5 w-5" />}
            title="Verfärbungen durch Rotwein"
            text="Pigmente lassen Zähne oft dunkler wirken – professionell aufgehellt wirkt es wieder frisch."
          />
          <FeatureCard
            icon={<Cigarette className="h-5 w-5" />}
            title="Verfärbungen durch Rauchen"
            text="Gelbliche Töne lassen sich meist deutlich verbessern – abhängig von Ausgangslage und Zahngesundheit."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Wunsch nach einem frischeren Gesamteindruck"
            text="Dezente Aufhellung kann das gesamte Erscheinungsbild positiv verändern – natürlich und passend."
          />
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell>
        <SectionHeader
          title="Häufige Fragen zum Zahnbleaching"
          subtitle="Hier beantworten wir die wichtigsten Fragen rund um die professionelle Zahnaufhellung in unserer Demo-Praxis in München."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpenFaq(open ? null : idx)}
                className={cn(
                  "w-full rounded-2xl bg-white px-5 py-4 text-left ring-1 ring-slate-200",
                  // Hover für FAQ-Boxen auch sichtbar teal
                  "hover:ring-2 hover:ring-teal-200 hover:shadow-md",
                  "hover:border-teal-200",
                  TRANSITION
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-slate-900">{item.q}</span>
                  <ChevronDown
                    className={cn("h-5 w-5 text-slate-500", TRANSITION, open && "rotate-180")}
                    aria-hidden="true"
                  />
                </div>
                {open && <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>}
              </button>
            );
          })}
        </div>
      </SectionShell>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-6xl px-6 pb-20 md:mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-600 px-6 py-12 text-white md:px-12">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            Bleaching in München – jetzt Termin vereinbaren
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/85">
            Machen Sie den ersten Schritt zu einem strahlenden Lächeln: Vereinbaren Sie jetzt Ihren persönlichen
            Beratungstermin für ein professionelles Zahnbleaching in unserer Demo-Praxis in München.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Hell bleiben, aber Teal Schrift sichtbar */}
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-sm",
                TEAL_TEXT,
                "hover:bg-teal-50",
                TRANSITION
              )}
            >
              <Calendar className="h-4 w-4" />
              Termin vereinbaren
            </button>

            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur",
                "hover:bg-white/15",
                TRANSITION
              )}
            >
              Rückruf anfragen
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> 089 123 456 789
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> München (Demo)
            </span>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
            <form className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-white/90">Name</span>
                <input
                  className="h-11 rounded-xl bg-white/10 px-4 text-sm text-white placeholder:text-white/60 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-white/35"
                  placeholder="Name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-white/90">Telefon oder E-Mail</span>
                <input
                  className="h-11 rounded-xl bg-white/10 px-4 text-sm text-white placeholder:text-white/60 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-white/35"
                  placeholder="Telefon oder E-Mail"
                />
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-medium text-white/90">Worum geht es?</span>
                <textarea
                  className="min-h-[96px] resize-none rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-white/35"
                  placeholder="Worum geht es? (z. B. Terminwunsch, Fragen)"
                />
              </label>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-sm",
                    TEAL_TEXT,
                    "hover:bg-teal-50",
                    TRANSITION
                  )}
                >
                  Anfrage senden (Demo)
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} FlowCraft – Demo-Seite (Beispielprojekt)
        </footer>
      </section>
    </main>
  );
}

/* ------------------------- Layout ------------------------- */

function SectionShell({ children }: { children: React.ReactNode }) {
  // Mehr Luft zwischen Sections (deutlich größer als vorher)
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6 md:mt-24">
      <div className="py-2 md:py-4">{children}</div>
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header>
      <h2 className={cn("text-2xl font-semibold tracking-tight md:text-3xl", TEAL_TEXT)}>{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{subtitle}</p>
    </header>
  );
}

/* ------------------------- Cards ------------------------- */

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-white p-5 ring-1 ring-slate-200",
        // Deutlich sichtbarer Hover:
        "hover:ring-2 hover:ring-teal-200",
        "hover:border-teal-200",
        "hover:shadow-lg",
        // Teal Glow "Aufblinken"
        "hover:shadow-teal-200/40",
        TRANSITION
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200",
            // Icon-Box blinkt teal
            "group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:ring-teal-200",
            TRANSITION
          )}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className={cn("font-semibold text-slate-900", "group-hover:text-teal-700", TRANSITION)}>
            {title}
          </h3>
          <p className={cn("mt-2 text-sm leading-relaxed text-slate-600", "group-hover:text-slate-700", TRANSITION)}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepCard({ nr, title, text }: { nr: string; title: string; text: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200",
        // Deutlich sichtbarer Hover auch hier
        "hover:ring-2 hover:ring-teal-200",
        "hover:shadow-lg hover:shadow-teal-200/35",
        TRANSITION
      )}
    >
      <div className="absolute right-5 top-5 select-none text-5xl font-semibold text-slate-200/70">
        {nr}
      </div>

      <h3 className={cn("font-semibold text-slate-900", "group-hover:text-teal-700", TRANSITION)}>{title}</h3>
      <p className={cn("mt-2 text-sm leading-relaxed text-slate-600", "group-hover:text-slate-700", TRANSITION)}>
        {text}
      </p>
    </div>
  );
}