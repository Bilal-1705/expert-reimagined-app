import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { breadcrumbJsonLd } from "@/components/site/Editorial";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CabinetMap } from "@/components/site/CabinetMap";
import { useReveal } from "@/hooks/use-reveal";
import cabinetImg from "@/assets/cabinet.jpg";
import cabinetImgWebp from "@/assets/cabinet.webp";

const SITE = "https://erkilic.fr";

export const Route = createFileRoute("/cabinet")({
  head: () => ({
    meta: [
      { title: "Le cabinet Erkilic : notre méthode de travail, à Juvignac" },
      {
        name: "description",
        content:
          "Comment travaille le cabinet Erkilic Expertise Comptable : premier échange offert, devis sous 24 h, lettre de mission, outils en ligne, bilan présenté en rendez-vous.",
      },
      { property: "og:title", content: "Le cabinet Erkilic : notre méthode de travail" },
      {
        property: "og:description",
        content:
          "Du premier échange au bilan annuel : la façon de travailler d'un cabinet d'expertise comptable de proximité à Juvignac.",
      },
      { property: "og:url", content: `${SITE}/cabinet` },
      { property: "og:image", content: `${SITE}${cabinetImg}` },
      { name: "twitter:image", content: `${SITE}${cabinetImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/cabinet` }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbJsonLd(
          [{ label: "Accueil", to: "/" }, { label: "Le cabinet" }],
          "/cabinet",
        ),
      },
    ],
  }),
  component: Cabinet,
});

/* A real sequence, so numbering carries meaning here. */
const steps = [
  {
    t: "Un premier échange offert",
    d: "Trente minutes, au téléphone ou au cabinet, pour comprendre votre activité, votre statut et vos priorités.",
  },
  {
    t: "Un devis sous 24 heures",
    d: "Une proposition écrite qui détaille ce qui est inclus : tenue, déclarations, bilan, paie, conseil.",
  },
  {
    t: "La lettre de mission",
    d: "Le cadre de notre collaboration, signé avant tout démarrage, comme le prévoit la déontologie de l'Ordre.",
  },
  {
    t: "La mise en place",
    d: "Récupération de votre dossier si vous changez de cabinet, connexion de la banque, espace documentaire pour déposer vos pièces.",
  },
  {
    t: "Le suivi toute l'année",
    d: "Déclarations aux bonnes dates, réponses à vos questions, points d'étape sur la trésorerie et la rémunération.",
  },
  {
    t: "Le bilan présenté en rendez-vous",
    d: "Comptes annuels et liasse fiscale établis, puis expliqués : ce qui a bien marché, ce qu'il faut anticiper.",
  },
];

const commitments = [
  [
    "Une interlocutrice unique",
    "La même experte-comptable suit votre dossier, d'une année sur l'autre.",
  ],
  ["Des délais tenus", "Un devis sous 24 heures et un rappel dans la journée ouvrée."],
  ["Une facturation transparente", "Un forfait annoncé à l'avance, adapté à votre structure."],
  [
    "Des outils simples",
    "Dépôt des justificatifs en ligne, banque synchronisée, logiciels comme Pennylane.",
  ],
];

const values = [
  ["Compétence", "Une formation continue et une veille permanente sur la réglementation."],
  ["Indépendance", "Un conseil objectif, libre de tout conflit d'intérêts."],
  ["Intégrité", "Une conduite irréprochable dans chaque dossier."],
  ["Secret professionnel", "Vos informations restent strictement confidentielles."],
];

const audiences: {
  label: string;
  to:
    | "/pack/pro"
    | "/pack/profession-liberale"
    | "/pack/createur"
    | "/pack/auto-entrepreneur"
    | "/pack/particulier";
}[] = [
  { label: "Artisans", to: "/pack/pro" },
  { label: "Commerçants", to: "/pack/pro" },
  { label: "PME", to: "/pack/pro" },
  { label: "Professions libérales", to: "/pack/profession-liberale" },
  { label: "Créateurs d'entreprise", to: "/pack/createur" },
  { label: "Associations", to: "/pack/pro" },
  { label: "Auto-entrepreneurs", to: "/pack/auto-entrepreneur" },
  { label: "Particuliers", to: "/pack/particulier" },
];

