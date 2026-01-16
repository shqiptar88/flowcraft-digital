// src/components/Demos/PraxisHamburg/IndexHamburg.tsx

import { useEffect } from "react";

import HeaderHamburg from "./HeaderHamburg";
import HeroHamburg from "./HeroHamburg";
import USPCardsHamburg from "./USPCardsHamburg";
import ServicesHamburg from "./ServicesHamburg";
import ProcessHamburg from "./ProcessHamburg";
import TeamHamburg from "./TeamHamburg";
import ReviewsHamburg from "./ReviewsHamburg";
import FAQHamburg from "./FAQHamburg";
import ContactHamburg from "./ContactHamburg";
import FooterHamburg from "./FooterHamburg";

export default function IndexHamburg() {
  useEffect(() => {
    document.title =
      "Zahnarztpraxis Hamburg-Eppendorf | Demo – FlowCraft Digital";
  }, []);

  return (
    <>
      <HeaderHamburg />

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