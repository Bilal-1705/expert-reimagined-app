import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import handsLedger from "@/assets/hands-ledger.jpg";
import handsLedgerWebp from "@/assets/hands-ledger.webp";

const SITE = "https://erkilic.fr";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Prestations Expert-Comptable Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Comptabilité, fiscalité, social, juridique. Packs Créateur, Auto-entrepreneur, Profession libérale, Artisans & PME, Particulier à Juvignac.",
      },
      { property: "og:title", content: "Prestations — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Quatre domaines d'expertise et cinq packs sur-mesure pour vous accompagner à chaque étape.",
      },
      { property: "og:url", content: `${SITE}/services` },
      { property: "og:image", content: `${SITE}${handsLedger}` },
      { name: "twitter:image", content: `${SITE}${handsLedger}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            "Comptabilité",
            "Fiscalité",
            "Social & paie",
            "Juridique",
            "Gestion & audit",
            "Organisation",
          ].map((n) => ({
            "@type": "Service",
            name: n,
            provider: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
            areaServed: "Juvignac, Montpellier, Hérault",
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const domains = [
  {
    n: "01",
    title: "Comptabilité",
    lead: "Tenue, révision, arrêté des comptes.",
    to: "/services/comptabilite",
    items: [
      "Tenue complète ou partielle : saisie des journaux, rapprochements bancaires, contrôle clients / fournisseurs.",
      "Révision comptable et écritures d'inventaire : amortissements, stocks, cut-off, capitaux propres.",
      "Situations comptables intermédiaires pour crédits, valorisations ou décisions stratégiques.",
      "Comptes annuels : bilan, compte de résultat, annexe, commentaires écrits ou en entretien.",
      "Comptes consolidés pour groupes — retraitements, éliminations, conversions.",
    ],
  },
  {
    n: "02",
    title: "Fiscalité",
    lead: "Déclarations, optimisation, contrôles.",
    to: "/services/fiscalite-tva",
    items: [
      "Déclarations courantes : TVA, DEB, TVS, DAS2, CFE, CVAE, IS.",
      "Télétransmission des liasses fiscales après clôture.",
      "Recherche systématique des crédits et réductions d'impôt applicables.",
      "Assistance en contrôle fiscal — présence physique et réponses écrites.",
      "Déclarations personnelles IR / IFI, taxe foncière, taxe d'habitation.",
      "Optimisation du statut du dirigeant : arbitrage salaires / dividendes.",
    ],
  },
  {
    n: "03",
    title: "Social & Paie",
    lead: "Paies, DSN, conseil en droit du travail.",
    to: "/services/social-juridique",
    items: [
      "Externalisation complète des paies : bulletins, conventions collectives, télédéclarations.",
      "Conseil en gestion sociale : embauche, rémunération, aides et exonérations.",
      "Accords d'intéressement et de participation — rédaction et calculs.",
      "Assistance en contrôle URSSAF : pré-réunion, présence, réponses.",
      "Régime Social des Indépendants : analyse et correction de l'assiette.",
    ],
  },
  {
    n: "04",
    title: "Juridique",
    lead: "Statuts, secrétariat, transmission.",
    to: "/services/social-juridique",
    items: [
      "Tenue permanente du dossier juridique — PV, assemblées, dépôt Greffe.",
      "Constitution / dissolution : choix de la forme, rédaction des statuts.",
      "Transmission et cession : préparation, analyse patrimoniale.",
      "Conventions de trésorerie, management fees, intégration fiscale.",
      "Rapport RSE — méthodologie, reporting, indicateurs.",
    ],
  },
];

const packs = [
  {
    n: "Pack 01",
    title: "Créateur d'entreprise",
    to: "/pack/createur",
    desc:
      "Entretien conseil, prévisionnel détaillé sur 12–24 mois, accompagnement bancaire, recherche d'aides et subventions, choix du statut juridique et social.",
  },
  {
    n: "Pack 02",
    title: "Auto-entrepreneur",
    to: "/pack/auto-entrepreneur",
    desc:
      "Suivi du chiffre d'affaires, déclarations URSSAF, conseil sur le franchissement de seuils et le passage en société.",
  },
  {
    n: "Pack 03",
    title: "Profession libérale",
    to: "/pack/profession-liberale",
    desc:
      "BNC, déclaration 2035, AGA, gestion du patrimoine professionnel. Spécialistes santé, droit, conseil, architecture.",
  },
  {
    n: "Pack 04",
    title: "Artisans, Commerçants & PME",
    to: "/pack/pro",
    desc:
      "Tenue, bilan, tableaux de bord commentés, paie externalisée, secrétariat juridique et conseil au dirigeant.",
  },
  {
    n: "Pack 05",
    title: "Particulier",
    to: "/pack/particulier",
    desc:
      "Déclaration d'impôt sur le revenu, IFI, revenus fonciers, LMNP, conseil en optimisation patrimoniale.",
  },
] as const;

function Services() {
  const domainsRef = useReveal<HTMLDivElement>();
  const packsRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-10 md:pt-14 pb-16 md:pb-20 px-6 border-b border-ink/5 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-end reveal-stagger" data-reveal>
            <div className="md:col-span-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                Nos prestations
              </span>
              <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Une expertise complète,{" "}
                <span className="text-ink/25 italic font-normal">
                  quatre disciplines.
                </span>
              </h1>
              <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
                Véritable coach du chef d'entreprise, nous vous orientons dans
                vos choix stratégiques et dans leur mise en œuvre opérationnelle.
                Nos prestations sont regroupées en packs adaptés à votre
                situation.
              </p>
            </div>
            <div className="md:col-span-4">
              <img
                src={handsLedgerWebp}
                alt="Écriture comptable au stylo plume dans un grand livre — cabinet Erkilic Expertise Comptable"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="01 / Domaines" title="Domaines d'expertise" />
            <div className="grid md:grid-cols-2 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {domains.map((d) => (
                <article
                  key={d.n}
                  className="bg-paper p-8 md:p-10 flex flex-col gap-5"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                      {d.n}
                    </span>
                    <h2 className="font-sora text-3xl font-extrabold tracking-tighter">
                      {d.title}
                    </h2>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-ink/60">
                    {d.lead}
                  </p>
                  <ul className="space-y-3 text-sm text-ink/75 leading-relaxed">
                    {d.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-ink" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={d.to}
                    className="mt-2 inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity"
                  >
                    En savoir plus →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Packs — clickable to dedicated routes */}
        <section ref={packsRef} className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Offres"
              title="Packs sur-mesure"
              aside="Cliquez sur un pack pour découvrir en détail les prestations incluses et les options."
            />
            <div className="flex flex-col reveal-stagger" data-reveal>
              {packs.map((p, i) => (
                <Link

                  to={p.to}
                  key={p.n}
                  className={`group grid md:grid-cols-12 gap-8 py-10 md:py-12 transition-all hover:bg-paper hover:px-8 rounded ${i !== 0 ? "border-t border-ink/10" : ""}`}
                >
                  <div className="md:col-span-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tighter group-hover:translate-x-1 transition-transform">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm text-ink/70 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1">
                      Découvrir le pack
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
