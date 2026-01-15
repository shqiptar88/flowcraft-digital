// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sofort hart nach oben (robust gegen "mittig bleiben")
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Optionaler Fallback für manche Browser/Layouts:
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}