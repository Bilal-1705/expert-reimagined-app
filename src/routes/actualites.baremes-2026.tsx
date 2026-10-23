import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/baremes-2026";
const PUBLISHED = "2026-07-08";
const UPDATED = "2026-07-08";

export const Route = createFileRoute("/actualites/baremes-2026")({
  head: () => ({
    meta: [
      { title: "Barèmes & seuils 2026 : kilométrique, URSSAF, micro | Erkilic" },
      {
        name: "description",
        content:
          "Barème kilométrique 2026, plafonds URSSAF, seuils micro-entreprise & TVA, SMIC : les chiffres à jour pour votre déclaration.",
      },
      { property: "og:title", content: "Barèmes & seuils 2026 — Cabinet Erkilic Expertise Comptable" },
      { property: "og:description", content: "Chiffres officiels 2026 utiles aux dirigeants, indépendants et particuliers." },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "Barèmes, plafonds et seuils 2026",
          description:
            "Kilométrique, URSSAF, micro-entreprise, TVA, SMIC : les chiffres 2026 à connaître.",
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
        { label: "Actualités" },
        { label: "Barèmes 2026" },
      ]}
      eyebrow="Chiffres officiels · Mise à jour 2026"
      h1="Barèmes, plafonds & seuils 2026"
      italic="tout ce qu'il faut savoir."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <p>
          Cette page regroupe les chiffres officiels 2026 utiles aux dirigeants,
          indépendants et particuliers de l'Hérault : barème kilométrique,
          plafonds URSSAF, seuils micro-entreprise, franchise TVA, SMIC. Elle est
          mise à jour à chaque publication officielle.
        </p>
      }
      sections={[
        {
          title: "Seuils micro-entreprise 2026",
          bullets: [
            "Vente de marchandises, hébergement : 188 700 € de chiffre d'affaires annuel.",
            "Prestations de services (BIC & BNC) : 77 700 €.",
            "Tolérance en 2ᵉ année dépassement : voir les règles précises avec votre expert-comptable.",
          ],
        },
        {
          title: "Franchise en base de TVA 2026",
          bullets: [
            "Vente de marchandises : 85 000 € (seuil de tolérance 93 500 €).",
            "Prestations de services : 37 500 € (seuil de tolérance 41 250 €).",
            "Dès dépassement du seuil de tolérance : TVA due dès le 1er jour du mois de dépassement.",
          ],
        },
        {
          title: "Plafond de la sécurité sociale (PASS) 2026",
          bullets: [
            "Plafond mensuel : environ 3 925 € (indexé chaque année).",
            "Plafond annuel : environ 47 100 €.",
            "Utile pour calculer les cotisations TNS, retraite complémentaire, prévoyance.",
          ],
        },
        {
          title: "SMIC 2026",
          bullets: [
            "SMIC horaire brut revalorisé au 1er janvier 2026.",
            "SMIC mensuel brut sur base 35 h.",
            "Impact direct sur les allègements généraux de cotisations.",
          ],
        },
        {
          title: "Barème kilométrique 2026 (voiture)",
          bullets: [
            "Barème progressif en fonction de la puissance fiscale (3 CV à 7 CV et +).",
            "Distances < 5 000 km, entre 5 000 et 20 000 km, > 20 000 km.",
            "Utilisable pour indemniser un dirigeant, un salarié ou pour la déclaration BNC frais réels.",
          ],
        },
      ]}
      cta={{
        label: "Faire le point pour 2026",
        to: "/contact",
        sub: "30 minutes pour intégrer les nouveaux barèmes dans votre gestion.",
      }}
    />
  ),
});
