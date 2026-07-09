import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/zone/saint-georges-dorques";

export const Route = createFileRoute("/zone/saint-georges-dorques")({
  head: () => ({
    meta: [
      { title: "Expert-Comptable Saint-Georges-d'Orques | Erkilic" },
      {
        name: "description",
        content:
          "Cabinet d'expertise comptable à 5 minutes de Saint-Georges-d'Orques (34680). Vignerons, artisans, TPE, professions libérales : accompagnement de proximité.",
      },
      { property: "og:title", content: "Comptable Saint-Georges-d'Orques — Cabinet Erkilic Expertise Comptable" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Erkilic Expertise Comptable",
          areaServed: { "@type": "City", name: "Saint-Georges-d'Orques" },
          address: { "@type": "PostalAddress", streetAddress: "29 bis rue du Poumpidou", addressLocality: "Juvignac", postalCode: "34990", addressCountry: "FR" },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Zones" }, { label: "Saint-Georges-d'Orques" }]}
      eyebrow="Zone d'intervention · 34680"
      h1="Vous cherchez un comptable"
      italic="à Saint-Georges-d'Orques ?"
      intro={
        <p>
          Basé à Juvignac, à moins de 5 minutes en voiture de
          Saint-Georges-d'Orques par la RD5, le cabinet Erkilic Expertise Comptable accueille
          régulièrement des vignerons, artisans, commerçants et
          professions libérales de la commune. Un cabinet local, réactif,
          qui connaît votre territoire.
        </p>
      }
      sections={[
        {
          title: "Un cabinet ancré dans le bassin viticole de l'Ouest montpelliérain",
          body: (
            <p>
              Saint-Georges-d'Orques est historiquement une commune
              viticole (AOP Grès de Montpellier), aujourd'hui aussi
              résidentielle. Le cabinet Erkilic Expertise Comptable accompagne les vignerons
              (domaines, caves particulières), les artisans du bâtiment,
              les commerces de la place et les nombreux
              télétravailleurs / consultants installés dans les nouveaux
              lotissements.
            </p>
          ),
        },
        {
          title: "Prestations pour les entreprises de Saint-Georges-d'Orques",
          bullets: [
            "Tenue comptable, TVA, bilan annuel signé.",
            "Paye et DSN pour vos salariés (saisonniers viticoles inclus).",
            "Déclaration 2035 pour les professions libérales.",
            "Comptabilité agricole spécialisée pour les exploitations viticoles.",
            "Optimisation fiscale et prévisionnel de trésorerie.",
          ],
        },
        {
          title: "Un rendez-vous en 5 minutes de trajet",
          body: (
            <p>
              Rue du Poumpidou, à Juvignac, le cabinet est à moins de 3 km
              du centre de Saint-Georges-d'Orques. Rendez-vous rapides,
              récupération de pièces sur place, réactivité téléphonique au
              09 72 54 07 71.
            </p>
          ),
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Un premier échange gratuit à Juvignac." }}
    />
  ),
});
