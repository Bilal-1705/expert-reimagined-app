import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/creation-entreprise/sasu-eurl-ei";

const faq = [
  {
    q: "Quelle différence entre SASU et EURL ?",
    plain:
      "La SASU place le dirigeant au régime général de la sécurité sociale (assimilé-salarié, ~80 % de charges sur salaire mais meilleure couverture retraite/prévoyance). L'EURL place le gérant au régime des travailleurs non-salariés (TNS, ~45 % de charges, protection moindre). Pour un projet à Juvignac, le choix dépend surtout de votre stratégie de rémunération (salaire vs dividendes) et de votre couverture existante.",
  },
  {
    q: "L'entreprise individuelle est-elle vraiment plus risquée qu'une société ?",
    plain:
      "Depuis mai 2022, l'entreprise individuelle bénéficie d'une séparation automatique des patrimoines : votre résidence principale et vos biens personnels ne peuvent plus être saisis pour les dettes professionnelles, sauf renonciation expresse. La différence avec la SASU/EURL s'est fortement réduite.",
  },
  {
    q: "Puis-je changer de statut plus tard ?",
    plain:
      "Oui, tous les changements sont possibles (EI → EURL/SASU, EURL → SARL, SASU → SAS). Ils entraînent des coûts (rédaction, dépôt, publications légales) et parfois des impacts fiscaux. Le cabinet Erkilic anticipe et pilote ces bascules.",
  },
  {
    q: "Puis-je toucher le chômage en créant une SASU à Montpellier ?",
    plain:
      "En SASU, si vous ne vous versez pas de salaire, vous conservez vos droits Pôle Emploi. Vous pouvez aussi opter pour l'ARCE (60 % de vos droits en capital). En EURL, le gérant TNS ne cotise pas au chômage donc ne cumule pas de droits. Point décisif à arbitrer avant la création.",
  },
];

export const Route = createFileRoute("/creation-entreprise/sasu-eurl-ei")({
  head: () => ({
    meta: [
      { title: "SASU, EURL ou EI : quel statut choisir à Montpellier ?" },
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
      { type: "application/ld+json", children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))) },
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
        <p>
          Le choix du statut juridique conditionne votre régime social,
          votre fiscalité, vos droits au chômage et la protection de votre
          patrimoine. Ce comparatif détaillé, à jour 2026, vous donne les
          bases — mais aucune décision ne devrait se prendre sans
          simulation chiffrée sur votre situation.
        </p>
      }
      sections={[
        {
          title: "Entreprise Individuelle (EI) — simplicité maximale",
          body: (
            <p>
              Formalité de création simple et gratuite, comptabilité
              allégée, régime micro possible en dessous de 77 700 € (BNC)
              ou 188 700 € (BIC). Depuis mai 2022, le patrimoine personnel
              est automatiquement protégé. Régime TNS (URSSAF + retraite +
              maladie). Idéal pour tester une activité seul, sans
              associé.
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
          title: "EURL — la société à associé unique en TNS",
          body: (
            <p>
              Structure de type SARL avec un seul associé. Le gérant
              associé unique est TNS (comme l'EI) mais dispose d'un
              patrimoine juridiquement séparé et d'une image « société ».
              Option IR pendant 5 ans possible pour purger un déficit de
              démarrage.
            </p>
          ),
          bullets: [
            "Régime social : TNS pour le gérant associé unique.",
            "Fiscalité : IS par défaut, option IR 5 ans possible.",
            "Chômage : Pas de droits pour le gérant TNS.",
            "Bon pour : artisan/commerçant qui veut structurer sans salaire.",
          ],
        },
        {
          title: "SASU — la société assimilée-salariée",
          body: (
            <p>
              SAS à associé unique, le président est assimilé-salarié
              (régime général) : meilleure protection sociale mais charges
              ~80 % sur salaire. Grande souplesse statutaire, ouverture du
              capital facile, dividendes non soumis à cotisations
              sociales.
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
              La bonne question n'est pas « quel statut ? » mais « quelle
              rémunération sur 3 ans, quelle sortie à 5 ans, quelle
              couverture sociale ? ». Le cabinet Erkilic simule votre net
              disponible et vos charges totales dans chaque scénario
              avant l'immatriculation. Un rendez-vous d'une heure économise
              souvent plusieurs milliers d'euros la première année.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Simuler mon statut", to: "/contact", sub: "Un comparatif chiffré sur votre projet." }}
    />
  ),
});
