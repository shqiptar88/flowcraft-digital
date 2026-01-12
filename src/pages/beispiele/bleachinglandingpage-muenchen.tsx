// src/pages/beispiele/bleachinglandingpage-muenchen.tsx

import SEOHead from "../../components/SEOHead";

export default function BleachingLandingpageMuenchen() {
  return (
    <>
      <SEOHead
        title="Bleaching-Landingpage München | FlowCraft (Beispiel)"
        description="Demo-Referenz: Bleaching-Landingpage für eine Zahnarztpraxis in München."
        noIndex
      />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Bleaching-Landingpage München</h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Dies ist eine <strong>Demo-Referenzseite</strong> von FlowCraft. Sie zeigt Aufbau,
          Inhalte und Conversion-Logik einer lokalen Bleaching-Landingpage für Zahnarztpraxen.
        </p>

        <div className="mt-8 rounded-lg border bg-card p-6 text-sm text-muted-foreground">
          Hinweis: Diese Seite dient ausschließlich als Beispielprojekt und stellt keine echte Praxis dar.
        </div>
      </main>
    </>
  );
}