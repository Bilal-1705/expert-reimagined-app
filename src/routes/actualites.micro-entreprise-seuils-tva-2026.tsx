import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/micro-entreprise-seuils-tva-2026";
const PUBLISHED = "2026-08-15";
const UPDATED = "2026-08-15";

const faq = [
  {
    q: "À partir de quel chiffre d'affaires un auto-entrepreneur doit-il facturer la TVA ?",
    plain:
      "Dès que le chiffre d'affaires dépasse le seuil de franchise en base applicable à son activité, l'auto-entrepreneur devient redevable de la TVA, en principe dès le premier jour du mois de dépassement. Les seuils sont différents pour la vente de marchandises et pour les prestations de services.",
  },
  {
    q: "Vaut-il mieux rester en micro-entreprise ou passer en société ?",
    plain:
      "Tout dépend du niveau de charges réelles. La micro applique un abattement forfaitaire : si vos charges dépassent cet abattement, l'EURL ou la SASU au réel devient plus avantageuse. Le cabinet chiffre les deux scénarios avant toute décision.",
  },
  {
    q: "Que se passe-t-il si je dépasse le seuil en cours d'année ?",
    plain:
      "Vous devez facturer la TVA, la déclarer et la reverser, et modifier vos factures en conséquence. C'est aussi le bon moment pour vérifier si le régime micro reste pertinent ou s'il faut basculer en société.",
  },
];

export const Route = createFileRoute("/actualites/micro-entreprise-seuils-tva-2026")({
  head: () => ({
    meta: [
      { title: "Micro-entreprise 2026 : seuils de TVA et passage en société" },
      {
        name: "description",
        content:
          "Franchise en base, seuils de chiffre d'affaires et bascule en EURL ou SASU : ce que les auto-entrepreneurs de Montpellier doivent vérifier en 2026.",
      },
      { property: "og:title", content: "Micro-entreprise 2026 : seuils de TVA et arbitrages" },
      {
        property: "og:description",
        content:
          "Quand la TVA s'applique, quand quitter la micro : l'analyse d'Erkilic Expertise Comptable à Juvignac.",
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
          headline: "Micro-entreprise 2026 : nouveaux seuils de TVA et passage en société",
          description:
            "Franchise en base, seuils de CA et arbitrage micro / EURL / SASU pour les indépendants de l'Hérault.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
            { "@type": "ListItem", position: 2, name: "Actualités", item: `${SITE}/actualites` },
            { "@type": "ListItem", position: 3, name: "Micro-entreprise & TVA 2026", item: `${SITE}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Actualités", to: "/actualites" },
        { label: "Micro-entreprise & TVA 2026" },
      ]}
      eyebrow="Actualité · Indépendants"
      h1="Micro-entreprise 2026 :"
      italic="TVA, seuils, et après ?"
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            La franchise en base de TVA reste l'atout majeur de la
            micro-entreprise — et son principal point de rupture. Passé un
            certain chiffre d'affaires, la TVA s'applique, la marge se
            réajuste, et la question de la société se pose sérieusement.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Deux familles de seuils : vente de marchandises et prestations de services.</li>
            <li>Dépassement du seuil de franchise = TVA à facturer, déclarer et reverser.</li>
            <li>La micro applique un abattement forfaitaire, pas vos charges réelles.</li>
            <li>Charges élevées ou investissements : l'EURL ou la SASU au réel reprend l'avantage.</li>
            <li>Le passage en société se prépare, idéalement avant la fin de l'exercice.</li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Comment fonctionne la franchise en base",
          body: (
            <p>
              Tant que votre chiffre d'affaires reste sous le seuil applicable à
              votre activité, vous facturez sans TVA avec la mention « TVA non
              applicable, article 293 B du CGI ». En contrepartie, vous ne
              récupérez pas la TVA sur vos achats — un désavantage réel dès que
              vous investissez en matériel ou sous-traitez.
            </p>
          ),
        },
        {
          title: "Les signaux qui indiquent qu'il faut quitter la micro",
          bullets: [
            "Vos charges réelles dépassent l'abattement forfaitaire de votre catégorie.",
            "Vous investissez (véhicule, matériel, local) et perdez la TVA déductible.",
            "Vous travaillez surtout avec des clients professionnels, qui récupèrent la TVA.",
            "Vous voulez vous rémunérer en dividendes ou protéger votre patrimoine.",
            "Vous recrutez ou vous associez : la micro devient un plafond de verre.",
          ],
        },
        {
          title: "Micro, EURL ou SASU : trancher avec des chiffres",
          body: (
            <p>
              Le cabinet Erkilic Expertise Comptable, à Juvignac, chiffre les
              trois scénarios sur vos propres données : revenu net après charges
              sociales et impôt, protection sociale, coût de gestion. Notre{" "}
              <strong>simulateur de statut</strong> donne une première
              orientation en ligne, et notre comparatif EURL vs SASU détaille le
              choix une fois la société décidée.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Chiffrer mon changement de statut",
        to: "/simulateur-statut",
        sub: "Simulateur gratuit, puis rendez-vous avec le cabinet si besoin.",
      }}
    />
  ),
});
