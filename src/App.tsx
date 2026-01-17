// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
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
        <Route path="/" element={<Home />} />

        <Route
          path="/beispiele/bleachinglandingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />
        <Route path="/beispiele/praxis-hamburg" element={<PraxisHamburgPage />} />

        <Route path="/route-test-123" element={<RouteTest123 />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}