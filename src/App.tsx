// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import PraxisHamburgPage from "@/pages/beispiele/praxis-hamburg";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/beispiele/praxis-hamburg"
        element={<PraxisHamburgPage />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}