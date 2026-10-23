import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AuthorBox, RelatedLinks, breadcrumbJsonLd } from "@/components/site/Editorial";
import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/simulateur-statut";
const UPDATED = "2026-10-23";

/*
 * Taux 2026 utilisés pour le comparateur (ordres de grandeur, à revoir chaque année) :
 * - micro : 12,3 % (vente), 21,2 % (prestations BIC), 26,1 % (BNC SSI, depuis le 1er juillet 2026)
 * - plafonds micro 2026-2028 : 203 100 € (vente) et 83 600 € (services et BNC)
 * - TNS (gérant d'EURL) : cotisations d'environ 45 % de la rémunération nette
 * - assimilé salarié (président de SASU) : coût total d'environ 1,82 fois le salaire net
 * - IS : 15 % jusqu'à 42 500 € de bénéfice, 25 % au-delà ; PFU 31,4 % sur les dividendes en 2026
 */
const MICRO = {
  commerce: { rate: 0.123, ceiling: 203100 },
  service: { rate: 0.212, ceiling: 83600 },
  liberal: { rate: 0.261, ceiling: 83600 },
} as const;
const TNS_RATIO = 0.45;
const SALARY_COST_RATIO = 1.82;
const PFU = 0.314;

type Activity = keyof typeof MICRO;

function corporateTax(profit: number) {
  if (profit <= 0) return 0;
  return Math.min(profit, 42500) * 0.15 + Math.max(0, profit - 42500) * 0.25;
}

export function compareStatuses(turnover: number, expenses: number, activity: Activity) {
  const profit = Math.max(0, turnover - expenses);
  const micro = MICRO[activity];
  const microNet = turnover <= micro.ceiling ? turnover - turnover * micro.rate - expenses : null;
  const eurl = profit / (1 + TNS_RATIO);
  const sasuSalary = profit / SALARY_COST_RATIO;
  const sasuDividends = (profit - corporateTax(profit)) * (1 - PFU);
  return [
    {
      label: "Micro-entreprise",
      net: microNet,
      note:
        microNet === null
          ? `Hors plafond micro (${micro.ceiling.toLocaleString("fr-FR")} €)`
          : `Cotisations de ${(micro.rate * 100).toLocaleString("fr-FR")} % du chiffre d'affaires, avant impôt sur le revenu`,
    },
    {
      label: "EURL, tout en rémunération",
      net: eurl,
      note: "Gérant TNS, cotisations d'environ 45 % du net, avant impôt sur le revenu",
    },
    {
      label: "SASU, tout en salaire",
      net: sasuSalary,
      note: "Président assimilé salarié, avant impôt sur le revenu",
    },
    {
      label: "SASU, zéro salaire et dividendes",
      net: sasuDividends,
      note: "Après IS et PFU de 31,4 %, mais sans retraite ni protection sociale",
    },
  ];
}

const faq = [
  {
    q: "Ce simulateur de statut juridique est-il fiable ?",
    a: "Il donne un ordre de grandeur à partir des taux 2026 (cotisations, IS, prélèvement forfaitaire unique). Il ne tient pas compte de votre foyer fiscal, de l'ACRE, des frais réels du dirigeant ni d'un mix salaire et dividendes, qui est souvent la meilleure option. Utilisez-le pour trier les pistes, puis faites chiffrer votre cas précis.",
  },
  {
    q: "Pourquoi la SASU en dividendes paraît-elle toujours gagnante ?",
    a: "Parce que les dividendes ne supportent pas de cotisations sociales. En contrepartie, vous ne validez aucun trimestre de retraite et vous n'avez ni indemnités journalières ni prévoyance. Beaucoup de dirigeants combinent un petit salaire pour la protection sociale et des dividendes pour le reste.",
  },
  {
    q: "Quand la micro-entreprise reste-t-elle intéressante ?",
    a: "Quand vos charges réelles sont faibles par rapport au chiffre d'affaires et que vous restez sous les plafonds 2026 (83 600 € pour les services et les professions libérales, 203 100 € pour la vente). Dès que vos frais montent, le régime réel en EI, EURL ou SASU devient plus intéressant, car la micro ne déduit pas vos charges réelles.",
  },
  {
    q: "Quel statut choisir si je touche l'ARE de France Travail ?",
    a: "La SASU sans salaire permet souvent de garder l'allocation en démarrant. Une EURL dont le gérant ne se rémunère pas le permet aussi, avec des nuances quand l'EURL est à l'impôt sur le revenu. Vérifiez votre situation avec France Travail et faites-vous accompagner avant d'immatriculer.",
  },
  {
    q: "Le simulateur couvre-t-il la SCI et le LMNP ?",
    a: "Le questionnaire d'orientation vous oriente vers la SCI ou le LMNP si votre projet est immobilier, mais le comparateur chiffré ne traite que les activités commerciales, artisanales et libérales. Pour l'immobilier, voyez notre page dédiée à la LMNP et à la SCI.",
  },
];

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
        "Alternative LMNP au réel si location meublée : le cabinet Erkilic Expertise Comptable compare les deux.",
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
        "Cotisations SSI d'environ 45 % du net, contre environ 80 % en SASU : l'écart pèse à revenu régulier.",
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

