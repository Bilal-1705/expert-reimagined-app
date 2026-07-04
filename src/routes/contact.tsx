import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CabinetMap } from "@/components/site/CabinetMap";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://expert-reimagined-app.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Devis Gratuit — Cabinet Erkilic à Juvignac" },
      {
        name: "description",
        content:
          "Contactez le cabinet Erkilic à Juvignac : 29 bis rue du Poumpidou, 34990. Tél. 09 72 54 07 71 / 06 59 88 40 80. Devis gratuit sous 24h.",
      },
      { name: "keywords", content: "contact expert-comptable Juvignac, devis gratuit comptable Montpellier, cabinet Erkilic téléphone" },
      { property: "og:title", content: "Contact — Cabinet Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Demandez un devis gratuit ou un rendez-vous avec notre cabinet à Juvignac.",
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
            email: "cabinet@erkilic.fr",
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
  const [sent, setSent] = useState(false);
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section ref={heroRef} className="pt-20 pb-16 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto reveal-stagger" data-reveal>
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
              Contact & devis gratuit
            </span>
            <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-4xl">
              Besoin d'un conseil ?{" "}
              <span className="text-ink/25 italic font-normal">
                Parlons-en.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
              Réponse sous 24 heures. Premier échange sans engagement pour
              évaluer ensemble le périmètre de votre accompagnement.
            </p>
          </div>
        </section>

        {/* Coordinates + form */}
        <section ref={bodyRef} className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 reveal" data-reveal>
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
                  href="mailto:cabinet@erkilic.fr"
                  className="font-sora text-xl font-bold break-all hover:text-ink/60 transition-colors"
                >
                  cabinet@erkilic.fr
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Horaires
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Lundi — Vendredi<br />
                  09h00 — 12h30 · 14h00 — 18h00
                </p>
              </div>
            </aside>

            <div className="md:col-span-8">
              {sent ? (
                <div className="border border-ink/10 bg-paper-dark/40 p-12 animate-reveal">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-4">
                    Message envoyé
                  </span>
                  <h2 className="font-sora text-3xl font-extrabold tracking-tighter mb-4">
                    Merci, nous revenons vers vous sous 24h.
                  </h2>
                  <p className="text-ink/70">
                    Votre demande a bien été transmise au cabinet Erkilic.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
                >
                  <Field label="Nom complet" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" />
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="structure"
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40"
                    >
                      Type de structure
                    </label>
                    <select
                      id="structure"
                      name="structure"
                      className="bg-transparent border-b border-ink/20 py-3 text-ink focus:border-ink outline-none transition-colors font-manrope"
                    >
                      <option>Créateur d'entreprise</option>
                      <option>Auto-entrepreneur</option>
                      <option>Profession libérale</option>
                      <option>Société de service / PME</option>
                      <option>Association</option>
                      <option>Particulier</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-3">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40"
                    >
                      Votre projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="bg-transparent border-b border-ink/20 py-3 text-ink focus:border-ink outline-none transition-colors resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-end pt-4">
                    <button
                      type="submit"
                      className="group px-10 py-5 bg-ink text-paper font-bold uppercase tracking-widest text-sm hover:bg-ink-muted transition-colors inline-flex items-center gap-3"
                    >
                      Envoyer ma demande
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-24 px-6">
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

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={name}
        className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-transparent border-b border-ink/20 py-3 text-ink focus:border-ink outline-none transition-colors"
      />
    </div>
  );
}
