// src/components/Demos/PraxisHamburg/IndexHamburg.tsx
import React from "react";

import HeaderHamburg from "@/components/Demos/PraxisHamburg/HeaderHamburg";
import HeroHamburg from "@/components/Demos/PraxisHamburg/HeroHamburg";
import USPCardsHamburg from "@/components/Demos/PraxisHamburg/USPCardsHamburg";
import ServicesHamburg from "@/components/Demos/PraxisHamburg/ServicesHamburg";
import ProcessHamburg from "@/components/Demos/PraxisHamburg/ProcessHamburg";
import TeamHamburg from "@/components/Demos/PraxisHamburg/TeamHamburg";
import ReviewsHamburg from "@/components/Demos/PraxisHamburg/ReviewsHamburg";
import FAQHamburg from "@/components/Demos/PraxisHamburg/FAQHamburg";
import ContactHamburg from "@/components/Demos/PraxisHamburg/ContactHamburg";
import FooterHamburg from "@/components/Demos/PraxisHamburg/FooterHamburg";

/**
 * Rendert jede Sektion crash-sicher:
 * - Wenn eine Komponente crasht, bekommst du einen roten Block mit dem Namen.
 * - Die Seite bleibt sichtbar, du verlierst nicht alles in "weiß".
 */
function SafeSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  try {
    return <>{children}</>;
  } catch (e: any) {
    return (
      <div
        style={{
          padding: 16,
          margin: "16px 0",
          border: "2px solid #b00020",
          background: "#fff5f6",
          fontFamily: "system-ui, Arial",
        }}
      >
        <strong style={{ display: "block", marginBottom: 6 }}>
          Crash in: {name}
        </strong>
        <pre style={{ whiteSpace: "pre-wrap", margin: 0, opacity: 0.85 }}>
          {String(e?.message || e)}
        </pre>
      </div>
    );
  }
}

export default function IndexHamburg() {
  return (
    <>
      <SafeSection name="HeaderHamburg">
        <HeaderHamburg />
      </SafeSection>

      <main>
        <SafeSection name="HeroHamburg">
          <HeroHamburg />
        </SafeSection>

        <SafeSection name="USPCardsHamburg">
          <USPCardsHamburg />
        </SafeSection>

        <SafeSection name="ServicesHamburg">
          <ServicesHamburg />
        </SafeSection>

        <SafeSection name="ProcessHamburg">
          <ProcessHamburg />
        </SafeSection>

        <SafeSection name="TeamHamburg">
          <TeamHamburg />
        </SafeSection>

        <SafeSection name="ReviewsHamburg">
          <ReviewsHamburg />
        </SafeSection>

        <SafeSection name="FAQHamburg">
          <FAQHamburg />
        </SafeSection>

        <SafeSection name="ContactHamburg">
          <ContactHamburg />
        </SafeSection>
      </main>

      <SafeSection name="FooterHamburg">
        <FooterHamburg />
      </SafeSection>
    </>
  );
}