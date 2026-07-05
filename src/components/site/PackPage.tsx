import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

export interface PackSection {
  title: string;
  items: { label: string; body: string; optional?: boolean }[];
}

export interface PackPageProps {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  bullets?: string[];
  sections: PackSection[];
  heroImage: string;
  heroAlt: string;
  next?: { label: string; to: string; params?: Record<string, string> };
}

export function PackPage({
  eyebrow,
  title,
  italic,
  intro,
  bullets,
  sections,
  heroImage,
  heroAlt,
  next,
}: PackPageProps) {
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-14 pb-16 md:pb-24 px-6 border-b border-ink/5 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-end reveal-stagger" data-reveal>
            <div className="md:col-span-7">
              <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-8">
                <Link to="/" className="hover:text-ink transition-colors">Accueil</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-ink transition-colors">Prestations</Link>
                <span>/</span>
                <span className="text-ink/70">{eyebrow}</span>
              </nav>
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                {eyebrow}
              </span>
              <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-balance">
                {title}{" "}
                <span className="text-ink/25 italic font-normal">{italic}</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
                {intro}
              </p>
              {bullets && (
                <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink/75">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-ink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-ink-muted transition-colors"
                >
                  Demander un devis
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border border-ink/15 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-paper-dark transition-colors"
                >
                  Toutes nos prestations
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={heroImage}
                alt={heroAlt}
                className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Sections */}
        <section ref={bodyRef} className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {sections.map((s, i) => (
              <div key={s.title} className="reveal" data-reveal>
                <SectionHeader
                  index={`${String(i + 1).padStart(2, "0")} / ${s.title}`}
                  title={s.title}
                />
                <div className="grid md:grid-cols-2 gap-px bg-ink/5 border border-ink/5">
                  {s.items.map((it) => (
                    <article
                      key={it.label}
                      className="bg-paper p-8 md:p-10 flex flex-col gap-4"
                    >
                      <div className="flex items-baseline gap-3">
                        {it.optional && (
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold bg-gold/10 px-2 py-1">
                            Option
                          </span>
                        )}
                        <h3 className="font-sora text-xl md:text-2xl font-extrabold tracking-tight">
                          {it.label}
                        </h3>
                      </div>
                      <p className="text-sm text-ink/75 leading-relaxed">
                        {it.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-link */}
        {next && (
          <section className="pb-24 px-6">
            <div className="max-w-7xl mx-auto border-t border-ink/10 pt-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 block mb-3">
                  Pack suivant
                </span>
                <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tighter">
                  {next.label}
                </h2>
              </div>
              <Link
                
                to={next.to}
                params={next.params}
                className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-paper text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-ink-muted transition-colors"
              >
                Découvrir →
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <PackCTA />
      </main>
      <Footer />
    </div>
  );
}

function PackCTA(): ReactNode {
  return (
    <section className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
          Un premier échange, sans engagement.
        </h2>
        <p className="text-paper/60 mb-10 max-w-xl mx-auto">
          Parlons de votre projet — nous adaptons le périmètre du pack à
          votre activité et à vos priorités.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-colors"
        >
          Contactez le cabinet →
        </Link>
      </div>
    </section>
  );
}
