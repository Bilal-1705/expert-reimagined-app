import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/salaire-ou-dividendes-sasu";
const PUBLISHED = "2026-11-07";
const TITLE = "Salaire ou dividendes en SASU : que choisir en 2026 ?";
const DESCRIPTION =
  "Salaire ou dividendes en SASU : PFU à 31,4 %, charges sociales, protection du président et exemple chiffré pour arbitrer avant la fin de l'année.";

const faq = [
  {
    q: "Peut-on ne pas se verser de salaire en SASU ?",
    a: "Oui, rien ne l'impose. Le président qui ne perçoit aucune rémunération n'est pas affilié au régime général au titre de son mandat : il ne cotise ni pour la retraite ni pour les indemnités journalières. Il peut ensuite se verser des dividendes si la société a des bénéfices distribuables. Ce choix convient surtout à un dirigeant déjà couvert ailleurs, ou qui conserve ses allocations chômage.",
  },
  {
    q: "Quel est le taux d'imposition des dividendes en 2026 ?",
    a: "Par défaut, les dividendes sont soumis au prélèvement forfaitaire unique de 31,4 % : 12,8 % d'impôt sur le revenu et 18,6 % de prélèvements sociaux. Les prélèvements sociaux sur les revenus du capital sont passés de 17,2 % à 18,6 % au 1er janvier 2026 (hausse de la CSG de 9,2 % à 10,6 %). Vous pouvez opter pour le barème progressif de l'impôt sur le revenu, avec un abattement de 40 % sur les dividendes.",
  },
  {
    q: "Les dividendes supportent-ils des cotisations sociales en SASU ?",
    a: "Non. En SASU, les dividendes ne sont pas soumis aux cotisations sociales du régime général : ils supportent uniquement l'impôt et les prélèvements sociaux sur les revenus du capital. C'est la différence majeure avec une EURL à l'IS, où la part des dividendes qui dépasse 10 % du capital social peut être soumise aux cotisations des indépendants.",
  },
  {
    q: "Peut-on verser des dividendes dès la première année ?",
    a: "Seulement si la société dégage un bénéfice distribuable. Les dividendes se votent par l'associé unique après l'approbation des comptes, dans les six mois qui suivent la clôture sauf prolongation par le tribunal. On ne peut pas les prélever à l'avance : une distribution sans bénéfice distribuable est irrégulière et peut être remise en cause.",
  },
  {
    q: "Faut-il décider avant le 31 décembre ?",
    a: "Pour le salaire, oui : il se décide et se verse mois par mois, donc c'est avant la clôture que vous réglez la part de rémunération de l'exercice. Les dividendes, eux, se décident après la clôture, mais la question se prépare avant : le résultat final dépend de la rémunération versée, et c'est là que se joue l'arbitrage. Un point en novembre ou décembre évite les mauvaises surprises.",
  },
  {
    q: "Le cabinet peut-il chiffrer l'arbitrage pour ma SASU ?",
    a: "Oui. Le cabinet simule plusieurs scénarios (salaire seul, dividendes seuls, mixte) à partir de votre résultat, de votre situation familiale et de vos besoins de protection sociale, puis vous remet un comparatif net dans votre poche.",
  },
];

