import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/secteur/commerce-ecommerce";

const UPDATED = "2026-10-23";

const faq = [
  {
    q: "Pourquoi prendre un expert-comptable spécialisé e-commerce ?",
    a: "Une boutique en ligne génère beaucoup d'opérations : ventes, remboursements, commissions des plateformes, frais de paiement, versements groupés. Un cabinet habitué à ces flux sait rapprocher un versement Amazon ou Shopify des ventes qu'il couvre, appliquer la bonne TVA selon le pays du client et suivre vos stocks. Un cabinet généraliste passe souvent plus de temps, et le temps se retrouve dans les honoraires.",
  },
  {
    q: "À partir de quand dois-je facturer la TVA du pays de mon client européen ?",
    a: "Quand vos ventes à distance à des particuliers d'autres pays de l'Union dépassent 10 000 € par an au total, vous appliquez la TVA du pays de livraison. Le guichet unique OSS vous permet de déclarer et payer cette TVA depuis la France, en une seule déclaration trimestrielle.",
  },
  {
    q: "Les marketplaces transmettent-elles mes ventes à l'administration ?",
    a: "Oui. Depuis la directive DAC7, les plateformes comme Amazon, eBay, Etsy ou Vinted déclarent chaque année à l'administration fiscale les revenus de leurs vendeurs au-delà de certains seuils. Vos déclarations doivent donc être cohérentes avec ce que la plateforme transmet.",
  },
  {
    q: "Micro-entreprise ou société pour un e-commerce ?",
    a: "La micro-entreprise permet de démarrer simplement jusqu'à 203 100 € de ventes en 2026, mais elle ne déduit pas vos achats de marchandises et vos frais réels. Avec une marge faible, ce qui est fréquent en revente, le régime réel en EI, EURL ou SASU devient vite plus intéressant. Notre simulateur de statut vous donne un premier ordre de grandeur.",
  },
  {
    q: "Qu'est-ce qui change avec la facturation électronique ?",
    a: "Depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques. L'émission devient obligatoire pour les PME et micro-entreprises au 1er septembre 2027. Les ventes aux particuliers ne passent pas en facture électronique mais font l'objet d'une transmission de données (e-reporting).",
  },
];

export const Route = createFileRoute("/secteur/commerce-ecommerce")({
  head: () => ({
    meta: [
      { title: "Expert-comptable e-commerce : TVA, OSS, marketplaces | Erkilic" },
      {
        name: "description",
        content:
          "Expert-comptable pour e-commerçants et commerçants : TVA OSS et IOSS, Amazon, Shopify, DAC7, stocks, facturation électronique. Cabinet près de Montpellier.",
      },
      {
        property: "og:title",
        content: "Expert-comptable e-commerce | Erkilic, près de Montpellier",
      },
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
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.a }))),
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
      eyebrow="Secteur · E-commerce et commerce"
      h1="Expert-comptable e-commerce :"
      italic="TVA, marketplaces et stocks maîtrisés."
      dateModified={UPDATED}
      intro={
        <>
          <p>
            Boutique Shopify, vendeur Amazon, Etsy ou Cdiscount, magasin physique avec un site en
            complément : le commerce en ligne cumule un grand volume d'opérations et des règles de
            TVA qui dépendent du pays de chaque client. Erkilic Expertise Comptable accompagne les
            e-commerçants et commerçants de Montpellier, de Juvignac et de toute la France, à
            distance si besoin.
          </p>
          <p className="mt-4">
            L'objectif est simple : des comptes justes malgré le volume, une TVA déclarée
            correctement dans chaque pays, et une marge que vous connaissez canal par canal.
          </p>
        </>
      }
      sections={[
        {
          title: "Les difficultés propres à la comptabilité e-commerce",
          bullets: [
            "Des versements groupés (Amazon, Shopify Payments, Stripe, PayPal) qui mélangent ventes, remboursements, commissions et frais.",
            "Des ventes dans plusieurs pays, avec des taux de TVA différents.",
            "Des stocks à valoriser en fin d'exercice, qui pèsent directement sur le résultat.",
            "Des plateformes qui transmettent vos revenus à l'administration (DAC7).",
            "La facturation électronique et le e-reporting des ventes aux particuliers.",
          ],
        },
        {
          title: "TVA des ventes en ligne : OSS, IOSS et autoliquidation",
          body: (
            <>
              <p>
                Tant que vos ventes à distance à des particuliers d'autres pays de l'Union restent
                sous 10 000 € par an, vous facturez la TVA française. Au-delà, vous appliquez la TVA
                du pays de livraison et la déclarez via le guichet unique OSS, une déclaration
                trimestrielle pour tous les pays.
              </p>
              <p>
                Si vous importez des marchandises de faible valeur (jusqu'à 150 €) vendues à des
                particuliers européens, le guichet IOSS simplifie la TVA à l'import. Pour vos achats
                auprès de fournisseurs européens professionnels, la TVA est autoliquidée. Le cabinet
                met en place ces régimes et vérifie chaque déclaration.
              </p>
            </>
          ),
        },
        {
          title: "Rapprocher les versements des plateformes",
          body: (
            <p>
              Un versement Amazon de 3 400 € peut correspondre à 5 000 € de ventes, moins des
              commissions, des frais d'expédition FBA et des remboursements. Comptabiliser le
              versement net fausse votre chiffre d'affaires et votre TVA. Le cabinet comptabilise le
              brut à partir des rapports de la plateforme, en connectant vos outils quand c'est
              possible (par exemple avec{" "}
              <Link
                to="/expert-comptable-pennylane"
                className="font-bold underline underline-offset-4"
              >
                Pennylane
              </Link>
              ).
            </p>
          ),
        },
        {
          title: "Stocks, marge et pilotage",
          bullets: [
            "Inventaire et valorisation du stock à la clôture.",
            "Suivi de la marge par canal (site, marketplaces, boutique) et par famille de produits.",
            "Prévision de trésorerie avant les pics de commandes (soldes, fin d'année).",
            "Choix du statut et du régime fiscal adaptés à une activité de revente à marge faible.",
          ],
        },
        {
          title: "Commerce de proximité et commerce en ligne",
          body: (
            <p>
              Le cabinet est rue du Poumpidou à Juvignac, près de la zone commerciale de la Plaine.
              Il suit des commerces de proximité de l'Ouest montpelliérain comme des boutiques 100 %
              en ligne. Les commerçants et artisans trouveront aussi des informations sur notre page{" "}
              <Link
                to="/secteur/artisans-commercants"
                className="font-bold underline underline-offset-4"
              >
                expert-comptable artisans et commerçants
              </Link>
              .
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Parlons de votre commerce." }}
    />
  ),
});
