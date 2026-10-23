import { createFileRoute } from "@tanstack/react-router";
import { PackPage } from "@/components/site/PackPage";
import heroOffice from "@/assets/hero-office.jpg";

const SITE = "https://erkilic.fr";
const PATH = "/pack/profession-liberale";

export const Route = createFileRoute("/pack/profession-liberale")({
  head: () => ({
    meta: [
      { title: "Comptable Profession Libérale Montpellier | BNC 2035" },
      {
        name: "description",
        content:
          "Cabinet spécialisé BNC, 2035, AGA à Juvignac / Montpellier : médecins, kinés, avocats, architectes, consultants.",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Pack Profession Libérale — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Spécialiste des professions libérales à Juvignac / Montpellier : BNC, 2035, AGA, social et conseil.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:image", content: `${SITE}${heroOffice}` },
      { name: "twitter:image", content: `${SITE}${heroOffice}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Expertise comptable profession libérale",
          name: "Pack Profession Libérale",
          provider: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Professions libérales — santé (médecin, infirmier, kiné, sage-femme), droit, conseil, architecture",
          },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: PackLiberale,
});

function PackLiberale() {
  return (
    <PackPage
      funnel="liberal"
      eyebrow="Pack Profession Libérale"
      title="La comptabilité BNC,"
      italic="par des spécialistes."
      intro="Que votre activité soit réglementée ou non, le régime libéral se caractérise par de nombreuses spécificités comptables, fiscales et juridiques. Nous nous positionnons en véritable spécialiste, vous facilitons vos prises de décisions et vous déchargeons de certaines responsabilités."
      bullets={[
        "Déclaration 2035, BNC, AGA",
        "Externalisation paie et DSN",
        "Suivi trimestriel via espace client",
        "Conseil patrimonial dédié",
      ]}
      heroImage={heroOffice}
      heroAlt="Expert-comptable pour profession libérale à Juvignac Montpellier — BNC, 2035, AGA"
      sections={[
        {
          title: "Pack Comptabilité & Gestion",
          items: [
            {
              label: "Tenue de la comptabilité",
              body:
                "Nous vous déchargeons partiellement ou totalement de votre comptabilité : saisie des pièces (factures d'achats, ventes, relevés bancaires), rapprochements et contrôles.",
            },
            {
              label: "Tableaux de bord trimestriels",
              body:
                "Indicateurs clés pour piloter votre activité : niveau d'activité, trésorerie, principales charges. Ratios personnalisés en fonction de vos besoins.",
            },
            {
              label: "Comptes annuels et déclaration 2035",
              body:
                "Contrôle des écritures courantes, opérations d'inventaire dans le respect des normes professionnelles. Bilan, compte de résultat et déclarations fiscales transmis en fin de mission.",
            },
            {
              label: "Entretien annuel",
              body:
                "Ensemble nous analysons vos résultats — points forts, points faibles, évolutions significatives. Un vrai temps de compréhension et de conseil.",
            },
            {
              label: "Situation comptable intermédiaire",
              optional: true,
              body:
                "Bilan et compte de résultat en cours d'année pour ajuster votre gestion sur le solde de l'exercice.",
            },
            {
              label: "Déclarations fiscales : TVA, CET…",
              optional: true,
              body:
                "Réalisation ou contrôle de vos déclarations courantes : TVA, CFE, CVAE, taxe sur les véhicules, DAS2.",
            },
          ],
        },
        {
          title: "Pack Social",
          items: [
            {
              label: "Assistance RSI / SSI",
              body:
                "Le régime des indépendants concerne les libéraux. Nous vous assistons sur les calculs prévisionnels puis réels, la vérification des appels et la recherche de diminutions possibles.",
            },
            {
              label: "Bulletins de salaire & charges sociales",
              body:
                "Bulletins réalisés par un prestataire spécialisé adapté à votre convention collective. Calcul des charges, télépaiement possible.",
            },
            {
              label: "Assistance en cas de contrôle URSSAF",
              optional: true,
              body:
                "Pré-réunion, présence pendant le contrôle, réponses aux demandes complémentaires, contestation des sanctions si nécessaire.",
            },
            {
              label: "Formalités d'embauche et de rupture",
              optional: true,
              body:
                "DUE, affiliations, contrats, indemnités de rupture, solde de tout compte, attestation Pôle Emploi.",
            },
          ],
        },
        {
          title: "Pack Conseil",
          items: [
            {
              label: "Gestion patrimoniale",
              body:
                "Bilan patrimonial annuel ou audit patrimonial approfondi : stratégie succession / donation, placements long terme, minimisation des droits.",
            },
            {
              label: "Aide au pilotage & trésorerie",
              body:
                "Récupération dématérialisée des relevés bancaires, suivi personnalisé, interface avec la banque pour financements et réduction des frais.",
            },
            {
              label: "Suivi juridique des structures de groupe",
              body:
                "SCI, SCM, SEL, SCP, SDF — secrétariat juridique (CA, AG), cessions de titres, modifications statutaires.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Artisans, Commerçants & PME", to: "/pack/pro" }}
    />
  );
}
