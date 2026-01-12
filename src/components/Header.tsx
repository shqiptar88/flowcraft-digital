"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Optional: Scroll-Lock wenn Mobile-Menü offen ist (macht UX sauber)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* LEFT: Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="relative inline-block font-serif font-semibold">
  FlowCraft
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-500" />
</span>
          </a>

          {/* CENTER: Desktop Navigation (zentriert) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm text-slate-600">
            <a className="hover:text-teal-700 transition-colors" href="#zielgruppe">
              Zielgruppe
            </a>
            <a className="hover:text-teal-700 transition-colors" href="#leistungen">
              Leistungen
            </a>
            <a className="hover:text-teal-700 transition-colors" href="#ablauf">
              Ablauf
            </a>
            <a className="hover:text-teal-700 transition-colors" href="#projekte">
              Projekte
            </a>
            <a className="hover:text-teal-700 transition-colors" href="#faq">
              FAQ
            </a>
          </nav>

          {/* RIGHT: Mobile Burger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 shadow-sm"
            >
              <span className="block h-0.5 w-5 bg-slate-700 mb-1" />
              <span className="block h-0.5 w-5 bg-slate-700 mb-1" />
              <span className="block h-0.5 w-5 bg-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <nav className="flex flex-col items-end gap-4 text-[17px] text-slate-800">
              <a onClick={close} className="block hover:text-teal-700 transition-colors" href="#zielgruppe">
                Zielgruppe
              </a>
              <a onClick={close} className="block hover:text-teal-700 transition-colors" href="#leistungen">
                Leistungen
              </a>
              <a onClick={close} className="block hover:text-teal-700 transition-colors" href="#ablauf">
                Ablauf
              </a>
              <a onClick={close} className="block hover:text-teal-700 transition-colors" href="#projekte">
                Projekte
              </a>
              <a onClick={close} className="block hover:text-teal-700 transition-colors" href="#faq">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
