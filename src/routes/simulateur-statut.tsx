import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const SITE = "https://erkilic.fr";
const PATH = "/simulateur-statut";

type Answers = {
  ca: "" | "under-30" | "30-77" | "77-180" | "over-180";
  alone: "" | "yes" | "no";
  dividendes: "" | "yes" | "no" | "unsure";
  chomage: "" | "yes" | "no";
  activite: "" | "commerce" | "service" | "liberal" | "immo";
};

function recommend(a: Answers): { statut: string; why: string[]; cta: string } | null {
  if (!a.ca || !a.alone || !a.dividendes || !a.chomage || !a.activite) return null;

  if (a.activite === "immo") {
    return {
      statut: "SCI (à l'IR ou à l'IS)",
      why: [
        "Vous investissez dans l'immobilier : l'entreprise commerciale n'est pas la bonne enveloppe.",
        "SCI à l'IR : transparence fiscale, revenus fonciers, simple pour du locatif nu.",
        "SCI à l'IS : amortissement du bien, réservé aux stratégies patrimoniales long terme.",
        "Alternative LMNP au réel si location meublée — le cabinet Erkilic Expertise Comptable compare les deux.",
      ],
      cta: "Comparer SCI et LMNP sur mon projet",
    };
  }

  if (a.ca === "under-30" && a.alone === "yes" && a.dividendes !== "yes") {
    return {
      statut: "Micro-entreprise (EI)",
      why: [
        "Chiffre d'affaires modeste, activité solo, pas de logique dividendes.",
        "Formalités ultra-simplifiées, cotisations proportionnelles au CA.",
        "Pas de TVA sous les seuils de franchise.",
        "À rebasculer en société dès que les charges deviennent significatives.",
      ],
      cta: "Sécuriser ma micro-entreprise",
    };
  }

  if (a.chomage === "yes" && a.alone === "yes") {
    return {
      statut: "SASU",
      why: [
        "Vous êtes en ARE (France Travail) : la SASU permet une rémunération nulle (zéro cotisation) pour préserver l'allocation.",
        "Vous pouvez vous verser des dividendes soumis uniquement à la flat tax 31,4 %.",
        "Le régime assimilé salarié offre une meilleure couverture qu'une EURL.",
        "Transformation facile en SAS si un associé rejoint le projet.",
      ],
      cta: "Cadrer ma création en SASU",
    };
  }

  if (a.dividendes === "yes" && a.alone === "yes") {
    return {
      statut: "SASU",
      why: [
        "Vous prévoyez de vous verser des dividendes : la SASU est le véhicule le plus favorable.",
        "Dividendes = flat tax 31,4 % uniquement, aucune cotisation TNS.",
        "Statut assimilé salarié : couverture santé et retraite du régime général.",
        "Adapté aux consultants et prestataires à forte marge.",
      ],
      cta: "Simuler ma SASU",
    };
  }

  if (a.alone === "yes" && (a.dividendes === "no" || a.dividendes === "unsure")) {
    return {
      statut: "EURL à l'IS",
      why: [
        "Activité solo, pas de logique dividendes forte : l'EURL au régime TNS coûte moins cher en cotisations.",
        "Option IS pour lisser la fiscalité et rémunérer selon vos besoins.",
        "Cotisations SSI ≈ 40-45 % vs 75-80 % en SASU — écart significatif à revenu régulier.",
        "Prévoyance et PER recommandés pour compléter la couverture TNS.",
      ],
      cta: "Comparer EURL et SASU sur mes chiffres",
    };
  }

  return {
    statut: "SARL ou SAS (à plusieurs associés)",
    why: [
      "Vous n'êtes pas seul : la question devient SARL (gérant TNS majoritaire) vs SAS (président assimilé salarié).",
      "SARL : cotisations plus faibles, cadre plus rigide, adaptée aux TPE familiales.",
      "SAS : très flexible, statuts sur-mesure, bien pour lever des fonds ou faire entrer des associés.",
      "L'arbitrage se fait sur la répartition du capital et la stratégie de rémunération.",
    ],
    cta: "Structurer notre société à plusieurs",
  };
}

