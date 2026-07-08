import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/facturation-electronique-2026";
const PUBLISHED = "2026-01-20";
const UPDATED = "2026-07-08";

const faq = [
  {
    q: "Qui est concerné par la facturation électronique en 2026 ?",
    plain:
      "Toutes les entreprises assujetties à la TVA en France, quelle que soit leur taille. À partir du 1er septembre 2026, toutes les entreprises doivent être capables de recevoir des factures électroniques. L'émission devient obligatoire au 1er septembre 2026 pour les grandes entreprises et ETI, puis au 1er septembre 2027 pour les PME, TPE et micro-entrepreneurs.",
  },
  {
    q: "Qu'est-ce qu'une Plateforme Agréée (PA) et comment la choisir ?",
    plain:
      "Une Plateforme Agréée (PA, ex-PDP) est un opérateur privé immatriculé par la DGFiP pour transmettre les factures électroniques entre entreprises et à l'administration. Le choix se fait selon votre logiciel de comptabilité, votre secteur, vos volumes et le prix. Le cabinet Erkilic accompagne le choix et le paramétrage.",
  },
  {
    q: "Le Portail Public de Facturation (PPF) est-il gratuit ?",
    plain:
      "Le PPF ne joue plus qu'un rôle d'annuaire et de concentrateur de données de reporting depuis la réforme 2024. Il n'assume plus de mission d'émission/réception gratuite : chaque entreprise doit passer par une Plateforme Agréée. Le cabinet Erkilic conseille ses clients sur les offres gratuites ou low-cost adaptées aux TPE.",
  },
  {
    q: "Quelles données de e-reporting devrai-je transmettre ?",
    plain:
      "Trois flux : e-invoicing (factures B2B domestiques), e-reporting des opérations B2C et B2B internationales, et e-reporting des données de paiement. La fréquence dépend du régime de TVA (réel normal mensuel, réel simplifié trimestriel, franchise en base annuel).",
  },
  {
    q: "Puis-je continuer avec des factures PDF classiques ?",
    plain:
      "Non, pas entre assujettis TVA français. Le PDF classique par email ne sera plus une facture légale entre entreprises françaises. Il faut passer par une Plateforme Agréée qui transforme la facture au format structuré (Factur-X, UBL ou CII).",
  },
  {
    q: "Que se passe-t-il si je ne suis pas prêt à la date d'entrée en vigueur ?",
    plain:
      "Le défaut d'émission au format électronique est sanctionné par une amende de 15 € par facture, plafonnée à 15 000 € par an. Le défaut de e-reporting est sanctionné par une amende de 250 € par transmission, plafonnée à 15 000 € par an. Il est donc prudent d'anticiper.",
  },
];

export const Route = createFileRoute("/actualites/facturation-electronique-2026")({
  head: () => ({
    meta: [
      { title: "Facturation électronique 2026 : le guide complet | Erkilic" },
      {
        name: "description",
        content:
          "Calendrier, obligations, Plateformes Agréées, e-reporting : tout savoir sur la facture électronique obligatoire 2026-2027 pour TPE, PME et indépendants.",
      },
      { property: "og:title", content: "Facturation électronique 2026-2027" },
      { property: "og:description", content: "Ce qui change pour votre entreprise, calendrier officiel et étapes concrètes." },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "Facturation électronique 2026-2027 : ce qui change pour votre entreprise",
          description:
            "Calendrier officiel, Plateformes Agréées, e-reporting : préparer la réforme de la facture électronique.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Actualités" },
        { label: "Facturation électronique 2026" },
      ]}
      eyebrow="Actualité fiscale · Mis à jour en 2026"
      h1="Facture électronique 2026-2027"
      italic="ce qui change pour votre entreprise."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            La facturation électronique devient <strong>obligatoire entre entreprises</strong>{" "}
            françaises assujetties à la TVA. Le calendrier officiel publié par la
            DGFiP prévoit une entrée en vigueur en deux vagues, en 2026 puis 2027.
            Cette page synthétise ce que doit faire un dirigeant de TPE, PME ou
            profession libérale à Montpellier, Juvignac ou ailleurs pour être en
            conformité.
          </p>
          <p className="mt-4">
            Le cabinet Erkilic accompagne ses clients dans le choix d'une Plateforme
            Agréée, le paramétrage de leur logiciel (Pennylane, Tiime, Sage, Cegid…)
            et la gestion du e-reporting.
          </p>
        </>
      }
      sections={[
        {
          title: "Le calendrier officiel (à retenir)",
          bullets: [
            "1er septembre 2026 : toutes les entreprises doivent pouvoir RECEVOIR les factures électroniques.",
            "1er septembre 2026 : émission obligatoire pour les grandes entreprises et ETI.",
            "1er septembre 2027 : émission obligatoire pour toutes les PME, TPE, professions libérales et micro-entrepreneurs.",
            "Le e-reporting suit le même calendrier que l'émission.",
          ],
        },
        {
          title: "Ce qui change concrètement pour un dirigeant",
          bullets: [
            "Fin des PDF envoyés par email entre entreprises françaises assujetties à la TVA.",
            "Choix obligatoire d'une Plateforme Agréée (PA) — une par entité juridique.",
            "Factures au format structuré : Factur-X (mixte PDF + XML), UBL ou CII.",
            "Transmission automatique des données de TVA à l'administration (e-reporting).",
            "Suivi des statuts de la facture (déposée, refusée, encaissée) directement dans la PA.",
          ],
        },
        {
          title: "Choisir sa Plateforme Agréée : les 4 critères",
          bullets: [
            "Compatibilité avec votre logiciel de comptabilité et de gestion (connecteurs Pennylane, Sage, Cegid, EBP, Tiime).",
            "Prix par facture émise/reçue vs abonnement fixe — arbitrage selon vos volumes.",
            "Ergonomie de l'interface pour les non-comptables (dirigeant, assistant).",
            "Qualité du support français et présence dans le temps.",
          ],
        },
        {
          title: "Comment le cabinet Erkilic accompagne la transition",
          bullets: [
            "Audit de votre facturation actuelle (volumes B2B, B2C, international).",
            "Sélection d'une Plateforme Agréée adaptée à votre profil.",
            "Paramétrage des connecteurs avec Pennylane / Tiime / Sage.",
            "Formation du dirigeant et des équipes.",
            "Suivi du e-reporting et fiabilisation des flux jusqu'à la clôture.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Auditer ma facturation",
        to: "/contact",
        sub: "30 minutes pour cadrer votre passage à la facture électronique.",
      }}
    />
  ),
});
