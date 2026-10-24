import { ProfileFunnel } from "@/components/site/ProfileFunnel";
import { AUTHOR, breadcrumbJsonLd } from "@/components/site/Editorial";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import cabinetImg from "@/assets/cabinet.jpg";
import portraitWebp from "@/assets/nazife-erkilic.webp";

const SITE = "https://erkilic.fr";
const PATH = "/a-propos";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Nazifé Erkilic, experte-comptable à Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Nazifé Erkilic, experte-comptable inscrite à l'Ordre, fondatrice du cabinet Erkilic à Juvignac : son parcours depuis 2002, sa façon de travailler et ses engagements.",
      },
      { property: "og:title", content: "Nazifé Erkilic, experte-comptable à Juvignac" },
      {
        property: "og:description",
        content:
          "Le parcours et la façon de travailler de la fondatrice du cabinet Erkilic Expertise Comptable.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:image", content: `${SITE}${cabinetImg}` },
      { name: "twitter:image", content: `${SITE}${cabinetImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbJsonLd([{ label: "Accueil", to: "/" }, { label: "À propos" }], PATH),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "Nazifé Erkilic, experte-comptable",
          url: `${SITE}${PATH}`,
          mainEntity: { ...AUTHOR },
        }),
      },
    ],
  }),
  component: APropos,
});

const milestones = [
  [
    "2002",
    "Début d'exercice",
    "Premiers dossiers en cabinet, auprès de PME et de professions libérales.",
  ],
  ["2010", "Ouverture du cabinet", "Installation à Juvignac, aux portes de Montpellier."],
  ["2018", "Passage au numérique", "Dématérialisation, espace client en ligne, DSN."],
  [
    "Aujourd'hui",
    "Un cabinet de référence",
    "Une clientèle variée à Juvignac, Montpellier et dans l'Hérault.",
  ],
];

const convictions = [
  {
    t: "Une seule interlocutrice",
    d: "Chaque client a la même experte-comptable d'une année sur l'autre. Pas de plateforme anonyme ni de dossier qui change de main.",
  },
  {
    t: "Expliquer, pas seulement déclarer",
    d: "Le bilan est présenté et commenté en rendez-vous. Les choix fiscaux sont expliqués avant d'être faits.",
  },
  {
    t: "La proximité",
    d: "Un cabinet où l'on peut venir, à Juvignac, et une experte-comptable qui connaît le tissu économique de l'Ouest montpelliérain.",
  },
];

function APropos() {
  const heroRef = useReveal<HTMLDivElement>();
  const storyRef = useReveal<HTMLDivElement>();
  const timelineRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-14 pb-16 md:pb-20 px-6 border-b border-ink/5">
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center reveal-stagger"
            data-reveal
          >
            <div className="md:col-span-7">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                À propos
              </span>
              <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Nazifé Erkilic,{" "}
                <span className="text-ink/25 italic font-normal">experte-comptable.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
                Inscrite au tableau de l'Ordre des experts-comptables, Nazifé Erkilic exerce depuis
                2002 et a fondé le cabinet Erkilic Expertise Comptable à Juvignac. Elle accompagne
                elle-même les créateurs, indépendants, professions libérales, PME et particuliers de
                la région de Montpellier.
              </p>
              <p className="mt-6 font-sora font-bold text-xl text-ink">
                « Parce que vous comptez pour nous, nous comptons pour vous. »
              </p>
            </div>
            <figure className="md:col-span-5">
              <img
                src={portraitWebp}
                alt="Nazifé Erkilic, experte-comptable, fondatrice du cabinet Erkilic à Juvignac"
                width={900}
                height={955}
                fetchPriority="high"
                className="portrait-warm w-full aspect-[4/5] object-cover object-[60%_30%] outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <figcaption className="mt-3 text-sm text-ink/70">
                Nazifé Erkilic, fondatrice du cabinet, à Juvignac.
              </figcaption>
            </figure>
          </div>
        </section>

        <section ref={storyRef} className="py-20 md:py-24 px-6">
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 reveal"
            data-reveal
          >
            <div className="md:col-span-5">
              <SectionHeader
                index="Son parcours"
                title="De l'exercice en cabinet à son propre cabinet"
              />
            </div>
            <div className="md:col-span-7 space-y-6 text-ink/70 leading-relaxed text-[17px]">
              <p>
                Nazifé Erkilic commence à exercer l'expertise comptable en 2002, en cabinet, auprès
                de PME et de professions libérales. Ces années lui donnent une pratique complète du
                métier : tenue et révision des comptes, fiscalité, social, juridique.
              </p>
              <p>
                Elle décide ensuite d'ouvrir sa propre structure à Juvignac, avec une idée simple :
                offrir aux entrepreneurs de l'Ouest montpelliérain un accompagnement de proximité,
                où le client connaît la personne qui suit son dossier.
              </p>
              <p>
                Inscrite au tableau de l'Ordre des experts-comptables, elle présente les comptes
                annuels, engage sa responsabilité professionnelle sur chaque mission et respecte la
                déontologie de la profession : compétence, indépendance, intégrité et secret
                professionnel.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="Sa façon de travailler" title="Ce qu'elle défend" />
            <div className="grid md:grid-cols-3 gap-px bg-ink/5 border border-ink/5">
              {convictions.map((c) => (
                <div key={c.t} className="bg-paper p-8 flex flex-col gap-4">
                  <h3 className="font-sora text-2xl font-extrabold tracking-tighter">{c.t}</h3>
                  <p className="text-[15px] text-ink/70 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-ink/70">
              Le détail de la méthode (premier échange, devis, lettre de mission, suivi) est sur la
              page{" "}
              <Link to="/cabinet" className="font-bold underline underline-offset-4">
                le cabinet et sa méthode
              </Link>
              .
            </p>
          </div>
        </section>

        <section ref={timelineRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="Repères" title="Son parcours en quatre dates" />
            <div
              className="grid md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger"
              data-reveal
            >
              {milestones.map(([year, label, desc]) => (
                <div key={year} className="bg-paper p-8 flex flex-col gap-4 min-h-56">
                  <span className="font-sora text-4xl font-extrabold tracking-tighter">{year}</span>
                  <span className="font-bold text-ink">{label}</span>
                  <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProfileFunnel
          title="Faisons connaissance"
          intro="Dites-nous en deux ou trois clics qui vous êtes : Nazifé Erkilic vous rappelle pour un premier échange, sans engagement."
        />
      </main>
      <Footer />
    </div>
  );
}
