import { createFileRoute } from "@tanstack/react-router";
import { PackPage } from "@/components/site/PackPage";
import handsLedger from "@/assets/hands-ledger.jpg";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/pack/particulier";

export const Route = createFileRoute("/pack/particulier")({
  head: () => ({
    meta: [
      { title: "Déclaration Impôts Particulier Montpellier | Erkilic" },
      {
        name: "description",
        content:
          "Déclaration IR, IFI, revenus fonciers, LMNP et optimisation fiscale pour particuliers à Juvignac / Montpellier.",
      },
      {
        name: "keywords",
        content:
          "expert-comptable particulier Montpellier, déclaration impôts revenus Juvignac, comptable IFI Hérault, déclaration revenus fonciers LMNP, optimisation fiscale particulier, gestion patrimoniale Montpellier, loi Girardin conseil",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Pack Particulier — Cabinet Erkilic" },
      {
        property: "og:description",
        content:
          "Confiez votre fiscalité personnelle à un expert-comptable à Juvignac / Montpellier.",
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
          serviceType: "Fiscalité personnelle, gestion patrimoniale",
          name: "Pack Particulier",
          provider: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: { "@type": "PeopleAudience", audienceType: "Particuliers, foyers fiscaux, investisseurs immobiliers" },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: PackParticulier,
});

function PackParticulier() {
  return (
    <PackPage
      eyebrow="Pack Particulier"
      title="Votre fiscalité personnelle,"
      italic="entre de bonnes mains."
      intro="Vous éprouvez des difficultés à compléter votre déclaration d'impôt et vous ne voulez pas passer à côté de dispositifs d'allègements fiscaux ? Confiez-nous votre fiscalité personnelle : impôt sur le revenu, IFI, revenus fonciers, LMNP, patrimoine."
      bullets={[
        "Déclaration IR / IFI, revenus fonciers, LMNP",
        "Contrôle taxe foncière & taxe d'habitation",
        "Bilan et audit patrimonial",
        "Optimisation fiscale (Girardin, Pinel, etc.)",
      ]}
      heroImage={handsLedger}
      heroAlt="Expert-comptable pour particuliers à Juvignac Montpellier — déclaration d'impôts"
      sections={[
        {
          title: "Pack Particuliers",
          items: [
            {
              label: "Déclarations d'impôts personnelles",
              body:
                "Les déclarations peuvent se révéler aussi complexes que pour un professionnel. Nous vous assistons sur l'émission de vos déclarations d'impôt sur le revenu et IFI. Objectif : profiter au mieux des dispositifs d'allègement. Nous vérifions également la cohérence de votre taxe foncière et taxe d'habitation.",
            },
            {
              label: "Gestion patrimoniale",
              body:
                "L'expert-comptable est un partenaire de choix pour vos projets de succession et vos placements long terme. Deux formules : bilan patrimonial (évolution annuelle) et audit patrimonial (stratégie complète pour minimiser droits de succession et donation).",
            },
            {
              label: "Optimisation fiscale",
              body:
                "Grâce à une organisation mise en place à long terme, nous pouvons vous faire bénéficier d'avantages fiscaux importants (loi Girardin, dispositifs immobiliers). L'optimisation vaut pour l'IR et l'IFI — nous explorons toutes les possibilités pour réduire, voire éliminer, votre charge fiscale.",
            },
            {
              label: "Revenus fonciers & LMNP",
              body:
                "Régime micro-foncier / réel, amortissements LMNP, déficits fonciers reportables, arbitrage entre régimes. Nous établissons votre déclaration et vous conseillons sur les investissements.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Auto-Entrepreneur", to: "/pack/auto-entrepreneur" }}
    />
  );
}
