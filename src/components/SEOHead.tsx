// src/components/SEOHead.tsx
import { useEffect } from "react";

type SEOHeadProps = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export default function SEOHead({ title, description, noIndex }: SEOHeadProps) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    if (noIndex) {
      let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex,nofollow";
    }
  }, [title, description, noIndex]);

  return null;
}