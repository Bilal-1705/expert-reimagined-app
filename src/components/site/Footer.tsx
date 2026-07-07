import { Link } from "@tanstack/react-router";
import ordreLogo from "@/assets/ordre-experts-comptables.png";

const packLinks = [
  { to: "/pack/createur", label: "Créateur d'entreprise" },
  { to: "/pack/auto-entrepreneur", label: "Auto-entrepreneur" },
  { to: "/pack/profession-liberale", label: "Profession libérale" },
  { to: "/pack/pro", label: "Artisans / Commerçants / PME" },
  { to: "/pack/particulier", label: "Particulier" },
] as const;

const sectorLinks = [
  { to: "/secteur/artisans-commercants", label: "Artisans & commerçants" },
  { to: "/secteur/professions-liberales-medicales", label: "Professions libérales & médicales" },
  { to: "/secteur/immobilier-lmnp-sci", label: "Immobilier — LMNP & SCI" },
] as const;

const comparatorLinks = [
  { to: "/comparatif/indy-vs-erkilic", label: "Indy vs Erkilic" },
  { to: "/comparatif/pennylane-vs-erkilic", label: "Pennylane vs Erkilic" },
  { to: "/comparatif/keobiz-vs-erkilic", label: "Keobiz vs Erkilic" },
] as const;

const zoneLinks = [
  { to: "/zone/saint-georges-dorques", label: "Saint-Georges-d'Orques" },
  { to: "/zone/grabels", label: "Grabels" },
  { to: "/zone/celleneuve-mosson", label: "Celleneuve / La Mosson" },
] as const;

const creationLinks = [
  { to: "/creation-entreprise/aides-locales-montpellier", label: "Aides locales Montpellier" },
  { to: "/creation-entreprise/sasu-eurl-ei", label: "SASU, EURL, EI : quel statut ?" },
] as const;

const editorialLinks = [
  { to: "/a-propos", label: "À propos" },
  { to: "/guide", label: "Guide de l'expertise comptable" },
  { to: "/conseils", label: "Conseils & analyses" },
  { to: "/faq", label: "FAQ" },
] as const;

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <details className="md:open:block group" open>
      <summary className="list-none flex items-center justify-between md:cursor-default md:pointer-events-none">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/80 mb-4">
          {title}
        </p>
        <span className="md:hidden text-paper/50 text-lg group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-paper/60 hover:text-paper transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <h2 className="font-sora text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Prêt à<br />avancer&nbsp;?
          </h2>
          <div className="flex flex-col justify-end items-start">
            <p className="text-paper/60 mb-8 max-w-sm leading-relaxed">
              Basé à Juvignac, le cabinet Erkilic intervient sur toute la région
              de Montpellier — Saint-Georges-d'Orques, Grabels, Celleneuve, La
              Mosson, Pignan, Montarnaud — et en distanciel partout en France.
            </p>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-all inline-flex items-center gap-3"
            >
              Demander un devis gratuit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-paper/10 grid gap-10 md:grid-cols-3 lg:grid-cols-6 mb-16">
          <Column title="Packs" links={packLinks} />
          <Column title="Secteurs" links={sectorLinks} />
          <Column title="Création d'entreprise" links={creationLinks} />
          <Column title="Comparatifs" links={comparatorLinks} />
          <Column title="Zones d'intervention" links={zoneLinks} />
          <div className="space-y-8">
            <Column title="Ressources" links={editorialLinks} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/80 mb-4">
                Navigation
              </p>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link to="/" className="hover:text-paper transition-colors">Accueil</Link></li>
                <li><Link to="/cabinet" className="hover:text-paper transition-colors">Le cabinet</Link></li>
                <li><Link to="/services" className="hover:text-paper transition-colors">Prestations</Link></li>
                <li><Link to="/contact" className="hover:text-paper transition-colors">Contact & devis</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-paper/10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/80 mb-4">
              Contact
            </p>
            <address className="not-italic text-sm text-paper/60 leading-relaxed">
              29 bis rue du Poumpidou<br />
              34990 Juvignac, Hérault<br />
              <a href="tel:+33972540771" className="hover:text-paper transition-colors block mt-3">
                09 72 54 07 71
              </a>
              <a href="tel:+33659884080" className="hover:text-paper transition-colors block">
                06 59 88 40 80
              </a>
              <a href="mailto:cabinet@erkilic.fr" className="hover:text-paper transition-colors block mt-1 break-all">
                cabinet@erkilic.fr
              </a>
            </address>
          </div>
          <p className="text-xs text-paper/50 leading-relaxed md:text-right">
            Cabinet inscrit à l'Ordre des Experts-Comptables de Montpellier.
            Nous engageons notre responsabilité civile professionnelle sur
            chaque mission — une garantie que les logiciels de comptabilité
            en ligne ne peuvent pas offrir.
          </p>
        </div>

        <div className="pt-8 mt-8 border-t border-paper/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/30 space-y-2">
            <p>© {new Date().getFullYear()} Erkilic Expertise Comptable</p>
            <p>Fondé par Mme Nazifé Erkilic — 23 ans d'expérience</p>
          </div>
          <a
            href="https://www.experts-comptables.fr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cabinet inscrit à l'Ordre des Experts-Comptables"
            className="flex items-center gap-3 bg-paper/5 hover:bg-paper/10 transition-colors px-4 py-3 rounded"
          >
            <img
              src={ordreLogo}
              alt="Ordre des Experts-Comptables — cabinet inscrit"
              width={120}
              height={44}
              className="h-11 w-auto object-contain"
              loading="lazy"
            />
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] text-paper/50 max-w-[8rem] leading-tight">
              Cabinet inscrit à l'Ordre
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
