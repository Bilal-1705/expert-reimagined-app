import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/secteur/artisans-commercants";

const faq = [
  {
    q: "Comment gérer la TVA sur encaissement pour un artisan à Juvignac ?",
    plain:
      "Pour les prestations de services (BTP, coiffure, garage, restauration), la TVA est en principe exigible sur les encaissements — donc à la date où le client paie, pas à la date de facture. Cela demande une comptabilité rigoureuse des règlements, souvent semi-automatisée via un logiciel adapté que le cabinet paramètre pour vous.",
  },
  {
    q: "Un commerçant à Montpellier doit-il tenir un livre de stocks ?",
    plain:
      "Oui, tout commerçant tenant une comptabilité au régime réel doit valoriser son stock à chaque clôture, selon la méthode CMUP ou PEPS. Le cabinet Erkilic vous fournit un tableau d'inventaire adapté et calcule la variation de stock, un poste qui impacte directement votre bénéfice imposable.",
  },
  {
    q: "Contrats d'apprentissage, ZFU, aides à l'embauche : que peut m'apporter le cabinet ?",
    plain:
      "Le cabinet identifie les dispositifs d'aide à l'embauche (apprentis, ACRE, aide à l'embauche jeune, contrats aidés), gère les DPAE, les DSN, la paye et le suivi des exonérations. Pour un artisan qui embauche son premier salarié à Juvignac, c'est plusieurs milliers d'euros d'aides à récupérer.",
  },
];

export const Route = createFileRoute("/secteur/artisans-commercants")({
  head: () => ({
    meta: [
      { title: "Expert-Comptable Artisans & Commerçants Juvignac" },
      {
        name: "description",
        content:
          "Comptable spécialisé artisans, commerçants et TPE à Juvignac / Montpellier : gestion de stocks, TVA sur encaissement, paye, aides à l'embauche.",
      },
      { property: "og:title", content: "Comptable Artisans & Commerçants — Juvignac" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      { type: "application/ld+json", children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))) },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Secteurs" },
        { label: "Artisans & commerçants" },
      ]}
      eyebrow="Secteur · Artisans & commerçants"
      h1="Comptable pour artisans, commerçants et TPE"
      italic="à Juvignac & Montpellier Ouest."
      intro={
        <p>
          Boulangeries, garages, coiffeurs, restaurants, boutiques,
          artisans du BTP : les métiers du geste et du commerce ont des
          contraintes comptables spécifiques que le cabinet Erkilic maîtrise
          depuis plus de 23 ans dans l'ouest montpelliérain.
        </p>
      }
      sections={[
        {
          title: "Ce qui rend votre comptabilité spécifique",
          bullets: [
            "TVA sur encaissement pour la prestation de services — timing d'exigibilité différent des ventes.",
            "Gestion et valorisation des stocks (matières, marchandises) à chaque clôture.",
            "Régime social du TNS avec cotisations URSSAF sur bénéfice.",
            "Aides locales : apprentissage, contrats aidés, exonérations ZFU / QPV.",
            "Contrôles URSSAF et fiscaux plus fréquents sur les métiers de bouche et le BTP.",
          ],
        },
        {
          title: "L'avantage de la proximité géographique",
          body: (
            <p>
              La récupération des pièces justificatives (factures papier,
              tickets Z de caisse, bordereaux fournisseurs) est un vrai
              sujet pour un artisan. À 5 minutes du centre commercial de
              La Plaine, sur la route de Saint-Georges, le cabinet Erkilic
              vous récupère les pièces en main propre lors d'un
              rendez-vous mensuel court. Fini les scans à 22h.
            </p>
          ),
        },
        {
          title: "Ce que le pack Artisans / PME contient",
          bullets: [
            "Tenue comptable mensuelle et TVA sur encaissement.",
            "Bilan annuel signé et liasse fiscale.",
            "Paye et DSN pour vos salariés.",
            "Gestion du prévisionnel de trésorerie et tableau de bord.",
            "Optimisation IR / IS et rémunération du dirigeant.",
            "Assistance en cas de contrôle fiscal ou URSSAF.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Découvrir le pack Pro", to: "/pack/pro", sub: "Un pack sur-mesure pour votre atelier ou votre commerce." }}
    />
  ),
});