const euro = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;

function Comparator() {
  const [turnover, setTurnover] = useState(60000);
  const [expenses, setExpenses] = useState(10000);
  const [activity, setActivity] = useState<Activity>("service");
  const rows = useMemo(
    () => compareStatuses(turnover, expenses, activity),
    [turnover, expenses, activity],
  );
  const best = Math.max(...rows.map((r) => r.net ?? -Infinity));

  return (
    <div className="border border-ink/15 p-6 md:p-8">
      <div className="grid sm:grid-cols-3 gap-4">
        <label className="block">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">
            Chiffre d'affaires HT / an
          </span>
          <input
            type="number"
            min={0}
            step={1000}
            value={turnover}
            onChange={(e) => setTurnover(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full border border-ink/20 bg-paper px-3 py-3 font-sora font-bold"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">
            Charges réelles / an
          </span>
          <input
            type="number"
            min={0}
            step={500}
            value={expenses}
            onChange={(e) => setExpenses(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full border border-ink/20 bg-paper px-3 py-3 font-sora font-bold"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">
            Activité
          </span>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value as Activity)}
            className="mt-2 w-full border border-ink/20 bg-paper px-3 py-3 font-sora font-bold"
          >
            <option value="commerce">Vente de marchandises</option>
            <option value="service">Prestations de services (BIC)</option>
            <option value="liberal">Profession libérale (BNC)</option>
          </select>
        </label>
      </div>
      <table className="mt-8 w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-ink text-[11px] font-bold uppercase tracking-[0.2em]">
            <th className="py-3 pr-4">Statut</th>
            <th className="py-3 pr-4 text-right">Revenu disponible estimé</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-ink/10 align-top">
              <td className="py-4 pr-4">
                <span className="font-bold block">{r.label}</span>
                <span className="text-sm text-ink/60">{r.note}</span>
              </td>
              <td
                className={`py-4 text-right font-sora text-lg font-extrabold whitespace-nowrap ${r.net === best ? "underline underline-offset-4" : ""}`}
              >
                {r.net === null ? "Non applicable" : euro(r.net)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-ink/55 leading-relaxed">
        Estimation 2026 par an, hors ACRE, hors impôt sur le revenu du foyer (sauf PFU sur les
        dividendes) et hors cotisations minimales. Les montants ne remplacent pas une étude
        personnalisée.
      </p>
    </div>
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
              <span className="text-ink/25 italic font-normal">pour votre projet&nbsp;?</span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Répondez à 5 questions pour obtenir une première orientation : micro-entreprise, EURL,
              SASU, SARL, SAS, SCI ou LMNP. Cette recommandation est indicative : le cabinet Erkilic
              Expertise Comptable établit ensuite un comparatif chiffré sur vos revenus
              prévisionnels avant immatriculation.
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
                { value: "30-77", label: "30 000 à 83 600 €" },
                { value: "77-180", label: "83 600 à 203 100 €" },
                { value: "over-180", label: "Plus de 203 100 €" },
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
                <a
                  href="#rendez-vous"
                  className="group px-8 py-4 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-all inline-flex items-center gap-3"
                >
                  {result.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <p className="mt-6 text-xs text-paper/50 leading-relaxed">
                  Résultat indicatif. Un comparatif chiffré personnalisé (24 mois, intégrant votre
                  foyer fiscal, votre couverture actuelle et vos projets) est établi lors du
                  rendez-vous de cadrage.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 border-t border-ink/5">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-4 block">
              Étape 2 · Comparateur chiffré
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              Combien vous reste-t-il selon le statut ?
            </h2>
            <p className="text-ink/75 leading-relaxed mb-8 max-w-3xl">
              Saisissez votre chiffre d'affaires prévisionnel et vos charges. Le comparateur estime
              ce qui vous reste en micro-entreprise, en EURL et en SASU, avec les taux de
              cotisations et d'impôt sur les sociétés de 2026.
            </p>
            <Comparator />
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 border-t border-ink/5">
          <div className="max-w-4xl mx-auto space-y-12 text-ink/80 leading-relaxed text-[15.5px]">
            <article>
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-ink">
                Comment lire le résultat
              </h2>
              <p>
                Le chiffre affiché est un revenu disponible avant impôt sur le revenu de votre
                foyer, sauf pour la ligne dividendes où le prélèvement forfaitaire unique est déjà
                déduit. Les quatre lignes ne donnent donc pas la même protection : 1 000 € de
                salaire de président de SASU ouvrent des droits à la retraite du régime général et à
                la prévoyance, 1 000 € de dividendes n'ouvrent rien.
              </p>
              <p className="mt-4">
                Le résultat dépend aussi de votre situation personnelle : nombre de parts du foyer,
                autres revenus, droits à l'ARE, ACRE la première année. C'est pour cela que l'outil
                vous oriente puis vous propose un échange avec l'experte-comptable plutôt qu'une
                réponse définitive.
              </p>
            </article>
            <article>
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-ink">
                Micro-entreprise, EURL ou SASU : ce qui change vraiment
              </h2>
              <p>
                En micro-entreprise, vous payez des cotisations sur votre chiffre d'affaires, pas
                sur votre bénéfice. C'est simple et peu coûteux quand vos frais sont faibles. Les
                plafonds 2026-2028 sont de 83 600 € pour les prestations de services et les
                professions libérales, et de 203 100 € pour la vente.
              </p>
              <p className="mt-4">
                En EURL, le gérant associé unique est travailleur non salarié. Ses cotisations
                représentent environ 45 % de sa rémunération nette, ce qui coûte moins cher qu'un
                salaire de président de SASU, en échange d'une protection sociale plus faible.
                L'EURL est à l'impôt sur le revenu par défaut, avec une option pour l'impôt sur les
                sociétés révocable jusqu'au cinquième exercice.
              </p>
              <p className="mt-4">
                En SASU, le président est assimilé salarié. Un salaire coûte cher en cotisations,
                mais la société peut verser des dividendes taxés au prélèvement forfaitaire unique
                de 31,4 % en 2026, sans cotisations sociales. Le détail est dans notre{" "}
                <Link
                  to="/comparatif/eurl-vs-sasu"
                  className="font-bold underline underline-offset-4"
                >
                  comparatif EURL ou SASU
                </Link>{" "}
                et dans notre guide{" "}
                <Link
                  to="/creation-entreprise/sasu-eurl-ei"
                  className="font-bold underline underline-offset-4"
                >
                  quel statut juridique choisir à Montpellier
                </Link>
                .
              </p>
            </article>
            <article>
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-ink">
                Les hypothèses du simulateur
              </h2>
              <ul className="space-y-2">
                <li>
                  Micro : 12,3 % (vente), 21,2 % (prestations BIC), 26,1 % (professions libérales
                  relevant de la SSI).
                </li>
                <li>
                  EURL : cotisations TNS d'environ 45 % de la rémunération nette, tout le bénéfice
                  versé en rémunération.
                </li>
                <li>
                  SASU en salaire : coût total d'environ 1,82 fois le salaire net (cotisations
                  patronales et salariales).
                </li>
                <li>
                  SASU en dividendes : IS de 15 % jusqu'à 42 500 € de bénéfice, 25 % au-delà, puis
                  PFU de 31,4 %.
                </li>
                <li>
                  Non pris en compte : ACRE, cotisations minimales, CFE, frais de tenue de
                  comptabilité, impôt sur le revenu du foyer.
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink/60">
                Sources : barèmes URSSAF 2026, article 219 du CGI (taux d'IS), article 200 A du CGI
                et LFSS 2026 (prélèvement forfaitaire unique).
              </p>
            </article>
            <article>
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-ink">
                Questions fréquentes
              </h2>
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {faq.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="cursor-pointer list-none flex justify-between items-start gap-6">
                      <h3 className="font-sora text-lg font-bold leading-snug text-ink">{f.q}</h3>
                      <span className="font-sora text-2xl leading-none text-ink/60 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </section>

        <AuthorBox dateModified={UPDATED} />
        <RelatedLinks />
        <ProfileFunnel
          profile="createur"
          title="Faites chiffrer votre cas précis"
          intro="Trois questions, puis vous choisissez un créneau. L'experte-comptable compare les statuts sur vos vrais chiffres, foyer fiscal compris."
        />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/simulateur-statut")({
  head: () => ({
    meta: [
      { title: "Simulateur de statut juridique 2026 : micro, EURL ou SASU ?" },
      {
        name: "description",
        content:
          "Simulateur gratuit : 5 questions pour vous orienter, puis un comparateur chiffré 2026 du revenu net en micro, EURL et SASU. Par une experte-comptable.",
      },
      { property: "og:title", content: "Quel statut juridique choisir ?" },
      {
        property: "og:description",
        content: "Simulateur gratuit : orientation en 5 questions et comparateur chiffré 2026.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Simulateur de statut juridique",
          url: `${SITE}${PATH}`,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          inLanguage: "fr-FR",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          provider: { "@id": `${SITE}/#cabinet` },
          dateModified: UPDATED,
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.a }))),
      },
      {
        type: "application/ld+json",
        children: breadcrumbJsonLd(
          [{ label: "Accueil", to: "/" }, { label: "Simulateur de statut juridique" }],
          PATH,
        ),
      },
    ],
  }),
  component: Simulator,
});
