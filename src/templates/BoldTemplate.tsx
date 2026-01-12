// src/templates/BoldTemplate.tsx
import type { Vertical, ThemePreset } from "../content/types";

import Hero from "./sections/Hero";
import USP from "./sections/USP";
import Services from "./sections/Services";
import CTA from "./sections/CTA";

type Props = {
  vertical: Vertical;
  theme: ThemePreset;
};

export default function BoldTemplate({ vertical, theme }: Props) {
  return (
    <main>
      <Hero vertical={vertical} theme={theme} variant="full" />
      <USP vertical={vertical} theme={theme} variant="cards" />

      <section id="leistungen" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className={[
              "text-3xl font-semibold tracking-tight sm:text-4xl",
              theme.accentClass,
            ].join(" ")}
          >
            Leistungen
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Pakete/Module, die für diese Branche besonders gut funktionieren.
          </p>

          <div className="mt-8">
            <Services vertical={vertical} theme={theme} variant="grid" />
          </div>
        </div>
      </section>

      <CTA vertical={vertical} theme={theme} variant="full" />
    </main>
  );
}