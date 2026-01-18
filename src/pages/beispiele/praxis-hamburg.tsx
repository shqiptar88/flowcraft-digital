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

      <div style={{ padding: 24, background: "yellow", color: "black" }}>
        <h2>DEBUG: Content unter Header</h2>
        <p>Wenn du das siehst, rendert React unter dem Header, aber CSS/Sections sind das Problem.</p>
      </div>

      <HeroHamburg />
      <USPCardsHamburg />
      <ServicesHamburg />
      <ProcessHamburg />
      <TeamHamburg />
      <ReviewsHamburg />
      <FAQHamburg />
      <ContactHamburg />
      <FooterHamburg />
    </>
  );
}