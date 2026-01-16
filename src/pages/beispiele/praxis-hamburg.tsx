// src/pages/beispiele/praxis-hamburg.tsx
import { useEffect } from "react";
import IndexHamburg from "@/components/Demos/PraxisHamburg/IndexHamburg";

export default function PraxisHamburgPage() {
  // ✅ Fix: Seite startet IMMER oben
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <IndexHamburg />
    </main>
  );
}