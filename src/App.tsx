// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PraxisHamburgPage from "./pages/beispiele/praxis-hamburg";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<Home />} />

        {/* ✅ HAMBURG – DAS IST DIE ENTSCHEIDENDE ROUTE */}
        <Route
          path="/beispiele/praxis-hamburg"
          element={<PraxisHamburgPage />}
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}