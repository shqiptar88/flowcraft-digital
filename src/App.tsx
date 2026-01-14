import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// WICHTIG: Bei dir liegt Home unter src/components/Home.tsx (siehe Screenshot)
import Home from "./components/Home";

// Deine Subpage (Pfad bitte exakt wie Datei/Export bei dir)
import BleachingLandingpageMuenchen from "./pages/beispiele/bleachinglandingpage-muenchen";

// Optional: kleines Fallback, damit du nie wieder “weiße Seite” ohne Hinweis hast
function NotFound() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Seite nicht gefunden</h1>
      <p>Bitte prüfe die URL.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scrollt bei jedem echten Route-Wechsel nach ganz oben */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/beispiele/bleachinglandingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}