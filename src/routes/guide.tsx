import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import handsLedger from "@/assets/hands-ledger.jpg";

const SITE = "https://erkilic.fr";
const PATH = "/guide";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Guide de l'Expertise Comptable à Montpellier | Erkilic" },
      {
        name: "description",
        content:
          "Guide complet : missions de l'expert-comptable, choix du statut juridique, TVA, obligations sociales, fiscalité à Juvignac / Montpellier.",
      },
      { property: "og:title", content: "Guide de l'expertise comptable — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Tout ce qu'un entrepreneur ou un particulier du 34 doit savoir sur l'expert-comptable.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:image", content: `${SITE}${handsLedger}` },
      { name: "twitter:image", content: `${SITE}${handsLedger}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Guide de l'expertise comptable à Montpellier",
          author: { "@type": "Organization", name: "Cabinet Erkilic Expertise Comptable" },
          publisher: { "@type": "Organization", name: "Cabinet Erkilic Expertise Comptable" },
          image: `${SITE}${handsLedger}`,
          mainEntityOfPage: `${SITE}${PATH}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Pourquoi faire appel à un expert-comptable à Montpellier ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "L'expert-comptable sécurise vos obligations comptables, fiscales et sociales, vous fait gagner du temps et devient un véritable partenaire de la croissance de votre entreprise.",
              },
            },
            {
              "@type": "Question",
              name: "Quel statut juridique choisir pour créer son entreprise ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Le choix dépend de votre projet, de votre patrimoine, de votre régime social souhaité et de la fiscalité. EI, EURL, SASU, SARL, SAS : nous comparons et optimisons selon votre situation.",
              },
            },
            {
              "@type": "Question",
              name: "Quel est le coût d'un expert-comptable à Juvignac ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Nos honoraires sont adaptés au volume et à la complexité de la mission. Nous établissons un devis gratuit sur mesure sous 24 heures.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Guide,
});

const chapters = [
  {
    n: "01",
    title: "Le rôle de l'expert-comptable",
    p: `L'expert-comptable joue un rôle central dans la vie d'une entreprise. À Montpellier, Juvignac et dans tout l'Hérault, il accompagne créateurs, artisans, commerçants, professions libérales et particuliers dans la maîtrise de leurs obligations comptables, fiscales, sociales et juridiques. Choisir un cabinet de proximité comme le Cabinet Erkilic Expertise Comptable à Juvignac, c'est s'assurer un interlocuteur disponible, réactif et fidèle à la déontologie de l'Ordre des Experts-Comptables.`,
  },
  {
    n: "02",
    title: "Comptabilité : le socle de la mission",
    p: `La comptabilité constitue le socle de la mission. Elle comprend la tenue complète ou partielle des comptes, la révision, l'établissement des situations intermédiaires et des comptes annuels (bilan, compte de résultat, annexe). Ces états financiers servent de base aux déclarations fiscales — TVA, IS, CFE, CVAE — et permettent au dirigeant de piloter son activité en toute sérénité. Un accompagnement régulier limite les erreurs, sécurise les délais et offre une vision claire de la performance économique.`,
  },
  {
    n: "03",
    title: "Fiscalité : optimiser sans risquer",
    p: `La fiscalité est le second pilier. L'expert-comptable établit et contrôle les déclarations courantes, recherche les réductions et crédits d'impôt éligibles, assiste en cas de contrôle fiscal et construit une stratégie d'optimisation du statut du dirigeant. Pour les groupes, l'intégration fiscale peut réduire significativement l'impôt des sociétés.`,
  },
  {
    n: "04",
    title: "Social : maîtriser la paie et le droit du travail",
    p: `Côté social, le cabinet externalise la paie, suit les charges sociales, conseille sur l'embauche et aide à la mise en place d'accords d'intéressement et de participation. Un pilotage social rigoureux est indispensable dès la première embauche.`,
  },
  {
    n: "05",
    title: "Juridique, gestion et patrimoine",
    p: `Au-delà des chiffres, le cabinet intervient en matière juridique (statuts, assemblées générales, secrétariat juridique), en gestion (tableaux de bord, prévisionnels, suivi de trésorerie) et en conseil et audit (évaluation, transmission, gestion patrimoniale). Les particuliers bénéficient eux aussi d'un accompagnement pour leurs déclarations d'impôt sur le revenu, leur optimisation fiscale et la gestion de leur patrimoine.`,
  },
];

const faqs = [
  {
    q: "Pourquoi faire appel à un expert-comptable à Montpellier ?",
    a: "L'expert-comptable sécurise vos obligations, vous fait gagner du temps et devient un partenaire stratégique de la croissance de votre entreprise.",
  },
  {
    q: "Quel statut juridique choisir pour créer son entreprise ?",
    a: "Le choix dépend de votre projet, de votre patrimoine et du régime social visé. Nous comparons EI, EURL, SASU, SARL, SAS pour retenir la forme optimale.",
  },
  {
    q: "Quel est le coût d'un expert-comptable à Juvignac ?",
    a: "Les honoraires sont adaptés au volume et à la complexité. Nous établissons un devis gratuit et sur mesure sous 24 heures.",
  },
];

function Guide() {
  const heroRef = useReveal<HTMLDivElement>();
  const chaptersRef = useReveal<HTMLDivElement>();
  const faqRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-14 pb-16 md:pb-20 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto reveal-stagger" data-reveal>
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              Guide
            </span>
            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-5xl">
              Expert-comptable à Montpellier :{" "}
              <span className="text-ink/25 italic font-normal">
                comment choisir et à quoi s'attendre.
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-ink/70 leading-relaxed">
              Tout ce qu'un entrepreneur ou un particulier du 34 doit savoir sur
              le rôle de l'expert-comptable et les prestations essentielles.
            </p>
          </div>
        </section>

        <section ref={chaptersRef} className="py-20 md:py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-16 reveal-stagger" data-reveal>
            {chapters.map((c) => (
              <article key={c.n} className="border-t border-ink/10 pt-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
                    Chapitre {c.n}
                  </span>
                </div>
                <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
                  {c.title}
                </h2>
                <p className="text-ink/75 leading-relaxed text-lg">{c.p}</p>
              </article>
            ))}
          </div>
        </section>

        <section ref={faqRef} className="py-20 md:py-24 px-6 bg-paper-dark/40">
          <div className="max-w-4xl mx-auto">
            <SectionHeader index="FAQ" title="Questions fréquentes" />
            <div className="space-y-6 reveal-stagger" data-reveal>
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border border-ink/10 bg-paper p-6 rounded-sm"
                >
                  <summary className="font-sora font-bold text-lg cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-ink/40 group-open:rotate-45 transition-transform text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-ink text-paper">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
              Un projet, une question ?
            </h2>
            <p className="text-paper/60 mb-10 max-w-xl mx-auto">
              Le Cabinet Erkilic Expertise Comptable, expert-comptable à Juvignac, vous accompagne
              à chaque étape.
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
