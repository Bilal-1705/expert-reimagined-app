import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/eurl-vs-sasu";

const faq = [
  {
    q: "Quelle est la différence fondamentale entre EURL et SASU ?",
    plain:
      "L'EURL relève par défaut de l'IR (option IS possible) et son gérant unique associé est TNS (travailleur non salarié, cotisations SSI ≈ 40-45 %). La SASU est à l'IS par défaut et son président est assimilé salarié (cotisations ≈ 75-80 % mais couverture sociale équivalente au salarié).",
  },
  {
    q: "Faut-il choisir EURL ou SASU pour se verser des dividendes ?",
    plain:
      "Sur les dividendes, la SASU est plus favorable : les dividendes ne supportent que la flat tax (30 % PFU) sans cotisations sociales. En EURL à l'IS, les dividendes qui dépassent 10 % du capital + primes + compte courant sont soumis aux cotisations TNS. Pour une stratégie dividendes, la SASU domine.",
  },
  {
    q: "Quel statut coûte le moins cher en charges sociales ?",
    plain:
      "À rémunération égale, l'EURL (gérant TNS) coûte moins cher en cotisations que la SASU (président assimilé salarié). Mais la SASU permet le zéro-salaire + dividendes, qui devient l'option la plus économique dès qu'un dirigeant a une autre couverture sociale (conjoint, retraite, autre emploi).",
  },
  {
    q: "Quel régime de retraite est le meilleur ?",
    plain:
      "Un président de SASU cotise au régime général et à l'AGIRC-ARRCO comme un salarié — retraite plus lisible et prévisible. Un gérant d'EURL cotise à la SSI (ex-RSI), avec un taux plus faible mais des droits plus modestes. Pour une jeune génération, la SASU est souvent préférée sur le long terme.",
  },
  {
    q: "L'EURL est-elle plus simple à gérer que la SASU ?",
    plain:
      "Techniquement, oui : moins d'obligations formelles, statuts plus courts, moins de subtilités. Mais avec un expert-comptable, cette différence se réduit à quelques heures par an. Le vrai critère de choix reste fiscal et social, pas administratif.",
  },
  {
    q: "Peut-on passer d'EURL à SASU (ou l'inverse) ?",
    plain:
      "Oui, par transformation. Ce n'est pas anodin : coût juridique, incidences fiscales (plus-values latentes), changement de régime social. Le cabinet Erkilic Expertise Comptable accompagne ces transformations quand la structure initiale ne colle plus.",
  },
];

export const Route = createFileRoute("/comparatif/eurl-vs-sasu")({
  head: () => ({
    meta: [
      { title: "EURL vs SASU : quel statut choisir en 2026 ? | Erkilic" },
      {
        name: "description",
        content:
          "Comparatif complet EURL vs SASU en 2026 : fiscalité, cotisations, retraite, dividendes. Le bon choix selon votre profil dirigeant.",
      },
      { property: "og:title", content: "EURL ou SASU : quel statut choisir en 2026" },
      { property: "og:description", content: "Fiscalité, social, dividendes : le comparatif pour choisir entre EURL et SASU." },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Comparatifs" },
        { label: "EURL vs SASU" },
      ]}
      eyebrow="Comparatif · Statut juridique"
      h1="EURL vs SASU"
      italic="quel statut pour un dirigeant seul ?"
      intro={
        <p>
          Deux formes juridiques dominent la création d'entreprise à un seul
          associé : l'<strong>EURL</strong> (gérant TNS) et la <strong>SASU</strong>{" "}
          (président assimilé salarié). Le choix conditionne pendant des années
          vos cotisations, votre retraite et vos revenus disponibles. Ce
          comparatif chiffre les arbitrages selon votre profil.
        </p>
      }
      sections={[
        {
          title: "Régime fiscal par défaut",
          bullets: [
            "EURL : IR par défaut, option IS possible (souvent choisie).",
            "SASU : IS par défaut, option IR possible sur 5 ans seulement.",
            "À l'IS, les deux structures se ressemblent fiscalement — la différence se joue sur les cotisations.",
          ],
        },
        {
          title: "Cotisations sociales — l'écart clé",
          bullets: [
            "EURL gérant unique : régime TNS (SSI). Cotisations ≈ 40-45 % du revenu net.",
            "SASU président : assimilé salarié. Cotisations ≈ 75-80 % du salaire net.",
            "Zéro rémunération en SASU = zéro cotisation (sauf CET/CSG minimales).",
            "En EURL, une rémunération nulle génère quand même un minimum forfaitaire de cotisations.",
          ],
        },
        {
          title: "Stratégie dividendes",
          bullets: [
            "SASU : dividendes soumis uniquement à la flat tax 30 % (12,8 % IR + 17,2 % PS).",
            "EURL à l'IS : dividendes soumis à cotisations TNS au-delà de 10 % du capital.",
            "→ SASU nettement plus favorable pour une stratégie dividendes.",
          ],
        },
        {
          title: "Protection sociale & retraite",
          bullets: [
            "SASU : régime général + AGIRC-ARRCO, meilleure couverture, retraite plus lisible.",
            "EURL : SSI, couverture correcte mais moins généreuse, retraite plus faible à cotisation égale.",
            "Ajout d'une prévoyance et d'un PER souvent recommandé en EURL.",
          ],
        },
        {
          title: "Quel statut pour quel profil ?",
          bullets: [
            "Consultant seul, revenus stables, veut minimiser les charges : EURL à l'IS.",
            "Dirigeant qui veut se verser peu de salaire + gros dividendes : SASU.",
            "Créateur qui veut cumuler ARE Pôle emploi et rémunération : SASU (zéro salaire).",
            "Profession libérale réglementée : SELARL / SELAS — cadre spécifique.",
            "Activité qui va accueillir des associés : SASU (transformation SAS immédiate).",
          ],
        },
        {
          title: "Ce que le cabinet Erkilic Expertise Comptable fait avant l'immatriculation",
          bullets: [
            "Comparatif chiffré sur 24 mois EURL vs SASU vs EI selon vos revenus prévisionnels.",
            "Simulation de vos revenus disponibles nets, cotisations et impôts.",
            "Arbitrage rémunération/dividendes optimal selon votre foyer fiscal.",
            "Rédaction des statuts et immatriculation clé en main.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Comparer sur mes chiffres",
        to: "/simulateur-statut",
        sub: "Testez notre simulateur ou prenez rendez-vous.",
      }}
    />
  ),
});
