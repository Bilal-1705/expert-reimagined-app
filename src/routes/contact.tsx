import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CabinetMap } from "@/components/site/CabinetMap";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://expert-reimagined-app.lovable.app";
const CABINET_EMAIL = "cabinet@erkilic.fr";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Devis Gratuit — Cabinet Erkilic à Juvignac (34990)" },
      {
        name: "description",
        content:
          "Contactez le cabinet Erkilic à Juvignac : 29 bis rue du Poumpidou. Tél. 09 72 54 07 71 / 06 59 88 40 80. Devis gratuit sous 24h, prise de rendez-vous en ligne.",
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
  const [sent, setSent] = useState(false);
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  // Load Calendly widget script once
  useEffect(() => {
    if (document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const structure = String(data.get("structure") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Demande de devis — ${name}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      `Type de structure : ${structure}`,
      "",
      "Message :",
      message,
    ].join("\n");

    // Open user's email client with a pre-filled message to the cabinet.
    window.location.href = `mailto:${CABINET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

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

        {/* Coordinates + form */}
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
                  09h00 — 12h30 · 14h00 — 18h00
                </p>
              </div>
            </aside>

            <div className="md:col-span-8">
              {sent ? (
                <div className="border border-ink/10 bg-paper-dark/40 p-10 animate-reveal">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-4">
                    Message prêt à être envoyé
                  </span>
                  <h2 className="font-sora text-3xl font-extrabold tracking-tighter mb-4">
                    Votre email s'ouvre — vérifiez et cliquez sur « Envoyer ».
                  </h2>
                  <p className="text-ink/70 mb-4">
                    Si rien ne s'est ouvert, écrivez-nous directement à{" "}
                    <a href={`mailto:${CABINET_EMAIL}`} className="underline font-semibold">
                      {CABINET_EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-1"
                  >
                    Envoyer un nouveau message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
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
                      <option>Artisan / Commerçant / PME</option>
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
                  <div className="sm:col-span-2 flex justify-between items-center gap-4 pt-4">
                    <p className="text-xs text-ink/50 max-w-sm leading-relaxed">
                      En envoyant ce formulaire, votre email s'ouvre avec un
                      message pré-rempli adressé à {CABINET_EMAIL}.
                    </p>
                    <button
                      type="submit"
                      className="group px-10 py-5 bg-ink text-paper font-bold uppercase tracking-widest text-sm hover:bg-ink-muted transition-colors inline-flex items-center gap-3 shrink-0"
                    >
                      Envoyer
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Calendly */}
        <section className="py-16 md:py-20 px-6 bg-paper-dark/40 border-y border-ink/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-14 mb-10 items-end">
              <div className="md:col-span-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-4">
                  Prise de rendez-vous en ligne
                </span>
                <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
                  Réservez un créneau,{" "}
                  <span className="text-ink/25 italic font-normal">directement.</span>
                </h2>
              </div>
              <p className="md:col-span-4 text-sm text-ink/70 leading-relaxed">
                Choisissez un créneau qui vous convient pour un premier échange
                de 30 minutes, en visio ou en cabinet.
              </p>
            </div>
            <div
              className="calendly-inline-widget bg-paper border border-ink/10"
              data-url="https://calendly.com/contact-astral-paris/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </section>

        {/* Map */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-6">
              Nous trouver
            </span>
            <CabinetMap height={520} color />
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
