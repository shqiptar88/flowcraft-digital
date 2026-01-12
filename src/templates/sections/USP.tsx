// src/templates/sections/USP.tsx
import React from "react";

type USPItem = {
  title: string;
  text: string;
};

type USPProps = {
  items?: USPItem[];
};

export default function USP(props: USPProps) {
  const items = props?.items ?? [];

  if (items.length === 0) return null;

  return (
    <section>
      <div className="usp-grid">
        {items.map((item, idx) => (
          <div key={idx} className="usp-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}