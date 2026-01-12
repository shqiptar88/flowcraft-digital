// src/templates/types.ts
import type { SectionKey } from "./sections/types";

export type SectionInstance<K extends SectionKey = SectionKey> = {
  key: K;
  props?: Record<string, unknown>;
};

export type LayoutDef = {
  id: LayoutId;
  name: string;
  sections: SectionInstance[];
};

export type LayoutId = "leadOnepager" | "multiPageLight";