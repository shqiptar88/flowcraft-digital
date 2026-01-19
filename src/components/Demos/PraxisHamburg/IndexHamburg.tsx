import React from "react";

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

const HEADER_OFFSET_PX = 96;

export default function IndexHamburg() {
  return (
    <>
      <HeaderHamburg />

      {/* Spacer für fixed Header */}
      <div style={{ height: HEADER_OFFSET_PX }} />

      {/* DEBUG (kannst du später entfernen) */}
      <div style={{ background: "yellow", padding: 12, fontWeight: 700 }}>
        DEBUG: IndexHamburg wird gerendert (Deploy ist aktuell).
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