// src/App.tsx

import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import BleachingLandingpageMuenchen from "@/pages/beispiele/bleachinglandingpage-muenchen";
import PraxisHamburgPage from "@/pages/beispiele/praxis-hamburg";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* bestehend */}
      <Route
        path="/beispiele/bleachinglandingpage-muenchen"
        element={<BleachingLandingpageMuenchen />}
      />

      {/* NEU – Praxis Hamburg */}
      <Route
        path="/beispiele/praxis-hamburg"
        element={<PraxisHamburgPage />}
      />
    </Routes>
  );
}