// src/pages/beispiele/praxis-hamburg.tsx
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

export default function PraxisHamburgPage() {
  return (
    <>
      <HeaderHamburg />

      {/* DEBUG – MUSS SICHTBAR SEIN */}
      <div style={{ background: "yellow", padding: 20, color: "black" }}>
        DEBUG: React rendert unter dem Header korrekt.
      </div>

      {/* Falls Header "fixed" ist, verhindert das, dass Content dahinter verschwindet */}
      <main style={{ position: "relative", zIndex: 0 }}>
        <HeroHamburg />
        <USPCardsHamburg />
        <ServicesHamburg />
        <ProcessHamburg />
        <TeamHamburg />
        <ReviewsHamburg />
        <FAQHamburg />
        <ContactHamburg />
        <FooterHamburg />
      </main>
    </>
  );
}