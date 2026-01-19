// src/pages/beispiele/praxis-hamburg.tsx

import HeaderHamburg from "../../components/Demos/PraxisHamburg/HeaderHamburg";
import HeroHamburg from "../../components/Demos/PraxisHamburg/HeroHamburg";
import USPCardsHamburg from "../../components/Demos/PraxisHamburg/USPCardsHamburg";
import ServicesHamburg from "../../components/Demos/PraxisHamburg/ServicesHamburg";
import ProcessHamburg from "../../components/Demos/PraxisHamburg/ProcessHamburg";
import TeamHamburg from "../../components/Demos/PraxisHamburg/TeamHamburg";
import ReviewsHamburg from "../../components/Demos/PraxisHamburg/ReviewsHamburg";
import FAQHamburg from "../../components/Demos/PraxisHamburg/FAQHamburg";
import ContactHamburg from "../../components/Demos/PraxisHamburg/ContactHamburg";
import FooterHamburg from "../../components/Demos/PraxisHamburg/FooterHamburg";

// Wenn dein Header fixed/sticky ist, braucht der Content Abstand nach oben.
// Stell den Wert auf die echte Header-Höhe ein (typisch 80–120px).
const HEADER_OFFSET_PX = 96;

export default function PraxisHamburgPage() {
  return (
    <>
      <HeaderHamburg />

      {/* Spacer, damit der fixed Header den Content nicht überdeckt */}
      <div style={{ height: HEADER_OFFSET_PX }} />

      {/* DEBUG (nur zum Prüfen): Wenn du das siehst, rendert React unter dem Header */}
      <div style={{ background: "yellow", padding: 12, fontWeight: 700 }}>
        DEBUG: React rendert unter dem Header korrekt.
      </div>

      <main>
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