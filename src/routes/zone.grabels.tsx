import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/zone/grabels";

export const Route = createFileRoute("/zone/grabels")({
  head: () => ({
    meta: [
      { title: "Expert-Comptable Grabels (34790) | Cabinet Erkilic" },
      {
        name: "description",
        content:
          "Cabinet d'expertise comptable au nord de Juvignac, accessible en 5 minutes depuis Grabels (34790). TPE, professions médicales, indépendants.",
      },
      { property: "og:title", content: "Comptable Grabels — Cabinet Erkilic" },
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
          areaServed: { "@type": "City", name: "Grabels" },
          address: { "@type": "PostalAddress", streetAddress: "29 bis rue du Poumpidou", addressLocality: "Juvignac", postalCode: "34990", addressCountry: "FR" },
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Zones" }, { label: "Grabels" }]}
      eyebrow="Zone d'intervention · 34790"
      h1="Comptable à Grabels ?"
      italic="Le cabinet est juste au sud."
      intro={
        <p>
          Grabels et Juvignac sont deux communes limitrophes de
          l'agglomération de Montpellier. Depuis le centre de Grabels, le
          cabinet Erkilic est à 5 minutes via la D127. Une proximité
          idéale pour les professionnels de santé, indépendants et TPE
          installés sur la commune.
        </p>
      }
      sections={[
        {
          title: "Un tissu économique dynamique et diversifié",
          body: (
            <p>
              Grabels combine artisans historiques, professions libérales
              (nombreux médecins et paramédicaux autour du centre),
              nouveaux commerces et zones d'activités récentes. Le cabinet
              Erkilic connaît le tissu local et vous met en relation
              rapidement avec les bons interlocuteurs (banques,
              notaires, CCI Hérault).
            </p>
          ),
        },
        {
          title: "Ce que nous faisons pour les entreprises grabelloises",
          bullets: [
            "Tenue comptable et bilans pour TPE, artisans, commerçants.",
            "Comptabilité BNC pour médecins, kinés, infirmiers, ostéopathes.",
            "Création d'entreprise et choix du statut juridique.",
            "Paye, DSN, gestion sociale.",
            "Fiscalité personnelle et gestion patrimoniale.",
          ],
        },
        {
          title: "Accessibilité et réactivité",
          body: (
            <p>
              Le cabinet est accessible en voiture par la D127 ou en
              tramway (Ligne 3, arrêt Mosson) puis 5 minutes de bus.
              Rendez-vous en cabinet sous 48h en cas d'urgence, ligne
              directe au 09 72 54 07 71.
            </p>
          ),
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact" }}
    />
  ),
});
