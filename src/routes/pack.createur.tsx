import { createFileRoute } from "@tanstack/react-router";
import { PackPage } from "@/components/site/PackPage";
import cabinetImg from "@/assets/cabinet.jpg";

const SITE = "https://erkilic.fr";
const PATH = "/pack/createur";

export const Route = createFileRoute("/pack/createur")({
  head: () => ({
    meta: [
      { title: "Création Entreprise Montpellier | Erkilic Comptable" },
      {
        name: "description",
        content:
          "Création d'entreprise à Montpellier / Juvignac : prévisionnel, choix du statut (SASU, EURL, SARL), aides, 1ère année.",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Pack Créateur d'entreprise — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Un co-pilote pour lancer votre entreprise sereinement dans l'Hérault.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:image", content: `${SITE}${cabinetImg}` },
      { name: "twitter:image", content: `${SITE}${cabinetImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Accompagnement création d'entreprise",
          name: "Pack Créateur d'entreprise",
          provider: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: { "@type": "BusinessAudience", audienceType: "Créateurs d'entreprise, porteurs de projet" },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: PackCreateur,
});

function PackCreateur() {
  return (
    <PackPage
      eyebrow="Pack Créateur d'entreprise"
      title="Créer une entreprise,"
      italic="ensemble et sereinement."
      intro="Créer une entreprise peut s'avérer complexe : l'accompagnement d'un expert-comptable est généralement indispensable. Nous sommes à vos côtés pour vous guider dans vos choix, analyser la viabilité de votre projet, choisir les financements, identifier le statut adapté et vous décharger des démarches. Quel que soit l'état d'avancement de votre projet, nous co-pilotons ensemble."
      bullets={[
        "Étude de faisabilité et viabilité économique",
        "Prévisionnel financier sur 12 à 24 mois",
        "Aide au choix : EI, SASU, EURL, SARL",
        "Recherche d'aides et subventions locales",
      ]}
      heroImage={cabinetImg}
      heroAlt="Accompagnement à la création d'entreprise à Juvignac Montpellier — cabinet Erkilic Expertise Comptable"
      sections={[
        {
          title: "Pack Créateur",
          items: [
            {
              label: "Entretien conseil",
              body:
                "Notre échange vous permet d'obtenir l'avis d'un professionnel sur la pertinence et la viabilité de votre projet dans son environnement économique, financier et social. Ce premier rendez-vous fixe le timing de la phase de constitution et de démarrage.",
            },
            {
              label: "Prévisionnel détaillé",
              body:
                "Nous étudions vos besoins prévisionnels : apports, prêts, aides, chiffre d'affaires, investissements, achats, charges externes, personnel, impôts. Nous composons un plan de trésorerie sur 12–24 mois pour sécuriser votre démarrage. Un dossier complet vous est remis pour convaincre banques et investisseurs.",
            },
            {
              label: "Accompagnement bancaire",
              body:
                "Nous comparons les propositions de financements (taux, frais adjacents) et pouvons vous accompagner en négociation aux côtés de votre conseiller. Nous vous assistons au préalable sur l'ouverture d'un compte professionnel.",
            },
            {
              label: "Recherche d'aides et subventions",
              body:
                "En fonction de votre projet, de sa localisation et du contexte, nous recherchons aides financières, exonérations fiscales et subventions auxquelles vous pouvez prétendre. Nous vous assistons pour le dépôt des dossiers.",
            },
            {
              label: "Choix du statut juridique et social",
              body:
                "Votre protection sociale dépend de la forme juridique retenue (Régime général vs Sécurité Sociale des Indépendants) et de votre place dans l'entreprise. Nous optimisons statut et cotisations selon votre situation.",
            },
            {
              label: "Rédaction des statuts & constitution",
              optional: true,
              body:
                "Nous rédigeons vos statuts, accomplissons les formalités d'immatriculation RCS, déclarations de création (régime TVA, options fiscales, statut du conjoint le cas échéant).",
            },
            {
              label: "Aide à la détermination du projet",
              optional: true,
              body:
                "Un soutien pour valider et parfaire votre idée, vérifier l'adéquation projet personnel / professionnel, et vous assister sur l'étude de marché.",
            },
            {
              label: "Suivi de la 1ère année",
              optional: true,
              body:
                "Organisation comptable et administrative, mise en place des outils de gestion, diagnostic financier de la première année.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Profession Libérale", to: "/pack/profession-liberale" }}
    />
  );
}
