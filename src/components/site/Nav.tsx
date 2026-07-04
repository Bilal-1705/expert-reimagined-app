import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/erkilic-logo.png.asset.json";

const navLinks = [
  { to: "/cabinet", label: "Cabinet" },
  { to: "/services", label: "Expertise" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "border-b border-ink/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Erkilic Expertise Comptable — accueil">
          <img
            src={logoAsset.url}
            alt="Logo Erkilic Expertise Comptable"
            width={56}
            height={56}
            className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-3"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-sora font-extrabold text-lg tracking-tight uppercase">Erkilic</span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-ink/50 mt-0.5">
              Expertise Comptable
            </span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
              activeProps={{ className: "text-ink/40" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-ink text-paper rounded-full hover:bg-ink-muted transition-colors"
          >
            Devis Gratuit
          </Link>
        </div>
        <Link
          to="/contact"
          className="md:hidden px-4 py-2 bg-ink text-paper text-[10px] font-bold uppercase tracking-widest rounded-full"
        >
          Devis
        </Link>
      </div>
    </nav>
  );
}
