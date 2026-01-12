// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Seite nicht gefunden</h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>
        Die Route existiert nicht (oder wurde nicht in App.tsx verdrahtet).
      </p>
      <Link to="/" style={{ textDecoration: "underline" }}>
        Zur Startseite
      </Link>
    </div>
  );
}