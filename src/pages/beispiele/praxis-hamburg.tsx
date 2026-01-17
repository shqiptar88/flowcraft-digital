import { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

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
  useEffect(() => {
    document.title = "Zahnarztpraxis Hamburg-Eppendorf | Demo";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ErrorBoundary name="HeaderHamburg"><HeaderHamburg /></ErrorBoundary>

      <main>
        <ErrorBoundary name="HeroHamburg"><HeroHamburg /></ErrorBoundary>
        <ErrorBoundary name="USPCardsHamburg"><USPCardsHamburg /></ErrorBoundary>
        <ErrorBoundary name="ServicesHamburg"><ServicesHamburg /></ErrorBoundary>
        <ErrorBoundary name="ProcessHamburg"><ProcessHamburg /></ErrorBoundary>
        <ErrorBoundary name="TeamHamburg"><TeamHamburg /></ErrorBoundary>
        <ErrorBoundary name="ReviewsHamburg"><ReviewsHamburg /></ErrorBoundary>
        <ErrorBoundary name="FAQHamburg"><FAQHamburg /></ErrorBoundary>
        <ErrorBoundary name="ContactHamburg"><ContactHamburg /></ErrorBoundary>
      </main>

      <ErrorBoundary name="FooterHamburg"><FooterHamburg /></ErrorBoundary>
    </>
  );
}