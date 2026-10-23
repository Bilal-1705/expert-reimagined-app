import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/expert-comptable-pennylane";
const PUBLISHED = "2026-10-23";

const faq = [
  {
    q: "Faut-il un expert-comptable quand on utilise Pennylane ?",
    a: "Pennylane est un logiciel de comptabilité et de gestion. Il automatise la saisie, mais il ne révise pas vos comptes, ne signe pas votre bilan et n'engage pas sa responsabilité sur vos déclarations. Pour une société (SASU, SAS, EURL, SARL), la présentation des comptes annuels et la liasse fiscale demandent un professionnel. Un expert-comptable qui travaille dans Pennylane fait ce travail directement dans votre outil.",
  },
  {
    q: "Comment trouver un bon expert-comptable sur Pennylane ?",
    a: "Vérifiez que le cabinet utilise Pennylane au quotidien et pas seulement en import. Demandez qui révise votre dossier, à quelle fréquence, et si vous aurez un interlocuteur fixe. Un bon cabinet vous aide aussi à paramétrer l'outil au départ (règles de catégorisation, plan de comptes, connexion de la banque) pour que l'automatisation fonctionne vraiment.",
  },
  {
    q: "Je suis déjà sur Pennylane avec un autre cabinet. Puis-je changer ?",
    a: "Oui. Vous gardez votre espace et votre historique ; le nouveau cabinet y est invité et l'ancien transmet son dossier de travail. La reprise est plus simple après la clôture de l'exercice, mais elle reste possible en cours d'année.",
  },
  {
    q: "Pennylane est-il adapté à une petite entreprise ou un indépendant ?",
    a: "Pennylane convient bien aux sociétés qui ont un flux régulier de factures et de dépenses. Pour une micro-entreprise avec peu d'opérations, un outil plus simple peut suffire. Le cabinet vous conseille l'outil adapté à votre volume avant de vous faire souscrire quoi que ce soit.",
  },
  {
    q: "Pennylane m'aide-t-il pour la facturation électronique ?",
    a: "Depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques, et l'émission devient obligatoire pour les PME et micro-entreprises au 1er septembre 2027. Les logiciels comme Pennylane s'appuient sur une plateforme agréée pour ces échanges. Le cabinet vérifie avec vous que votre configuration est prête.",
  },
];

export const Route = createFileRoute("/expert-comptable-pennylane")({
  head: () => ({
    meta: [
      { title: "Expert-comptable Pennylane : un cabinet qui travaille dans votre outil" },
      {
        name: "description",
        content:
          "Vous utilisez Pennylane ? Le cabinet Erkilic révise vos comptes, établit le bilan et vous conseille directement dans Pennylane. Experte-comptable à Juvignac, près de Montpellier.",
      },
      { property: "og:title", content: "Expert-comptable sur Pennylane | Erkilic" },
      {
        property: "og:description",
        content: "Le logiciel automatise, l'experte-comptable vérifie, signe et conseille. Comment ça marche concrètement.",
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
          "@type": "Service",
          name: "Expertise comptable sur Pennylane",
          serviceType: "Expertise comptable",
          provider: { "@id": `${SITE}/#cabinet` },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "France"],
          url: `${SITE}${PATH}`,
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.a }))),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Comparatifs", to: "/comparatifs" },
        { label: "Expert-comptable Pennylane" },
      ]}
      eyebrow="Logiciel · Pennylane"
      h1="Expert-comptable sur Pennylane :"
      italic="l'outil en ligne, le conseil en plus."
      funnel="pro"
      datePublished={PUBLISHED}
      dateModified={PUBLISHED}
      intro={
        <>
          <p>
            Pennylane fait gagner beaucoup de temps : la banque est synchronisée, les justificatifs se
            rapprochent presque seuls, les factures partent depuis l'outil. Mais un logiciel ne révise pas
            votre comptabilité, ne signe pas votre bilan et ne vous dit pas comment vous rémunérer.
          </p>
          <p className="mt-4">
            Le cabinet Erkilic Expertise Comptable travaille directement dans votre espace Pennylane. Vous
            gardez votre outil, et vous avez une experte-comptable qui vérifie, déclare et conseille.
          </p>
        </>
      }
      sections={[
        {
          title: "Ce que fait Pennylane, ce que fait l'expert-comptable",
          body: (
            <p>
              Le partage des rôles est simple : l'outil s'occupe des tâches répétitives, le cabinet du
              contrôle et des décisions.
            </p>
          ),
          bullets: [
            "Pennylane : synchronisation bancaire, collecte des justificatifs, catégorisation, facturation, tableaux de bord en temps réel.",
            "Le cabinet : paramétrage de départ, révision des comptes, déclarations de TVA, bilan et liasse fiscale signés.",
            "Le cabinet : réponses à vos questions, rémunération du dirigeant, choix fiscaux, prévisionnel pour la banque.",
          ],
        },
        {
          title: "Comment se passe l'accompagnement au quotidien",
          body: (
            <>
              <p>
                Vous déposez vos justificatifs au fil de l'eau, depuis votre téléphone ou par e-mail. Le
                cabinet passe régulièrement sur votre dossier, corrige les catégorisations et vous signale ce
                qui manque. Les déclarations de TVA partent à la bonne date, sans relance de dernière minute.
              </p>
              <p>
                À la clôture, l'experte-comptable révise l'exercice, établit les comptes annuels et la liasse
                fiscale, puis vous présente le bilan en rendez-vous : ce qui a bien marché, ce qui pèse sur la
                trésorerie, ce qu'il faut anticiper l'année suivante.
              </p>
            </>
          ),
        },
        {
          title: "Pour qui c'est adapté",
          bullets: [
            "SASU, SAS, EURL et SARL qui veulent suivre leurs chiffres en temps réel.",
            "E-commerçants et commerçants avec beaucoup d'opérations bancaires.",
            "Consultants et freelances passés en société qui facturent depuis l'outil.",
            "Dirigeants déjà sur Pennylane qui veulent changer d'expert-comptable sans changer de logiciel.",
          ],
        },
        {
          title: "Pennylane ou cabinet : faut-il vraiment choisir ?",
          body: (
            <p>
              La question revient souvent sous la forme « Pennylane ou expert-comptable ? ». En pratique, les
              deux se combinent. Nous avons détaillé les différences dans notre comparatif{" "}
              <Link to="/comparatif/pennylane-vs-erkilic" className="font-bold underline underline-offset-4">
                Pennylane ou expert-comptable
              </Link>
              , et plus largement dans{" "}
              <Link to="/comparatif/cabinet-vs-en-ligne" className="font-bold underline underline-offset-4">
                cabinet comptable en ligne ou local
              </Link>
              . Si vous êtes à Montpellier ou autour, voyez aussi notre page{" "}
              <Link to="/expert-comptable-montpellier" className="font-bold underline underline-offset-4">
                expert-comptable à Montpellier
              </Link>
              .
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
    />
  ),
});
