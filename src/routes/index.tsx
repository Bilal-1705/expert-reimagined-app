import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import cabinetImg from "@/assets/cabinet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erkilic — Expert-Comptable à Juvignac, Montpellier" },
      {
        name: "description",
        content:
          "Cabinet d'expertise comptable à Juvignac. Accompagnement sur-mesure des créateurs, professions libérales, PME et particuliers : comptabilité, fiscalité, social, juridique.",
      },
      { property: "og:title", content: "Erkilic — Expert-Comptable à Juvignac" },
      {
        property: "og:description",
        content:
          "Parce que vous comptez pour nous, nous comptons pour vous. Expertise comptable à Juvignac, près de Montpellier.",
      },
    ],
  }),
  component: Home,
});

const packs = [
  { n: "01.", title: "Créateur", desc: "Accompagnement au lancement et choix du statut juridique." },
  { n: "02.", title: "Auto-entrepreneur", desc: "Gestion simplifiée et suivi des plafonds de chiffre d'affaires." },
  { n: "03.", title: "Profession libérale", desc: "Expertise dédiée aux BNC : santé, conseil, architecture, droit." },
  { n: "04.", title: "Société de service", desc: "Tenue comptable complète, bilans et optimisation fiscale." },
  { n: "05.", title: "Particulier", desc: "Déclarations de revenus et conseil en gestion de patrimoine." },
];

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden border-b border-ink/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8">
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8 animate-reveal [animation-delay:100ms]">
                  Juvignac / Montpellier
                </span>
                <h1 className="font-sora text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-12 animate-reveal [animation-delay:200ms]">
                  Parce que vous comptez pour nous,
                  <br />
                  <span className="text-ink/20 italic font-normal">
                    nous comptons pour vous.
                  </span>
                </h1>
                <div className="flex flex-wrap gap-4 animate-reveal [animation-delay:300ms]">
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-ink-muted transition-colors"
                  >
                    Nos prestations
                    <span className="text-lg">→</span>
                  </Link>
                  <Link
                    to="/cabinet"
                    className="px-8 py-4 border border-ink/10 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-paper-dark transition-colors"
                  >
                    Le cabinet
                  </Link>
                </div>
              </div>
              <div className="md:col-span-4 animate-reveal [animation-delay:400ms]">
                <p className="text-lg leading-relaxed text-ink/70 mb-8 border-l-2 border-ink pl-6 py-2">
                  Accompagnement rigoureux de la création à la transmission.
                  Une expertise comptable, fiscale et sociale de précision.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-ink/10 animate-line" />
        </section>

        {/* Packs */}
        <section className="py-32 px-6 bg-paper-dark/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="01 / Offres"
              title="Packs sur-mesure"
              aside="Solutions adaptées à chaque structure juridique et stade de développement."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-ink/5 border border-ink/5">
              {packs.map((p) => (
                <div
                  key={p.n}
                  className="bg-paper p-8 group hover:bg-ink transition-colors duration-500 cursor-pointer"
                >
                  <span className="text-[10px] font-bold mb-12 block group-hover:text-paper/40">
                    {p.n}
                  </span>
                  <h3 className="font-sora text-xl font-bold mb-4 group-hover:text-paper">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink/60 group-hover:text-paper/60">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Identity */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <img
                src={cabinetImg}
                alt="Intérieur du cabinet Erkilic à Juvignac"
                className="w-full aspect-[4/5] object-cover grayscale outline outline-1 -outline-offset-1 outline-ink/5"
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-8 block">
                  02 / Philosophie
                </span>
                <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
                  L'expertise sans compromis.
                </h2>
                <p className="text-lg md:text-xl text-ink/70 leading-relaxed mb-12">
                  Situé à Juvignac, le cabinet ERKILIC construit avec vous une
                  relation pérenne pour le pilotage de votre entreprise. Nous
                  nous occupons de vos comptes, vous vous occupez de votre
                  entreprise.
                </p>
                <div className="space-y-6">
                  {[
                    ["24h", "Délai de réponse garanti"],
                    ["4", "Domaines d'expertise : comptable, fiscal, social, juridique"],
                    ["100%", "Accompagnement humain et sur-mesure"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center gap-6 border-b border-ink/5 pb-6 last:border-b-0"
                    >
                      <span className="font-sora font-bold text-2xl shrink-0 w-16">
                        {k}
                      </span>
                      <span className="text-xs uppercase font-bold tracking-widest text-ink/50">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
