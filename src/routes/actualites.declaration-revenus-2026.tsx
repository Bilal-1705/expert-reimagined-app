import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/declaration-revenus-2026";
const PUBLISHED = "2026-08-15";
const UPDATED = "2026-08-15";

const faq = [
  {
    q: "Quelle est la date limite de déclaration des revenus dans l'Hérault ?",
    plain:
      "L'Hérault (département 34) relève de la zone 2 pour la déclaration en ligne. Les dates exactes sont publiées chaque printemps par la DGFiP ; la déclaration papier, elle, reste due plus tôt, fin mai. Erkilic Expertise Comptable rappelle ses clients avant chaque échéance.",
  },
  {
    q: "Un auto-entrepreneur doit-il déclarer son chiffre d'affaires aux impôts ?",
    plain:
      "Oui. Même en versement libératoire, le chiffre d'affaires se reporte sur la déclaration complémentaire 2042-C-PRO. L'oubli est l'erreur la plus fréquente et déclenche des relances quasi systématiques.",
  },
  {
    q: "Comment déclarer des revenus LMNP en 2026 ?",
    plain:
      "En régime réel, la déclaration 2031 accompagnée de la liasse est déposée avant le report sur la 2042-C-PRO. C'est le régime qui permet d'amortir le bien et, souvent, de neutraliser l'imposition des loyers pendant plusieurs années.",
  },
];

export const Route = createFileRoute("/actualites/declaration-revenus-2026")({
  head: () => ({
    meta: [
      { title: "Déclaration de revenus 2026 : dates et erreurs à éviter" },
      {
        name: "description",
        content:
          "Calendrier Hérault, barème revalorisé, indépendants, LMNP et dividendes : le récapitulatif 2026 d'Erkilic Expertise Comptable, expert-comptable à Juvignac.",
      },
      { property: "og:title", content: "Déclaration de revenus 2026 : le guide du cabinet" },
      {
        property: "og:description",
        content:
          "Dates, nouveautés du barème et erreurs fréquentes des indépendants et bailleurs de l'Hérault.",
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
          headline: "Déclaration de revenus 2026 : dates, nouveautés et erreurs fréquentes",
          description:
            "Calendrier de la déclaration dans l'Hérault, barème 2026, indépendants, LMNP et dividendes.",
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
        { label: "Déclaration de revenus 2026" },
      ]}
      eyebrow="Actualité · Impôt sur le revenu"
      h1="Déclaration de revenus 2026 :"
      italic="dates, nouveautés, pièges."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            Chaque année, le cabinet constate les mêmes oublis : une case
            non cochée, un revenu de plateforme non reporté, un amortissement
            LMNP mal repris. Voici le récapitulatif 2026, orienté dirigeants,
            indépendants et bailleurs de Juvignac et Montpellier.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Hérault = zone 2 pour la déclaration en ligne.</li>
            <li>Barème de l'impôt revalorisé : le taux de prélèvement à la source s'ajuste automatiquement.</li>
            <li>Indépendants : le chiffre d'affaires se reporte toujours sur la 2042-C-PRO.</li>
            <li>LMNP au réel : liasse 2031 avant report sur la déclaration personnelle.</li>
            <li>Dividendes : arbitrer entre PFU à 30 % et barème progressif, chiffres à l'appui.</li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Calendrier : ce qu'il faut retenir",
          bullets: [
            "Déclaration papier : échéance la plus précoce, fin mai.",
            "Déclaration en ligne, zone 2 (Hérault) : début juin, date exacte publiée par la DGFiP.",
            "Liasses professionnelles (2031, 2035, 2065) : dépôt au printemps, avant le report personnel.",
            "Correction possible en ligne à l'automne via le service de correction.",
          ],
        },
        {
          title: "Les erreurs les plus fréquentes que nous corrigeons",
          bullets: [
            "Oubli du versement libératoire déjà payé, entraînant une double imposition.",
            "Revenus de plateformes (location, livraison, marketplace) non déclarés alors qu'ils sont transmis à la DGFiP.",
            "Frais réels mal justifiés : barème kilométrique appliqué sans preuve de trajets professionnels.",
            "Crédit d'impôt emploi à domicile ou garde d'enfant non repris après un changement de situation.",
            "LMNP : amortissements non reportés d'une année sur l'autre, donc définitivement perdus.",
          ],
        },
        {
          title: "Dirigeant : salaire, dividendes ou les deux ?",
          body: (
            <p>
              La déclaration est le moment où l'arbitrage rémunération /
              dividendes se paie — en bien ou en mal. Nous chiffrons chaque année
              les deux scénarios pour nos clients en EURL et SASU avant la
              clôture, pas après. Si vous hésitez encore sur votre structure,
              notre <strong>simulateur de statut</strong> donne une première
              orientation en quelques questions.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Faire relire ma déclaration",
        to: "/contact",
        sub: "Particuliers, indépendants et bailleurs de l'Hérault.",
      }}
    />
  ),
});
