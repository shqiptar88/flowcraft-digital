// src/templates/sections/Hero.tsx
import React from "react";

type HeroCTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroCard = {
  title: string;
  text: string;
};

type HeroTrustItem = {
  label: string;
};

export type HeroVariant = "split" | "cards" | "image" | "trustRow";

export type HeroProps = {
  variant?: HeroVariant;

  overline?: string;
  heading?: string;
  subheading?: string;

  bullets?: string[];
  ctas?: HeroCTA[];

  // cards variant
  cards?: HeroCard[];

  // trustRow variant (oder zusätzlich)
  trust?: HeroTrustItem[];

  // image variant
  image?: {
    src: string;
    alt?: string;
  };

  /**
   * Optional: zusätzliche Wrapper-Klassen
   */
  className?: string;
};

function CTAButtons({ ctas = [] }: { ctas?: HeroCTA[] }) {
  if (!ctas.length) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {ctas.map((c, idx) => {
        const isPrimary = (c.variant ?? "primary") === "primary";
        const href = c.href ?? "#";
        const label = c.label ?? "Mehr erfahren";

        return (
          <a
            key={`${href}-${label}-${idx}`}
            href={href}
            className={[
              "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition",
              isPrimary
                ? "bg-teal-600 text-white shadow-sm hover:bg-teal-700"
                : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}

function Bullets({ bullets = [] }: { bullets?: string[] }) {
  if (!bullets?.length) return null;

  return (
    <ul className="mt-6 space-y-2 text-sm text-slate-600">
      {bullets.map((b, idx) => (
        <li key={`${b}-${idx}`} className="flex gap-2">
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-500" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function TrustRow({ trust = [] }: { trust?: HeroTrustItem[] }) {
  if (!trust?.length) return null;

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-slate-600">
      {trust.map((t, idx) => (
        <span
          key={`${t.label}-${idx}`}
          className="rounded-full border border-slate-200 bg-white/70 px-3 py-1"
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}

export default function Hero({
  variant = "split",
  overline = "Websites für Dienstleister",
  heading = "Eine Website, die überzeugt und Anfragen auslöst.",
  subheading =
    "Premium-Look, klare Struktur und saubere Technik – damit Menschen euch finden, verstehen und kontaktieren.",
  bullets = [
    "Modernes Erscheinungsbild (kein Baukasten-Look)",
    "Klarer Fokus: Leistung → Vertrauen → Anfrage",
    "Saubere Technik & SEO-Basis (Performance, Core Web Vitals)",
  ],
  ctas = [
    {
      label: "Unverbindliches Erstgespräch anfragen",
      href: "#kontakt",
      variant: "primary",
    },
    { label: "So läuft’s ab", href: "#ablauf", variant: "secondary" },
  ],
  cards = [
    { title: "Klarer Aufbau", text: "Besucher verstehen in Sekunden Angebot & Nutzen." },
    { title: "Premium Look", text: "Design, das Vertrauen erzeugt – ohne laut zu sein." },
    { title: "Technisch sauber", text: "Schnell, mobil, SEO-ready – stabil auf Vercel." },
  ],
  trust = [{ label: "Mobile-first" }, { label: "Schnell & sauber" }, { label: "Ohne Agentur-Blabla" }],
  image,
  className = "",
}: HeroProps) {
  // B) defensiv: cards nur nutzen, wenn wirklich Array
  const safeCards = Array.isArray(cards) ? cards : [];

  return (
    <section className={["relative overflow-hidden", className].join(" ")}>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
        {/* Overline */}
        {overline ? (
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xs tracking-widest uppercase text-slate-500">
              {overline}
            </span>
          </div>
        ) : null}

        {/* ===== Variant: trustRow (minimal, huge type + trust row) ===== */}
        {variant === "trustRow" ? (
          <>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {subheading}
            </p>
            <CTAButtons ctas={ctas} />
            <TrustRow trust={trust} />
          </>
        ) : null}

        {/* ===== Variant: cards (left text + right card stack) ===== */}
        {variant === "cards" ? (
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
                {heading}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {subheading}
              </p>

              <Bullets bullets={bullets} />
              <CTAButtons ctas={ctas} />
              <TrustRow trust={trust} />
            </div>

            {/* B) defensiv: Box nur rendern, wenn cards vorhanden */}
            {safeCards.length ? (
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <div className="grid gap-4">
                  {safeCards.map((c, idx) => (
                    <div
                      key={`${c.title ?? "card"}-${idx}`}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <div className="text-sm font-semibold text-slate-900">
                        {c.title ?? "Titel"}
                      </div>
                      <div className="mt-2 text-sm text-slate-600">
                        {c.text ?? ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* ===== Variant: image (left text + right image) ===== */}
        {variant === "image" ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
                {heading}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {subheading}
              </p>

              <Bullets bullets={bullets} />
              <CTAButtons ctas={ctas} />
              <TrustRow trust={trust} />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-3 shadow-sm backdrop-blur">
              {image?.src ? (
                <img
                  src={image.src}
                  alt={image.alt ?? "Hero Image"}
                  className="h-[320px] w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-[320px] items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-500">
                  Kein Bild gesetzt (HeroProps.image)
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* ===== Variant: split (default) ===== */}
        {variant === "split" ? (
          <>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              {heading}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {subheading}
            </p>

            <Bullets bullets={bullets} />
            <CTAButtons ctas={ctas} />
            <TrustRow trust={trust} />
          </>
        ) : null}
      </div>

      {/* Hintergrund (dezent premium) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(20,184,166,.10),transparent_60%),radial-gradient(900px_400px_at_90%_10%,rgba(59,130,246,.08),transparent_60%)]" />
    </section>
  );
}