import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/faq";

const faq = [
  {
    q: "Pourquoi choisir un cabinet d'expert-comptable physique à Juvignac plutôt qu'un comptable en ligne ?",
    plain:
      "Un cabinet physique comme Erkilic à Juvignac vous donne un interlocuteur unique, joignable en 10 minutes en rendez-vous rue du Poumpidou, et signe une lettre de mission qui engage sa responsabilité civile professionnelle sur vos comptes. Un logiciel en ligne (Indy, Pennylane) ne signe rien : en cas d'erreur, vous êtes seul face au fisc.",
  },
  {
    q: "Combien coûte un expert-comptable pour une auto-entreprise à Montpellier ?",
    plain:
      "Pour un auto-entrepreneur à Montpellier ou Juvignac, un accompagnement de base (déclarations URSSAF, suivi de CA, alerte seuils TVA) se situe généralement entre 40 et 90 € HT / mois selon le volume d'opérations et les options (comparatif micro / réel, tenue du registre). Un devis gratuit est établi après un premier échange.",
  },
  {
    q: "Quel statut juridique choisir pour créer une TPE à Montpellier Ouest ?",
    plain:
      "Le choix entre EI, EURL, SASU et SARL dépend de trois critères : votre régime social (TNS vs assimilé-salarié), votre stratégie de rémunération (dividendes vs salaire), et vos perspectives d'ouverture du capital. Le cabinet Erkilic établit un comparatif chiffré sur 24 mois avant l'immatriculation.",
  },
  {
    q: "Quelles sont les obligations comptables pour une profession libérale à Juvignac ?",
    plain:
      "Une profession libérale relevant des BNC doit tenir un livre-journal des recettes-dépenses, produire une déclaration 2035 annuelle, gérer sa TVA le cas échéant, ses cotisations URSSAF et sa caisse de retraite (CARMF, CARPIMKO, CIPAV…). L'adhésion à une AGA reste fiscalement pertinente dans de nombreux cas.",
  },
  {
    q: "Comment le cabinet Erkilic accompagne-t-il la création d'entreprise à Montpellier ?",
    plain:
      "Le pack Créateur comprend un entretien conseil, un prévisionnel financier sur 12–24 mois, la recherche d'aides locales (CCI Hérault, Région Occitanie, French Tech Montpellier), l'accompagnement bancaire, la rédaction des statuts, l'immatriculation et le suivi de la première année.",
  },
  {
    q: "Puis-je travailler à distance avec le cabinet Erkilic si je ne suis pas dans l'Hérault ?",
    plain:
      "Oui. Le cabinet accompagne ses clients partout en France par visioconférence, signature électronique et outils collaboratifs (Pennylane, Tiime). Les clients de Juvignac, Montpellier, Saint-Georges-d'Orques, Grabels, Pignan et Montarnaud bénéficient en plus de rendez-vous en cabinet.",
  },
  {
    q: "Comment déclarer un investissement LMNP dans l'Hérault ?",
    plain:
      "Un investissement LMNP peut relever du régime micro-BIC (abattement forfaitaire) ou du régime réel (amortissement du bien, déduction des charges). Sur un bien à Juvignac ou Montpellier, le régime réel est fréquemment plus intéressant dès la première année ; le cabinet établit le comparatif et gère la déclaration 2031.",
  },
  {
    q: "Pennylane, Indy, Tiime : faut-il un expert-comptable si j'utilise ces logiciels ?",
    plain:
      "Ces logiciels automatisent la saisie, pas le conseil ni la validation légale. L'expert-comptable est le seul professionnel réglementé habilité à établir et signer votre bilan, votre liasse fiscale et vos comptes annuels. Le cabinet Erkilic travaille en mode collaboratif sur Pennylane et Tiime avec ses clients qui le souhaitent.",
  },
  {
    q: "Dois-je passer de la micro-entreprise à la société quand je dépasse les seuils ?",
    plain:
      "Pas nécessairement. Le dépassement des seuils TVA (36 800 € services / 91 900 € vente) impose la TVA mais pas le changement de structure. Le passage en EURL ou SASU se justifie par un besoin de séparation de patrimoine, une optimisation charges/dividendes ou une entrée d'associés — c'est un arbitrage à faire au cas par cas.",
  },
  {
    q: "Comment optimiser sa fiscalité personnelle avec un expert-comptable ?",
    plain:
      "Au-delà de la déclaration IR et IFI, l'expert-comptable analyse votre foyer (revenus fonciers, LMNP, dividendes, plus-values) et propose des dispositifs adaptés : loi Girardin, PER, déficit foncier, arbitrage IR / IS pour les indépendants, donations et démembrement pour la transmission.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ Expert-Comptable Montpellier Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Toutes les réponses sur l'expertise comptable à Montpellier / Juvignac : statut juridique, tarifs, LMNP, comparatif logiciels, création d'entreprise.",
      },
      { property: "og:title", content: "FAQ — Cabinet Erkilic Expertise Comptable" },
      { property: "og:description", content: "Les questions que dirigeants et particuliers posent le plus souvent à un expert-comptable." },
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
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "FAQ" }]}
      eyebrow="FAQ · Réponses d'experts"
      h1="Vos questions"
      italic="nos réponses."
      intro={
        <p>
          Statut juridique, obligations comptables, création d'entreprise à
          Montpellier, LMNP, comparatif logiciels : les réponses aux
          questions que dirigeants, indépendants et particuliers posent le
          plus souvent au cabinet Erkilic à Juvignac.
        </p>
      }
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Poser ma question", to: "/contact", sub: "Une question spécifique ? Prenez rendez-vous." }}
    />
  ),
});
