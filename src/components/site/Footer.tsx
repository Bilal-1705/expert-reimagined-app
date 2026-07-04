import { Link } from "@tanstack/react-router";

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
              de Montpellier — Saint-Georges-d'Orques, Pignan, Montarnaud — et en
              distanciel partout en France.
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
        <div className="pt-12 border-t border-paper/10 grid gap-10 md:grid-cols-4 text-[10px] font-bold uppercase tracking-[0.2em] text-paper/40">
          <div>
            <p className="text-paper/80 mb-3">Adresse</p>
            <address className="not-italic normal-case tracking-normal text-paper/60 font-normal text-sm leading-relaxed">
              29 bis rue du Poumpidou<br />
              34990 Juvignac, Hérault
            </address>
          </div>
          <div>
            <p className="text-paper/80 mb-3">Téléphone</p>
            <p className="normal-case tracking-normal text-paper/60 font-normal text-sm leading-relaxed">
              <a href="tel:+33972540771" className="hover:text-paper transition-colors block">
                09 72 54 07 71
              </a>
              <a href="tel:+33659884080" className="hover:text-paper transition-colors block">
                06 59 88 40 80
              </a>
            </p>
          </div>
          <div>
            <p className="text-paper/80 mb-3">Email</p>
            <a
              href="mailto:cabinet@erkilic.fr"
              className="normal-case tracking-normal text-paper/60 hover:text-paper transition-colors font-normal text-sm break-all"
            >
              cabinet@erkilic.fr
            </a>
          </div>
          <div>
            <p className="text-paper/80 mb-3">Ordre</p>
            <p className="normal-case tracking-normal text-paper/60 font-normal text-sm leading-relaxed">
              Inscrit à l'Ordre des Experts-Comptables de Montpellier
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-paper/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-paper/30">
          <span>© {new Date().getFullYear()} Erkilic Expertise Comptable</span>
          <span>Fondé par Mme Nazifé Erkilic — 23 ans d'expérience</span>
        </div>
      </div>
    </footer>
  );
}
