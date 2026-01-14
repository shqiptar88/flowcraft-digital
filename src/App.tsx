// src/App.tsx
import { Routes, Route } from "react-router-dom";

// Seiten / Komponenten
import Home from "./components/Home";

// Beispiele
import BleachingLandingpageMuenchen from "./pages/beispiele/bleachinglandingpage-muenchen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Beispiele */}
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
            <p className="mt-2 text-slate-600">
              Bitte prüfe die URL oder gehe zurück zur Startseite.
            </p>
          </main>
        }
      />
    </Routes>
  );
}