export const Route = createFileRoute("/actualites/salaire-ou-dividendes-sasu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          image: "https://erkilic.fr/og-cabinet.jpg",
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
        { label: "Actualités", to: "/actualites" },
        { label: "Salaire ou dividendes en SASU" },
      ]}
      eyebrow="Actualités · Rémunération du dirigeant 2026"
      h1="Salaire ou dividendes en SASU :"
      italic="que choisir en 2026 ?"
      datePublished={PUBLISHED}
      intro={
        <>
          <p>
            Il n'existe pas de réponse unique. Le salaire ouvre des droits (retraite, indemnités
            journalières) mais coûte cher en cotisations. Les dividendes échappent aux cotisations
            sociales, mais depuis le 1er janvier 2026 ils supportent un prélèvement forfaitaire de
            31,4 %, et ils ne protègent pas le président. La bonne combinaison dépend du résultat de
            la société, de votre foyer et de vos besoins de couverture.
          </p>
          <p className="mt-4">
            Cette page donne les règles à jour pour un président de SASU installé à Montpellier,
            Juvignac ou ailleurs dans l'Hérault, un exemple chiffré et les questions à vous poser
            avant la fin de l'année.
          </p>
        </>
      }
      sections={[
        {
          title: "Salaire : ce que vous achetez avec les cotisations",
          body: (
            <>
              <p>
                <strong>En bref :</strong> le salaire du président de SASU est déductible du
                résultat de la société, mais il est lourdement chargé, et c'est lui qui crée vos
                droits sociaux.
              </p>
              <p className="mt-4">
                Le président est assimilé salarié : dès qu'il se rémunère, il relève du régime
                général. Il valide des trimestres de retraite, ouvre droit aux indemnités
                journalières en cas d'arrêt maladie et à la prévoyance. En revanche, il n'est pas
                couvert par l'assurance chômage du régime général. Le coût global des cotisations
                (part salariale et part patronale) est élevé : les estimations courantes vont
                jusqu'à 80 % du net versé, selon le niveau de rémunération. Ne retenez pas un
                pourcentage au hasard : le cabinet calcule le coût réel sur un bulletin simulé.
              </p>
              <p className="mt-4">
                Autre effet : le salaire réduit le bénéfice de la société, donc l'impôt sur les
                sociétés, et il reste imposable à l'impôt sur le revenu du président.
              </p>
            </>
          ),
        },
        {
          title: "Dividendes : 31,4 % de prélèvement forfaitaire en 2026",
          body: (
            <>
              <p>
                <strong>En bref :</strong> en SASU, les dividendes ne supportent pas de cotisations
                sociales, seulement l'impôt et les prélèvements sociaux sur les revenus du capital.
              </p>
              <p className="mt-4">
                Depuis le 1er janvier 2026, le prélèvement forfaitaire unique (PFU) atteint 31,4 % :
                12,8 % d'impôt sur le revenu et 18,6 % de prélèvements sociaux, contre 30 % en 2025.
                La hausse vient de la CSG sur les revenus du capital, passée de 9,2 % à 10,6 % par
                la loi de financement de la sécurité sociale pour 2026. Pour 1 000 € de dividendes
                bruts, vous gardez donc 686 €.
              </p>
              <p className="mt-4">
                Vous pouvez opter pour le barème progressif de l'impôt sur le revenu. Les dividendes
                bénéficient alors d'un abattement de 40 % et d'une partie de la CSG est déductible.
                C'est souvent intéressant si votre foyer est peu imposé, et rarement si votre
                tranche marginale est élevée. L'option est globale : elle s'applique à l'ensemble de
                vos revenus du capital de l'année.
              </p>
              <p className="mt-4">
                Les dividendes sont payés après impôt sur les sociétés. Le taux est de 15 % jusqu'à
                42 500 € de bénéfice pour les PME qui remplissent les conditions (chiffre d'affaires
                inférieur à 10 millions d'euros, capital entièrement libéré et détenu à 75 % au
                moins par des personnes physiques), puis de 25 % au-delà.
              </p>
            </>
          ),
        },
        {
          title: "Exemple chiffré : 42 500 € de bénéfice distribué en dividendes",
          body: (
            <>
              <p>
                <strong>En bref :</strong> sur un bénéfice de 42 500 € versé intégralement en
                dividendes, il reste environ 24 800 € dans votre poche, soit un prélèvement global
                d'environ 42 %.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Bénéfice avant impôt : 42 500 €.</li>
                <li>Impôt sur les sociétés à 15 % : 6 375 €, soit 36 125 € distribuables.</li>
                <li>PFU de 31,4 % sur 36 125 € : environ 11 343 €.</li>
                <li>Net perçu : environ 24 782 €.</li>
              </ul>
              <p className="mt-4">
                Cet exemple suppose que le bénéfice est distribuable en totalité, qu'aucun salaire
                n'est versé et que vous ne prélevez rien d'autre. Il montre l'ordre de grandeur, pas
                votre résultat : le cabinet le refait avec vos chiffres, y compris l'option pour le
                barème.
              </p>
            </>
          ),
        },
        {
          title: "Zéro salaire, salaire minimal ou mixte : comment arbitrer",
          body: (
            <>
              <p>
                <strong>En bref :</strong> le zéro salaire est le plus économique à court terme,
                mais il laisse le dirigeant sans protection ; la plupart des présidents qui vivent
                de leur société choisissent un salaire modéré complété par des dividendes.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Zéro salaire + dividendes</strong> : adapté si vous êtes déjà couvert
                  (conjoint, autre emploi, retraite) ou si vous conservez vos allocations chômage
                  pendant le démarrage. Aucun trimestre de retraite n'est validé par la SASU.
                </li>
                <li>
                  <strong>Salaire modéré + dividendes</strong> : vous validez des trimestres et
                  ouvrez des droits à protection, tout en limitant les cotisations. C'est le
                  scénario le plus fréquent.
                </li>
                <li>
                  <strong>Salaire seul</strong> : utile si le résultat est faible, si vous visez un
                  prêt immobilier (les banques regardent les revenus réguliers) ou si vous voulez
                  maximiser vos droits.
                </li>
              </ul>
              <p className="mt-4">
                Pour comparer la SASU à l'EURL sur ce point, voyez notre{" "}
                <Link
                  to="/comparatif/eurl-vs-sasu"
                  className="font-bold underline underline-offset-4"
                >
                  comparatif EURL ou SASU
                </Link>
                , et testez votre cas avec le{" "}
                <Link to="/simulateur-statut" className="font-bold underline underline-offset-4">
                  simulateur de statut juridique
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Calendrier : ce qui se joue avant le 31 décembre",
          body: (
            <>
              <p>
                <strong>En bref :</strong> le salaire se règle avant la clôture ; les dividendes se
                votent après, mais une démarche se prépare dès novembre.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Fixer la rémunération de l'exercice avant la clôture, car elle détermine le
                  résultat sur lequel porteront les dividendes.
                </li>
                <li>
                  Vérifier le niveau des réserves et du bénéfice distribuable avant toute décision
                  de distribution.
                </li>
                <li>
                  Demander à votre banque la dispense de l'acompte de 12,8 % prélevé à la source sur
                  les dividendes, avant le 30 novembre de l'année qui précède le versement. Elle est
                  accordée si le revenu fiscal de référence de l'avant-dernière année est inférieur
                  à 50 000 € (célibataire) ou 75 000 € (couple). Cet acompte n'est qu'une avance :
                  l'impôt définitif se calcule à la déclaration de revenus.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Ce que fait le cabinet pour vous",
          bullets: [
            "Simuler le net dans votre poche pour plusieurs scénarios de rémunération.",
            "Vérifier le bénéfice distribuable et préparer les décisions de l'associé unique.",
            "Établir les bulletins de paie et les déclarations de dividendes.",
            "Piloter l'arbitrage chaque année, en fonction de vos besoins et de la loi de finances.",
          ],
        },
        {
          title: "Sources",
          body: (
            <p className="text-sm text-ink/70">
              <a
                href="https://entreprendre.service-public.gouv.fr/actualites/A18796"
                className="underline underline-offset-4"
                rel="noopener noreferrer"
              >
                Service-public.fr (Entreprendre) : évolution du PFU
              </a>
              ;{" "}
              <a
                href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2613"
                className="underline underline-offset-4"
                rel="noopener noreferrer"
              >
                Service-public.fr F2613 : revenus d'épargne et de placements (vérifiée le 15 avril
                2026, consultée le 7 novembre 2026)
              </a>
              ;{" "}
              <a
                href="https://www.impots.gouv.fr/particulier/les-revenus-mobiliers"
                className="underline underline-offset-4"
                rel="noopener noreferrer"
              >
                impots.gouv.fr : revenus mobiliers
              </a>
              ;{" "}
              <a
                href="https://entreprendre.service-public.gouv.fr/actualites/A16250"
                className="underline underline-offset-4"
                rel="noopener noreferrer"
              >
                Service-public.fr (Entreprendre) : taux réduit d'IS des PME
              </a>
              ; loi n° 2025-1403 du 30 décembre 2025 (LFSS 2026, article 12). Les montants varient
              selon votre situation : ils sont recalculés pour chaque dossier. Voir aussi notre{" "}
              <Link to="/actualites/loi-finances-2026" className="underline underline-offset-4">
                synthèse de la loi de finances 2026
              </Link>
              .
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
      cta={{
        label: "Chiffrer mon arbitrage",
        to: "/contact",
        sub: "Salaire, dividendes ou mixte : on le calcule ensemble.",
      }}
    />
  ),
});
