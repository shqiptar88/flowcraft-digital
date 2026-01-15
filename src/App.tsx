// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import BleachingLandingpageMuenchen from "./pages/beispiele/bleachinglandingpage-muenchen";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beispiele/bleachinglandingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />
      </Routes>
    </BrowserRouter>
  );
}