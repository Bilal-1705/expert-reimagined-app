import { createFileRoute, Link } from "@tanstack/react-router";
import { faqJsonLd } from "@/components/site/ContentPage";
import { PackPage } from "@/components/site/PackPage";
import heroOffice from "@/assets/hero-office.jpg";
import heroOfficeWebp from "@/assets/hero-office.webp";

const SITE = "https://erkilic.fr";
const PATH = "/pack/profession-liberale";
const UPDATED = "2026-10-23";

const faq = [
  {
    q: "Micro-BNC ou déclaration contrôlée (2035) : que choisir ?",
    a: "Le micro-BNC applique un abattement forfaitaire de 34 % sur vos recettes, jusqu'à 83 600 € de recettes en 2026. Si vos frais réels dépassent 34 % de vos recettes (local, véhicule, matériel, remplaçants, cotisations), la déclaration contrôlée avec la 2035 devient plus intéressante. Le calcul se fait sur vos chiffres, et l'option peut se prendre en cours de route.",
  },
  {
    q: "Quand faut-il déposer la déclaration 2035 ?",
    a: "La 2035 se dépose au printemps, en général début mai, avec un délai supplémentaire de quinze jours pour un dépôt en ligne. Le cabinet prépare la déclaration, la télétransmet et reporte le bénéfice sur votre déclaration de revenus.",
  },
  {
    q: "Faut-il encore adhérer à une association de gestion agréée ?",
    a: "L'adhésion n'est plus nécessaire pour éviter une majoration du bénéfice : la majoration de 25 % pour non-adhésion a été supprimée progressivement et ne s'applique plus depuis l'imposition des revenus 2023. Une AGA peut rester utile pour ses formations ou ses services, mais ce n'est plus un passage obligé.",
  },
  {
    q: "Quelle caisse de retraite pour une profession libérale ?",
    a: "Cela dépend du métier : CARMF pour les médecins, CARPIMKO pour les infirmiers, kinésithérapeutes, orthophonistes, orthoptistes et pédicures-podologues, CNBF pour les avocats, CIPAV pour plusieurs professions réglementées comme les architectes ou les psychologues. Les professions libérales non réglementées relèvent de la sécurité sociale des indépendants (SSI).",
  },
  {
    q: "Quand passer en SELARL ou en SELAS ?",
    a: "Quand vos revenus deviennent élevés et que vous n'avez pas besoin de tout prélever chaque année, la société d'exercice libéral permet de laisser une partie du bénéfice à l'impôt sur les sociétés. Le passage a un coût juridique et change votre protection sociale : il se décide avec une simulation sur plusieurs années.",
  },
];

export const Route = createFileRoute("/pack/profession-liberale")({
  head: () => ({
    meta: [
      { title: "Expert-comptable profession libérale (BNC) à Montpellier | Erkilic" },
      {
        name: "description",
        content:
          "Expert-comptable pour professions libérales à Montpellier : micro-BNC ou 2035, CARMF, CARPIMKO, CIPAV, SELARL. Médecins, kinés, avocats, consultants.",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Expert-comptable profession libérale (BNC) | Erkilic" },
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
          provider: { "@id": `${SITE}/#cabinet` },
          areaServed: ["Juvignac", "Montpellier", "Hérault", "Occitanie"],
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Professions libérales : santé (médecin, infirmier, kiné, sage-femme), droit, conseil, architecture",
          },
          url: `${SITE}${PATH}`,
        }),
      },
      { type: "application/ld+json", children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.a }))) },
    ],
  }),
  component: PackLiberale,
});

function PackLiberale() {
  return (
    <PackPage
      funnel="liberal"
      dateModified={UPDATED}
      faq={faq}
      editorial={
        <>
          <article>
            <h2>Un expert-comptable qui connaît les BNC</h2>
            <p>
              Les professions libérales relèvent des bénéfices non commerciaux (BNC). Leur comptabilité suit en
              général une logique de recettes et de dépenses encaissées, avec ses propres règles : frais de
              véhicule, quote-part du local professionnel, rétrocessions d'honoraires aux remplaçants, cotisations
              sociales obligatoires et facultatives. Le cabinet accompagne des médecins, kinésithérapeutes,
              infirmiers, avocats, architectes, consultants et formateurs à Montpellier et dans l'Hérault.
            </p>
          </article>
          <article>
            <h2>Micro-BNC ou régime de la déclaration contrôlée</h2>
            <p>
              En micro-BNC, l'administration retient vos recettes moins un abattement forfaitaire de 34 %, dans la
              limite de 83 600 € de recettes en 2026. C'est simple, mais vos frais réels ne sont pas déduits. En
              déclaration contrôlée, vous déposez chaque année une déclaration 2035 et vous déduisez vos dépenses
              réelles. Dès que vos frais dépassent le tiers de vos recettes, ce régime devient généralement plus
              avantageux.
            </p>
          </article>
          <article>
            <h2>Cotisations : SSI et caisses de professions libérales</h2>
            <p>
              Selon votre métier, vos cotisations retraite vont à une caisse spécifique (CARMF, CARPIMKO, CNBF,
              CIPAV) ou à la sécurité sociale des indépendants. Les appels sont provisoires puis régularisés : le
              cabinet vérifie les bases déclarées, anticipe les régularisations et vous aide à lisser votre
              trésorerie. Les médecins et auxiliaires médicaux trouveront plus de détails sur notre page{" "}
              <Link to="/secteur/professions-liberales-medicales" className="font-bold underline underline-offset-4">
                professions médicales et paramédicales
              </Link>
              .
            </p>
          </article>
          <article>
            <h2>Exercice en société : SELARL, SELAS, SCM</h2>
            <p>
              Une société d'exercice libéral permet d'arbitrer entre rémunération et bénéfice laissé dans la
              société, et de préparer une association ou une cession. Une SCM permet de partager les frais d'un
              cabinet à plusieurs. Le cabinet chiffre ces options sur plusieurs années avant toute décision, et
              assure ensuite le suivi juridique (assemblées, cessions de parts).
            </p>
          </article>
        </>
      }
      eyebrow="Pack Profession Libérale"
      title="La comptabilité BNC,"
      italic="par des spécialistes."
      intro="Que votre activité soit réglementée ou non, le régime libéral se caractérise par de nombreuses spécificités comptables, fiscales et juridiques. Nous nous positionnons en véritable spécialiste, vous facilitons vos prises de décisions et vous déchargeons de certaines responsabilités."
      bullets={[
        "Micro-BNC ou déclaration 2035",
        "Externalisation paie et DSN",
        "Suivi trimestriel via espace client",
        "Conseil patrimonial dédié",
      ]}
      heroImage={heroOfficeWebp}
      heroAlt="Expert-comptable pour profession libérale à Juvignac et Montpellier : BNC et déclaration 2035"
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
                "Ensemble nous analysons vos résultats : points forts, points faibles, évolutions significatives. Un vrai temps de compréhension et de conseil.",
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
              label: "Assistance SSI et caisses libérales",
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
                "DUE, affiliations, contrats, indemnités de rupture, solde de tout compte, attestation France Travail.",
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
                "SCI, SCM, SEL, SCP, SDF : secrétariat juridique (CA, AG), cessions de titres, modifications statutaires.",
            },
          ],
        },
      ]}
      next={{ label: "Pack Artisans, Commerçants & PME", to: "/pack/pro" }}
    />
  );
}
