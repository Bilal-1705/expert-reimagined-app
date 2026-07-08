import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import cabinetImg from "@/assets/cabinet.jpg";

const SITE = "https://erkilic.fr";
const PATH = "/a-propos";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Nazifé Erkilic, Expert-Comptable à Juvignac" },
      {
        name: "description",
        content:
          "Découvrez Nazifé Erkilic et son cabinet d'expertise comptable à Juvignac (34990) : parcours, équipe, valeurs, engagement pour les entrepreneurs de l'Hérault.",
      },
      {
        name: "keywords",
        content:
          "Nazifé Erkilic expert-comptable, cabinet comptable Juvignac histoire, équipe expert-comptable Hérault, valeurs cabinet comptable Montpellier",
      },
      { property: "og:title", content: "À propos du Cabinet Erkilic à Juvignac" },
      {
        property: "og:description",
        content:
          "23 ans d'expérience au service des entrepreneurs et particuliers de l'Hérault.",
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
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "À propos — Cabinet Erkilic",
          mainEntity: {
            "@type": "Person",
            name: "Nazifé Erkilic",
            jobTitle: "Expert-comptable inscrite à l'Ordre",
            worksFor: { "@type": "AccountingService", name: "Erkilic Expertise Comptable" },
          },
        }),
      },
    ],
  }),
  component: APropos,
});

const milestones = [
  ["2002", "Début d'exercice", "Premiers dossiers en cabinet — spécialisation PME et professions libérales."],
  ["2010", "Ouverture du cabinet", "Installation à Juvignac, aux portes de Montpellier."],
  ["2018", "Développement digital", "Adoption d'outils cloud (dématérialisation, portail client, DSN)."],
  ["2025", "Un cabinet de référence", "Une clientèle diversifiée à Juvignac, Montpellier et dans tout l'Hérault."],
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
          <div className="max-w-7xl mx-auto reveal-stagger" data-reveal>
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              À propos
            </span>
            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-5xl">
              Un cabinet à taille humaine,{" "}
              <span className="text-ink/25 italic font-normal">
                ancré dans l'Hérault.
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-ink/70 leading-relaxed">
              Fondé par Mme Nazifé Erkilic, le cabinet accompagne depuis plus de
              deux décennies les entrepreneurs et les particuliers de la région
              de Montpellier. Une expertise complète, une relation de confiance,
              un interlocuteur unique.
            </p>
          </div>
        </section>

        <section ref={storyRef} className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 reveal" data-reveal>
            <img
              src={cabinetImg}
              alt="Cabinet Erkilic à Juvignac — expert-comptable dans l'Hérault"
              className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              loading="lazy"
            />
            <div>
              <SectionHeader index="01 / Notre histoire" title="D'un projet à un cabinet reconnu" />
              <div className="space-y-6 text-ink/70 leading-relaxed">
                <p>
                  Nazifé Erkilic exerce l'expertise comptable depuis 2002. Après
                  plusieurs années en cabinet, elle décide d'ouvrir sa propre
                  structure à Juvignac afin de proposer un accompagnement de
                  proximité aux entrepreneurs locaux.
                </p>
                <p>
                  Le cabinet est inscrit à l'Ordre des Experts-Comptables de
                  Montpellier. Nos missions couvrent l'ensemble des besoins
                  comptables, fiscaux, sociaux et juridiques d'une entreprise —
                  de la création à la transmission.
                </p>
                <p>
                  Une équipe qualifiée et disponible, formée en continu aux
                  évolutions réglementaires, met son savoir-faire au service de
                  chaque client. Chaque dossier bénéficie d'un interlocuteur
                  dédié.
                </p>
                <p className="font-sora font-bold text-ink text-xl pt-4">
                  Parce que vous comptez pour nous, nous comptons pour vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={timelineRef} className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="02 / Repères" title="Notre parcours" />
            <div className="grid md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger" data-reveal>
              {milestones.map(([year, label, desc]) => (
                <div key={year} className="bg-paper p-8 flex flex-col gap-4 min-h-56">
                  <span className="font-sora text-4xl font-extrabold tracking-tighter">{year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/50">{label}</span>
                  <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-ink text-paper">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
              Faisons connaissance.
            </h2>
            <p className="text-paper/60 mb-10 max-w-xl mx-auto">
              Un premier échange, sans engagement, pour évaluer ensemble vos
              besoins.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-colors"
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
