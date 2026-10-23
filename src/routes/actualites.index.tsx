import { createFileRoute, Link } from "@tanstack/react-router";
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
    to: "/creation-entreprise/sasu-eurl-ei",
    tag: "Création",
    title: "SASU, EURL, EI : quel statut juridique choisir à Montpellier ?",
    excerpt:
      "Comparatif chiffré des trois formes juridiques les plus courantes : régime social, fiscalité, dividendes, protection du patrimoine.",
  },
  {
    to: "/creation-entreprise/aides-locales-montpellier",
    tag: "Création",
    title: "Aides locales à la création d'entreprise à Montpellier & Juvignac",
    excerpt:
      "CCI Hérault, Région Occitanie, French Tech Montpellier, Bpifrance : les dispositifs d'aide et de financement en 2026.",
  },
  {
    to: "/secteur/professions-liberales-medicales",
    tag: "Secteur",
    title: "Obligations comptables des professions libérales à Juvignac",
    excerpt:
      "BNC, déclaration 2035, URSSAF, CARMF, CARPIMKO, CIPAV : les obligations d'un médecin, kiné, infirmier ou avocat.",
  },
  {
    to: "/secteur/immobilier-lmnp-sci",
    tag: "Immobilier",
    title: "LMNP ou SCI à l'IS : quel régime pour investir dans l'Hérault ?",
    excerpt:
      "Amortissement, déductibilité des charges, plus-value à la revente : le vrai comparatif pour un investissement locatif.",
  },
  {
    to: "/secteur/artisans-commercants",
    tag: "Secteur",
    title: "Comptable pour artisans et commerçants à Juvignac",
    excerpt:
      "Stocks, TVA sur encaissement, contrats d'apprentissage : les spécificités comptables des métiers du commerce local.",
  },
  {
    to: "/comparatifs",
    tag: "Comparatifs",
    title: "Erkilic Expertise Comptable vs Indy, Pennylane, Keobiz, Dougs",
    excerpt:
      "La page de comparaison générale entre un cabinet local et les solutions de comptabilité en ligne.",
  },
  {
    to: "/simulateur-statut",
    tag: "Outil",
    title: "Simulateur : quel statut juridique choisir ?",
    excerpt:
      "Quelques questions pour orienter votre choix entre micro-entreprise, EI, EURL et SASU, puis un rendez-vous si besoin.",
  },
  {
    to: "/guide",
    tag: "Guide",
    title: "Guide de l'expertise comptable en France",
    excerpt:
      "Rôle de l'expert-comptable, cadre légal, obligations, tarifs, choix du cabinet : le guide complet.",
  },
];

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

function Card({ item }: { item: Item }) {
  return (
    <Link
      to={item.to}
      className="bg-paper p-8 md:p-10 group hover:bg-ink transition-colors duration-500 flex flex-col"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-6 group-hover:text-paper/60">
        {item.tag}
        {item.date && (
          <>
            {" · "}
            <time dateTime={item.date}>
              {new Date(item.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </>
        )}
      </span>
      <h3 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4 group-hover:text-paper">
        {item.title}
      </h3>
      <p className="text-sm text-ink/75 leading-relaxed group-hover:text-paper/70 flex-1">
        {item.excerpt}
      </p>
      <span className="mt-8 text-[10px] font-bold uppercase tracking-widest text-ink/60 group-hover:text-paper transition-transform group-hover:translate-x-1">
        Lire l'article →
      </span>
    </Link>
  );
}

function Actualites() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-16 md:pt-24 pb-14 md:pb-20 px-6 border-b border-ink/5">
          <div className="max-w-5xl mx-auto">
            <nav
              aria-label="fil d'ariane"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-8 flex flex-wrap gap-2"
            >
              <Link to="/" className="hover:text-ink transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <span>Actualités</span>
            </nav>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/70 mb-6 block">
              Actualités & analyses
            </span>
            <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-balance">
              L'actualité fiscale 2026,{" "}
              <span className="text-ink/25 italic font-normal">décryptée pour vous.</span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Réformes, échéances, barèmes et analyses sectorielles : Erkilic
              Expertise Comptable, cabinet d'expert-comptable à Juvignac près de
              Montpellier, publie ici ce qui change réellement pour les
              dirigeants, indépendants et particuliers de l'Hérault.
            </p>
          </div>
        </section>

        <section ref={gridRef} className="py-16 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight mb-10">
              Dernières actualités
            </h2>
            <div className="grid gap-px bg-ink/5 border border-ink/5 md:grid-cols-2">
              {news.map((a) => (
                <Card key={a.to} item={a} />
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight mb-10">
              Guides & analyses
            </h2>
            <div className="grid gap-px bg-ink/5 border border-ink/5 md:grid-cols-2">
              {analyses.map((a) => (
                <Card key={a.to} item={a} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
