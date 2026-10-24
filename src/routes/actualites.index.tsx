import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://erkilic.fr";
const PATH = "/actualites";

type Item = {
  to: string;
  tag: string;
  date?: string;
  title: string;
  excerpt: string;
};

const news: Item[] = [
  {
    to: "/actualites/facturation-electronique-septembre-2026",
    tag: "Actualité",
    date: "2026-08-15",
    title: "Facturation électronique : ce qui change au 1er septembre 2026",
    excerpt:
      "Obligation de réception pour toutes les entreprises, choix de la plateforme agréée (PA), check-list de préparation pour une TPE de l'Hérault.",
  },
  {
    to: "/actualites/declaration-revenus-2026",
    tag: "Actualité",
    date: "2026-08-15",
    title: "Déclaration de revenus 2026 : dates, nouveautés et erreurs fréquentes",
    excerpt:
      "Calendrier pour l'Hérault (zone 2), revalorisation du barème, cas des indépendants, LMNP et dividendes : le récapitulatif du cabinet.",
  },
  {
    to: "/actualites/micro-entreprise-seuils-tva-2026",
    tag: "Actualité",
    date: "2026-08-15",
    title: "Micro-entreprise 2026 : nouveaux seuils de TVA et passage en société",
    excerpt:
      "Franchise en base, seuils de chiffre d'affaires, moment optimal pour basculer en EURL ou SASU — avec notre simulateur de statut.",
  },
  {
    to: "/actualites/facturation-electronique-2026",
    tag: "Réforme",
    date: "2026-07-08",
    title: "Facture électronique 2026 : le calendrier complet de la réforme",
    excerpt:
      "Ce que la réforme impose à chaque entreprise, les échéances par taille et la manière dont le cabinet vous accompagne.",
  },
  {
    to: "/actualites/loi-finances-2026",
    tag: "Fiscalité",
    date: "2026-07-08",
    title: "Loi de Finances 2026 : les mesures qui concernent les TPE",
    excerpt:
      "Barème de l'IR, IS, crédits d'impôt, dispositifs locaux : la lecture du cabinet pour les dirigeants de l'Hérault.",
  },
  {
    to: "/actualites/baremes-2026",
    tag: "Chiffres",
    date: "2026-07-08",
    title: "Barèmes, plafonds & seuils 2026",
    excerpt:
      "Barème kilométrique, plafonds URSSAF, seuils micro-entreprise et TVA, SMIC : les chiffres officiels à jour.",
  },
];

const analyses: Item[] = [
  {
    to: "/comparatif/eurl-vs-sasu",
    tag: "Création",
    title: "EURL ou SASU en 2026 : le comparatif chiffré",
    excerpt:
      "Charges, dividendes, retraite et chômage comparés par une experte-comptable, avec les taux 2026.",
  },
  {
    to: "/creation-entreprise/sasu-eurl-ei",
    tag: "Création",
    title: "Quel statut juridique choisir à Montpellier ?",
    excerpt:
      "Micro, EI, EURL ou SASU : partir de votre projet, de votre rémunération et de vos droits au chômage.",
  },
  {
    to: "/creation-entreprise/aides-locales-montpellier",
    tag: "Création",
    title: "Aides à la création d'entreprise à Montpellier (2026)",
    excerpt:
      "ACRE sur demande sous 60 jours, ARCE, prêts d'honneur, aides de la Région Occitanie : le point 2026.",
  },
  {
    to: "/simulateur-statut",
    tag: "Outils",
    title: "Simulateur de statut juridique",
    excerpt:
      "Comparez le revenu net en micro, EURL et SASU sur votre chiffre d'affaires, avec les taux 2026.",
  },
  {
    to: "/secteur/commerce-ecommerce",
    tag: "Secteurs",
    title: "E-commerce : TVA OSS, marketplaces et stocks",
    excerpt:
      "Versements Amazon et Shopify, TVA des ventes en Europe, DAC7 : ce qu'il faut maîtriser.",
  },
  {
    to: "/pack/profession-liberale",
    tag: "Secteurs",
    title: "Professions libérales : micro-BNC ou déclaration 2035 ?",
    excerpt:
      "Abattement de 34 % ou frais réels, caisses de retraite, passage en SELARL : comment choisir.",
  },
  {
    to: "/secteur/immobilier-lmnp-sci",
    tag: "Secteurs",
    title: "LMNP ou SCI : quel régime pour investir dans l'Hérault ?",
    excerpt:
      "Amortissement, charges déductibles, plus-value à la revente : le comparatif pour un investissement locatif.",
  },
  {
    to: "/guide",
    tag: "Outils",
    title: "Guide : comment choisir son expert-comptable",
    excerpt: "Rôle, obligations, tarifs et critères de choix d'un cabinet, expliqués simplement.",
  },
];

