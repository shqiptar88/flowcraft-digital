// src/templates/HybridTemplate.tsx
import React from "react";
import { layouts } from "./layout";
import { registry } from "./sections/registry";
import type { LayoutId } from "./types";
import type { SectionKey } from "./sections/types";

type Props = {
  layoutId: LayoutId;
  sectionOverrides?: Partial<Record<SectionKey, Record<string, unknown>>>;
};

export default function HybridTemplate({ layoutId, sectionOverrides = {} }: Props) {
  const layout = layouts[layoutId];

  if (!layout) {
    console.error("[HybridTemplate] Unknown layout:", layoutId);
    return null;
  }

  return (
    <div>
      {layout.sections.map((instance, idx) => {
        const key = instance.key as SectionKey;
        const def = registry[key];

        if (!def) {
          console.warn("[HybridTemplate] Missing registry entry for", key);
          return null;
        }

        const SectionComp = def.component;

        const mergedProps = {
          ...(def.defaultProps ?? {}),
          ...(instance.props ?? {}),
          ...(sectionOverrides[key] ?? {}),
        };

        return <SectionComp key={`${key}-${idx}`} {...mergedProps} />;
      })}
    </div>
  );
}