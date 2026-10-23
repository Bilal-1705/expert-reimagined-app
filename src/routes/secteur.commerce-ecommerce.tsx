import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/secteur/commerce-ecommerce";

export const Route = createFileRoute("/secteur/commerce-ecommerce")({
  head: () => ({
    meta: [
      { title: "Expert-comptable e-commerce et commerce | Erkilic Juvignac" },
      {
        name: "description",
        content:
          "Comptabilité des commerçants et e-commerçants à Juvignac : TVA, facturation, achats à l'étranger, import/export, guichet unique OSS.",
      },
      { property: "og:title", content: "Expert-comptable e-commerce et commerce — Erkilic Juvignac" },
      {
        property: "og:description",
        content:
          "TVA e-commerce, guichet unique OSS, import/export et comptabilité des commerçants. Cabinet d'expertise comptable à Juvignac.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Expert-comptable e-commerce et commerce",
          description:
            "Comptabilité et fiscalité des commerçants et e-commerçants : TVA, OSS, import/export, facturation électronique.",
          url: `${SITE}${PATH}`,
          about: { "@id": `${SITE}/#cabinet` },
        }),
      },
      
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Secteurs", to: "/secteur/artisans-commercants" },
        { label: "Commerce & e-commerce" },
      ]}
      eyebrow="Secteur · Commerce & e-commerce"
      h1="Commerçants et e-commerçants :"
      italic="une comptabilité qui suit votre rythme."
      intro={
        <p>
          Vente en boutique, sur votre site ou sur les marketplaces : le
          commerce cumule un volume de transactions élevé et des règles de TVA
          exigeantes. Erkilic Expertise Comptable accompagne les commerçants
          et e-commerçants de Juvignac, Montpellier et l'Hérault — y compris
          pour les achats à l'étranger et l'import/export.
        </p>
      }
      sections={[
        {
          title: "Les enjeux comptables du commerce et du e-commerce",
          bullets: [
            "Volume : des centaines de ventes à comptabiliser sans erreur ni oubli.",
            "Multi-canal : boutique, site propre, marketplaces — des flux à consolider.",
            "TVA : régimes, taux multiples, ventes à distance dans l'Union européenne.",
            "Stocks : valorisation, variation et impact direct sur le résultat.",
            "Facturation électronique 2026 : obligation de réception dès septembre 2026.",
          ],
        },
        {
          title: "TVA et ventes à l'étranger",
          body: (
            <p>
              Vous vendez à des clients européens ? Le guichet unique OSS
              simplifie la déclaration de la TVA sur les ventes à distance.
              Vous achetez à des fournisseurs étrangers ou importez des
              marchandises ? Autoliquidation, DEB, numéros de TVA
              intracommunautaire : le cabinet sécurise chaque flux, dans les
              deux sens.
            </p>
          ),
        },
        {
          title: "Ce que comprend l'accompagnement",
          bullets: [
            "Tenue comptable adaptée au volume de transactions (connexions avec vos outils de vente).",
            "Déclarations de TVA, y compris régimes particuliers et guichet OSS.",
            "Suivi de la marge par canal et par famille de produits.",
            "Gestion des stocks et écritures d'inventaire en fin d'exercice.",
            "Préparation à la facturation électronique obligatoire.",
          ],
        },
        {
          title: "Un cabinet local pour un commerce connecté",
          body: (
            <p>
              Même si vos ventes sont en ligne, votre comptable peut être à
              côté de chez vous : rue du Poumpidou à Juvignac, à deux pas de la
              zone commerciale de la Plaine et de l'Intermarché de la route de
              Saint-Georges. Un interlocuteur qui connaît la réalité du
              commerce local et les règles du commerce en ligne.
            </p>
          ),
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Parlons de votre commerce." }}
    />
  ),
});
