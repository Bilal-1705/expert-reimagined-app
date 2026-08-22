import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/services/conseil-gestion";

export const Route = createFileRoute("/services/conseil-gestion")({
  head: () => ({
    meta: [
      { title: "Conseil de gestion et prévisionnel à Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Prévisionnel, tableaux de bord, pilotage de trésorerie et accompagnement du dirigeant à Juvignac (34990). Cabinet Erkilic Expertise Comptable.",
      },
      { property: "og:title", content: "Conseil de gestion et prévisionnel — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Tableaux de bord commentés, prévisionnels et pilotage de trésorerie pour dirigeants. Cabinet d'expertise comptable à Juvignac.",
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
          name: "Conseil de gestion et accompagnement du dirigeant",
          provider: { "@id": `${SITE}/#cabinet` },
          areaServed: "Juvignac, Montpellier, Hérault",
          url: `${SITE}${PATH}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Prestations", item: `${SITE}/services` },
            { "@type": "ListItem", position: 3, name: "Conseil de gestion", item: `${SITE}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Prestations", to: "/services" }, { label: "Conseil de gestion" }]}
      eyebrow="Prestation · Conseil de gestion"
      h1="Conseil de gestion"
      italic="et prévisionnel."
      intro={
        <p>
          Un bilan regarde le passé ; un dirigeant décide de l'avenir. Erkilic
          Expertise Comptable transforme vos chiffres en outils de décision :
          prévisionnels, tableaux de bord commentés et pilotage de la
          trésorerie.
        </p>
      }
      sections={[
        {
          title: "Ce que comprend la mission",
          bullets: [
            "Prévisionnel financier sur 12 à 24 mois : plan de financement, compte de résultat, trésorerie.",
            "Tableaux de bord périodiques : chiffre d'affaires, marge, charges, seuil de rentabilité.",
            "Analyse de la rentabilité par activité, produit ou chantier.",
            "Pilotage de la trésorerie : anticipation des décalages de TVA et d'encaissements.",
            "Préparation des demandes de financement et rendez-vous bancaires.",
          ],
        },
        {
          title: "Pour qui ?",
          bullets: [
            "Créateurs qui doivent convaincre une banque ou des investisseurs.",
            "Dirigeants de TPE / PME qui veulent piloter au lieu de subir.",
            "Entreprises en croissance qui anticipent un recrutement ou un investissement.",
            "Entreprises en difficulté passagère qui doivent redresser la trésorerie.",
          ],
        },
        {
          title: "Quand faire un prévisionnel ?",
          body: (
            <p>
              À la création, bien sûr — c'est la pièce maîtresse du dossier
              bancaire. Mais aussi avant chaque décision structurante :
              embauche, achat de matériel, ouverture d'un point de vente,
              reprise d'un fonds de commerce. Un prévisionnel actualisé
              transforme une intuition en décision documentée.
            </p>
          ),
        },
        {
          title: "Un coach du chef d'entreprise",
          body: (
            <p>
              La vocation du cabinet : être le coach du chef d'entreprise.
              Vos chiffres sont commentés avec vous, en langage clair, lors de
              rendez-vous réguliers au cabinet de Juvignac ou à distance. Vous
              repartez avec des décisions, pas avec des tableaux incompris.
            </p>
          ),
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Pilotez votre entreprise avec des chiffres clairs." }}
    />
  ),
});
