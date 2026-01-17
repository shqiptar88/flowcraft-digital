// src/pages/beispiele/praxis-hamburg.tsx
import { useEffect } from "react";
import IndexHamburg from "@/components/Demos/PraxisHamburg/IndexHamburg";

export default function PraxisHamburgPage() {
  useEffect(() => {
    document.title = "Zahnarztpraxis Hamburg-Eppendorf | Demo";
  }, []);

  return <IndexHamburg />;
}