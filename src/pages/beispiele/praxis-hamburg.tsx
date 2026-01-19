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

      {/* Debug-Bar: MUSS sichtbar sein, sonst stimmt Routing/Build nicht */}
      <div style={{ padding: 16, background: "yellow", color: "black" }}>
        DEBUG: Praxis Hamburg Page rendert unter dem Header.
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
      </main>

      <FooterHamburg />
    </>
  );
}