import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import handsLedger from "@/assets/hands-ledger.jpg";

const SITE = "https://expert-reimagined-app.lovable.app";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Prestations — Comptable, Fiscal, Social, Juridique | Erkilic" },
      {
        name: "description",
        content:
          "Comptabilité, fiscalité, social, juridique, gestion, audit, organisation. Packs Créateur, Auto-entrepreneur, Profession libérale, Société de service, Particulier.",
      },
      { name: "keywords", content: "expert-comptable prestations, tenue comptabilité Montpellier, déclaration TVA, paie DSN, statuts société, pack créateur entreprise" },
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
    items: [
      "Tenue complète ou partielle : collecte des pièces, saisie journaux, rapprochements bancaires, contrôle clients/fournisseurs.",
      "Révision comptable et écritures d'inventaire : amortissements, stocks, cut-off, capitaux propres, trésorerie.",
      "Situations comptables intermédiaires pour crédits, valorisations ou décisions stratégiques.",
      "Établissement des comptes annuels : bilan, compte de résultat, SIG, annexe, commentaires écrits ou en entretien.",
      "Comptes consolidés pour les groupes — retraitements, éliminations, conversions.",
    ],
  },
  {
    n: "02",
    title: "Fiscalité",
    lead: "Déclarations, optimisation, contrôles.",
    items: [
      "Déclarations courantes : TVA, DEB, TVS, DAS2, CFE, CVAE, IS.",
      "Télétransmission des liasses fiscales après clôture.",
      "Recherche systématique des crédits et réductions d'impôt applicables.",
      "Assistance en contrôle fiscal — présence physique et rédaction des réponses.",
      "Déclarations personnelles IR / IFI, taxe foncière, taxe d'habitation.",
      "Optimisation du statut du dirigeant : arbitrage salaires / dividendes / avantages.",
      "Étude et mise en place de l'intégration fiscale pour groupes.",
    ],
  },
  {
    n: "03",
    title: "Social & Paie",
    lead: "Paies, DSN, conseil en droit du travail.",
    items: [
      "Externalisation complète des paies : bulletins, conventions collectives, compteurs, télédéclarations.",
      "Conseil en gestion sociale : embauche, rémunération, aides et exonérations, protection sociale.",
      "Accords d'intéressement et de participation — rédaction et calculs.",
      "Assistance en contrôle URSSAF : pré-réunion, présence, réponses aux demandes complémentaires.",
      "Régime Social des Indépendants : analyse et correction de l'assiette de cotisations.",
    ],
  },
  {
    n: "04",
    title: "Juridique",
    lead: "Statuts, secrétariat, transmission.",
    items: [
      "Tenue permanente du dossier juridique — PV, assemblées, rapport de gestion, dépôt au Greffe.",
      "Constitution / dissolution de sociétés : choix de la forme, rédaction des statuts, formalités.",
      "Transmission et cession : préparation, analyse patrimoniale, diagnostic acquéreur.",
      "Conventions de trésorerie, management fees, abandon de créances, intégration fiscale.",
      "Rapport RSE — méthodologie, reporting, indicateurs.",
    ],
  },
  {
    n: "05",
    title: "Gestion",
    lead: "Pilotage, trésorerie, prévisionnel.",
    items: [
      "Outils de gestion quotidiens : prévisionnels, analyses de coûts, marges par produit ou service.",
      "Tableaux de bord personnalisés : rentabilité, ratios, fonds de roulement.",
      "Suivi de trésorerie — plans de trésorerie, placements, cash-pooling pour groupes.",
      "Protection du patrimoine et procédures amiables ou collectives en cas de difficulté.",
    ],
  },
  {
    n: "06",
    title: "Conseil / Audit",
    lead: "Patrimoine, optimisation, groupes.",
    items: [
      "Gestion patrimoniale : bilan et audit patrimonial, stratégie succession / donation.",
      "Optimisation fiscale IR / ISF / IS — niches, Girardin, dispositifs immobiliers.",
      "Gestion des groupes : harmonisation des procédures, conventions, consolidation.",
      "Évaluation de cible en croissance externe et augmentation de capital.",
    ],
  },
  {
    n: "07",
    title: "Organisation",
    lead: "Structuration administrative.",
    items: [
      "Optimisation de l'organisation administrative et comptable — autorisations, séparation des tâches, polyvalence.",
      "Organigramme évolutif pour décentralisation, filialisation, diversification.",
      "Relations bancaires : négociation de financements, réduction des frais, renégociation des emprunts.",
    ],
  },
  {
    n: "08",
    title: "Informatique",
    lead: "Systèmes et dématérialisation.",
    items: [
      "Choix et paramétrage de vos outils comptables et de gestion.",
      "Dématérialisation des pièces et des échanges avec le cabinet.",
      "Sécurisation et sauvegarde des données financières.",
    ],
  },
];

