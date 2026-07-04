import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import cabinetImg from "@/assets/cabinet.jpg";
import heroOffice from "@/assets/hero-office.jpg";

const SITE = "https://expert-reimagined-app.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expert-Comptable Juvignac Montpellier — Cabinet Erkilic" },
      {
        name: "description",
        content:
          "Cabinet d'expertise comptable à Juvignac, près de Montpellier. 23 ans d'expérience au service des créateurs, professions libérales, PME et particuliers. Devis gratuit.",
      },
      { name: "keywords", content: "expert-comptable Juvignac, cabinet comptable Montpellier, expertise comptable Hérault, comptable auto-entrepreneur, comptable profession libérale" },
      { property: "og:title", content: "Expert-Comptable Juvignac Montpellier — Cabinet Erkilic" },
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
  { n: "01.", title: "Créateur", desc: "Étude de faisabilité, choix du statut, prévisionnel financier, accompagnement complet la 1ère année." },
  { n: "02.", title: "Auto-entrepreneur", desc: "Suivi du chiffre d'affaires, déclarations URSSAF, conseil sur le passage en société." },
  { n: "03.", title: "Profession libérale", desc: "BNC, 2035, AGA. Santé, conseil, architecture, droit — spécialistes des libéraux." },
  { n: "04.", title: "Société de service", desc: "Tenue, révision, bilans, reporting mensuel et gestion de trésorerie." },
  { n: "05.", title: "Particulier", desc: "IR, IFI, revenus fonciers, LMNP, optimisation patrimoniale." },
];

const domains = [
  { n: "01", t: "Comptable", d: "Tenue, révision, comptes annuels, situations intermédiaires et consolidation." },
  { n: "02", t: "Fiscal", d: "TVA, IS, IR, optimisation du statut du dirigeant, assistance en contrôle." },
  { n: "03", t: "Social", d: "Paies, DSN, RSI, accords d'intéressement, contentieux prud'homal." },
  { n: "04", t: "Juridique", d: "Statuts, secrétariat juridique, transmission, opérations exceptionnelles." },
];

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
        <section ref={heroRef} className="relative pt-20 pb-32 px-6 overflow-hidden border-b border-ink/5">
          <img
            src={heroOffice}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/60 to-paper pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8 reveal-stagger" data-reveal>
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                  Juvignac · Montpellier · Hérault
                </span>
                <h1 className="font-sora text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-12">
                  Parce que vous comptez pour nous,
                  <br />
                  <span className="text-ink/25 italic font-normal">
                    nous comptons pour vous
                  </span>
                  <span className="inline-block ml-1 w-[0.08em] h-[0.85em] align-[-0.1em] bg-ink animate-blink" />
                </h1>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/services"
                    className="group px-8 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-ink-muted transition-colors"
                  >
                    Nos prestations
                    <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border border-ink/15 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-paper-dark transition-colors"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>
              <div className="md:col-span-4 reveal" data-reveal>
                <p className="text-lg leading-relaxed text-ink/70 mb-8 border-l-2 border-ink pl-6 py-2">
                  Accompagnement rigoureux de la création à la transmission —
                  une expertise comptable, fiscale, sociale et juridique de
                  précision, portée par 23 ans d'expérience.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-ink/10 animate-line" />
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
                className={`px-6 py-10 md:py-14 flex flex-col ${
                  i > 0 ? "border-l border-ink/5" : ""
                } ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              >
                <span className="font-sora text-5xl md:text-6xl font-extrabold tracking-tighter">
                  {k}
                </span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-28 px-6">
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
                  className="bg-paper p-8 flex flex-col gap-6 min-h-56 group hover:bg-ink transition-colors duration-500"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40 group-hover:text-paper/50">
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
        <section ref={packsRef} className="py-28 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Offres"
              title="Cinq packs sur-mesure"
              aside="Solutions adaptées à chaque structure juridique et à chaque stade de développement."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {packs.map((p) => (
                <Link
                  to="/services"
                  key={p.n}
                  className="bg-paper p-8 group hover:bg-ink transition-colors duration-500 flex flex-col min-h-60"
                >
                  <span className="text-[10px] font-bold mb-10 block group-hover:text-paper/40">
                    {p.n}
                  </span>
                  <h3 className="font-sora text-xl font-bold mb-4 group-hover:text-paper">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink/60 group-hover:text-paper/60 flex-1">
                    {p.desc}
                  </p>
                  <span className="mt-6 text-[10px] font-bold uppercase tracking-widest text-ink/40 group-hover:text-paper transition-transform group-hover:translate-x-1">
                    Découvrir →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Identity */}
        <section ref={identityRef} className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center reveal" data-reveal>
              <img
                src={cabinetImg}
                alt="Cabinet d'expertise comptable Erkilic à Juvignac"
                className="w-full aspect-[4/5] object-cover grayscale outline outline-1 -outline-offset-1 outline-ink/5"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-8 block">
                  03 / Philosophie
                </span>
                <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-[0.95]">
                  L'expertise sans compromis.
                </h2>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  Fondé par Mme <strong className="text-ink font-semibold">Nazifé Erkilic</strong>,
                  le cabinet est inscrit à l'Ordre des Experts-Comptables de
                  Montpellier. Nous proposons un accompagnement de proximité,
                  personnalisé, à chaque demande.
                </p>
                <p className="text-lg text-ink/70 leading-relaxed mb-12">
                  Ensemble, construisons une relation pérenne pour le pilotage
                  de votre entreprise — de la création au développement, jusqu'à
                  la transmission.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
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
                  className="mt-10 inline-flex items-center gap-3 self-start text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity"
                >
                  Découvrir le cabinet →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-28 px-6 bg-ink text-paper">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
              <div className="md:col-span-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4 block">
                  04 / Clients
                </span>
                <h2 className="font-sora text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                  Vous êtes ?
                </h2>
              </div>
              <p className="md:col-span-4 text-paper/60 text-sm leading-relaxed">
                Artisans, commerçants, PME, professions libérales, créateurs,
                associations, comités d'entreprise, particuliers — quelle que
                soit votre activité, nous adaptons notre accompagnement.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
              {[
                "Artisans",
                "Commerçants",
                "PME",
                "Professions libérales",
                "Créateurs",
                "Associations",
                "Comités d'entreprise",
                "Particuliers",
              ].map((a, i) => (
                <div key={a} className="bg-ink p-8 flex items-start gap-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-paper/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sora font-bold text-lg leading-tight">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
