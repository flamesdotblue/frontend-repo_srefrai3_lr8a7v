export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-purple-100/70">
            © {new Date().getFullYear()} Aura Parfums. All rights reserved.
          </p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#collections" className="text-purple-100/80 hover:text-white">
              Collection
            </a>
            <a href="#story" className="text-purple-100/80 hover:text-white">
              Story
            </a>
            <a href="#" className="text-purple-100/80 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
