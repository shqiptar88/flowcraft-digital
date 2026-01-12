// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";
import VerticalPage from "./pages/VerticalPage";

// Cases
import CasePage from "./pages/cases/CasePage";
import CaseBleachingLandingpage from "./pages/cases/CaseBleaching-Landingpage";
import CasePraxisHamburg from "./pages/cases/CasePraxis-Hamburg";
import CaseLokalerDienstleister from "./pages/cases/CaseLokalerDienstleister";

export default function App() {
  return (
    <Routes>
      {/* Hauptseiten */}
      <Route path="/" element={<Index />} />
      <Route path="/angebot" element={<Offer />} />

      {/* Cases */}
      <Route path="/cases" element={<CasePage />} />
      <Route path="/cases/bleaching-landingpage" element={<CaseBleachingLandingpage />} />
      <Route path="/cases/praxis-hamburg" element={<CasePraxisHamburg />} />
      <Route path="/cases/lokaler-dienstleister" element={<CaseLokalerDienstleister />} />

      {/* Vertical System (dein echtes System) */}
      <Route path="/vertical" element={<VerticalPage />} />

      {/* Shortcuts (nice UX) */}
      <Route path="/dental" element={<Navigate to="/vertical?v=dental" replace />} />
      <Route path="/coach" element={<Navigate to="/vertical?v=coach" replace />} />
      <Route path="/trade" element={<Navigate to="/vertical?v=trade" replace />} />
      <Route path="/lux" element={<Navigate to="/vertical?v=lux" replace />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}