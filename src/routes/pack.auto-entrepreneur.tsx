import { createFileRoute } from "@tanstack/react-router";
import { PackPage } from "@/components/site/PackPage";
import handsLedger from "@/assets/hands-ledger.jpg";

const SITE = "https://erkilic.fr";
const PATH = "/pack/auto-entrepreneur";

export const Route = createFileRoute("/pack/auto-entrepreneur")({
  head: () => ({
    meta: [
      { title: "Comptable Auto-Entrepreneur Montpellier | Erkilic" },
      {
        name: "description",
        content:
          "Comptable auto-entrepreneur à Juvignac / Montpellier : URSSAF, suivi CA, seuils TVA, passage en société. Devis gratuit.",
      },
      {
        name: "keywords",
        content:
          "expert-comptable auto-entrepreneur Montpellier, comptable micro-entreprise Juvignac, déclaration URSSAF auto-entrepreneur, dépassement seuil auto-entrepreneur, passage EURL SASU, comptable freelance Hérault",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Pack Auto-Entrepreneur — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Un cabinet d'expert-comptable pour sécuriser votre micro-entreprise à Juvignac / Montpellier.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:image", content: `${SITE}${handsLedger}` },
      { name: "twitter:image", content: `${SITE}${handsLedger}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Expertise comptable auto-entrepreneur",
          name: "Pack Auto-Entrepreneur",
          provider: {
            "@type": "AccountingService",
            name: "Erkilic Expertise Comptable",
            address: {
              "@type": "PostalAddress",
              streetAddress: "29 bis rue du Poumpidou",
              addressLocality: "Juvignac",
              postalCode: "34990",
              addressCountry: "FR",
            },
          },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: { "@type": "BusinessAudience", audienceType: "Auto-entrepreneurs, micro-entrepreneurs, freelances" },
          url: `${SITE}${PATH}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Prestations", item: `${SITE}/services` },
            { "@type": "ListItem", position: 3, name: "Pack Auto-Entrepreneur", item: `${SITE}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: PackAutoEntrepreneur,
});

function PackAutoEntrepreneur() {
  return (
    <PackPage
      eyebrow="Pack Auto-Entrepreneur"
      title="Un cadre simple,"
      italic="une rigueur professionnelle."
      intro="Votre auto-entreprise, certes à chiffre d'affaires limité, vous génère des obligations comptables et fiscales que vous ne maîtrisez pas toujours. Confiez-nous une mission qui vous fera gagner du temps et vous permettra d'avoir une activité pérenne."
      bullets={[
        "Suivi trimestriel ou mensuel du chiffre d'affaires",
        "Déclarations URSSAF sans stress",
        "Alerte franchissement des seuils TVA",
        "Comparatif micro / réel pour arbitrer",
      ]}
      heroImage={handsLedger}
      heroAlt="Comptable pour auto-entrepreneur à Juvignac et Montpellier — cabinet Erkilic Expertise Comptable"
      sections={[
        {
          title: "Pack Auto-Entrepreneur",
          items: [
            {
              label: "Organisation administrative",
              body:
                "Le régime d'auto-entrepreneur se veut simplifié mais nécessite la rigueur de n'importe quelle entreprise. Nous vous aidons à mettre en place une organisation permettant de respecter vos obligations légales en toute simplicité.",
            },
            {
              label: "Déclaration du chiffre d'affaires",
              body:
                "Chaque trimestre ou chaque mois, nous effectuons votre déclaration de chiffre d'affaires pour vos différentes activités, principales et secondaires.",
            },
            {
              label: "Tableau de suivi du chiffre d'affaires",
              body:
                "Nous produisons un tableau de suivi de votre activité qui vous permet d'en distinguer l'évolution et de vérifier le dépassement des seuils (franchise TVA et micro-entreprise).",
            },
            {
              label: "Tenue de votre comptabilité",
              optional: true,
              body:
                "Votre comptabilité est allégée mais vous devez tenir à jour un registre des recettes et un registre des achats (pour les activités d'achat / revente). Nous tenons ces documents obligatoires pour vous.",
            },
            {
              label: "Comparatif avec les régimes réels",
              optional: true,
              body:
                "Le régime micro peut être avantageux mais plafonne le CA, impose des cotisations même sans bénéfice, et n'autorise pas la déduction de TVA. Nous comparons votre situation aux régimes réels (EI, EURL, SASU) et concluons sur la forme la plus intéressante.",
            },
            {
              label: "Changement de régime",
              optional: true,
              body:
                "Si votre activité se développe et qu'un autre régime devient plus avantageux, nous nous chargeons des formalités de bascule et de la reprise comptable.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Créateur d'entreprise", to: "/pack/createur" }}
    />
  );
}
