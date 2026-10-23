import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://erkilic.fr";
const PATH = "/comparatifs";

const comparatifs = [
  {
    to: "/comparatif/indy-vs-erkilic",
    tag: "Logiciel",
    title: "Indy vs Erkilic Expertise Comptable",
    excerpt:
      "Un logiciel de tenue pour BNC ne signe pas un bilan et n'engage aucune responsabilité en cas de contrôle fiscal.",
  },
  {
    to: "/comparatif/pennylane-vs-erkilic",
    tag: "Logiciel",
    title: "Pennylane vs Erkilic Expertise Comptable",
    excerpt:
      "Pennylane est un excellent outil collaboratif — à utiliser avec votre expert-comptable, pas à sa place.",
  },
  {
    to: "/comparatif/keobiz-vs-erkilic",
    tag: "Plateforme",
    title: "Keobiz vs Erkilic Expertise Comptable",
    excerpt:
      "Plateforme 100 % à distance : rotation des interlocuteurs, standard téléphonique, conseil déconnecté du terrain.",
  },
  {
    to: "/comparatif/dougs-vs-erkilic",
    tag: "Plateforme",
    title: "Dougs vs Erkilic Expertise Comptable",
    excerpt:
      "Tarifs, contact humain, optimisation fiscale sur-mesure et ancrage local : le comparatif chiffré.",
  },
  {
    to: "/comparatif/cabinet-vs-en-ligne",
    tag: "Synthèse",
    title: "Cabinet traditionnel vs comptabilité 100 % en ligne",
    excerpt:
      "Le vrai coût complet, la disponibilité réelle et le niveau de conseil : la comparaison de fond.",
  },
  {
    to: "/comparatif/eurl-vs-sasu",
    tag: "Statut",
    title: "EURL vs SASU : quel statut juridique ?",
    excerpt:
      "Régime social du dirigeant, dividendes, cotisations, protection : le comparatif chiffré pour choisir.",
  },
];

const table: Array<[string, string, string]> = [
  [
    "Signature et dépôt du bilan",
    "Erkilic Expertise Comptable : incluse, expert-comptable inscrit à l'Ordre",
    "Logiciels seuls : non — vous restez responsable",
  ],
  [
    "Responsabilité civile professionnelle",
    "Engagée sur chaque mission",
    "Limitée aux conditions générales de la plateforme",
  ],
  [
    "Interlocuteur",
    "Le même expert-comptable, joignable directement",
    "Support mutualisé, interlocuteur variable",
  ],
  [
    "Optimisation fiscale personnalisée",
    "Étude annuelle rémunération / dividendes",
    "Recommandations génériques automatisées",
  ],
  ["Contrôle fiscal / URSSAF", "Assistance et représentation du dossier", "Non couvert"],
  [
    "Ancrage local (Juvignac, Montpellier)",
    "Rendez-vous au cabinet, connaissance du tissu local",
    "Aucun",
  ],
  [
    "Tarif",
    "Forfait clair selon le pack, devis gratuit sous 24 h",
    "Abonnement bas, options facturées en plus",
  ],
];

export const Route = createFileRoute("/comparatifs")({
  head: () => ({
    meta: [
      { title: "Comparatifs expert-comptable | Erkilic Expertise Comptable" },
      {
        name: "description",
        content:
          "Cabinet local vs comptabilité en ligne : comparatifs Indy, Pennylane, Keobiz, Dougs, EURL vs SASU. Tableau de synthèse par Erkilic Expertise Comptable.",
      },
      { property: "og:title", content: "Comparatifs : cabinet local vs solutions en ligne" },
      {
        property: "og:description",
        content:
          "Indy, Pennylane, Keobiz, Dougs, cabinet vs 100 % en ligne : ce qu'un logiciel ne peut pas faire à la place d'un expert-comptable.",
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
          "@type": "CollectionPage",
          name: "Comparatifs — Erkilic Expertise Comptable",
          url: `${SITE}${PATH}`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: comparatifs.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              url: `${SITE}${c.to}`,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
            { "@type": "ListItem", position: 2, name: "Comparatifs", item: `${SITE}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: Comparatifs,
});

function Comparatifs() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-16 md:pt-24 pb-14 md:pb-20 px-6 border-b border-ink/5">
          <div className="max-w-5xl mx-auto">
            <nav
              aria-label="Fil d'Ariane"
              className="text-[11px] uppercase tracking-widest text-ink/60 mb-6"
            >
              <Link to="/" className="hover:text-ink">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Comparatifs</span>
            </nav>
            <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-balance">
              Cabinet local{" "}
              <span className="text-ink/25 italic font-normal">ou solution en ligne&nbsp;?</span>
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-3xl">
              Indy, Pennylane, Keobiz, Dougs : ces outils font très bien une partie du travail. Mais
              aucun ne signe un bilan, n'engage sa responsabilité ni ne défend votre dossier face à
              l'administration. Voici, comparatif par comparatif, ce qui change concrètement pour
              une TPE de Juvignac ou de Montpellier.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 border-b border-ink/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
              Tableau de synthèse
            </h2>
            <div className="overflow-x-auto border border-ink/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink text-paper">
                  <tr>
                    <th scope="col" className="p-4 font-bold uppercase tracking-widest text-[10px]">
                      Critère
                    </th>
                    <th scope="col" className="p-4 font-bold uppercase tracking-widest text-[10px]">
                      Erkilic Expertise Comptable
                    </th>
                    <th scope="col" className="p-4 font-bold uppercase tracking-widest text-[10px]">
                      Solutions 100 % en ligne
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(([critere, nous, eux]) => (
                    <tr key={critere} className="border-t border-ink/10 align-top">
                      <th scope="row" className="p-4 font-semibold text-ink w-1/4">
                        {critere}
                      </th>
                      <td className="p-4 text-ink/80">{nous}</td>
                      <td className="p-4 text-ink/70">{eux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section ref={gridRef} className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-10">
              Tous nos comparatifs
            </h2>
            <div
              className="grid gap-px bg-ink/5 border border-ink/5 md:grid-cols-2 reveal-stagger"
              data-reveal
            >
              {comparatifs.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="bg-paper p-8 md:p-10 group hover:bg-ink transition-colors duration-500 flex flex-col"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-6 group-hover:text-paper/60">
                    {c.tag}
                  </span>
                  <h3 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4 group-hover:text-paper">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed group-hover:text-paper/70 flex-1">
                    {c.excerpt}
                  </p>
                  <span className="mt-8 text-[10px] font-bold uppercase tracking-widest text-ink/60 group-hover:text-paper transition-transform group-hover:translate-x-1">
                    Lire le comparatif →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProfileFunnel
          title="Vous hésitez encore ?"
          intro="Laissez votre numéro en deux ou trois clics : l'experte-comptable vous rappelle pour comparer les options sur votre cas."
        />
      </main>
      <Footer />
    </div>
  );
}
