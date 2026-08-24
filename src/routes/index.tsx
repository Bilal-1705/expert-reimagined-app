import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import cabinetImg from "@/assets/cabinet.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import handsLedger from "@/assets/hands-ledger.jpg";

const SITE = "https://erkilic.fr";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expert-comptable à Juvignac | Erkilic Expertise Comptable" },
      {
        name: "description",
        content:
          "Cabinet comptable à Juvignac (Montpellier) : compta, fiscal, social, création d'entreprise. Premier rendez-vous gratuit, devis en 24h — 09 72 54 07 71.",
      },
      {
        name: "keywords",
        content:
          "expert-comptable Juvignac, cabinet comptable Montpellier, expertise comptable Hérault, comptable auto-entrepreneur Montpellier, comptable profession libérale Juvignac, comptable création entreprise Hérault, cabinet Erkilic Expertise Comptable",
      },
      { property: "og:title", content: "Expert-Comptable Juvignac Montpellier — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Parce que vous comptez pour nous, nous comptons pour vous. Expertise comptable, fiscale, sociale et juridique à Juvignac.",
      },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}${heroOffice}` },
      { name: "twitter:image", content: `${SITE}${heroOffice}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
  }),
  component: Home,
});

const packs = [
  {
    n: "01.",
    title: "Créateur",
    desc: "Étude de faisabilité, choix du statut, prévisionnel financier, accompagnement complet la 1ère année.",
    to: "/pack/createur",
  },
  {
    n: "02.",
    title: "Auto-entrepreneur",
    desc: "Suivi du chiffre d'affaires, déclarations URSSAF, conseil sur le passage en société.",
    to: "/pack/auto-entrepreneur",
  },
  {
    n: "03.",
    title: "Profession libérale",
    desc: "BNC, déclaration 2035, AGA. Santé, conseil, architecture, droit — spécialistes des libéraux.",
    to: "/pack/profession-liberale",
  },
  {
    n: "04.",
    title: "Artisans & PME",
    desc: "Tenue, révision, bilans, reporting mensuel, gestion de trésorerie et juridique.",
    to: "/pack/pro",
  },
  {
    n: "05.",
    title: "Particulier",
    desc: "IR, IFI, revenus fonciers, LMNP, optimisation patrimoniale.",
    to: "/pack/particulier",
  },
] as const;

const domains = [
  { n: "01", t: "Comptable", d: "Tenue, révision, comptes annuels, situations intermédiaires et consolidation." },
  { n: "02", t: "Fiscal", d: "TVA, IS, IR, optimisation du statut du dirigeant, assistance en contrôle." },
  { n: "03", t: "Social", d: "Paies, DSN, RSI, accords d'intéressement, contentieux prud'homal." },
  { n: "04", t: "Juridique", d: "Statuts, secrétariat juridique, transmission, opérations exceptionnelles." },
];

const audiences = [
  { label: "Artisans", to: "/pack/pro" },
  { label: "Commerçants", to: "/pack/pro" },
  { label: "PME", to: "/pack/pro" },
  { label: "Professions libérales", to: "/pack/profession-liberale" },
  { label: "Créateurs", to: "/pack/createur" },
  { label: "Auto-entrepreneurs", to: "/pack/auto-entrepreneur" },
  { label: "Associations", to: "/pack/pro" },
  { label: "Particuliers", to: "/pack/particulier" },
] as const;

