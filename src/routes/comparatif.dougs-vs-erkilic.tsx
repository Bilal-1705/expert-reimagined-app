import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/dougs-vs-erkilic";

const faq = [
  {
    q: "Dougs remplace-t-il vraiment un expert-comptable ?",
    plain:
      "Dougs est un logiciel de tenue automatisée avec des experts-comptables en support à distance. Il gère très bien la saisie, la TVA et les bilans standards. Il ne remplace pas un cabinet local comme Erkilic Expertise Comptable pour l'arbitrage salaire/dividendes annuel, la stratégie de transmission, la défense en cas de contrôle fiscal ou les rendez-vous physiques à Juvignac.",
  },
  {
    q: "Dougs est-il moins cher qu'un cabinet comme Erkilic Expertise Comptable ?",
    plain:
      "Sur le prix d'abonnement mensuel affiché, Dougs est souvent plus bas. Mais dès qu'on ajoute les options (paie, juridique, conseil personnalisé, révision) l'écart se réduit. À l'année, un cabinet Erkilic Expertise Comptable optimise généralement plus que son propre coût grâce à l'arbitrage fiscal sur-mesure.",
  },
  {
    q: "Peut-on utiliser Dougs et travailler avec Erkilic Expertise Comptable en parallèle ?",
    plain:
      "Pour un client actuel de Dougs, une reprise par le cabinet Erkilic Expertise Comptable est possible et fluide. Nous récupérons vos données, reprenons le dossier et poursuivons sur Pennylane ou Tiime, en gardant les automatisations que vous appréciez et en ajoutant le conseil de proximité qui manque.",
  },
  {
    q: "Pour quel profil Dougs est-il vraiment adapté ?",
    plain:
      "Dougs convient très bien à un freelance solo, une micro-entreprise ou une petite SASU sans salariés, avec des opérations standards et pas d'enjeu patrimonial. Dès qu'il y a des salariés, de l'immobilier, une holding, une profession libérale réglementée ou une croissance rapide, un cabinet physique comme Erkilic Expertise Comptable est plus adapté.",
  },
];

export const Route = createFileRoute("/comparatif/dougs-vs-erkilic")({
  head: () => ({
    meta: [
      { title: "Dougs vs Erkilic Expertise Comptable : comparatif 2026" },
      {
        name: "description",
        content:
          "Dougs (100% en ligne) ou Erkilic Expertise Comptable (cabinet à Juvignac) : comparatif honnête, tableau détaillé et cas d'usage pour choisir.",
      },
      { property: "og:title", content: "Dougs vs Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content: "Comparatif nuancé : Dougs pour la saisie automatisée, Erkilic pour le conseil sur-mesure à Montpellier.",
      },
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
        { label: "Comparatifs", to: "/comparatif/indy-vs-erkilic" },
        { label: "Dougs vs Erkilic Expertise Comptable" },
      ]}
      eyebrow="Comparatif · Décision"
      h1="Dougs vs Erkilic Expertise Comptable"
      italic="lequel choisir en 2026 ?"
      intro={
        <p>
          Dougs est un excellent outil de tenue comptable automatisée. Le cabinet{" "}
          <strong>Erkilic Expertise Comptable</strong>, basé à Juvignac, est un
          cabinet de proximité inscrit à l'Ordre des Experts-Comptables. Les
          deux sont utiles — mais pas au même profil, ni pour les mêmes enjeux.
          Voici un comparatif nuancé pour vous aider à décider.
        </p>
      }
      sections={[
        {
          title: "Ce que Dougs fait très bien",
          bullets: [
            "Automatiser la saisie bancaire et la catégorisation.",
            "Générer factures, notes de frais et déclarations TVA récurrentes.",
            "Interface moderne, mobile, avec support à distance réactif.",
            "Tarif attractif pour un freelance ou micro-entreprise sans enjeu fiscal.",
          ],
        },
        {
          title: "Ce que le cabinet Erkilic Expertise Comptable apporte en plus",
          bullets: [
            "Un interlocuteur unique, joignable, qui connaît votre dossier dans la durée.",
            "L'arbitrage salaire / dividendes chiffré chaque année sur votre foyer fiscal.",
            "Une expertise du tissu économique local (Juvignac, Montpellier, Hérault).",
            "La défense de votre dossier en cas de contrôle fiscal ou URSSAF.",
            "Le conseil patrimonial : LMNP, SCI, holding, transmission, PER.",
            "Des rendez-vous physiques au cabinet, à 5 minutes de Montpellier.",
          ],
        },
      ]}
      comparisonTable={{
        title: "Dougs vs Erkilic Expertise Comptable en un coup d'œil",
        intro: (
          <p>
            Les critères clés qui font la différence pour un dirigeant à
            Juvignac, Montpellier ou dans l'Hérault.
          </p>
        ),
        columns: ["Critère", "Dougs (100% en ligne)", "Erkilic Expertise Comptable (Juvignac)"],
        rows: [
          {
            criterion: "Tarif de base",
            competitor: "Abonnement mensuel bas, options souvent en supplément.",
            erkilic: "Forfait sur-mesure, tout compris, honoraires clairs.",
          },
          {
            criterion: "Contact humain",
            competitor: "Support à distance, expert-comptable dédié variable.",
            erkilic: "Interlocuteur unique, joignable, qui vous connaît dans la durée.",
          },
          {
            criterion: "Optimisation fiscale",
            competitor: "Standardisée, adaptée aux dossiers récurrents.",
            erkilic: "Sur-mesure, arbitrage salaire/dividendes chaque année.",
          },
          {
            criterion: "Gestion des imprévus",
            competitor: "Ticket support, délai variable selon l'abonnement.",
            erkilic: "Réponse rapide par téléphone, e-mail ou en cabinet.",
          },
          {
            criterion: "Rendez-vous physiques",
            competitor: "Non — 100% en ligne.",
            erkilic: "Oui, au cabinet à Juvignac, ou en visio au choix.",
          },
          {
            criterion: "Ancrage local",
            competitor: "Aucun — service national.",
            erkilic: "Connaissance des aides locales, CCI Hérault, écosystème Montpellier.",
          },
          {
            criterion: "Contrôle fiscal / URSSAF",
            competitor: "Assistance à distance selon l'abonnement.",
            erkilic: "Représentation du dossier, engagement de responsabilité civile professionnelle.",
          },
        ],
      }}
      verdict={
        <p>
          En résumé, si vous cherchez une simple application de comptabilité
          automatisée à bas coût sans besoin de conseil personnalisé,{" "}
          <strong>Dougs</strong> est un excellent outil. En revanche, si vous
          êtes un artisan, une TPE ou une profession libérale à Juvignac ou
          Montpellier, et que vous avez besoin d'une vraie stratégie
          d'optimisation fiscale, de réactivité et d'un interlocuteur unique qui
          connaît le tissu économique local, le cabinet{" "}
          <strong>Erkilic Expertise Comptable</strong> sera bien plus adapté à
          votre croissance.
        </p>
      }
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Comparer sur mon dossier",
        to: "/simulateur-statut",
        sub: "Ou prenez 30 minutes gratuites avec le cabinet Erkilic Expertise Comptable.",
      }}
    />
  ),
});
