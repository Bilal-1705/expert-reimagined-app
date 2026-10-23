import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/services/comptabilite";

export const Route = createFileRoute("/services/comptabilite")({
  head: () => ({
    meta: [
      { title: "Comptabilité, bilan et liasse fiscale à Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Tenue comptable, révision, bilan annuel et liasse fiscale à Juvignac (34990). Cabinet d'expertise comptable pour TPE, PME et indépendants.",
      },
      {
        property: "og:title",
        content: "Comptabilité, bilan et liasse fiscale — Erkilic Expertise Comptable",
      },
      {
        property: "og:description",
        content:
          "Tenue, révision, bilan annuel commenté et télétransmission de la liasse fiscale. Un interlocuteur unique à Juvignac.",
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
          name: "Comptabilité, bilan et liasse fiscale",
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
        { label: "Comptabilité" },
      ]}
      eyebrow="Prestation · Comptabilité"
      h1="Comptabilité, bilan"
      italic="et liasse fiscale."
      intro={
        <p>
          La tenue comptable est la colonne vertébrale de votre entreprise. Erkilic Expertise
          Comptable assure la tenue complète ou partielle de votre comptabilité, la révision de vos
          comptes et l'établissement de votre bilan annuel — commenté avec vous, pas simplement
          transmis.
        </p>
      }
      sections={[
        {
          title: "Pour qui ?",
          bullets: [
            "TPE et PME qui veulent externaliser leur comptabilité en toute confiance.",
            "Indépendants et professions libérales soumis à une obligation comptable.",
            "Dirigeants qui veulent des comptes fiables pour piloter, pas seulement pour déclarer.",
            "Entreprises qui changent de cabinet et veulent une reprise de dossier propre.",
          ],
        },
        {
          title: "Ce que comprend la mission",
          bullets: [
            "Saisie des journaux d'achats, de ventes, de banque et d'opérations diverses.",
            "Rapprochements bancaires et contrôle des comptes clients / fournisseurs.",
            "Écritures d'inventaire : amortissements, stocks, provisions, régularisations.",
            "Situations intermédiaires pour vos demandes de crédit ou décisions stratégiques.",
            "Bilan, compte de résultat et annexe, commentés en rendez-vous annuel.",
            "Liasse fiscale télétransmise à l'administration dans les délais.",
          ],
        },
        {
          title: "Pourquoi externaliser sa comptabilité ?",
          body: (
            <p>
              Une comptabilité tenue par un expert-comptable inscrit à l'Ordre, c'est une
              responsabilité professionnelle engagée sur chaque écriture, des échéances respectées
              et un dirigeant libéré des tâches administratives. C'est aussi un regard extérieur qui
              détecte les dérives de marge ou de trésorerie avant qu'elles ne deviennent des
              problèmes.
            </p>
          ),
        },
        {
          title: "Comment se déroule la collaboration ?",
          body: (
            <p>
              Après un premier rendez-vous gratuit au cabinet (29 bis rue du Poumpidou, Juvignac),
              nous définissons ensemble le périmètre de la mission et établissons un devis. Vous
              transmettez vos pièces selon un rythme convenu (mensuel, trimestriel), nous tenons et
              contrôlons vos comptes, puis nous nous retrouvons pour commenter le bilan. En cours
              d'année, votre interlocuteur reste joignable au 09 72 54 07 71.
            </p>
          ),
        },
      ]}
      cta={{
        label: "Demander un devis",
        to: "/contact",
        sub: "Un devis gratuit et détaillé, sans engagement.",
      }}
    />
  ),
});