function Home() {
  const heroRef = useReveal<HTMLDivElement>();
  const packsRef = useReveal<HTMLDivElement>();
  const identityRef = useReveal<HTMLDivElement>();
  const domainsRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-10 md:pt-14 pb-20 md:pb-28 px-6 overflow-hidden border-b border-ink/5">
          <img
            src={heroOffice}
            alt="Bureau du cabinet d'expertise comptable Erkilic à Juvignac"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/70 to-paper pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8 reveal-stagger" data-reveal>
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                  Juvignac · Montpellier · Hérault
                </span>
                <h1 className="font-sora text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-6">
                  Expert-comptable à Juvignac,
                  <br />
                  <span className="text-ink/25 italic font-normal">
                    près de Montpellier.
                  </span>
                  <span className="inline-block ml-1 w-[0.08em] h-[0.85em] align-[-0.1em] bg-ink animate-blink" />
                </h1>
                <p className="text-lg text-ink/70 max-w-2xl mb-8 leading-relaxed">
                  Comptabilité, fiscalité, social et juridique. Un
                  accompagnement rigoureux pour créateurs, professions
                  libérales, PME et particuliers — porté par 23 ans
                  d'expérience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/services"
                    className="group px-7 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-ink-muted transition-colors"
                  >
                    Nos prestations
                    <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="px-7 py-4 border border-ink/15 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-paper-dark transition-colors"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>
              <div className="md:col-span-4 reveal" data-reveal>
                <p className="text-lg leading-relaxed text-ink/80 mb-0 border-l-2 border-ink pl-6 py-2 bg-paper/60 backdrop-blur-sm italic font-sora">
                  « Parce que vous comptez pour nous, nous comptons pour vous. »
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-b border-ink/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              ["23", "années d'expérience"],
              ["4", "domaines d'expertise"],
              ["5", "packs sur-mesure"],
              ["24h", "délai de réponse"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`px-6 py-10 md:py-14 flex flex-col ${i > 0 ? "border-l border-ink/5" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              >
                <span className="font-sora text-5xl md:text-6xl font-extrabold tracking-tighter">
                  {k}
                </span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="01 / Domaines"
              title="Quatre pôles d'expertise"
              aside="Comptable, fiscal, social, juridique — un savoir-faire complet, dans le respect de la déontologie de l'Ordre."
            />
            <div className="grid md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {domains.map((d) => (
                <article
                  key={d.n}
                  className="bg-paper p-8 flex flex-col gap-5 min-h-52 group hover:bg-ink transition-colors duration-500"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/60 group-hover:text-paper/50">
                    {d.n}
                  </span>
                  <h3 className="font-sora text-2xl font-extrabold tracking-tighter group-hover:text-paper">
                    {d.t}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed group-hover:text-paper/70">
                    {d.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Packs */}
        <section ref={packsRef} className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Offres"
              title="Cinq packs sur-mesure"
              aside="Solutions adaptées à chaque structure juridique et à chaque stade de développement."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {packs.map((p) => (
                <Link
                  
                  to={p.to}
                  key={p.n}
                  className="bg-paper p-7 group hover:bg-ink transition-colors duration-500 flex flex-col min-h-60"
                >
                  <span className="text-[10px] font-bold mb-8 block group-hover:text-paper/40">
                    {p.n}
                  </span>
                  <h3 className="font-sora text-xl font-bold mb-3 group-hover:text-paper">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink/60 group-hover:text-paper/60 flex-1">
                    {p.desc}
                  </p>
                  <span className="mt-6 text-[10px] font-bold uppercase tracking-widest text-ink/60 group-hover:text-paper transition-transform group-hover:translate-x-1">
                    Découvrir →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Identity */}
        <section ref={identityRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center reveal" data-reveal>
              <img
                src={cabinetImg}
                alt="Cabinet d'expertise comptable Erkilic à Juvignac — intérieur"
                className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6 block">
                  03 / Philosophie
                </span>
                <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
                  L'expertise sans compromis.
                </h2>
                <p className="text-lg text-ink/70 leading-relaxed mb-6">
                  Fondé par Mme <strong className="text-ink font-semibold">Nazifé Erkilic</strong>,
                  le cabinet est inscrit à l'Ordre des Experts-Comptables de
                  Montpellier. Nous proposons un accompagnement de proximité,
                  personnalisé, à chaque demande.
                </p>
                <p className="text-lg text-ink/70 leading-relaxed mb-10">
                  Ensemble, construisons une relation pérenne pour le pilotage
                  de votre entreprise — de la création au développement, jusqu'à
                  la transmission.
                </p>
                <div className="grid grid-cols-2 gap-x-6">
                  {["Compétence", "Indépendance", "Intégrité", "Secret professionnel"].map((v) => (
                    <div key={v} className="flex items-center gap-3 py-3 border-t border-ink/10">
                      <span className="w-1 h-1 bg-ink rounded-full" />
                      <span className="text-xs uppercase font-bold tracking-widest">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/cabinet"
                  className="mt-8 inline-flex items-center gap-3 self-start text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity"
                >
                  Découvrir le cabinet →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audiences — cliquables */}
        <section className="py-20 md:py-24 px-6 bg-ink text-paper">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
              <div className="md:col-span-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4 block">
                  04 / Clients
                </span>
                <h2 className="font-sora text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                  Vous êtes ?
                </h2>
              </div>
              <p className="md:col-span-4 text-paper/60 text-sm leading-relaxed">
                Nous mettons en œuvre notre savoir-faire dans le respect de la
                déontologie de l'Ordre des Experts-Comptables.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
              {audiences.map((a, i) => (
                <Link
                  
                  to={a.to}
                  key={a.label + i}
                  className="bg-ink p-7 flex items-start gap-4 group hover:bg-paper hover:text-ink transition-colors duration-300"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-paper/30 group-hover:text-ink/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <span className="font-sora font-bold text-base md:text-lg leading-tight block">
                      {a.label}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 mt-2 inline-block transition-opacity">
                      Voir le pack →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial band */}
        <section className="relative py-20 md:py-28 px-6 border-t border-ink/5 overflow-hidden">
          <img
            src={handsLedger}
            alt="Écriture comptable — cabinet Erkilic Expertise Comptable"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent pointer-events-none" />
          <div className="relative max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 block mb-6">
              05 / Zone d'intervention
            </span>
            <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              Expert-comptable à Juvignac,{" "}
              <span className="text-ink/30 italic font-normal">
                au service de tout l'Hérault.
              </span>
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-8">
              Notre cabinet accompagne les entrepreneurs et particuliers de
              Juvignac, Montpellier, Saint-Georges-d'Orques, Pignan, Montarnaud
              et alentours. Prise de rendez-vous en cabinet ou en visioconférence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest rounded-full hover:bg-ink-muted transition-colors"
            >
              Prendre rendez-vous →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
