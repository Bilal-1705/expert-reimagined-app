import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/cabinet", label: "Cabinet" },
  { to: "/services", label: "Expertise" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-sora font-extrabold text-2xl tracking-tighter uppercase">
            Erkilic
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
            Expertise
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-ink/60 transition-colors"
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
      </div>
    </nav>
  );
}
