import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <h2 className="font-sora text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Prêt à<br />avancer ?
          </h2>
          <div className="flex flex-col justify-end items-start">
            <p className="text-paper/60 mb-8 max-w-sm">
              Basé à Juvignac, nous intervenons sur toute la région de Montpellier
              et en distanciel.
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
        <div className="pt-12 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-paper/40">
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-paper/80 mb-2">Adresse</p>
              <p className="normal-case tracking-normal text-paper/50">
                Juvignac, 34990, Hérault
              </p>
            </div>
            <div>
              <p className="text-paper/80 mb-2">Contact</p>
              <p className="normal-case tracking-normal text-paper/50">
                contact@erkilic.fr
              </p>
            </div>
            <div>
              <p className="text-paper/80 mb-2">Ordre</p>
              <p className="normal-case tracking-normal text-paper/50">
                Inscrit à l'Ordre des Experts-Comptables
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-end">
            <span>©2024 ERKILIC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
