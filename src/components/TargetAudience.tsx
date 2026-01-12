// src/components/TargetAudience.tsx

import { FC } from "react";

type AudienceCard = {
  title: string;
  description: string;
  icon: string;
};

const cards: AudienceCard[] = [
  {
    title: "Praxen & Gesundheitszentren",
    description:
      "Zahnärzte, MVZ, Therapiepraxen, ästhetische Behandlungen – moderne Praxiswebsites mit klarem Aufbau, Leistungen & Vertrauen.",
    icon: "🏥",
  },
  {
    title: "Ästhetik & Beratung",
    description:
      "Bleaching, Veneers, Haut- & Beauty-Behandlungen, Ernährungsberatung – fokussierte Landingpages für Anfragen aus Google & Ads.",
    icon: "💎",
  },
  {
    title: "Selbstständige & kleine Teams",
    description:
      "Coaches, Berater, Kanzleien, Agenturen – schlanke Websites mit klarer Positionierung und direkter Kontaktmöglichkeit.",
    icon: "👥",
  },
  {
    title: "Lokale Dienstleister",
    description:
      "Betriebe mit Termin- oder Kontaktfokus – z. B. Handwerk, Studios, Services. Einfache Struktur, klare Infos, schnelle Kontaktwege.",
    icon: "📍",
  },
];

const TargetAudience: FC = () => {
  return (
    <section
      id="zielgruppe"
      className="section-padding border-t border-border bg-background"
    >
      <div className="container space-y-10">
        {/* Heading + Subline – UNVERÄNDERT */}
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-primary">
            Für wen ist FlowCraft geeignet?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            FlowCraft richtet sich an Dienstleister, die mehr wollen als eine
            Standard-Website – und eine Online-Präsenz brauchen, die verständlich
            ist und neue Anfragen bringt.
          </p>
        </header>

        {/* Karten */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-md"
            >
              {/* Icon-Badge */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
                <span aria-hidden="true">{card.icon}</span>
              </div>

              {/* Titel -> wird bei Hover türkis */}
              <h3 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;