function Cabinet() {
  const stepsRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section className="pt-20 pb-16 px-6 border-b border-ink/5">
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end reveal-stagger"
            data-reveal
          >
            <div className="md:col-span-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                Le cabinet
              </span>
              <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Notre méthode,{" "}
                <span className="text-ink/25 italic font-normal">du premier échange au bilan.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-lg text-ink/70 leading-relaxed border-l-2 border-gold pl-6 py-2">
                Un cabinet d'expertise comptable à Juvignac, inscrit à l'Ordre, dirigé par{" "}
                <Link
                  to="/a-propos"
                  className="font-semibold text-ink underline underline-offset-4"
                >
                  Nazifé Erkilic
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section ref={stepsRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="Comment ça se passe"
              title="Six étapes, sans surprise"
              aside="Vous savez à chaque moment ce qui est fait, par qui, et à quel prix."
            />
            <ol className="grid md:grid-cols-3 gap-x-12 gap-y-10 reveal-stagger" data-reveal>
              {steps.map((s, i) => (
                <li key={s.t} className="border-t-2 border-gold pt-5">
                  <span className="font-sora text-4xl font-extrabold tracking-tighter text-gold">
                    {i + 1}
                  </span>
                  <h3 className="font-sora text-xl font-bold mt-2 mb-2">{s.t}</h3>
                  <p className="text-[15px] text-ink/70 leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <img
              src={cabinetImgWebp}
              alt="Bureau du cabinet Erkilic Expertise Comptable à Juvignac"
              className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-ink/5"
              loading="lazy"
            />
            <div>
              <SectionHeader index="Nos engagements" title="Ce sur quoi vous pouvez compter" />
              <div className="space-y-6">
                {commitments.map(([t, d]) => (
                  <div key={t} className="border-b border-ink/10 pb-5">
                    <h3 className="font-sora text-xl font-bold mb-1">{t}</h3>
                    <p className="text-[15px] text-ink/70 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={valuesRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="Déontologie"
              title="Les règles de l'Ordre, au quotidien"
              aside="Le cabinet est inscrit au tableau de l'Ordre des experts-comptables et en applique la déontologie."
            />
            <div
              className="grid md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger"
              data-reveal
            >
              {values.map(([t, d]) => (
                <div key={t} className="bg-paper p-8 min-h-48 flex flex-col">
                  <h3 className="font-sora text-2xl font-extrabold tracking-tighter mb-4">{t}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="Pour qui" title="Les clients que nous accompagnons" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/5 border border-ink/5">
              {audiences.map((a) => (
                <Link
                  key={a.label}
                  to={a.to}
                  className="bg-paper p-7 flex flex-col gap-2 min-h-28 group hover:bg-ink transition-colors duration-500"
                >
                  <span className="font-sora font-bold text-lg leading-tight">{a.label}</span>
                  <span className="text-sm text-gold font-semibold">Voir le pack</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="Venir au cabinet"
              title="À Juvignac, à 10 minutes de Montpellier"
            />
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col justify-center gap-5">
                <address className="not-italic font-sora text-xl font-bold leading-tight">
                  29 bis rue du Poumpidou
                  <br />
                  34990 Juvignac
                </address>
                <p className="text-[15px] text-ink/70 leading-relaxed">
                  Sur rendez-vous, du lundi au vendredi. Le cabinet reçoit aussi à distance, par
                  téléphone ou en visioconférence. Pour l'accès détaillé, voir la page{" "}
                  <Link
                    to="/expert-comptable-juvignac"
                    className="font-semibold underline underline-offset-4"
                  >
                    cabinet comptable à Juvignac
                  </Link>
                  .
                </p>
              </div>
              <div className="md:col-span-8">
                <CabinetMap height={380} />
              </div>
            </div>
          </div>
        </section>

        <ProfileFunnel
          title="Demandez un devis gratuit"
          intro="Deux ou trois clics pour préciser votre besoin, puis l'experte-comptable vous rappelle et vous envoie un devis sous 24 h."
        />
      </main>
      <Footer />
    </div>
  );
}
