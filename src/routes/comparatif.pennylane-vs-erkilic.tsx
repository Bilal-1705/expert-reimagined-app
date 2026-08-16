import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/pennylane-vs-erkilic";

const faq = [
  {
    q: "Le cabinet Erkilic Expertise Comptable travaille-t-il avec Pennylane ?",
    plain:
      "Oui. Le cabinet Erkilic Expertise Comptable utilise Pennylane comme outil collaboratif avec les clients qui le souhaitent : synchronisation bancaire automatique, factures en un clic, tableau de bord partagé en temps réel. Nous utilisons également Tiime et d'autres solutions selon vos préférences.",
  },
  {
    q: "Puis-je utiliser Pennylane sans expert-comptable ?",
    plain:
      "Pennylane est conçu pour être utilisé conjointement avec un expert-comptable — c'est même son modèle économique historique. Utiliser Pennylane seul, c'est acheter un outil très puissant et n'en exploiter qu'une fraction, sans validation légale des comptes ni conseil fiscal personnalisé.",
  },
  {
    q: "Quelle est la différence entre Pennylane et Indy ?",
    plain:
      "Pennylane est un logiciel professionnel plus complet (multi-utilisateurs, workflow expert-comptable, gestion analytique) pensé pour PME et cabinets. Indy est un outil grand-public plus simple ciblé sur les freelances BNC. Ni l'un ni l'autre n'est un expert-comptable.",
  },
];

export const Route = createFileRoute("/comparatif/pennylane-vs-erkilic")({
  head: () => ({
    meta: [
      { title: "Pennylane vs Cabinet Erkilic Expertise Comptable : la bonne combinaison" },
      {
        name: "description",
        content:
          "Pennylane est un excellent outil, pas un cabinet. Comment Erkilic utilise Pennylane comme collaboratif pour vous offrir tech + conseil humain à Juvignac.",
      },
      { property: "og:title", content: "Pennylane vs Erkilic : logiciel + expert" },
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
        { label: "Comparatifs", to: "/comparatifs" },
        { label: "Pennylane vs Erkilic" },
      ]}
      eyebrow="Comparatif · Tech + humain"
      h1="Pennylane vs Erkilic :"
      italic="la mauvaise question."
      intro={
        <>
          <p>
            Pennylane est le meilleur logiciel de comptabilité collaborative
            du marché français. Le cabinet Erkilic Expertise Comptable est un expert-comptable
            physique à Juvignac. La bonne question n'est pas « lequel
            choisir ? » mais « comment les combiner ? ».
          </p>
          <p className="mt-4">
            Nous ne sommes pas anti-tech. Nous sommes anti-solitude
            technologique.
          </p>
        </>
      }
      sections={[
        {
          title: "Le modèle Pennylane : un outil pensé pour les experts",
          body: (
            <p>
              Contrairement à Indy, Pennylane a été conçu dès l'origine
              comme un outil collaboratif entre l'entreprise et son
              expert-comptable. Le vrai potentiel de Pennylane (workflow
              multi-utilisateurs, analyse de marge en temps réel, prévisionnel
              dynamique, révision comptable partagée) ne se déverrouille
              qu'avec un cabinet qui sait s'en servir. Utilisé seul, il
              reste un excellent outil de saisie — mais 30 % de son
              potentiel.
            </p>
          ),
        },
        {
          title: "Comment Erkilic utilise Pennylane avec ses clients",
          bullets: [
            "Synchronisation bancaire automatique et catégorisation en temps réel.",
            "Factures clients / fournisseurs centralisées, pré-comptabilisées.",
            "Tableau de bord partagé : trésorerie, marge, prévisionnel à jour.",
            "Révision comptable et clôture faites conjointement, sans échange de fichiers.",
            "Le cabinet signe le bilan et engage sa responsabilité — Pennylane ne signe rien.",
          ],
        },
        {
          title: "Le combo gagnant : tech de Pennylane, humain d'Erkilic",
          body: (
            <p>
              Vous gardez la fluidité et l'automatisation qui vous a séduit
              chez Pennylane. Vous ajoutez un interlocuteur unique à
              Juvignac, un conseil fiscal personnalisé, la validation
              légale de vos comptes et une lettre de mission qui engage
              notre responsabilité. Coût marginal : le prix d'un
              expert-comptable classique. Bénéfice marginal : la sérénité.
            </p>
          ),
        },
      ]}
      comparisonTable={{
        title: "Pennylane vs Erkilic Expertise Comptable en un coup d'œil",
        intro: <p>Pennylane est aussi utilisé par le cabinet Erkilic Expertise Comptable en mode collaboratif — voici ce qui change quand un expert-comptable est réellement engagé sur votre dossier.</p>,
        columns: ["Critère", "Pennylane seul", "Erkilic Expertise Comptable + Pennylane"],
        rows: [
          { criterion: "Outil", competitor: "Logiciel puissant, self-service.", erkilic: "Même outil, supervisé et validé par un expert-comptable inscrit à l'Ordre." },
          { criterion: "Conseil fiscal", competitor: "Non — outil seul.", erkilic: "Arbitrage salaire/dividendes, optimisation IS/IR chaque année." },
          { criterion: "Bilan signé", competitor: "Non — vous restez responsable.", erkilic: "Oui — signé et engagement de responsabilité." },
          { criterion: "Contrôle fiscal", competitor: "Vous vous défendez seul.", erkilic: "Le cabinet vous représente et défend le dossier." },
          { criterion: "Interlocuteur", competitor: "Support outil.", erkilic: "Un expert-comptable dédié à Juvignac." },
        ],
      }}
      verdict={
        <p>
          En résumé, <strong>Pennylane</strong> est un excellent logiciel pour
          automatiser votre comptabilité. Utilisé <em>seul</em>, il ne remplace
          pas un expert-comptable. Utilisé <em>avec</em> le cabinet{" "}
          <strong>Erkilic Expertise Comptable</strong>, vous gardez la souplesse
          de l'outil et vous ajoutez le conseil, la validation et la sécurité
          d'un professionnel réglementé à Montpellier.
        </p>
      }
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Discuter de mon dossier", to: "/contact", sub: "Vous êtes sur Pennylane ? Parlons intégration." }}
    />
  ),
});
