import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/creation-entreprise/juvignac";

export const Route = createFileRoute("/creation-entreprise/juvignac")({
  head: () => ({
    meta: [
      { title: "Création d'entreprise à Juvignac | Expert-Comptable Erkilic" },
      {
        name: "description",
        content:
          "Créer sa SAS, SASU, SARL, EURL ou EI à Juvignac : choix du statut, prévisionnel, immatriculation. Accompagnement par un expert-comptable local.",
      },
      { property: "og:title", content: "Créer son entreprise à Juvignac — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Choix du statut, prévisionnel financier, immatriculation : créez votre entreprise à Juvignac avec un expert-comptable de proximité.",
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
          name: "Création d'entreprise à Juvignac",
          description:
            "Accompagnement à la création d'entreprise à Juvignac : choix du statut, prévisionnel, obligations comptables, immatriculation.",
          url: `${SITE}${PATH}`,
          about: { "@id": `${SITE}/#cabinet` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Création d'entreprise", item: `${SITE}/creation-entreprise/sasu-eurl-ei` },
            { "@type": "ListItem", position: 3, name: "Juvignac", item: `${SITE}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Création d'entreprise", to: "/creation-entreprise/sasu-eurl-ei" },
        { label: "Juvignac" },
      ]}
      eyebrow="Création d'entreprise · Juvignac (34990)"
      h1="Créer son entreprise à Juvignac"
      italic="avec un expert-comptable local."
      intro={
        <>
          <p>
            Vous lancez votre activité à Juvignac, dans l'ouest de Montpellier ?
            Erkilic Expertise Comptable vous accompagne de l'idée au premier
            bilan : choix du statut, rédaction des statuts, prévisionnel pour
            la banque, immatriculation et mise en place de votre comptabilité.
          </p>
          <ul className="mt-4 space-y-2">
            <li>• Un entretien conseil gratuit pour cadrer votre projet</li>
            <li>• Un prévisionnel détaillé sur 12 à 24 mois</li>
            <li>• Le choix du statut juridique et social adapté à votre situation</li>
            <li>• L'immatriculation et le démarrage comptable clé en main</li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Créer une SAS, SASU, SARL, EURL ou EI à Juvignac",
          body: (
            <p>
              SAS, SASU, SARL, EURL, entreprise individuelle : chaque forme a
              ses règles de rémunération, de protection sociale et d'imposition.
              Le cabinet analyse votre situation personnelle (revenus,
              patrimoine, famille, projet à 3 ans) pour vous orienter vers le
              statut réellement adapté — pas celui à la mode. Notre{" "}
              <Link to="/simulateur-statut" className="font-bold underline underline-offset-4">
                simulateur « quel statut choisir »
              </Link>{" "}
              vous donne une première orientation, affinée ensuite en
              rendez-vous.
            </p>
          ),
        },
        {
          title: "Le prévisionnel : la clé de votre financement",
          bullets: [
            "Plan de financement initial : apports, prêts, aides et subventions.",
            "Compte de résultat prévisionnel sur 12 à 24 mois, mois par mois.",
            "Plan de trésorerie pour anticiper les décalages de TVA et d'encaissements.",
            "Dossier bancaire complet et accompagnement au rendez-vous banque.",
            "Recherche des aides locales (Montpellier Méditerranée Métropole, région Occitanie).",
          ],
        },
        {
          title: "Les obligations comptables dès la création",
          body: (
            <p>
              Dès l'immatriculation, votre entreprise doit tenir une
              comptabilité, déclarer la TVA le cas échéant, et respecter des
              échéances précises (bilan annuel, liasse fiscale, CFE dès la
              première année). Le cabinet met en place vos outils, vos
              habitudes de collecte de pièces et un calendrier d'échéances —
              pour ne jamais subir de majoration de retard.
            </p>
          ),
        },
        {
          title: "Accompagnement du dirigeant la première année",
          bullets: [
            "Points trimestriels sur votre chiffre d'affaires et votre marge.",
            "Optimisation rémunération / dividendes dès les premiers résultats.",
            "Suivi des seuils de TVA et du versement libératoire.",
            "Ajustement du prévisionnel au réel et décisions de développement.",
          ],
        },
      ]}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Créons votre entreprise à Juvignac." }}
    />
  ),
});