function Choice<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T | "";
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <fieldset className="border-t border-ink/10 pt-6">
      <legend className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-4 block">
        {label}
      </legend>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              type="button"
              key={o.value}
              onClick={() => onChange(o.value)}
              className={`text-left px-4 py-3 border transition-all ${
                active
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-ink border-ink/15 hover:border-ink/40"
              }`}
            >
              <span className="text-[14px] font-semibold">{o.label}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Simulator() {
  const [a, setA] = useState<Answers>({
    ca: "",
    alone: "",
    dividendes: "",
    chomage: "",
    activite: "",
  });
  const result = useMemo(() => recommend(a), [a]);

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section className="pt-16 md:pt-24 pb-14 md:pb-20 px-6 border-b border-ink/5">
          <div className="max-w-4xl mx-auto">
            <nav
              aria-label="fil d'ariane"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-8 flex flex-wrap gap-2"
            >
              <Link to="/" className="hover:text-ink transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <span>Simulateur : quel statut ?</span>
            </nav>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50 mb-6 block">
              Simulateur · 2 minutes
            </span>
            <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-balance">
              Quel statut{" "}
              <span className="text-ink/25 italic font-normal">
                pour votre projet&nbsp;?
              </span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Répondez à 5 questions pour obtenir une première orientation :
              micro-entreprise, EURL, SASU, SARL, SAS, SCI ou LMNP. Cette
              recommandation est indicative — le cabinet Erkilic Expertise Comptable établit ensuite
              un comparatif chiffré sur vos revenus prévisionnels avant
              immatriculation.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto grid gap-8">
            <Choice
              label="1. Quel chiffre d'affaires annuel prévu ?"
              value={a.ca}
              onChange={(v) => setA({ ...a, ca: v })}
              options={[
                { value: "under-30", label: "Moins de 30 000 €" },
                { value: "30-77", label: "30 000 à 77 000 €" },
                { value: "77-180", label: "77 000 à 180 000 €" },
                { value: "over-180", label: "Plus de 180 000 €" },
              ]}
            />
            <Choice
              label="2. Vous démarrez seul ?"
              value={a.alone}
              onChange={(v) => setA({ ...a, alone: v })}
              options={[
                { value: "yes", label: "Oui, seul dirigeant" },
                { value: "no", label: "Non, avec au moins un associé" },
              ]}
            />
            <Choice
              label="3. Prévoyez-vous de vous verser des dividendes ?"
              value={a.dividendes}
              onChange={(v) => setA({ ...a, dividendes: v })}
              options={[
                { value: "yes", label: "Oui, stratégie dividendes" },
                { value: "no", label: "Non, tout en rémunération" },
                { value: "unsure", label: "Je ne sais pas encore" },
              ]}
            />
            <Choice
              label="4. Êtes-vous actuellement demandeur d'emploi (ARE) ?"
              value={a.chomage}
              onChange={(v) => setA({ ...a, chomage: v })}
              options={[
                { value: "yes", label: "Oui, je perçois l'ARE" },
                { value: "no", label: "Non" },
              ]}
            />
            <Choice
              label="5. Quel type d'activité ?"
              value={a.activite}
              onChange={(v) => setA({ ...a, activite: v })}
              options={[
                { value: "commerce", label: "Commerce / vente de biens" },
                { value: "service", label: "Prestations de services" },
                { value: "liberal", label: "Profession libérale" },
                { value: "immo", label: "Investissement immobilier" },
              ]}
            />

            {result && (
              <div className="mt-6 border border-ink bg-ink text-paper p-8 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/60 block mb-3">
                  Recommandation
                </span>
                <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                  {result.statut}
                </h2>
                <ul className="space-y-2 mb-8">
                  {result.why.map((w) => (
                    <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-paper/85">
                      <span className="mt-2 h-1 w-4 bg-paper shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-all inline-flex items-center gap-3"
                >
                  {result.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <p className="mt-6 text-xs text-paper/50 leading-relaxed">
                  Résultat indicatif. Un comparatif chiffré personnalisé (24 mois,
                  intégrant votre foyer fiscal, votre couverture actuelle et vos
                  projets) est établi lors du rendez-vous de cadrage.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/simulateur-statut")({
  head: () => ({
    meta: [
      { title: "Simulateur : quel statut juridique choisir ? | Erkilic" },
      {
        name: "description",
        content:
          "5 questions pour identifier le bon statut : micro, EURL, SASU, SARL, SAS, SCI ou LMNP. Puis un comparatif chiffré avec le cabinet Erkilic Expertise Comptable.",
      },
      { property: "og:title", content: "Quel statut juridique choisir ?" },
      { property: "og:description", content: "Simulateur gratuit — 5 questions pour une première orientation." },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
  }),
  component: Simulator,
});
