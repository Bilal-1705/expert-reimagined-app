import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/services/fiscalite-tva";

export const Route = createFileRoute("/services/fiscalite-tva")({
  head: () => ({
    meta: [
      { title: "Fiscalité, TVA et optimisation à Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Déclarations de TVA, IS, CFE, CVAE et optimisation fiscale à Juvignac (34990). Assistance en cas de contrôle fiscal. Cabinet Erkilic.",
      },
      {
        property: "og:title",
        content: "Fiscalité, TVA et optimisation — Erkilic Expertise Comptable",
      },
      {
        property: "og:description",
        content:
          "TVA, IS, CFE, CVAE, crédits d'impôt et assistance en contrôle fiscal. Cabinet d'expertise comptable à Juvignac.",
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
          "@type": "Service",
          name: "Fiscalité, TVA et optimisation",
          provider: { "@id": `${SITE}/#cabinet` },
          areaServed: "Juvignac, Montpellier, Hérault",
          url: `${SITE}${PATH}`,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Prestations", to: "/services" },
        { label: "Fiscalité & TVA" },
      ]}
      eyebrow="Prestation · Fiscalité"
      h1="Fiscalité, TVA"
      italic="et optimisation."
      intro={
        <p>
          TVA, impôt sur les sociétés, CFE, CVAE : la fiscalité d'entreprise est un empilement
          d'échéances et de régimes. Erkilic Expertise Comptable sécurise vos déclarations et
          recherche systématiquement les crédits et réductions d'impôt auxquels vous avez droit.
        </p>
      }
      sections={[
        {
          title: "Pour qui ?",
          bullets: [
            "Entreprises assujetties à la TVA (régime réel normal ou simplifié).",
            "Sociétés à l'IS souhaitant optimiser leur résultat imposable en toute légalité.",
            "Indépendants confrontés à un franchissement de seuil de TVA.",
            "Entreprises contrôlées par l'administration fiscale.",
          ],
        },
        {
          title: "Ce que comprend la mission",
          bullets: [
            "Déclarations courantes : TVA, DEB, TVS, DAS2, CFE, CVAE, IS.",
            "Télétransmission de la liasse fiscale après clôture des comptes.",
            "Recherche des crédits et réductions d'impôt applicables à votre activité.",
            "Arbitrage rémunération / dividendes pour le dirigeant.",
            "Assistance en contrôle fiscal : présence physique et réponses écrites.",
            "Déclarations personnelles : IR, IFI, taxe foncière.",
          ],
        },
        {
          title: "Pourquoi être accompagné ?",
          body: (
            <p>
              Une erreur de TVA ou un crédit d'impôt oublié coûte cher — en majorations ou en manque
              à gagner. L'expert-comptable connaît les textes, suit leurs évolutions annuelles (lois
              de finances) et fait valoir vos droits. En cas de contrôle, il est à vos côtés
              physiquement et prépare chaque réponse.
            </p>
          ),
        },
        {
          title: "Quand nous solliciter ?",
          body: (
            <p>
              Idéalement dès la création, pour choisir les bons régimes d'imposition. Mais aussi à
              tout moment : avant un investissement important, lors d'un franchissement de seuil de
              TVA, à l'approche de la clôture, ou dès réception d'une proposition de rectification.
            </p>
          ),
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Sécurisons votre fiscalité." }}
    />
  ),
});
