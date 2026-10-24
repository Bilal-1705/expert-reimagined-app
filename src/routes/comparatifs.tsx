import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://erkilic.fr";
const PATH = "/comparatifs";

type Comparatif = { to: string; title: string; excerpt: string };

const groups: { title: string; intro: string; items: Comparatif[] }[] = [
  {
    title: "Logiciel ou expert-comptable ?",
    intro: "Ce qu'un logiciel de comptabilité fait seul, et ce qu'il laisse à votre charge.",
    items: [
      {
        to: "/comparatif/indy-vs-erkilic",
        title: "Indy ou expert-comptable",
        excerpt:
          "Une application efficace pour la tenue au quotidien, mais qui ne signe pas les comptes d'une société.",
      },
      {
        to: "/comparatif/pennylane-vs-erkilic",
        title: "Pennylane ou expert-comptable",
        excerpt:
          "Pennylane est un outil, pas un cabinet : comment le combiner avec un expert-comptable.",
      },
      {
        to: "/expert-comptable-pennylane",
        title: "Expert-comptable sur Pennylane",
        excerpt: "Garder Pennylane et confier la révision, le bilan et le conseil au cabinet.",
      },
    ],
  },
  {
    title: "Cabinet en ligne ou cabinet local ?",
    intro: "Deux façons de travailler avec un expert-comptable : à distance ou en proximité.",
    items: [
      {
        to: "/comparatif/cabinet-vs-en-ligne",
        title: "Cabinet en ligne ou local : la synthèse",
        excerpt:
          "Prix, réactivité, interlocuteur, conseil : les critères pour choisir selon votre profil.",
      },
      {
        to: "/comparatif/dougs-vs-erkilic",
        title: "Dougs ou cabinet local",
        excerpt: "Un cabinet en ligne et un cabinet de proximité comparés point par point.",
      },
      {
        to: "/comparatif/keobiz-vs-erkilic",
        title: "Keobiz ou cabinet local",
        excerpt:
          "Un réseau national et un cabinet indépendant : ce qui change pour une TPE de l'Hérault.",
      },
    ],
  },
  {
    title: "Quel statut pour votre entreprise ?",
    intro: "Les comparatifs pour choisir entre micro-entreprise, EI, EURL et SASU.",
    items: [
      {
        to: "/comparatif/eurl-vs-sasu",
        title: "EURL ou SASU en 2026",
        excerpt: "Charges, dividendes, retraite et chômage comparés avec les taux 2026.",
      },
      {
        to: "/creation-entreprise/sasu-eurl-ei",
        title: "Quel statut choisir à Montpellier ?",
        excerpt: "Micro, EI, EURL ou SASU : partir de votre projet et de votre situation.",
      },
      {
        to: "/simulateur-statut",
        title: "Simulateur de statut",
        excerpt: "Le revenu net estimé en micro, EURL et SASU sur votre chiffre d'affaires.",
      },
    ],
  },
];

const comparatifs = groups.flatMap((g) => g.items);

const COLUMNS = ["Cabinet local (Erkilic)", "Cabinet en ligne", "Logiciel seul"] as const;

const table: Array<[string, string, string, string]> = [
  [
    "Comptes annuels présentés par un expert-comptable",
    "Oui, par une experte-comptable inscrite à l'Ordre",
    "Oui, par un expert-comptable inscrit à l'Ordre",
    "Non : vous les établissez vous-même, ou via un cabinet partenaire en option",
  ],
  [
    "Responsabilité civile professionnelle",
    "Oui, sur chaque mission",
    "Oui, sur chaque mission",
    "Non : conditions générales de l'éditeur",
  ],
  [
    "Interlocuteur",
    "La même personne, joignable directement, rendez-vous au cabinet",
    "Un comptable ou une équipe, à distance, selon la formule",
    "Support de l'éditeur",
  ],
  [
    "Conseil personnalisé",
    "Inclus : rémunération, dividendes, prévisionnel",
    "Selon la formule, parfois en option",
    "Contenus et outils génériques",
  ],
  [
    "Contrôle fiscal ou URSSAF",
    "Assistance du cabinet",
    "Assistance selon la formule",
    "Non couvert",
  ],
  [
    "Tarif",
    "Forfait sur devis, sous 24 h",
    "Abonnement mensuel, options en plus",
    "Abonnement le plus bas",
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
              Logiciel de comptabilité, cabinet en ligne ou cabinet de proximité : trois façons de
              gérer sa comptabilité, avec des niveaux d'accompagnement différents. Choisissez le
              comparatif qui correspond à votre question.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-14">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight">
                  {g.title}
                </h2>
                <p className="mt-2 mb-6 text-ink/70">{g.intro}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {g.items.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="group flex flex-col border border-ink/10 p-6 md:p-7 transition-colors hover:border-ink"
                    >
                      <h3 className="font-sora text-lg md:text-xl font-extrabold leading-snug mb-3 group-hover:underline underline-offset-4 decoration-1">
                        {c.title}
                      </h3>
                      <p className="text-sm text-ink/70 leading-relaxed flex-1">{c.excerpt}</p>
                      <span className="mt-5 text-[11px] font-bold uppercase tracking-widest text-ink/70 group-hover:text-ink">
                        Lire →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16 px-6 border-t border-ink/5 bg-paper-dark/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight">
              Les trois modèles en un coup d'œil
            </h2>
            <p className="mt-2 mb-8 text-ink/70 max-w-3xl">
              Les cabinets en ligne et les logiciels ne sont pas la même chose : un cabinet, qu'il
              soit en ligne ou local, engage la responsabilité d'un expert-comptable inscrit à
              l'Ordre ; un logiciel non.
            </p>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th
                      scope="col"
                      className="py-3 pr-4 text-[11px] font-bold uppercase tracking-widest w-1/4"
                    >
                      Critère
                    </th>
                    {COLUMNS.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="py-3 pr-4 text-[11px] font-bold uppercase tracking-widest"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.map(([critere, ...cells]) => (
                    <tr key={critere} className="border-b border-ink/10 align-top">
                      <th scope="row" className="py-4 pr-4 font-semibold">
                        {critere}
                      </th>
                      {cells.map((v, i) => (
                        <td key={i} className="py-4 pr-4 text-ink/75 leading-relaxed">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-4">
              {table.map(([critere, ...cells]) => (
                <div key={critere} className="border border-ink/10 bg-paper p-5">
                  <p className="font-bold mb-3">{critere}</p>
                  <dl className="space-y-2 text-sm">
                    {cells.map((v, i) => (
                      <div key={i}>
                        <dt className="text-[11px] font-bold uppercase tracking-widest text-ink/60">
                          {COLUMNS[i]}
                        </dt>
                        <dd className="text-ink/75">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
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
