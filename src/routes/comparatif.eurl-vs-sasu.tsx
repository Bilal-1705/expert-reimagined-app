import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd, articleJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/eurl-vs-sasu";
const PUBLISHED = "2026-07-08";
const UPDATED = "2026-08-18";

const faq = [
  {
    q: "SASU ou EURL : quelle est la différence entre EURL et SASU ?",
    plain:
      "La différence entre EURL et SASU tient à deux choses. Le régime social : le gérant d'EURL est TNS (SSI, environ 40 à 45 % de cotisations sur la rémunération), le président de SASU est assimilé salarié (environ 75 à 80 %, mais couverture identique à un salarié hors chômage). Le régime fiscal : l'EURL est à l'IR par défaut avec option IS, la SASU est à l'IS par défaut avec option IR limitée à 5 ans. Juridiquement, les deux sont des sociétés unipersonnelles à responsabilité limitée aux apports.",
  },
  {
    q: "EURL ou SASU : lequel coûte le moins cher en 2026 ?",
    plain:
      "À rémunération identique, l'EURL coûte moins cher : pour 40 000 € de revenu net, comptez environ 17 000 à 18 000 € de cotisations en EURL contre 30 000 à 32 000 € en SASU. Mais la SASU permet la stratégie zéro salaire + dividendes taxés à 30 % de flat tax : dans ce scénario, elle devient la moins chère. Le comparatif n'a de sens que sur vos chiffres et votre besoin de couverture sociale.",
  },
  {
    q: "Quels sont les avantages de la SASU par rapport à l'EURL ?",
    plain:
      "Les avantages de la SASU : dividendes non soumis aux cotisations sociales (flat tax 30 % uniquement), retraite au régime général et AGIRC-ARRCO, maintien de l'ARE Pôle emploi si aucun salaire n'est versé, statuts très souples, transformation immédiate en SAS pour accueillir des associés ou des investisseurs.",
  },
  {
    q: "Quels sont les avantages de l'EURL par rapport à la SASU ?",
    plain:
      "Les avantages de l'EURL : cotisations sociales nettement plus faibles à rémunération égale, option IR possible sans limite de durée (utile en début d'activité déficitaire), gestion administrative plus légère, cadre juridique encadré par la loi donc moins de risques de statuts mal rédigés, et régime du conjoint collaborateur accessible.",
  },
  {
    q: "SAS ou EURL : la comparaison est-elle la même ?",
    plain:
      "Oui pour l'essentiel. La SAS est la version pluripersonnelle de la SASU et la SARL celle de l'EURL. Les arbitrages social (assimilé salarié contre TNS) et dividendes (flat tax contre cotisations TNS au-delà de 10 % du capital) sont identiques. Seule nuance : en SARL, le gérant minoritaire est assimilé salarié, contrairement au gérant majoritaire.",
  },
  {
    q: "Quel statut choisir pour se verser des dividendes ?",
    plain:
      "La SASU. Les dividendes n'y supportent que la flat tax de 30 % (12,8 % d'IR et 17,2 % de prélèvements sociaux). En EURL à l'IS, la fraction de dividendes qui dépasse 10 % du capital social, des primes d'émission et du compte courant est soumise aux cotisations TNS, ce qui peut ajouter 40 % de charges.",
  },
  {
    q: "Peut-on passer d'EURL à SASU ou l'inverse ?",
    plain:
      "Oui, par transformation de la société, sans créer de personne morale nouvelle. Attention aux conséquences : coût juridique, éventuelle imposition des plus-values latentes en cas de changement de régime fiscal, changement de caisse sociale, et perte des droits en cours de constitution. Erkilic Expertise Comptable chiffre l'opération avant de la déclencher.",
  },
  {
    q: "Quel statut choisir quand on touche le chômage ?",
    plain:
      "La SASU sans rémunération permet de conserver l'intégralité de l'ARE pendant que l'entreprise démarre, car aucun salaire n'est versé. En EURL, la rémunération du gérant réduit l'allocation et un minimum forfaitaire de cotisations reste dû même sans revenu. Pour un créateur indemnisé, la SASU est presque toujours plus avantageuse la première année.",
  },
];

