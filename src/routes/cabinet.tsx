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
      { title: "Le cabinet Erkilic : expert-comptable de proximité à Juvignac" },
      {
        name: "description",
        content:
          "Cabinet Erkilic Expertise Comptable à Juvignac (34990), inscrit à l'Ordre des Experts-Comptables de Montpellier. 23 ans d'expérience, accompagnement de proximité.",
      },
      {
        property: "og:title",
        content: "Le cabinet Erkilic Expertise Comptable — Expert-Comptable à Juvignac",
      },
      {
        property: "og:description",
        content:
          "Un cabinet de proximité à Juvignac, au service des entrepreneurs de l'Hérault depuis plus de 20 ans.",
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

const values = [
  ["Compétence", "Une équipe formée en continu, en veille permanente sur la réglementation."],
  ["Indépendance", "Un conseil objectif, libre de tout conflit d'intérêts."],
  ["Intégrité", "Une conduite irréprochable dans chaque dossier."],
  ["Secret professionnel", "Vos informations restent strictement confidentielles."],
];

const brings = [
  ["Gain de temps", "Nous nous occupons de vos comptes, vous vous concentrez sur votre activité."],
  ["Tranquillité", "Un accompagnement de proximité, personnalisé, à chaque demande."],
  ["Écoute et conseils", "Un interlocuteur unique, disponible, qui connaît votre projet."],
  ["Tarifs justes", "Une facturation transparente, adaptée à votre structure."],
];

function Cabinet() {
  const introRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();
  const audiencesRef = useReveal<HTMLDivElement>();
  const bringsRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-20 px-6 border-b border-ink/5">
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end reveal-stagger"
            data-reveal
          >
            <div className="md:col-span-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                Le cabinet
              </span>
              <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Un cabinet de proximité,{" "}
                <span className="text-ink/25 italic font-normal">à Juvignac.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-lg text-ink/70 leading-relaxed border-l-2 border-ink pl-6 py-2">
                Proche de <strong className="text-ink font-semibold">Montpellier</strong>,
                Saint-Georges-d'Orques, Pignan et Montarnaud.
              </p>
            </div>
          </div>
        </section>

        {/* Intro / Vision */}
        <section ref={introRef} className="py-24 px-6">
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 reveal"
            data-reveal
          >
            <img
              src={cabinetImgWebp}
              alt="Vue intérieure du cabinet Erkilic Expertise Comptable à Juvignac"
              className="w-full aspect-[4/5] object-cover grayscale outline outline-1 -outline-offset-1 outline-ink/5"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <SectionHeader index="01 / Qui sommes-nous ?" title="Notre approche" />
              <div className="space-y-6 text-ink/70 leading-relaxed">
                <p>
                  Situé sur <strong className="text-ink font-semibold">Juvignac</strong>, en
                  périphérie de Montpellier, le cabinet{" "}
                  <strong className="text-ink font-semibold">Erkilic Expertise Comptable</strong>,
                  inscrit à l'Ordre des Experts-Comptables de Montpellier, vous accompagne dans tous
                  vos projets.
                </p>
                <p>
                  Fondé par Mme <strong className="text-ink font-semibold">Nazifé Erkilic</strong>,
                  il rassemble aujourd'hui une clientèle très diversifiée. Disposant d'une
                  expérience de <strong className="text-ink font-semibold">23 ans</strong> dans le
                  métier, le cabinet met au profit de ses clients toute sa compétence en tant que
                  partenaire privilégié de l'entrepreneur.
                </p>
                <p>
                  Nous proposons un accompagnement de proximité afin de pouvoir répondre à chaque
                  demande de façon personnalisée.
                </p>
                <p className="font-sora font-bold text-ink text-xl pt-4">
                  Parce que vous comptez pour nous, nous comptons pour vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="02 / Nos valeurs" title="Ce qui nous guide" />
            <div
              className="grid md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger"
              data-reveal
            >
              {values.map(([t, d]) => (
                <div key={t} className="bg-paper p-8 min-h-56 flex flex-col">
                  <h3 className="font-sora text-2xl font-extrabold tracking-tighter mb-4">{t}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we bring */}
        <section ref={bringsRef} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="03 / Ce que nous vous apportons"
              title="Ce que nous vous apportons"
              aside="Un partenaire, pas un simple prestataire."
            />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 reveal-stagger" data-reveal>
              {brings.map(([t, d], i) => (
                <div key={t} className="flex gap-6 pb-8 border-b border-ink/10">
                  <span className="font-sora text-4xl font-extrabold tracking-tighter text-ink/20 w-16 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">{t}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section ref={audiencesRef} className="py-24 px-6 bg-paper-dark/40">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="04 / Clients"
              title="Vous êtes ?"
              aside="Nous mettons en œuvre notre savoir-faire dans le respect de la déontologie de l'Ordre des Experts-Comptables."
            />
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/5 border border-ink/5 reveal-stagger"
              data-reveal
            >
              {audiences.map((a, i) => (
                <Link
                  key={a.label}
                  to={a.to}
                  className="bg-paper p-8 flex items-start gap-4 min-h-32 group hover:bg-ink transition-colors duration-500"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30 group-hover:text-paper/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="font-sora font-bold text-lg leading-tight group-hover:text-paper">
                      {a.label}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-paper transition-opacity">
                      Voir le pack →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Location + map */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="05 / Localisation" title="À Juvignac, à 10 min de Montpellier" />
            <div className="grid md:grid-cols-12 gap-8 reveal" data-reveal>
              <div className="md:col-span-4 flex flex-col justify-center gap-6">
                <address className="not-italic">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">
                    Adresse
                  </p>
                  <p className="font-sora text-xl font-bold leading-tight">
                    29 bis rue du Poumpidou
                    <br />
                    34990 Juvignac
                  </p>
                </address>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Expert-comptable à Juvignac, proche de Saint-Georges-d'Orques, Pignan, Montarnaud
                  et Montpellier.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 bg-ink text-paper text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-ink-muted transition-colors"
                >
                  Prendre rendez-vous →
                </Link>
              </div>
              <div className="md:col-span-8">
                <CabinetMap height={400} />
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
