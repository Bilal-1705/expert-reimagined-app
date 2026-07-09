import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/cabinet-vs-en-ligne";

const faq = [
  {
    q: "Un cabinet d'expertise comptable coûte-t-il vraiment plus cher qu'un logiciel en ligne ?",
    plain:
      "Sur le prix affiché, oui. Mais un logiciel en ligne ne signe pas votre bilan, ne défend pas votre dossier en cas de contrôle fiscal, et ne fait pas d'arbitrage salaire/dividendes. À l'année, un cabinet comme Erkilic sécurise votre fiscalité et détecte des optimisations qui dépassent souvent son propre coût.",
  },
  {
    q: "Puis-je combiner logiciel en ligne + expert-comptable ?",
    plain:
      "Oui, c'est même la meilleure combinaison. Le cabinet Erkilic Expertise Comptable travaille en mode collaboratif sur Pennylane ou Tiime : vous saisissez et automatisez, le cabinet supervise, valide, conseille et signe. Vous gardez la souplesse d'un outil moderne avec la sécurité d'un professionnel réglementé.",
  },
  {
    q: "Les logiciels 100% en ligne sont-ils adaptés à un profession libérale ?",
    plain:
      "Ils gèrent la partie déclarative BNC standard. Ils sont beaucoup moins adaptés dès qu'il y a une CARPIMKO/CARMF/CIPAV à optimiser, un choix AGA, un passage micro-BNC vers déclaration contrôlée, ou une SELARL à structurer. Un cabinet physique fait la différence sur ces arbitrages.",
  },
  {
    q: "En cas de contrôle fiscal, qui me défend avec un logiciel en ligne ?",
    plain:
      "Personne ne signe et personne n'engage sa responsabilité à votre place. Avec un cabinet inscrit à l'Ordre comme Erkilic, une lettre de mission engage la responsabilité civile professionnelle du cabinet, qui vous représente devant l'administration.",
  },
];

export const Route = createFileRoute("/comparatif/cabinet-vs-en-ligne")({
  head: () => ({
    meta: [
      { title: "Cabinet vs comptable en ligne : lequel choisir ? | Erkilic" },
      {
        name: "description",
        content:
          "Cabinet physique ou logiciel 100% en ligne (Indy, Pennylane, Keobiz) : comparatif honnête pour choisir selon votre profil et vos enjeux.",
      },
      { property: "og:title", content: "Cabinet vs comptable en ligne" },
      { property: "og:description", content: "Comparatif honnête entre cabinet physique et logiciels de comptabilité en ligne." },
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
        { label: "Cabinet vs en ligne" },
      ]}
      eyebrow="Comparatif · Décision"
      h1="Cabinet traditionnel vs 100% en ligne"
      italic="que choisir en 2026 ?"
      intro={
        <p>
          La question revient à chaque création d'entreprise à Montpellier :
          faut-il un <strong>cabinet d'expertise comptable physique</strong> comme
          Erkilic à Juvignac, ou un{" "}
          <strong>logiciel 100% en ligne</strong> type Indy, Pennylane ou
          Keobiz&nbsp;? La réponse dépend de votre profil, mais surtout de ce que
          vous attendez d'un comptable : automatiser des tâches, ou sécuriser
          votre fiscalité.
        </p>
      }
      sections={[
        {
          title: "Ce qu'un logiciel 100% en ligne fait bien",
          bullets: [
            "Automatiser la saisie bancaire et la catégorisation.",
            "Éditer des factures et suivre les paiements.",
            "Produire les déclarations récurrentes (TVA, URSSAF, IS/IR simples).",
            "Offrir une interface moderne et mobile.",
            "Prix affiché souvent bas — mais options souvent en supplément.",
          ],
        },
        {
          title: "Ce qu'un cabinet physique fait — et qu'un logiciel ne fait pas",
          bullets: [
            "Signer votre bilan et engager sa responsabilité civile professionnelle.",
            "Faire l'arbitrage salaire / dividendes chaque année, chiffré sur votre foyer.",
            "Défendre votre dossier lors d'un contrôle fiscal ou URSSAF.",
            "Conseiller sur le statut, la transmission, l'investissement immobilier.",
            "Répondre à des questions non standard (LMNP, SCI, holding, transmission).",
            "Vous connaître dans la durée — un même interlocuteur, joignable rapidement.",
          ],
        },
        {
          title: "Pour qui le logiciel en ligne suffit",
          bullets: [
            "Auto-entrepreneurs avec peu d'opérations et pas d'enjeu fiscal.",
            "Freelance en micro-BNC avec chiffre d'affaires stable.",
            "Activité 100 % standard, sans salariés ni immobilier.",
          ],
        },
        {
          title: "Pour qui un cabinet fait la différence",
          bullets: [
            "SASU, EURL, SARL, SELARL — dès qu'il y a un arbitrage à faire.",
            "Dirigeants avec revenus mixtes (salaires + dividendes + immobilier).",
            "Créateurs d'entreprise (choix de statut, prévisionnel, aides locales Montpellier).",
            "Professions libérales médicales et paramédicales (CARPIMKO, CARMF, CIPAV).",
            "Investisseurs immobiliers (LMNP réel, SCI IS/IR).",
            "Toute entreprise qui grandit et anticipe la transmission.",
          ],
        },
        {
          title: "La solution hybride du cabinet Erkilic Expertise Comptable",
          bullets: [
            "Vous gardez votre logiciel (Pennylane, Tiime, Indy) pour la saisie quotidienne.",
            "Le cabinet supervise, valide, conseille et signe.",
            "Vous bénéficiez de la souplesse du digital + de la sécurité d'un professionnel réglementé.",
            "Un interlocuteur unique, joignable en cabinet à Juvignac ou en visio partout en France.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Comparer sur mon dossier",
        to: "/contact",
        sub: "30 minutes gratuites pour identifier ce qui vous convient.",
      }}
    />
  ),
});
