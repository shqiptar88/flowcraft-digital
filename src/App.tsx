import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// bestehende Seiten
import Home from "./components/Home";

// Beispiele / Referenzen (DEMO)
import BleachingLandingpageMuenchen from "./pages/beispiele/bleachinglandingpage-muenchen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<Home />} />

        {/* Beispiele / Referenzen */}
        <Route
          path="/beispiele/bleachinglandingpage-muenchen"
          element={<BleachingLandingpageMuenchen />}
        />

        {/* Optional: alter Link / Alias, falls du irgendwo "bleaching-muenchen" verlinkt hast */}
        <Route
          path="/beispiele/bleaching-muenchen"
          element={<Navigate to="/beispiele/bleachinglandingpage-muenchen" replace />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <main className="mx-auto max-w-4xl px-6 py-24">
              <h1 className="text-2xl font-semibold">Seite nicht gefunden</h1>
              <p className="mt-2 text-muted-foreground">
                Die Route existiert nicht.
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}