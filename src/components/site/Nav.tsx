import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoUrl from "@/assets/erkilic-logo.png";

type LinkItem = { to: string; label: string };

const packLinks: LinkItem[] = [
  { to: "/pack/createur", label: "Créateur d'entreprise" },
  { to: "/pack/auto-entrepreneur", label: "Auto-entrepreneur" },
  { to: "/pack/profession-liberale", label: "Profession libérale" },
  { to: "/pack/pro", label: "Artisans / Commerçants / PME" },
  { to: "/pack/particulier", label: "Particulier" },
];

const ressourcesLinks: LinkItem[] = [
  { to: "/guide", label: "Guide de l'expertise comptable" },
  { to: "/conseils", label: "Conseils & analyses" },
  { to: "/faq", label: "FAQ" },
  { to: "/actualites/facturation-electronique-2026", label: "Facture électronique 2026" },
  { to: "/actualites/loi-finances-2026", label: "Loi de Finances 2026" },
  { to: "/actualites/baremes-2026", label: "Barèmes & seuils 2026" },
  { to: "/simulateur-statut", label: "Simulateur : quel statut ?" },
  { to: "/comparatif/cabinet-vs-en-ligne", label: "Cabinet vs 100% en ligne" },
  { to: "/comparatif/dougs-vs-erkilic", label: "Dougs vs Erkilic" },
];

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: LinkItem[];
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);

  const enter = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = window.setTimeout(() => setOpen(false), 140);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={enter}
        onBlur={leave}
        className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full flex items-center gap-1.5"
      >
        {label}
        <span
          className={`inline-block text-[10px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[280px] transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-paper border border-ink/10 shadow-xl rounded-sm py-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-ink/70 hover:text-ink hover:bg-paper-dark/40 transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 group -my-2"
          aria-label="Erkilic Expertise Comptable — accueil"
        >
          <img
            src={logoUrl}
            alt="Logo Erkilic Expertise Comptable"
            width={72}
            height={72}
            className="h-14 w-14 md:h-16 md:w-16 object-contain transition-transform duration-500 group-hover:rotate-3"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-sora font-extrabold text-lg tracking-tight uppercase">
              Erkilic
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-ink/70 mt-0.5">
              Expertise Comptable
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
            activeProps={{ className: "text-ink after:w-full" }}
          >
            Accueil
          </Link>
          <Link
            to="/cabinet"
            className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
            activeProps={{ className: "text-ink after:w-full" }}
          >
            Cabinet
          </Link>
          <Link
            to="/services"
            className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
            activeProps={{ className: "text-ink after:w-full" }}
          >
            Prestations
          </Link>
          <DesktopDropdown label="Pour qui ?" items={packLinks} />
          <DesktopDropdown label="Ressources" items={ressourcesLinks} />
          <Link
            to="/contact"
            className="relative py-1 hover:text-ink/60 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
            activeProps={{ className: "text-ink after:w-full" }}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-1 px-5 py-2.5 bg-ink text-paper rounded-full hover:bg-ink-muted transition-colors"
          >
            Devis Gratuit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2"
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-4 h-px bg-ink ml-auto" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col text-[12px] font-bold uppercase tracking-widest">
            {[
              { to: "/", label: "Accueil" },
              { to: "/cabinet", label: "Cabinet" },
              { to: "/services", label: "Prestations" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-ink/5"
              >
                {l.label}
              </Link>
            ))}

            <details className="py-2 border-b border-ink/5">
              <summary className="py-1 list-none cursor-pointer flex justify-between items-center">
                Pour qui ? <span className="text-ink/60">+</span>
              </summary>
              <div className="mt-2 pl-3 flex flex-col gap-1 text-[11px] tracking-wider text-ink/70">
                {packLinks.map((l) => (
                  <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2">
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="py-2 border-b border-ink/5">
              <summary className="py-1 list-none cursor-pointer flex justify-between items-center">
                Ressources <span className="text-ink/60">+</span>
              </summary>
              <div className="mt-2 pl-3 flex flex-col gap-1 text-[11px] tracking-wider text-ink/70">
                {ressourcesLinks.map((l) => (
                  <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2">
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-5 py-3 bg-ink text-paper rounded-full text-center"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
