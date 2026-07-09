import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/zone/celleneuve-mosson";

export const Route = createFileRoute("/zone/celleneuve-mosson")({
  head: () => ({
    meta: [
      { title: "Comptable Montpellier Celleneuve / La Mosson — Erkilic" },
      {
        name: "description",
        content:
          "Cabinet d'expertise comptable pour les quartiers ouest de Montpellier : Celleneuve, La Mosson, La Paillade, Les Hauts de Massane. Accès tramway Ligne 3.",
      },
      { property: "og:title", content: "Comptable Celleneuve / La Mosson — Cabinet Erkilic Expertise Comptable" },
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
          areaServed: [
            { "@type": "Place", name: "Celleneuve, Montpellier" },
            { "@type": "Place", name: "La Mosson, Montpellier" },
            { "@type": "Place", name: "La Paillade, Montpellier" },
            { "@type": "Place", name: "Hauts de Massane, Montpellier" },
          ],
          address: { "@type": "PostalAddress", streetAddress: "29 bis rue du Poumpidou", addressLocality: "Juvignac", postalCode: "34990", addressCountry: "FR" },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Zones" }, { label: "Celleneuve / La Mosson" }]}
      eyebrow="Zone d'intervention · Montpellier Ouest"
      h1="Comptable à Celleneuve,"
      italic="La Mosson & Hauts de Massane."
      intro={
        <p>
          Les quartiers ouest de Montpellier — Celleneuve, La Mosson, La
          Paillade, Les Hauts de Massane — sont collés à Juvignac. Le
          cabinet Erkilic Expertise Comptable y est accessible en 5 à 10 minutes, que ce soit
          en voiture, en bus ou par le tramway Ligne 3.
        </p>
      }
      sections={[
        {
          title: "Un cabinet à la frontière de Montpellier",
          body: (
            <p>
              Rue du Poumpidou, à Juvignac, le cabinet Erkilic Expertise Comptable est
              accessible depuis Celleneuve par l'avenue de Lodève, depuis
              La Mosson via l'échangeur A750, depuis Les Hauts de Massane
              par la route de Bionne. Le tramway Ligne 3 (arrêt Mosson)
              vous dépose à 10 minutes à pied du cabinet.
            </p>
          ),
        },
        {
          title: "Pour qui ?",
          bullets: [
            "Commerces de proximité et restaurants du quartier de Celleneuve.",
            "Professionnels de santé de la clinique Saint-Roch et cabinets libéraux.",
            "Artisans et TPE des zones d'activités de La Mosson.",
            "Startups et indépendants installés dans les hauts de Massane.",
            "Particuliers pour déclaration IR, revenus fonciers, patrimoine.",
          ],
        },
        {
          title: "Un choix de proximité, pas d'exil vers le centre-ville",
          body: (
            <p>
              Beaucoup d'entreprises de Montpellier Ouest se sentent
              obligées d'aller chercher un expert-comptable dans les
              grands cabinets du centre — perte de temps, stationnement
              impossible. À Juvignac, on se gare gratuitement devant le
              cabinet, on est reçu à l'heure et on repart avec des
              réponses.
            </p>
          ),
        },
      ]}
      cta={{ label: "Réserver un créneau", to: "/contact" }}
    />
  ),
});
