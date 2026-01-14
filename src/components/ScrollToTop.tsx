import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Falls ein Hash in der URL ist (#kontakt usw.), entferne ihn,
    // damit der Browser nicht automatisch zu einem Anchor springt.
    if (hash) {
      window.history.replaceState(null, "", pathname + search);
    }

    // Hart nach oben
    window.scrollTo(0, 0);

    // Nachsetzen, falls ein Element später Fokus bekommt/scrollt
    requestAnimationFrame(() => window.scrollTo(0, 0));
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, [pathname, search, hash]);

  return null;
}