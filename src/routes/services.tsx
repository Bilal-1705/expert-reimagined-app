import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — Erkilic Expertise Comptable" },
      {
        name: "description",
        content:
          "Comptabilité, fiscalité, social et juridique. Packs dédiés aux créateurs, auto-entrepreneurs, professions libérales, sociétés de service et particuliers.",
      },
      { property: "og:title", content: "Nos services — Erkilic" },
      {
        property: "og:description",
        content:
          "Quatre domaines d'expertise et cinq packs sur-mesure pour vous accompagner à chaque étape.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const domains = [
  {
    n: "01",
    title: "Comptable",
    body: "Tenue, révision et établissement des comptes annuels. Production des bilans, comptes de résultat et liasses fiscales. Tableaux de bord mensuels pour piloter votre activité en temps réel.",
  },
  {
    n: "02",
    title: "Fiscal",
    body: "Déclarations TVA, IS, IR. Optimisation de la charge fiscale dans le respect de la déontologie de l'Ordre. Accompagnement en cas de contrôle fiscal.",
  },
  {
    n: "03",
    title: "Social",
    body: "Gestion complète de la paie, contrats de travail, déclarations sociales (DSN), conseil en droit du travail et accompagnement en cas de contentieux prud'homal.",
  },
  {
    n: "04",
    title: "Juridique",
    body: "Choix de la structure juridique, rédaction des statuts, secrétariat juridique annuel, opérations exceptionnelles (cession, transmission, restructuration).",
  },
];

const packs = [
  {
    n: "Pack 01",
    title: "Créateur d'entreprise",
    desc: "Étude de faisabilité, choix du statut, prévisionnel financier, formalités de constitution et accompagnement la première année.",
  },
  {
    n: "Pack 02",
    title: "Auto-entrepreneur",
    desc: "Suivi du chiffre d'affaires, déclarations URSSAF, conseil sur le franchissement de seuils et le passage en société.",
  },
  {
    n: "Pack 03",
    title: "Profession libérale",
    desc: "BNC, 2035, AGA, gestion de patrimoine professionnel. Spécialités santé, droit, conseil et architecture.",
  },
  {
    n: "Pack 04",
    title: "Société de service",
    desc: "Externalisation comptable et sociale complète, reporting mensuel, gestion de la trésorerie et conseil stratégique.",
  },
  {
    n: "Pack 05",
    title: "Particulier",
    desc: "Déclaration d'impôt sur le revenu, IFI, revenus fonciers et LMNP, conseil en optimisation patrimoniale.",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section className="pt-24 pb-20 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto">
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
              Nos prestations
            </span>
            <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-4xl">
              Une expertise complète,{" "}
              <span className="text-ink/20 italic font-normal">
                quatre domaines.
              </span>
            </h1>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="01 / Domaines" title="Domaines d'expertise" />
            <div className="grid md:grid-cols-2 gap-px bg-ink/5 border border-ink/5">
              {domains.map((d) => (
                <article
                  key={d.n}
                  className="bg-paper p-10 flex flex-col gap-8 min-h-72"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                    {d.n}
                  </span>
                  <h3 className="font-sora text-3xl font-extrabold tracking-tighter">
                    {d.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{d.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-paper-dark/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Offres"
              title="Packs sur-mesure"
              aside="Choisissez le pack qui correspond à votre situation, nous ajustons le périmètre."
            />
            <div className="flex flex-col">
              {packs.map((p, i) => (
                <div
                  key={p.n}
                  className={`grid md:grid-cols-12 gap-8 py-10 ${i !== 0 ? "border-t border-ink/10" : ""}`}
                >
                  <div className="md:col-span-3">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tighter">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-sm text-ink/70 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity"
                    >
                      Demander un devis →
                    </Link>
                  </div>
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
