import React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionShell({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}