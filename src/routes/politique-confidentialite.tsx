import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/politique-confidentialite";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Erkilic" },
      {
        name: "description",
        content:
          "Politique de confidentialité du site erkilic.fr : données collectées, finalités, durées de conservation, droits RGPD et contact.",
      },
      { property: "og:title", content: "Politique de confidentialité — Erkilic Expertise Comptable" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Politique de confidentialité" }]}
      eyebrow="Protection des données (RGPD)"
      h1="Politique de confidentialité"
      intro={
        <p>
          Le cabinet Erkilic Expertise Comptable attache une importance
          particulière à la protection de vos données personnelles. Cette page
          décrit quelles données sont collectées sur erkilic.fr, pourquoi, et
          quels sont vos droits.
        </p>
      }
      sections={[
        {
          title: "Responsable de traitement",
          body: (
            <p>
              Cabinet Erkilic Expertise Comptable — 29 bis rue du Poumpidou,
              34990 Juvignac — SIREN 814 349 841 — cabinet@erkilic.fr.
            </p>
          ),
        },
        {
          title: "Données collectées et finalités",
          bullets: [
            "Prise de rendez-vous (Calendly) : nom, coordonnées et motif du rendez-vous, utilisés uniquement pour organiser et assurer le rendez-vous.",
            "Contact par e-mail ou téléphone : les informations que vous nous transmettez servent à répondre à votre demande et, le cas échéant, à établir un devis.",
            "Simulateur de statut : les réponses sont traitées localement dans votre navigateur et ne sont ni transmises ni conservées.",
          ],
        },
        {
          title: "Sous-traitants et destinataires",
          body: (
            <p>
              La prise de rendez-vous en ligne est assurée par Calendly
              (Calendly LLC), qui agit comme sous-traitant selon ses propres
              engagements de protection des données. Aucune donnée n'est
              vendue ni transmise à des tiers à des fins commerciales.
            </p>
          ),
        },
        {
          title: "Cookies",
          body: (
            <p>
              Ce site n'utilise pas de cookie de suivi publicitaire ni d'outil
              de mesure d'audience tiers. Seules des fonctionnalités
              techniques strictement nécessaires au fonctionnement du site
              peuvent être utilisées.
            </p>
          ),
        },
        {
          title: "Durées de conservation",
          body: (
            <p>
              Les données de contact sont conservées le temps de traiter votre
              demande, puis archivées selon les obligations légales du cabinet
              (notamment en matière comptable et LCB-FT). Les données des
              clients sont couvertes par le secret professionnel.
            </p>
          ),
        },
        {
          title: "Vos droits",
          body: (
            <p>
              Vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation et d'opposition au traitement de vos
              données. Pour exercer ces droits, écrivez à cabinet@erkilic.fr.
              Vous pouvez également introduire une réclamation auprès de la
              CNIL (www.cnil.fr).
            </p>
          ),
        },
      ]}
    />
  ),
});
