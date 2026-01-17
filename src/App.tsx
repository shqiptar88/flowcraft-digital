// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home"; // oder dein Home-Entry, je nach Projekt
import BleachingLandingpageMuenchen from "@/pages/beispiele/bleachinglandingpage-muenchen";
import PraxisHamburgPage from "@/pages/beispiele/praxis-hamburg";

function RouteTest123() {
  return (
    <div style={{ padding: 40 }}>
      <h1>ROUTE TEST 123 OK</h1>
      <p>Wenn du das siehst, ist Routing korrekt.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Start */}
        <Route path="/" element={<Home />} />

        {/* Beispiele */}
        <Route
          path="/beispiele/bleachinglandingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />
        <Route path="/beispiele/praxis-hamburg" element={<PraxisHamburgPage />} />

        {/* Test */}
        <Route path="/route-test-123" element={<RouteTest123 />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}