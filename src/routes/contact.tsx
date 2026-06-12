import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis gratuit — Erkilic Expertise Comptable" },
      {
        name: "description",
        content:
          "Contactez le cabinet Erkilic à Juvignac pour un devis gratuit. Réponse sous 24h.",
      },
      { property: "og:title", content: "Contact — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Demandez un devis gratuit ou un rendez-vous avec notre cabinet à Juvignac.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section className="pt-24 pb-20 px-6 border-b border-ink/5">
          <div className="max-w-7xl mx-auto">
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
              Contact
            </span>
            <h1 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-4xl">
              Besoin d'un conseil ?{" "}
              <span className="text-ink/20 italic font-normal">
                Parlons-en.
              </span>
            </h1>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
            <aside className="md:col-span-4 space-y-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Adresse
                </span>
                <p className="font-sora text-xl font-bold leading-tight">
                  Juvignac
                  <br />
                  34990, Hérault
                </p>
                <p className="text-sm text-ink/60 mt-2">
                  Proche Montpellier, Saint-Georges-d'Orques, Pignan, Montarnaud.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Téléphone
                </span>
                <p className="font-sora text-xl font-bold">04 67 00 00 00</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Email
                </span>
                <p className="font-sora text-xl font-bold break-all">
                  contact@erkilic.fr
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Horaires
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Lundi — Vendredi
                  <br />
                  09h00 — 12h30 / 14h00 — 18h00
                </p>
              </div>
            </aside>

            <div className="md:col-span-8">
              {sent ? (
                <div className="border border-ink/10 bg-paper-dark/30 p-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-4">
                    Message envoyé
                  </span>
                  <h2 className="font-sora text-3xl font-extrabold tracking-tighter mb-4">
                    Merci, nous revenons vers vous sous 24h.
                  </h2>
                  <p className="text-ink/70">
                    Votre demande a bien été transmise au cabinet.
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
                      className="px-10 py-5 bg-ink text-paper font-bold uppercase tracking-widest text-sm hover:bg-ink-muted transition-colors"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                </form>
              )}
            </div>
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
