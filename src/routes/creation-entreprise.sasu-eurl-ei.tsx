import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/creation-entreprise/sasu-eurl-ei";

const faq = [
  {
    q: "Par où commencer pour choisir son statut à Montpellier ?",
    plain:
      "Partez de trois questions : allez-vous vous verser un salaire dès la première année, touchez-vous l'ARE de France Travail, et prévoyez-vous d'accueillir des associés ? Selon les réponses, la micro-entreprise, l'EI au réel, l'EURL ou la SASU sortent en tête. Pour le détail EURL contre SASU, chiffres à l'appui, voyez notre comparatif EURL ou SASU.",
  },
  {
    q: "L'entreprise individuelle est-elle vraiment plus risquée qu'une société ?",
    plain:
      "Depuis mai 2022, l'entreprise individuelle bénéficie d'une séparation automatique des patrimoines : votre résidence principale et vos biens personnels ne peuvent plus être saisis pour les dettes professionnelles, sauf renonciation expresse. La différence avec la SASU/EURL s'est fortement réduite.",
  },
  {
    q: "Puis-je changer de statut plus tard ?",
    plain:
      "Oui, tous les changements sont possibles (EI → EURL/SASU, EURL → SARL, SASU → SAS). Ils entraînent des coûts (rédaction, dépôt, publications légales) et parfois des impacts fiscaux. Le cabinet Erkilic Expertise Comptable anticipe et pilote ces bascules.",
  },
  {
    q: "Puis-je toucher le chômage en créant une SASU à Montpellier ?",
    plain:
      "En SASU, si vous ne vous versez pas de salaire, vous conservez vos droits France Travail. Vous pouvez aussi opter pour l'ARCE (une partie de vos droits restants versée en capital). En EURL, un gérant qui ne se rémunère pas peut aussi conserver l'ARE, mais le bénéfice d'une EURL à l'IR est traité comme une rémunération. Le point est à vérifier avec France Travail avant la création.",
  },
];

export const Route = createFileRoute("/creation-entreprise/sasu-eurl-ei")({
  head: () => ({
    meta: [
      { title: "Quel statut juridique choisir à Montpellier : EI, EURL ou SASU ?" },
      {
        name: "description",
        content:
          "Comparatif SASU vs EURL vs EI pour créer sa TPE à Montpellier et Juvignac : régime social, fiscalité, dividendes, protection du patrimoine.",
      },
      { property: "og:title", content: "SASU, EURL ou EI : quel statut choisir ?" },
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
        { label: "Création d'entreprise" },
        { label: "SASU, EURL, EI" },
      ]}
      eyebrow="Création · Statut juridique"
      h1="SASU, EURL, EI :"
      italic="quel statut pour votre TPE à Montpellier ?"
      intro={
        <>
          <p>
            Le choix du statut juridique conditionne votre régime social, votre fiscalité, vos
            droits au chômage et la protection de votre patrimoine. Ce comparatif détaillé, à jour
            2026, vous donne les bases : mais aucune décision ne devrait se prendre sans simulation
            chiffrée sur votre situation.
          </p>
          <p className="mt-4 text-[16px]">
            Vous hésitez uniquement entre les deux formes sociétaires ? Consultez le{" "}
            <Link to="/comparatif/eurl-vs-sasu" className="underline underline-offset-4">
              comparatif détaillé SASU ou EURL
            </Link>{" "}
            avec son tableau chiffré 2026.
          </p>
        </>
      }
      sections={[
        {
          title: "Entreprise Individuelle (EI) : simplicité maximale",
          body: (
            <p>
              Formalité de création simple et gratuite, comptabilité allégée, régime micro possible
              en dessous de 83 600 € (BNC) ou 203 100 € (BIC). Depuis mai 2022, le patrimoine
              personnel est automatiquement protégé. Régime TNS (URSSAF + retraite + maladie). Idéal
              pour tester une activité seul, sans associé.
            </p>
          ),
          bullets: [
            "Régime social : TNS (~45 % de charges sur bénéfice).",
            "Fiscalité : IR par défaut, IS possible depuis 2022.",
            "Chômage : Pas de cotisation, pas de droits.",
            "Bon pour : freelances, artisans, tests d'activité.",
          ],
        },
        {
          title: "EURL : la société à associé unique en TNS",
          body: (
            <p>
              Structure de type SARL avec un seul associé. Le gérant associé unique est TNS (comme
              l'EI) mais dispose d'un patrimoine juridiquement séparé et d'une image « société ».
              Option IR pendant 5 ans possible pour purger un déficit de démarrage.
            </p>
          ),
          bullets: [
            "Régime social : TNS pour le gérant associé unique.",
            "Fiscalité : IR par défaut quand l'associé unique est une personne physique, option IS possible (révocable jusqu'au 5e exercice).",
            "Chômage : Pas de droits pour le gérant TNS.",
            "Bon pour : artisan/commerçant qui veut structurer sans salaire.",
          ],
        },
        {
          title: "SASU : la société assimilée-salariée",
          body: (
            <p>
              SAS à associé unique, le président est assimilé-salarié (régime général) : meilleure
              protection sociale mais charges ~80 % sur salaire. Grande souplesse statutaire,
              ouverture du capital facile, dividendes non soumis à cotisations sociales.
            </p>
          ),
          bullets: [
            "Régime social : Assimilé-salarié (régime général).",
            "Fiscalité : IS par défaut, option IR 5 ans possible.",
            "Chômage : Droits ARE conservés si pas de salaire.",
            "Bon pour : startups, projets à ouverture de capital, stratégie dividendes.",
          ],
        },
        {
          title: "Le vrai arbitrage : rémunération et sortie",
          body: (
            <p>
              La bonne question n'est pas « quel statut ? » mais « quelle rémunération sur 3 ans,
              quelle sortie à 5 ans, quelle couverture sociale ? ». Le cabinet Erkilic Expertise
              Comptable simule votre net disponible et vos charges totales dans chaque scénario
              avant l'immatriculation. Un rendez-vous d'une heure économise souvent plusieurs
              milliers d'euros la première année.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Simuler mon statut",
        to: "/contact",
        sub: "Un comparatif chiffré sur votre projet.",
      }}
    />
  ),
});
