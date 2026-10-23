import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/facturation-electronique-septembre-2026";
const PUBLISHED = "2026-08-15";
const UPDATED = "2026-08-15";

const faq = [
  {
    q: "Mon entreprise doit-elle recevoir des factures électroniques dès septembre 2026 ?",
    plain:
      "Oui. À partir du 1er septembre 2026, toutes les entreprises assujetties à la TVA en France, quelle que soit leur taille, doivent être en mesure de recevoir des factures électroniques via une plateforme agréée. L'obligation d'émission est progressive selon la taille de l'entreprise.",
  },
  {
    q: "Dois-je choisir une plateforme agréée moi-même ?",
    plain:
      "Chaque entreprise doit être raccordée à au moins une Plateforme Agréée (PA). Erkilic Expertise Comptable, à Juvignac, sélectionne et paramètre la plateforme adaptée à votre volume de factures et à votre outil actuel (Pennylane, Tiime, logiciel de caisse).",
  },
  {
    q: "Que se passe-t-il si je ne suis pas prêt au 1er septembre 2026 ?",
    plain:
      "Vous risquez de ne plus pouvoir encaisser vos clients dans les délais : leurs factures pourront être rejetées ou non transmises. Le risque principal est opérationnel et de trésorerie, avant même le risque de sanction.",
  },
];

export const Route = createFileRoute("/actualites/facturation-electronique-septembre-2026")({
  head: () => ({
    meta: [
      { title: "Facture électronique : ce qui change au 1er sept. 2026" },
      {
        name: "description",
        content:
          "Réception obligatoire, plateforme agréée, check-list TPE : ce que la facturation électronique change au 1er septembre 2026 pour les entreprises de l'Hérault.",
      },
      { property: "og:title", content: "Facture électronique : le cap du 1er septembre 2026" },
      {
        property: "og:description",
        content:
          "Ce que toute entreprise doit avoir mis en place au 1er septembre 2026, expliqué par un expert-comptable à Juvignac.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "Facturation électronique : ce qui change au 1er septembre 2026",
          description:
            "Obligation de réception, plateformes agréées et check-list de préparation pour les TPE de l'Hérault.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
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
        { label: "Actualités", to: "/actualites" },
        { label: "Facture électronique — sept. 2026" },
      ]}
      eyebrow="Actualité · Réforme en cours"
      h1="Facturation électronique :"
      italic="le cap du 1er septembre 2026."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            L'échéance du 1<sup>er</sup> septembre 2026 marque l'entrée réelle de
            toutes les entreprises françaises dans la facturation électronique :
            à cette date, chacune doit être capable de <strong>recevoir</strong>{" "}
            une facture au format électronique via une plateforme agréée.
          </p>
          <p className="mt-4">
            Voici l'essentiel, en résumé :
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Réception obligatoire pour toutes les entreprises assujetties à la TVA.</li>
            <li>Émission obligatoire d'abord pour les grandes entreprises et ETI, puis pour les PME et TPE.</li>
            <li>Raccordement indispensable à une Plateforme Agréée (PA).</li>
            <li>Vos données de facturation doivent être fiables : SIREN, TVA, mentions obligatoires.</li>
            <li>Erkilic Expertise Comptable réalise le paramétrage et le test pour ses clients de Juvignac et Montpellier.</li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Ce qui devient obligatoire au 1er septembre 2026",
          bullets: [
            "Être raccordé à une Plateforme Agréée pour recevoir les factures de vos fournisseurs.",
            "Disposer d'un annuaire à jour : SIREN, SIRET, numéro de TVA intracommunautaire, adresse de routage.",
            "Accepter les formats structurés (Factur-X, UBL, CII) plutôt que le PDF simple par e-mail.",
            "Transmettre les données de e-reporting pour les opérations avec les particuliers et l'international.",
          ],
        },
        {
          title: "Check-list de préparation pour une TPE de l'Hérault",
          bullets: [
            "Inventorier vos outils actuels : logiciel de facturation, caisse, tableur, e-mail.",
            "Choisir la plateforme agréée adaptée à votre volume mensuel de factures.",
            "Nettoyer votre base clients et fournisseurs (SIRET manquants, doublons).",
            "Adapter vos mentions de facture : numéro, TVA, catégorie d'opération, option de paiement.",
            "Réaliser un test d'émission et de réception avant l'échéance, pas après.",
          ],
        },
        {
          title: "Concrètement, comment le cabinet vous accompagne",
          body: (
            <p>
              Nous auditons votre chaîne de facturation, sélectionnons la
              plateforme, la paramétrons avec vous et vérifions les premiers flux
              réels. Les clients du cabinet, à Juvignac comme sur Saint-Georges-d'Orques,
              Grabels ou Celleneuve, n'ont pas à devenir experts de la réforme :
              nous prenons le paramétrage à notre charge dans le cadre de la
              mission.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Faire le point sur ma facturation",
        to: "/contact",
        sub: "30 minutes pour valider votre préparation avant septembre.",
      }}
    />
  ),
});