const packs = [
  {
    n: "Pack 01",
    title: "Créateur d'entreprise",
    desc:
      "Entretien conseil, prévisionnel détaillé sur 12–24 mois, accompagnement bancaire, recherche d'aides et subventions, choix du statut juridique et social. Options : rédaction des statuts, aide à la détermination du projet, suivi de la 1ère année.",
  },
  {
    n: "Pack 02",
    title: "Auto-entrepreneur",
    desc:
      "Suivi du chiffre d'affaires, déclarations URSSAF, conseil sur le franchissement de seuils et le passage en société. Optimisation de votre régime.",
  },
  {
    n: "Pack 03",
    title: "Profession libérale",
    desc:
      "BNC, déclaration 2035, AGA, gestion du patrimoine professionnel. Spécialistes santé, droit, conseil, architecture.",
  },
  {
    n: "Pack 04",
    title: "Société de service",
    desc:
      "Externalisation comptable et sociale complète, reporting mensuel, gestion de la trésorerie, conseil stratégique et pilotage.",
  },
  {
    n: "Pack 05",
    title: "Particulier",
    desc:
      "Déclaration d'impôt sur le revenu, IFI, revenus fonciers, LMNP, conseil en optimisation patrimoniale.",
  },
];

function Services() {
  const domainsRef = useReveal<HTMLDivElement>();
  const packsRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-24 px-6 border-b border-ink/5 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8 reveal-stagger" data-reveal>
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                Nos prestations
              </span>
              <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Une expertise complète,{" "}
                <span className="text-ink/25 italic font-normal">
                  huit disciplines.
                </span>
              </h1>
              <p className="mt-10 text-lg text-ink/70 max-w-2xl leading-relaxed">
                Véritable coach du chef d'entreprise, nous vous orientons dans
                vos choix stratégiques et dans leur mise en œuvre opérationnelle.
                Nos prestations sont regroupées en packs adaptés à votre
                situation.
              </p>
            </div>
            <div className="md:col-span-4 reveal" data-reveal>
              <img
                src={handsLedger}
                alt="Écriture comptable au stylo plume dans un grand livre"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover grayscale outline outline-1 -outline-offset-1 outline-ink/10"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="01 / Domaines" title="Domaines d'expertise" />
            <div className="grid md:grid-cols-2 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {domains.map((d) => (
                <article
                  key={d.n}
                  className="bg-paper p-10 flex flex-col gap-6"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                      {d.n}
                    </span>
                    <h3 className="font-sora text-3xl font-extrabold tracking-tighter">
                      {d.title}
                    </h3>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Packs */}
        <section ref={packsRef} className="py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Offres"
              title="Packs sur-mesure"
              aside="Choisissez le pack qui correspond à votre situation, nous ajustons le périmètre."
            />
            <div className="flex flex-col reveal-stagger" data-reveal>
              {packs.map((p, i) => (
                <div
                  key={p.n}
                  className={`group grid md:grid-cols-12 gap-8 py-10 md:py-12 transition-all hover:bg-paper hover:px-8 rounded ${
                    i !== 0 ? "border-t border-ink/10" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40">
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tighter">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm text-ink/70 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity"
                    >
                      Demander un devis
                      <span className="transition-transform group-hover:translate-x-1">→</span>
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
