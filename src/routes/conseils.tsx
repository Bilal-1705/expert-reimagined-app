import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/conseils";

const articles = [
  {
    to: "/creation-entreprise/sasu-eurl-ei",
    tag: "Création",
    title: "SASU, EURL, EI : quel statut juridique choisir à Montpellier ?",
    excerpt:
      "Comparatif chiffré des trois formes juridiques les plus courantes pour créer sa TPE dans l'Hérault : régime social, fiscalité, dividendes, protection du patrimoine.",
  },
  {
    to: "/creation-entreprise/aides-locales-montpellier",
    tag: "Création",
    title: "Aides locales à la création d'entreprise à Montpellier & Juvignac",
    excerpt:
      "CCI Hérault, Région Occitanie, French Tech Montpellier, Bpifrance : le guide des dispositifs d'aide, d'exonération et de financement en 2026.",
  },
  {
    to: "/secteur/professions-liberales-medicales",
    tag: "Secteur",
    title: "Obligations comptables des professions libérales à Juvignac",
    excerpt:
      "BNC, déclaration 2035, URSSAF, CARMF, CARPIMKO, CIPAV : tout ce qu'un médecin, kiné, infirmier ou avocat doit savoir sur ses obligations.",
  },
  {
    to: "/secteur/immobilier-lmnp-sci",
    tag: "Immobilier",
    title: "LMNP ou SCI à l'IS : quel régime pour investir dans l'Hérault ?",
    excerpt:
      "Amortissement du bien, déductibilité des charges, plus-value à la revente : le vrai comparatif pour un investissement locatif à Juvignac ou Montpellier.",
  },
  {
    to: "/secteur/artisans-commercants",
    tag: "Secteur",
    title: "Comptable pour artisans et commerçants à Juvignac",
    excerpt:
      "Gestion des stocks, TVA sur encaissement, contrats d'apprentissage : les spécificités comptables des métiers de la fabrication et du commerce local.",
  },
  {
    to: "/comparatif/indy-vs-erkilic",
    tag: "Comparatif",
    title: "Indy vs Cabinet Erkilic : logiciel ou expert-comptable ?",
    excerpt:
      "Ce qu'un logiciel de comptabilité ne peut pas faire : signer un bilan, engager sa responsabilité, défendre votre dossier en cas de contrôle fiscal.",
  },
  {
    to: "/comparatif/pennylane-vs-erkilic",
    tag: "Comparatif",
    title: "Pennylane vs Cabinet Erkilic : logiciel + expert, la bonne combinaison",
    excerpt:
      "Pourquoi utiliser Pennylane comme outil collaboratif avec votre expert-comptable local plutôt que comme substitut à ce dernier.",
  },
  {
    to: "/comparatif/keobiz-vs-erkilic",
    tag: "Comparatif",
    title: "Keobiz / L-Expert-Comptable.com vs Erkilic : plateforme ou proximité ?",
    excerpt:
      "Les limites des plateformes 100 % à distance : rotation des interlocuteurs, standards téléphoniques, absence de conseil ancré dans votre territoire.",
  },
  {
    to: "/guide",
    tag: "Guide",
    title: "Guide de l'expertise comptable en France",
    excerpt:
      "Rôle de l'expert-comptable, cadre légal, obligations, tarifs, choix du cabinet : le guide complet pour comprendre le métier.",
  },
];

export const Route = createFileRoute("/conseils")({
  head: () => ({
    meta: [
      { title: "Conseils Expert-Comptable Montpellier | Cabinet Erkilic" },
      {
        name: "description",
        content:
          "Analyses, comparatifs et guides pratiques du cabinet Erkilic : création d'entreprise, statut juridique, LMNP, professions libérales à Montpellier.",
      },
      { property: "og:title", content: "Conseils & analyses — Cabinet Erkilic" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Conseils & analyses — Cabinet Erkilic",
          url: `${SITE}${PATH}`,
          about: "Expertise comptable, fiscalité, création d'entreprise, LMNP",
        }),
      },
    ],
  }),
  component: Conseils,
});

function Conseils() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-16 md:pt-24 pb-14 md:pb-20 px-6 border-b border-ink/5">
          <div className="max-w-5xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50 mb-6 block">
              Conseils & analyses
            </span>
            <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-balance">
              Le savoir-faire du cabinet,{" "}
              <span className="text-ink/25 italic font-normal">en lecture libre.</span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Comparatifs, guides sectoriels, analyses fiscales et
              accompagnement de la création d'entreprise à Montpellier et
              dans l'Hérault. Notre pôle éditorial, régulièrement mis à
              jour.
            </p>
          </div>
        </section>

        <section ref={gridRef} className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto grid gap-px bg-ink/5 border border-ink/5 md:grid-cols-2 reveal-stagger" data-reveal>
            {articles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="bg-paper p-8 md:p-10 group hover:bg-ink transition-colors duration-500 flex flex-col"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-6 group-hover:text-paper/50">
                  {a.tag}
                </span>
                <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4 group-hover:text-paper">
                  {a.title}
                </h2>
                <p className="text-sm text-ink/70 leading-relaxed group-hover:text-paper/70 flex-1">
                  {a.excerpt}
                </p>
                <span className="mt-8 text-[10px] font-bold uppercase tracking-widest text-ink/40 group-hover:text-paper transition-transform group-hover:translate-x-1">
                  Lire l'article →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
