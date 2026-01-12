// src/templates/sections/proof.tsx
import React from "react";

type ProofStat = { value: string; label: string };
type ProofLogo = { src: string; alt: string };
type ProofTestimonial = { quote: string; name?: string; role?: string };

export type ProofProps = {
  heading?: string;
  subheading?: string;
  variant?: "logos" | "stats" | "mixed";
  stats?: ProofStat[];
  logos?: ProofLogo[];
  testimonial?: ProofTestimonial;
};

export default function Proof(props: ProofProps) {
  const {
    heading = "Ergebnisse, die überzeugen",
    subheading = "",
    variant = "mixed",
    stats = [],
    logos = [],
    testimonial,
  } = props ?? {};

  // Wenn gar nichts da ist: Section sauber ausblenden
  const hasStats = Array.isArray(stats) && stats.length > 0;
  const hasLogos = Array.isArray(logos) && logos.length > 0;
  const hasTestimonial = !!testimonial?.quote;

  if (!heading && !subheading && !hasStats && !hasLogos && !hasTestimonial) return null;

  return (
    <section style={{ padding: "64px 0" }} id="proof">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 34, margin: 0, lineHeight: 1.15 }}>{heading}</h2>
          {subheading ? (
            <p style={{ marginTop: 10, opacity: 0.75, fontSize: 16, lineHeight: 1.5 }}>
              {subheading}
            </p>
          ) : null}
        </div>

        {(variant === "stats" || variant === "mixed") && hasStats ? (
          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginBottom: hasLogos || hasTestimonial ? 22 : 0,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 14,
                  padding: 16,
                  background: "rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700 }}>{s.value}</div>
                <div style={{ opacity: 0.7, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        {(variant === "logos" || variant === "mixed") && hasLogos ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
              marginBottom: hasTestimonial ? 22 : 0,
              opacity: 0.9,
            }}
          >
            {logos.map((l, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 12,
                  padding: "10px 12px",
                  background: "white",
                }}
              >
                {/* Falls Logo-Dateien fehlen, bleibt es trotzdem stabil */}
                <img
                  src={l.src}
                  alt={l.alt}
                  style={{ height: 22, width: "auto", display: "block" }}
                  onError={(e) => {
                    // img verstecken, statt Crash/kaputtes Layout
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}

        {hasTestimonial ? (
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 16,
              padding: 18,
              background: "white",
            }}
          >
            <div style={{ fontSize: 16, lineHeight: 1.6 }}>
              <span style={{ fontWeight: 600 }}>"</span>
              {testimonial!.quote}
              <span style={{ fontWeight: 600 }}>"</span>
            </div>
            {(testimonial?.name || testimonial?.role) && (
              <div style={{ marginTop: 10, opacity: 0.75 }}>
                {testimonial?.name ? <strong>{testimonial.name}</strong> : null}
                {testimonial?.role ? <span> — {testimonial.role}</span> : null}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}