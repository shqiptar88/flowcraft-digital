// src/templates/contentPacks.ts
import type { SectionOverrides } from "./sections/types";

export type ContentPackKey = "dental" | "coach" | "trade";

/**
 * NOTE:
 * If your SectionOverrides type is currently too strict (and doesn't include keys like "hero"),
 * TypeScript will error.
 *
 * This cast keeps your content valid while you finalize the schema in ./sections/types.
 */
export const contentPacks = {
  dental: {
    hero: {
      kicker: "WEBSITES FÜR ZAHNARZTPRAXEN",
      title: "Moderne Websites für\nZahnarztpraxen",
      lead:
        "Mehr Vertrauen, mehr Terminanfragen – mit einer klaren, schnellen und mobil optimierten Website.",
      bullets: [
        "Modernes Erscheinungsbild (kein Baukasten-Look)",
        "Klarer Fokus: Leistung → Vertrauen → Anfrage",
        "Saubere Technik & SEO-Basis (Performance, Core Web Vitals)",
      ],
      primaryCta: "Unverbindliches Erstgespräch anfragen",
      secondaryCta: "So läuft’s ab",
    },

    usp: {
      items: [
        {
          title: "Mobile-first",
          text: "Optimiert für Handy & Tablet – dort entscheiden die meisten Patient:innen.",
        },
        {
          title: "Schnell & sauber",
          text: "Performance-optimiert, Core Web Vitals im Blick – ohne technische Baustellen.",
        },
        {
          title: "Ohne Agentur-Blabla",
          text: "Klarer Prozess, klare Kommunikation, saubere Umsetzung.",
        },
      ],
    },

    services: {
      title: "Leistungen",
      subtitle: "Klar strukturiert, professionell präsentiert – mit Conversion-Fokus.",
      cards: [
        {
          title: "Praxis-Website",
          text: "Professioneller Webauftritt mit Fokus auf Vertrauen, Leistungen und Termin-Anfragen.",
        },
        {
          title: "Landingpages (Leistungen)",
          text: "Separate Seiten für Bleaching, Implantate etc. – ideal für Google & Ads.",
        },
        {
          title: "Local SEO Setup",
          text: "Grundstruktur, Meta-Daten, Schema, Local Signals – sauber vorbereitet für Sichtbarkeit.",
        },
      ],
    },

    proof: {
      stats: [
        { value: "24h", label: "Ø Rückmeldung auf Anfragen" },
        { value: "+20–40%", label: "Mehr Anfragen (typisch)" },
        { value: "A/A+", label: "Performance-Ziel" },
      ],
      quote:
        "Die neue Website wirkt hochwertig – und wir bekommen deutlich mehr qualifizierte Terminanfragen.",
      who: "Praxisinhaber — Zahnarztpraxis",
    },

    faq: {
      layout: "twoColumn",
      title: "FAQ für Zahnarztpraxen",
      items: [
        {
          q: "Wie schnell ist die Website online?",
          a: "Je nach Umfang meist in 7–14 Tagen. Wenn Inhalte schon vorliegen, oft schneller.",
        },
        {
          q: "Macht ihr auch Local SEO?",
          a: "Ja – wir legen ein sauberes technisches Fundament (Struktur, Meta, Schema, Local Basics) und beraten zur Content-Strategie.",
        },
        {
          q: "Kann ich Texte/Bilder später ändern?",
          a: "Ja – Inhalte sind modular aufgebaut, sodass du Anpassungen machen kannst, ohne das Layout zu zerstören.",
        },
      ],
    },

    cta: {
      variant: "boxed",
      title: "Interesse an einem passenden Angebot?",
      subtitle: "Kurze Nachricht genügt — wir melden uns schnell zurück.",
      primaryCta: "Erstgespräch anfragen",
      secondaryCta: "E-Mail schreiben",
    },
  },

  coach: {
    hero: {
      kicker: "WEBSITES FÜR COACHES",
      title: "Mehr Buchungen für\nCoaching & Beratung",
      lead:
        "Positionierung, Vertrauen und ein klarer Call-to-Action – damit aus Besuchern Kunden werden.",
      bullets: [
        "Klare Positionierung & Angebot",
        "Social Proof & Conversion-Fokus",
        "Schnell, mobil, SEO-ready",
      ],
      primaryCta: "Kennenlern-Call buchen",
      secondaryCta: "Referenzen ansehen",
    },

    usp: {
      items: [
        { title: "Positionierung", text: "Dein Angebot glasklar – in 5 Sekunden verstanden." },
        { title: "Vertrauen", text: "Testimonials, Cases, klare Struktur." },
        { title: "Conversion", text: "CTAs, Flow und Copy für Anfragen." },
      ],
    },

    services: {
      title: "Leistungen",
      subtitle: "Alles, was du brauchst, um planbar Anfragen zu erhalten.",
      cards: [
        { title: "Sales Page", text: "Angebotsseite mit Copy, Struktur und CTA." },
        { title: "Content-Struktur", text: "Leistungen, Prozess, Ergebnisse – sauber aufgebaut." },
        { title: "Tech & SEO Basis", text: "Schnell, sauber, indexierbar – ohne unnötigen Overkill." },
      ],
    },

    proof: {
      stats: [
        { value: "7 Tage", label: "Typisch bis Live" },
        { value: "+25%", label: "Mehr Anfragen (typisch)" },
        { value: "A+", label: "Performance Ziel" },
      ],
      quote: "Endlich eine Seite, die meine Positionierung auf den Punkt bringt.",
      who: "Coach — Business Coaching",
    },

    faq: {
      layout: "twoColumn",
      title: "FAQ für Coaches",
      items: [
        {
          q: "Könnt ihr Texte auch schreiben?",
          a: "Ja – auf Wunsch inkl. Copywriting (Positionierung + CTA).",
        },
        {
          q: "Kann ich später selbst etwas ändern?",
          a: "Ja – Inhalte sind modular und erweiterbar.",
        },
        {
          q: "Wie läuft der Prozess ab?",
          a: "Kickoff → Entwurf → Feinschliff → Livegang. Klar, schnell, ohne Chaos.",
        },
      ],
    },

    cta: {
      variant: "boxed",
      title: "Bereit für mehr Buchungen?",
      subtitle: "Schick kurz dein Thema – wir schlagen den besten Aufbau vor.",
      primaryCta: "Call buchen",
      secondaryCta: "Anfrage senden",
    },
  },

  trade: {
    hero: {
      kicker: "WEBSITES FÜR HANDWERK",
      title: "Mehr Anfragen für\nHandwerksbetriebe",
      lead:
        "Klarer Auftritt, Leistungen verständlich, Kontakt in 1 Klick – damit das Telefon klingelt.",
      bullets: [
        "Leistungen & Einzugsgebiet klar",
        "Telefon/WhatsApp CTA prominent",
        "Local SEO & Google Business Fokus",
      ],
      primaryCta: "Angebot anfragen",
      secondaryCta: "Leistungen ansehen",
    },

    usp: {
      items: [
        { title: "Sofort Kontakt", text: "Telefon/WhatsApp prominent – weniger Reibung." },
        { title: "Local SEO", text: "Sichtbarkeit in deiner Region & Maps." },
        { title: "Vertrauen", text: "Bilder, Bewertungen, Referenzen." },
      ],
    },

    services: {
      title: "Leistungen",
      subtitle: "Übersichtlich, verständlich, mit starker Anfrageführung.",
      cards: [
        { title: "Leistungsseiten", text: "Pro Leistung eine klare Seite – gut für SEO." },
        { title: "Anfrage-Flow", text: "Kontaktformular + Klick-to-Call / WhatsApp." },
        { title: "Referenzen", text: "Vorher/Nachher, Projekte, Bewertungen – Vertrauen sichtbar machen." },
      ],
    },

    proof: {
      stats: [
        { value: "1 Klick", label: "Kontakt per Telefon/WhatsApp" },
        { value: "+30%", label: "Mehr Anfragen (typisch)" },
        { value: "Top", label: "Mobile Usability" },
      ],
      quote: "Wir bekommen deutlich mehr qualifizierte Anfragen aus der Region.",
      who: "Inhaber — Handwerksbetrieb",
    },

    faq: {
      layout: "twoColumn",
      title: "FAQ fürs Handwerk",
      items: [
        {
          q: "Könnt ihr Bilder/Referenzen einbauen?",
          a: "Ja – idealerweise mit echten Projektfotos (vorher/nachher).",
        },
        {
          q: "Macht ihr Google Business Profil auch?",
          a: "Wir optimieren es und verknüpfen es sauber auf der Website.",
        },
        {
          q: "Wie schnell geht das?",
          a: "Oft in 5–10 Tagen, je nach Material und Umfang.",
        },
      ],
    },

    cta: {
      variant: "boxed",
      title: "Sollen mehr Anfragen reinkommen?",
      subtitle: "Sag kurz Branche & Region – wir melden uns mit einem Vorschlag.",
      primaryCta: "Jetzt anfragen",
      secondaryCta: "Rückruf bitte",
    },
  },
} as const satisfies Record<ContentPackKey, SectionOverrides>;