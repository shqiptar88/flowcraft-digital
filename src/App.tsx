import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import BleachingLandingpageMuenchen from "./pages/beispiele/bleachinglandingpage-muenchen";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll-Reset bei jedem Seitenwechsel */}
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

export default App;