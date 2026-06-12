import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import cabinetImg from "@/assets/cabinet.jpg";

export const Route = createFileRoute("/cabinet")({
  head: () => ({
    meta: [
      { title: "Le cabinet — Erkilic Expertise Comptable, Juvignac" },
      {
        name: "description",
        content:
          "Le cabinet Erkilic, expert-comptable à Juvignac près de Montpellier, accompagne entreprises, professions libérales et particuliers dans la durée.",
      },
      { property: "og:title", content: "Le cabinet — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Un cabinet de proximité à Juvignac, au service des entrepreneurs de l'Hérault.",
      },
      { property: "og:url", content: "/cabinet" },
      { property: "og:image", content: cabinetImg },
    ],
    links: [{ rel: "canonical", href: "/cabinet" }],
  }),
  component: Cabinet,
});

const audiences = [
  "Artisans",
  "Commerçants",
  "Petites et moyennes entreprises",
  "Professions libérales",
  "Créateurs d'entreprise",
  "Associations",
  "Comités d'entreprise",
  "Particuliers",
];

function Cabinet() {
  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section className="pt-24 pb-20 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                Le cabinet
              </span>
              <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                Un cabinet de proximité,{" "}
                <span className="text-ink/20 italic font-normal">
                  à Juvignac.
                </span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-lg text-ink/70 leading-relaxed border-l-2 border-ink pl-6 py-2">
                Proche de Montpellier, Saint-Georges-d'Orques, Pignan et
                Montarnaud.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
            <img
              src={cabinetImg}
              alt="Le cabinet Erkilic"
              className="w-full aspect-[4/5] object-cover grayscale outline outline-1 -outline-offset-1 outline-ink/5"
            />
            <div className="flex flex-col justify-center">
              <SectionHeader index="01 / Vision" title="Notre approche" />
              <div className="space-y-6 text-ink/70 leading-relaxed">
                <p>
                  Ensemble, construisons une relation pérenne pour le pilotage
                  de votre entreprise. Notre objectif est d'être à vos côtés à
                  chaque étape de la vie de votre projet — de la création au
                  développement, jusqu'à la transmission.
                </p>
                <p>
                  Nous nous occupons de vos comptes, vous vous occupez de votre
                  entreprise. Faites-nous confiance, laissez-vous guider et
                  gagnez du temps.
                </p>
                <p className="font-sora font-bold text-ink text-xl">
                  Parce que vous comptez pour nous, nous comptons pour vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-paper-dark/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02 / Clients"
              title="Vous êtes ?"
              aside="Nous mettons en œuvre notre savoir-faire dans le respect de la déontologie de l'Ordre des Experts-Comptables."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/5 border border-ink/5">
              {audiences.map((a, i) => (
                <div
                  key={a}
                  className="bg-paper p-8 flex items-start gap-4 min-h-32"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30">
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

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader index="03 / Déontologie" title="Notre engagement" />
            <div className="grid md:grid-cols-3 gap-12">
              {[
                ["Indépendance", "Conseil objectif, libre de tout conflit d'intérêts."],
                ["Confidentialité", "Vos informations restent strictement confidentielles."],
                ["Compétence", "Formation continue et veille réglementaire permanente."],
              ].map(([t, d]) => (
                <div key={t}>
                  <h3 className="font-sora text-2xl font-extrabold tracking-tighter mb-4">
                    {t}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{d}</p>
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
