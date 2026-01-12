export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* LEFT: Logo (muss links bleiben) */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="relative inline-block font-serif font-semibold">
  FlowCraft
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-500" />
</span>
          </div>

          {/* CENTER/RIGHT: Links */}
          <nav className="flex gap-10 text-slate-200/80">
            <a className="hover:text-teal-300 transition-colors" href="#kontakt">
              Kontakt
            </a>
            <a className="hover:text-teal-300 transition-colors" href="/impressum">
              Impressum
            </a>
            <a className="hover:text-teal-300 transition-colors" href="/datenschutz">
              Datenschutz
            </a>
          </nav>
        </div>

        <div className="mt-6 text-sm text-slate-200/60">
          © {new Date().getFullYear()} FlowCraft
        </div>
      </div>
    </footer>
  );
}