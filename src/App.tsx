import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Index";
import BleachingLandingpageMuenchen from "@/pages/beispiele/bleachinglandingpage-muenchen";
import PraxisHamburgPage from "@/pages/beispiele/praxis-hamburg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* bestehende Demo */}
        <Route
          path="/beispiele/bleaching-landingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />

        {/* 🔥 DAS FEHLTE */}
        <Route
          path="/beispiele/praxis-hamburg"
          element={<PraxisHamburgPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;