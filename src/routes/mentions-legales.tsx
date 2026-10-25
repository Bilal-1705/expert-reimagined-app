import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/mentions-legales";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Erkilic Expertise Comptable" },
      {
        name: "description",
        content:
          "Mentions légales du site erkilic.fr : éditeur, SIREN, hébergement, propriété intellectuelle et contact du cabinet Erkilic à Juvignac.",
      },
      { property: "og:title", content: "Mentions légales — Erkilic Expertise Comptable" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Mentions légales" }]}
      eyebrow="Informations légales"
      h1="Mentions légales"
      intro={
        <p>
          Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique, voici les informations relatives à l'éditeur et à
          l'hébergeur du site erkilic.fr.
        </p>
      }
      sections={[
        {
          title: "Éditeur du site",
          body: (
            <p>
              Le site erkilic.fr est édité par le cabinet{" "}
              <strong>Erkilic Expertise Comptable</strong>, cabinet d'expertise comptable dirigé par
              Mme{" "}
              <Link to="/a-propos" className="underline underline-offset-4">
                Nazifé Erkilic
              </Link>
              , experte-comptable inscrite au tableau de l'Ordre des Experts-Comptables de
              Montpellier.
              <br />
              <br />
              Siège social : 29 bis rue du Poumpidou, 34990 Juvignac, France.
              <br />
              SIREN : 814 349 841 — SIRET : 814 349 841 00035.
              <br />
              Téléphone : 09 72 54 07 71 / 06 59 88 40 80.
              <br />
              E-mail : cabinet@erkilic.fr.
            </p>
          ),
        },
        {
          title: "Directeur de la publication",
          body: (
            <p>
              Mme{" "}
              <Link to="/a-propos" className="underline underline-offset-4">
                Nazifé Erkilic
              </Link>
              , en qualité de dirigeante du cabinet.
            </p>
          ),
        },
        {
          title: "Hébergement",
          body: (
            <p>
              Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France —
              www.ovhcloud.com.
            </p>
          ),
        },
        {
          title: "Propriété intellectuelle",
          body: (
            <p>
              L'ensemble des contenus du site (textes, logo, éléments graphiques, mise en page) est
              la propriété exclusive du cabinet Erkilic Expertise Comptable, sauf mention contraire.
              Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite
              préalable est interdite.
            </p>
          ),
        },
        {
          title: "Profession réglementée",
          body: (
            <p>
              La profession d'expert-comptable est réglementée par l'ordonnance n° 45-2138 du 19
              septembre 1945. Le cabinet est soumis à la déontologie de l'Ordre des
              Experts-Comptables (compétence, indépendance, intégrité, secret professionnel) et à la
              réglementation LCB-FT de lutte contre le blanchiment.
            </p>
          ),
        },
        {
          title: "Données personnelles",
          body: (
            <p>
              Le traitement des données personnelles collectées via ce site est décrit dans notre
              politique de confidentialité, accessible depuis le pied de page de chaque page.
            </p>
          ),
        },
      ]}
    />
  ),
});
