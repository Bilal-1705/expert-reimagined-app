import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CabinetMap } from "@/components/site/CabinetMap";
import { CalendlyInline } from "@/components/site/CalendlyInline";
import { useReveal } from "@/hooks/use-reveal";


const SITE = "https://erkilic.fr";
const CABINET_EMAIL = "cabinet@erkilic.fr";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Devis Gratuit — Cabinet Erkilic à Juvignac (34990)" },
      {
        name: "description",
        content:
          "Cabinet Erkilic à Juvignac (34990) : 09 72 54 07 71. Devis gratuit sous 24h, prise de rendez-vous Calendly en ligne.",
      },
      {
        name: "keywords",
        content:
          "contact expert-comptable Juvignac, devis gratuit comptable Montpellier, cabinet Erkilic téléphone, prise de rendez-vous expert-comptable Hérault",
      },
      { property: "og:title", content: "Contact — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Demandez un devis gratuit ou prenez rendez-vous en ligne avec notre cabinet à Juvignac.",
      },
      { property: "og:url", content: `${SITE}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Cabinet Erkilic",
          mainEntity: {
            "@type": "AccountingService",
            name: "Erkilic Expertise Comptable",
            telephone: ["+33972540771", "+33659884080"],
            email: CABINET_EMAIL,
            address: {
              "@type": "PostalAddress",
              streetAddress: "29 bis rue du Poumpidou",
              addressLocality: "Juvignac",
              postalCode: "34990",
              addressCountry: "FR",
            },
            geo: { "@type": "GeoCoordinates", latitude: 43.6191, longitude: 3.8022 },
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();


  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-10 md:pt-14 pb-14 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto reveal-stagger" data-reveal>
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              Contact & devis gratuit
            </span>
            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-4xl">
              Besoin d'un conseil ?{" "}
              <span className="text-ink/25 italic font-normal">Parlons-en.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
              Réponse sous 24 heures. Premier échange sans engagement pour
              évaluer ensemble le périmètre de votre accompagnement.
            </p>
          </div>
        </section>

        {/* Coordinates + Calendly */}
        <section ref={bodyRef} className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-14 reveal" data-reveal>
            <aside className="md:col-span-4 space-y-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Adresse
                </span>
                <address className="not-italic font-sora text-xl font-bold leading-tight">
                  29 bis rue du Poumpidou<br />
                  34990 Juvignac
                </address>
                <p className="text-sm text-ink/60 mt-3 leading-relaxed">
                  Proche Montpellier, Saint-Georges-d'Orques, Pignan, Montarnaud.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Téléphone
                </span>
                <p className="font-sora text-xl font-bold leading-tight">
                  <a href="tel:+33972540771" className="block hover:text-ink/60 transition-colors">
                    09 72 54 07 71
                  </a>
                  <a href="tel:+33659884080" className="block mt-1 hover:text-ink/60 transition-colors">
                    06 59 88 40 80
                  </a>
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Email
                </span>
                <a
                  href={`mailto:${CABINET_EMAIL}`}
                  className="font-sora text-xl font-bold break-all hover:text-ink/60 transition-colors"
                >
                  {CABINET_EMAIL}
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Horaires
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Lundi — Vendredi<br />
                  09h00 — 12h00 · 14h00 — 18h00
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Explorer
                </span>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link to="/services" className="border-b border-ink/20 hover:border-ink pb-0.5 transition-colors">
                      Toutes nos prestations
                    </Link>
                  </li>
                  <li>
                    <Link to="/cabinet" className="border-b border-ink/20 hover:border-ink pb-0.5 transition-colors">
                      Découvrir le cabinet
                    </Link>
                  </li>
                  <li>
                    <Link to="/guide" className="border-b border-ink/20 hover:border-ink pb-0.5 transition-colors">
                      Guide de l'expertise comptable
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="md:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-4">
                Prise de rendez-vous en ligne
              </span>
              <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-4">
                Réservez un créneau,{" "}
                <span className="text-ink/25 italic font-normal">directement.</span>
              </h2>
              <p className="text-sm text-ink/70 leading-relaxed mb-8 max-w-xl">
                Choisissez un créneau qui vous convient pour un premier échange
                de 30 minutes, en visio ou en cabinet — sans engagement.
              </p>
              <CalendlyInline
                url="https://calendly.com/cabinet-erkilic/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                height={720}
              />

            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 md:py-20 px-6 bg-paper-dark/30 border-t border-ink/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-6">
              Nous trouver
            </span>
            <CabinetMap height={520} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