const FILTERS = ["Tout", "Fiscalité", "Création", "Secteurs", "Outils"] as const;
type Filter = (typeof FILTERS)[number];

/** News items are dated and fiscal by nature; guides carry their own tag. */
const all: Item[] = [...news.map((n) => ({ ...n, tag: "Fiscalité" })), ...analyses];

export const Route = createFileRoute("/actualites/")({
  head: () => ({
    meta: [
      { title: "Actualités comptables & fiscales 2026 | Erkilic Juvignac" },
      {
        name: "description",
        content:
          "Actualités fiscales et comptables 2026 décryptées par Erkilic Expertise Comptable à Juvignac : facture électronique, impôts, seuils, guides et analyses.",
      },
      { property: "og:title", content: "Actualités & analyses — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Réforme de la facture électronique, déclaration de revenus, seuils micro : l'actualité expliquée par un expert-comptable de l'Hérault.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "Actualités comptables & fiscales — Erkilic Expertise Comptable",
              url: `${SITE}${PATH}`,
              inLanguage: "fr-FR",
              about: "Fiscalité, comptabilité, création d'entreprise à Montpellier et Juvignac",
              publisher: { "@id": `${SITE}/#cabinet` },
            },
            {
              "@type": "ItemList",
              itemListElement: news.map((n, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE}${n.to}`,
                name: n.title,
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
                { "@type": "ListItem", position: 2, name: "Actualités", item: `${SITE}${PATH}` },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Actualites,
});

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function Card({ item, featured = false }: { item: Item; featured?: boolean }) {
  return (
    <Link
      to={item.to}
      className={`group flex flex-col border border-ink/10 bg-paper p-6 md:p-8 transition-colors hover:border-ink ${
        featured ? "md:col-span-2 lg:col-span-3 md:p-10 bg-paper-dark/40" : ""
      }`}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60 mb-4">
        {featured && <span className="text-ink">À la une · </span>}
        {item.tag}
        {item.date && (
          <>
            {" · "}
            <time dateTime={item.date}>{fmtDate(item.date)}</time>
          </>
        )}
      </span>
      <h3
        className={`font-sora font-extrabold tracking-tight leading-snug mb-3 group-hover:underline underline-offset-4 decoration-1 ${
          featured ? "text-2xl md:text-4xl max-w-3xl" : "text-lg md:text-xl"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-ink/70 leading-relaxed flex-1 ${featured ? "text-base max-w-2xl" : "text-sm"}`}
      >
        {item.excerpt}
      </p>
      <span className="mt-6 text-[11px] font-bold uppercase tracking-widest text-ink/70 group-hover:text-ink">
        Lire →
      </span>
    </Link>
  );
}

function Actualites() {
  const heroRef = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>("Tout");
  const items = filter === "Tout" ? all : all.filter((i) => i.tag === filter);
  const [first, ...rest] = items;

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-12 md:pt-16 pb-10 md:pb-12 px-6 border-b border-ink/5">
          <div className="max-w-6xl mx-auto">
            <nav
              aria-label="fil d'ariane"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-6 flex flex-wrap gap-2"
            >
              <Link to="/" className="hover:text-ink transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <span>Actualités</span>
            </nav>
            <h1 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-5 text-balance">
              Actualités et guides{" "}
              <span className="text-ink/30 italic font-normal">comptables et fiscaux.</span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Ce qui change pour les dirigeants, indépendants et particuliers de Montpellier et de
              l'Hérault, expliqué par l'experte-comptable du cabinet Erkilic.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              role="tablist"
              aria-label="Filtrer par thème"
              className="flex flex-wrap gap-2 mb-8"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-[12px] font-bold uppercase tracking-widest border transition-colors ${
                    filter === f ? "bg-ink text-paper border-ink" : "border-ink/20 hover:border-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {first && <Card item={first} featured />}
              {rest.map((a) => (
                <Card key={a.to} item={a} />
              ))}
            </div>
          </div>
        </section>

        <ProfileFunnel
          title="Une question sur votre situation ?"
          intro="Deux ou trois clics pour préciser votre besoin, puis l'experte-comptable vous rappelle. Sans engagement."
        />
      </main>
      <Footer />
    </div>
  );
}
