// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// bestehende Seiten
import Home from "./components/Home";

// Beispiel-Seiten
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

        {/* Fallback */}
        <Route
          path="*"
          element={
            <main className="mx-auto max-w-4xl px-6 py-24">
              <h1 className="text-2xl font-semibold">Seite nicht gefunden</h1>
              <p className="mt-2 text-muted-foreground">
                Die Route existiert nicht (oder wurde nicht in App.tsx verdrahtet).
              </p>
              <a className="mt-6 inline-block underline" href="/">
                Zur Startseite
              </a>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}