export const Route = createFileRoute("/comparatif/eurl-vs-sasu")({
  head: () => ({
    meta: [
      { title: "SASU ou EURL : lequel choisir en 2026 ? Comparatif chiffré" },
      {
        name: "description",
        content:
          "SASU ou EURL en 2026 : charges sociales, dividendes, retraite et chômage comparés sur 3 cas chiffrés par une experte-comptable. Tableau et simulateur.",
      },
      { property: "og:title", content: "SASU ou EURL : le comparatif 2026" },
      {
        property: "og:description",
        content:
          "Charges, dividendes, retraite, chômage : le tableau comparatif EURL vs SASU et le bon choix selon votre profil.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))),
      },
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "SASU ou EURL : lequel choisir en 2026 ? Comparatif chiffré son statut",
          description:
            "Comparatif chiffré EURL vs SASU 2026 : cotisations sociales, fiscalité, dividendes, retraite, chômage et cas concrets.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Comparatifs", to: "/comparatifs" },
        { label: "EURL vs SASU" },
      ]}
      eyebrow="Comparatif · Statut juridique"
      h1="SASU ou EURL ?"
      italic="le comparatif chiffré 2026"
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            <strong>EURL ou SASU</strong> : les deux formes dominent la création
            d'entreprise à associé unique. La différence entre EURL et SASU ne
            se joue pas sur la responsabilité (limitée aux apports dans les deux
            cas) mais sur le <strong>régime social du dirigeant</strong>, la{" "}
            <strong>fiscalité par défaut</strong> et le{" "}
            <strong>traitement des dividendes</strong>.
          </p>
          <ul className="mt-6 space-y-2 text-[16px]">
            <li>
              <strong>EURL</strong> : gérant TNS, ~40-45 % de cotisations, IR par
              défaut, dividendes chargés au-delà de 10 % du capital.
            </li>
            <li>
              <strong>SASU</strong> : président assimilé salarié, ~75-80 % de
              cotisations, IS par défaut, dividendes à la flat tax 30 %.
            </li>
            <li>
              <strong>Le bon réflexe</strong> : comparer sur vos revenus
              prévisionnels, pas sur des moyennes —{" "}
              <Link to="/simulateur-statut" className="underline underline-offset-4">
                testez le simulateur de statut
              </Link>
              .
            </li>
          </ul>
        </>
      }
      comparisonTable={{
        title: "EURL vs SASU : tableau comparatif 2026",
        intro: (
          <p>
            Comparaison point par point sur les critères qui changent réellement
            votre revenu disponible et votre protection.
          </p>
        ),
        columns: ["Critère", "EURL", "SASU"],
        rows: [
          {
            criterion: "Statut du dirigeant",
            competitor: "Gérant associé unique — travailleur non salarié (SSI)",
            erkilic: "Président — assimilé salarié (régime général)",
          },
          {
            criterion: "Cotisations sociales",
            competitor: "≈ 40 à 45 % du revenu net",
            erkilic: "≈ 75 à 80 % du salaire net",
          },
          {
            criterion: "Cotisations si zéro rémunération",
            competitor: "Minimum forfaitaire dû (~1 200 €/an)",
            erkilic: "Aucune cotisation",
          },
          {
            criterion: "Fiscalité par défaut",
            competitor: "IR (option IS irrévocable possible)",
            erkilic: "IS (option IR limitée à 5 exercices)",
          },
          {
            criterion: "Dividendes",
            competitor: "Cotisations TNS au-delà de 10 % du capital + CCA",
            erkilic: "Flat tax 30 % uniquement, aucune cotisation",
          },
          {
            criterion: "Retraite",
            competitor: "SSI — droits plus faibles, coût plus bas",
            erkilic: "Régime général + AGIRC-ARRCO — droits supérieurs",
          },
          {
            criterion: "Cumul avec l'ARE",
            competitor: "Réduit dès qu'une rémunération est versée",
            erkilic: "Maintien intégral si aucun salaire versé",
          },
          {
            criterion: "Chômage du dirigeant",
            competitor: "Aucun droit cotisé",
            erkilic: "Aucun droit cotisé non plus",
          },
          {
            criterion: "Souplesse des statuts",
            competitor: "Encadrée par la loi — cadre sécurisant",
            erkilic: "Liberté quasi totale — rédaction à soigner",
          },
          {
            criterion: "Entrée d'associés / investisseurs",
            competitor: "Devient une SARL — parts sociales, agrément",
            erkilic: "Devient une SAS — actions, très fluide",
          },
          {
            criterion: "Coût comptable annuel",
            competitor: "Équivalent",
            erkilic: "Équivalent",
          },
        ],
      }}
      verdict={
        <p>
          <strong>EURL</strong> si vous vous versez l'essentiel de vos revenus en
          rémunération et cherchez le coût social le plus bas.{" "}
          <strong>SASU</strong> si vous privilégiez les dividendes, si vous
          démarrez en conservant l'ARE, ou si vous visez une meilleure retraite
          et l'entrée future d'associés. Au-delà d'environ 60 000 € de résultat,
          l'arbitrage se calcule au cas par cas.
        </p>
      }
      sections={[
        {
          title: "Le point de bascule chiffré entre EURL et SASU",
          bullets: [
            "Résultat de 30 000 € entièrement en rémunération : l'EURL laisse environ 4 000 à 5 000 € de net de plus par an.",
            "Résultat de 60 000 € avec rémunération limitée au SMIC + dividendes : la SASU reprend l'avantage grâce à la flat tax.",
            "Créateur indemnisé par France Travail : la SASU sans salaire préserve 100 % de l'ARE, l'EURL non.",
            "Dirigeant déjà couvert par ailleurs (conjoint, retraité, autre emploi) : la SASU zéro salaire + dividendes est la plus efficiente.",
            "Besoin de trimestres de retraite et de prévoyance solides : la SASU les achète plus cher mais les fournit vraiment.",
          ],
        },
        {
          title: "Différence entre EURL et SASU sur la protection sociale",
          bullets: [
            "SASU : maladie, maternité, retraite de base et complémentaire au niveau salarié, indemnités journalières calculées sur le salaire.",
            "EURL : couverture SSI correcte sur la santé, mais retraite complémentaire plus faible et prévoyance à compléter.",
            "Aucun des deux statuts n'ouvre de droits au chômage pour le dirigeant.",
            "En EURL, une prévoyance Madelin et un PER rétablissent l'équilibre pour un coût inférieur au surcoût SASU.",
          ],
        },
        {
          title: "EURL ou SASU : erreurs les plus fréquentes",
          bullets: [
            "Choisir la SASU « parce que c'est moderne » puis se verser un salaire mensuel : le surcoût social atteint vite 10 000 €/an.",
            "Choisir l'EURL à l'IR sans anticiper une année très bénéficiaire : l'impôt personnel explose.",
            "Opter pour l'IS en EURL sans mesurer l'effet des cotisations sur les dividendes au-delà de 10 % du capital.",
            "Sous-capitaliser une EURL à l'IS : plus le capital est faible, plus vite les dividendes deviennent chargés.",
            "Rédiger des statuts de SASU sur un modèle gratuit : clauses de direction et d'agrément inadaptées.",
          ],
        },
        {
          title: "SAS vs EURL, SARL vs SASU : les variantes",
          bullets: [
            "SAS = SASU à plusieurs associés : mêmes règles sociales et fiscales.",
            "SARL = EURL à plusieurs associés ; le gérant minoritaire y devient assimilé salarié.",
            "Profession libérale réglementée : le cadre passe par la SELARL ou la SELAS, avec des règles de détention spécifiques.",
            "Entreprise individuelle : plus simple, patrimoine séparé depuis 2022, mais aucune capacité à arbitrer rémunération/dividendes.",
          ],
        },
        {
          title: "Choisir son statut avec Erkilic Expertise Comptable à Juvignac",
          bullets: [
            "Comparatif chiffré sur 24 mois EURL vs SASU vs EI à partir de vos prévisions de chiffre d'affaires.",
            "Simulation du revenu net disponible, cotisations, IS et IR de votre foyer.",
            "Arbitrage rémunération / dividendes et calibrage du capital social.",
            "Rédaction des statuts, immatriculation et déclarations la première année.",
            "Cabinet inscrit à l'Ordre des experts-comptables, à Juvignac près de Montpellier — 09 72 54 07 71.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Lancer le simulateur",
        to: "/simulateur-statut",
        sub: "Comparez EURL et SASU sur vos propres chiffres.",
      }}
    />
  ),
});
