import { createFileRoute } from "@tanstack/react-router";
import { PackPage } from "@/components/site/PackPage";
import cabinetImg from "@/assets/cabinet.jpg";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/pack/pro";

export const Route = createFileRoute("/pack/pro")({
  head: () => ({
    meta: [
      { title: "Comptable Artisans, Commerçants, PME Montpellier | Erkilic" },
      {
        name: "description",
        content:
          "Cabinet comptable pour artisans, commerçants et PME à Juvignac : bilan, TVA, paie DSN, juridique, tableaux de bord.",
      },
      {
        name: "keywords",
        content:
          "expert-comptable artisan Montpellier, comptable commerçant Juvignac, cabinet comptable PME Hérault, tenue comptabilité SARL SAS, comptable restaurateur BTP, DSN paie externalisée Montpellier, bilan société Occitanie",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Pack Artisans, Commerçants & PME — Cabinet Erkilic" },
      {
        property: "og:description",
        content:
          "Comptabilité, social et juridique pour artisans, commerçants et PME à Juvignac / Montpellier.",
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
          serviceType: "Expertise comptable PME, artisans, commerçants",
          name: "Pack Artisans, Commerçants & PME",
          provider: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Artisans, commerçants, restaurateurs, PME, SARL, SAS, société de service",
          },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: PackPro,
});

function PackPro() {
  return (
    <PackPage
      eyebrow="Pack Artisans, Commerçants & PME"
      title="Piloter votre entreprise,"
      italic="avec un vrai partenaire."
      intro="Bien plus que la simple tenue, l'intégration de vos données chiffrées fait ressortir un véritable suivi. Espace client personnalisé, tableaux de bord commentés, arbitrages fiscaux, social externalisé et secrétariat juridique — un partenariat complet pour votre entreprise."
      bullets={[
        "Tenue et bilan dans les délais",
        "Tableaux de bord mensuels commentés",
        "Paie / DSN externalisées",
        "Secrétariat juridique complet",
      ]}
      heroImage={cabinetImg}
      heroAlt="Cabinet d'expertise comptable pour artisans commerçants et PME à Juvignac Montpellier"
      sections={[
        {
          title: "Pack Comptabilité & Gestion",
          items: [
            {
              label: "Organisation comptable",
              body:
                "État des lieux, constat et solutions pour améliorer la performance de votre entité. Les analyses remettent parfois en cause certains choix — vous restez décisionnaire avisé.",
            },
            {
              label: "Établissement des comptes annuels",
              body:
                "Contrôle des écritures courantes, opérations d'inventaire, bilan, compte de résultat, annexe et déclarations fiscales en fin de mission annuelle.",
            },
            {
              label: "Tableaux de bord commentés",
              body:
                "Mensuellement, indicateurs de gestion et commentaires précis sur l'évolution de votre activité et les leviers correcteurs à activer.",
            },
            {
              label: "Entretien annuel",
              body:
                "Analyse conjointe du bilan, du compte de résultat et des déclarations. Compréhension des forces / faiblesses et des évolutions significatives.",
            },
            {
              label: "Budget annuel",
              body:
                "Élaboration d'un budget réaliste : chiffres de l'entreprise, éléments exceptionnels, conjoncture, projets et votre ressenti.",
            },
            {
              label: "Tenue de la comptabilité",
              optional: true,
              body:
                "Saisie de vos pièces (achats, ventes, banques) — souvent moins onéreux que d'embaucher un salarié dédié.",
            },
            {
              label: "Déclarations fiscales : TVA, TVS…",
              optional: true,
              body:
                "TVA, DEB, TVS, DAS2, CFE, CVAE, IS, déclaration des loyers, liasse fiscale.",
            },
            {
              label: "Situation comptable intermédiaire",
              optional: true,
              body:
                "Bilan et compte de résultat en cours d'année pour ajuster votre gestion.",
            },
          ],
        },
        {
          title: "Pack Social",
          items: [
            {
              label: "Bulletins de salaire & charges sociales",
              body:
                "Bulletins conformes à votre convention collective, calcul des charges, télépaiement possible pour votre tranquillité.",
            },
            {
              label: "Formalités d'embauche et de rupture",
              body:
                "DUE, contrats, conseils sur le type de contrat, indemnités de rupture, solde de tout compte, attestation employeur.",
            },
            {
              label: "Conseils droit du travail",
              body:
                "Réponses à vos questions spécifiques, aides à l'embauche, obligations liées aux seuils d'effectif.",
            },
            {
              label: "Audit social",
              optional: true,
              body:
                "Point sur vos pratiques, comparaison à la réglementation, note explicite avec actions correctives.",
            },
            {
              label: "Aide au recrutement",
              optional: true,
              body:
                "Définition du besoin, rédaction d'annonce, sélection de profils, entretiens et validation des aptitudes pour un poste comptable / financier.",
            },
          ],
        },
        {
          title: "Pack Juridique",
          items: [
            {
              label: "Assemblée Générale d'approbation des comptes",
              body:
                "Convocations, rapport de gestion, procès-verbaux, dépôt des comptes au Greffe, renouvellement des mandats.",
            },
            {
              label: "Conseils d'administration",
              body:
                "Préparation des convocations, assistance pendant les conseils, rédaction des procès-verbaux.",
            },
            {
              label: "Autres assemblées générales",
              optional: true,
              body:
                "Modifications statutaires, élections, investissements importants — décisions prises en cours d'année.",
            },
            {
              label: "Rédaction des statuts",
              optional: true,
              body:
                "Rédaction lors de la constitution ou de la modification. Un acte central rédigé avec vous.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Particulier", to: "/pack/particulier" }}
    />
  );
}
