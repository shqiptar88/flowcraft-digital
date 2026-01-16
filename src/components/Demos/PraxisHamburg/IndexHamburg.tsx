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
    document.title = "Zahnarztpraxis Hamburg-Eppendorf | Demo";
    // damit du beim Aufruf IMMER oben startest
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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