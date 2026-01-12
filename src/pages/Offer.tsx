import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Offer() {
  return (
    <>
      <Header />

      <main className="pt-14 lg:pt-20">
        {/* HERO */}
        <section className="container mx-auto px-4 py-10 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground">
              Angebot • Website & Landingpage
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Website, die Anfragen bringt – in klarer Struktur
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Schlankes Design, schnelle Ladezeiten, saubere SEO-Basics und klare
              Call-to-Actions. Für Dienstleister, die planbar mehr Anfragen wollen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Unverbindlich anfragen
              </a>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium hover:bg-muted"
              >
                Zurück zur Startseite
              </Link>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <li>✓ Klarer Aufbau (Problem → Lösung → Vertrauen → CTA)</li>
              <li>✓ Mobile-first, schnell, technisch sauber</li>
              <li>✓ Texte, Struktur, SEO-Basics inklusive</li>
            </ul>
          </div>
        </section>

        {/* PROOF */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">Ergebnis</p>
              <p className="mt-2 text-xl font-semibold">Mehr Anfragen</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Klare CTAs + saubere Struktur statt „schön aber wirkungslos“.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">Technik</p>
              <p className="mt-2 text-xl font-semibold">Schnell & stabil</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Performance-Basics, saubere Komponenten, gute UX.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">Umsetzung</p>
              <p className="mt-2 text-xl font-semibold">Fixer Prozess</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Klarer Ablauf, schnelle Abstimmungen, keine Agentur-Blackbox.
              </p>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold">Pakete</h2>
          <p className="mt-2 text-muted-foreground">
            Transparent, ohne Abo-Zwang. (Preise kannst du später einsetzen.)
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Start</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Onepage / kleine Website – ideal für Solos & lokale Services.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>✓ Struktur + Design</li>
                <li>✓ Mobile + SEO-Basics</li>
                <li>✓ Kontakt-CTA</li>
              </ul>
              <a
                href="#kontakt"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Erstgespräch sichern
              </a>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Conversion</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Landingpage für Google/Ads – Fokus auf Leads & Abschluss.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>✓ Conversion-Sections (Proof, FAQ, CTA)</li>
                <li>✓ Tracking-Vorbereitung</li>
                <li>✓ Text-Feinschliff</li>
              </ul>
              <a
                href="#kontakt"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Angebot anfragen
              </a>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Premium</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mehrseitig + Inhalte + SEO-Setup – für Wachstum & Skalierung.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>✓ Seitenstruktur + Inhalte</li>
                <li>✓ Local-SEO-Setup</li>
                <li>✓ Iterationen & Feinschliff</li>
              </ul>
              <a
                href="#kontakt"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Premium-Call
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-3">
            <div className="rounded-lg border p-5">
              <p className="font-medium">Wie schnell geht das?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Wenn Inhalte/Abstimmung stehen: häufig in 7–21 Tagen.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="font-medium">Kann ich später Inhalte ändern?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ja. Wir bauen so, dass Erweiterungen leicht sind.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="font-medium">Brauche ich SEO/Ads?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Eine gute Seite ist die Basis. Traffic kann danach über SEO/Ads kommen.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT ANCHOR */}
        <section id="kontakt" className="container mx-auto px-4 py-12">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">Unverbindlich anfragen</h2>
            <p className="mt-2 text-muted-foreground">
              Schreib kurz, was du machst und was du brauchst – ich melde mich mit einem
              klaren Vorschlag.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <input
                className="h-11 rounded-md border bg-background px-3 text-sm"
                placeholder="Name"
              />
              <input
                className="h-11 rounded-md border bg-background px-3 text-sm"
                placeholder="E-Mail"
              />
              <input
                className="md:col-span-2 h-11 rounded-md border bg-background px-3 text-sm"
                placeholder="Website (optional)"
              />
              <textarea
                className="md:col-span-2 min-h-28 rounded-md border bg-background px-3 py-2 text-sm"
                placeholder="Kurz: Branche, Ziel, was soll die Seite leisten?"
              />
              <button className="md:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90">
                Anfrage senden
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}