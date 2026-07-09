import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export type QA = { q: string; a: ReactNode };

export type ContentSection = {
  title: string;
  body?: ReactNode;
  bullets?: string[];
};

export type ComparisonTable = {
  title?: string;
  intro?: ReactNode;
  columns: [string, string, string];
  rows: { criterion: string; competitor: ReactNode; erkilic: ReactNode }[];
};

export type ContentPageProps = {
  eyebrow: string;
  h1: string;
  italic?: string;
  intro: ReactNode;
  sections?: ContentSection[];
  comparisonTable?: ComparisonTable;
  verdict?: ReactNode;
  faq?: QA[];
  cta?: { label: string; to: string; sub?: string };
  breadcrumbs?: { label: string; to?: string }[];
  datePublished?: string;
  dateModified?: string;
};

/**
 * A lightweight editorial content page used for SEO-oriented articles:
 * comparators, sector pages, local landing pages, FAQ, guides, etc.
 * Keeps the "Rationalist Ledger" typography and paper/ink palette.
 */
export function ContentPage({
  eyebrow,
  h1,
  italic,
  intro,
  sections = [],
  comparisonTable,
  verdict,
  faq = [],
  cta,
  breadcrumbs = [],
  datePublished,
  dateModified,
}: ContentPageProps) {
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  const fmt = (iso?: string) => {
    if (!iso) return null;
    try {
      return new Date(iso).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <section
          ref={heroRef}
          className="pt-16 md:pt-24 pb-14 md:pb-20 px-6 border-b border-ink/5"
        >
          <div className="max-w-5xl mx-auto">
            {breadcrumbs.length > 0 && (
              <nav
                aria-label="fil d'ariane"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-8 flex flex-wrap gap-2"
              >
                {breadcrumbs.map((b, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {b.to ? (
                      <Link to={b.to} className="hover:text-ink transition-colors">
                        {b.label}
                      </Link>
                    ) : (
                      <span>{b.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <span>/</span>}
                  </span>
                ))}
              </nav>
            )}
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/70 mb-6 block reveal" data-reveal>
              {eyebrow}
            </span>
            <h1
              className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-balance reveal"
              data-reveal
            >
              {h1}
              {italic && (
                <>
                  {" "}
                  <span className="text-ink/25 italic font-normal">{italic}</span>
                </>
              )}
            </h1>
            {(datePublished || dateModified) && (
              <div className="mb-6 flex flex-wrap gap-x-6 gap-y-1 text-[11px] font-bold uppercase tracking-[0.25em] text-ink/70">
                {datePublished && (
                  <span>
                    Publié le{" "}
                    <time dateTime={datePublished} className="text-ink/75">
                      {fmt(datePublished)}
                    </time>
                  </span>
                )}
                {dateModified && (
                  <span>
                    Mis à jour le{" "}
                    <time dateTime={dateModified} className="text-ink/75">
                      {fmt(dateModified)}
                    </time>
                  </span>
                )}
              </div>
            )}
            <div className="prose-lg text-lg text-ink/75 leading-relaxed max-w-3xl reveal" data-reveal>
              {intro}
            </div>
          </div>
        </section>

        {sections.length > 0 && (
          <section ref={bodyRef} className="py-20 md:py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-16 reveal-stagger" data-reveal>
              {sections.map((s) => (
                <article key={s.title} className="border-t border-ink/10 pt-10">
                  <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-5 leading-tight">
                    {s.title}
                  </h2>
                  {s.body && (
                    <div className="text-ink/80 leading-relaxed space-y-4 [&>p]:text-[15.5px]">
                      {s.body}
                    </div>
                  )}
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2 text-ink/80">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[15.5px] leading-relaxed">
                          <span className="mt-2 h-1 w-4 bg-ink shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {comparisonTable && (
          <section className="py-20 md:py-24 px-6 border-t border-ink/5 bg-paper">
            <div className="max-w-5xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/70 mb-4 block">
                Tableau comparatif
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tighter leading-[0.95] mb-6">
                {comparisonTable.title ?? "Ce que l'IA adore analyser."}
              </h2>
              {comparisonTable.intro && (
                <div className="text-ink/75 leading-relaxed max-w-3xl mb-10 text-[15.5px]">
                  {comparisonTable.intro}
                </div>
              )}
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-ink">
                      {comparisonTable.columns.map((c, i) => (
                        <th
                          key={i}
                          className="py-4 pr-6 font-sora text-[11px] font-bold uppercase tracking-[0.2em] text-ink align-bottom"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((r) => (
                      <tr key={r.criterion} className="border-b border-ink/10 align-top">
                        <td className="py-5 pr-6 font-bold text-ink text-[15px] w-1/4">
                          {r.criterion}
                        </td>
                        <td className="py-5 pr-6 text-ink/75 text-[15px] leading-relaxed">
                          {r.competitor}
                        </td>
                        <td className="py-5 pr-6 text-ink text-[15px] leading-relaxed font-semibold">
                          {r.erkilic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {verdict && (
          <section className="py-16 md:py-20 px-6 bg-paper-dark/40 border-t border-ink/5">
            <div className="max-w-4xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/70 mb-4 block">
                En résumé
              </span>
              <div className="font-sora text-xl md:text-2xl leading-snug text-ink/90 [&_strong]:text-ink border-l-2 border-ink pl-6 md:pl-8 italic">
                {verdict}
              </div>
            </div>
          </section>
        )}



        {faq.length > 0 && (
          <section className="py-20 md:py-24 px-6 bg-paper-dark/40 border-t border-ink/5">
            <div className="max-w-4xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-4 block">
                Questions fréquentes
              </span>
              <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter mb-12 leading-[0.95]">
                Ce qu'on nous demande souvent.
              </h2>
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {faq.map((f) => (
                  <details key={f.q} className="group py-6">
                    <summary className="cursor-pointer list-none flex justify-between items-start gap-6">
                      <h3 className="font-sora text-lg md:text-xl font-bold leading-snug">
                        {f.q}
                      </h3>
                      <span className="font-sora text-2xl leading-none text-ink/60 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 text-ink/75 text-[15px] leading-relaxed space-y-3">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {cta && (
          <section className="py-20 md:py-24 px-6 bg-ink text-paper">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] max-w-xl">
                {cta.sub ?? "Un projet concret ? Parlons-en."}
              </h2>
              <Link
                to={cta.to}
                className="group px-10 py-5 bg-paper text-ink font-bold uppercase tracking-widest text-sm hover:bg-paper-dark transition-all inline-flex items-center gap-3 self-start md:self-auto"
              >
                {cta.label}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

/** Serialize a FAQ list into schema.org FAQPage JSON-LD (string). */
export function faqJsonLd(faq: { q: string; plainAnswer: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.plainAnswer },
    })),
  });
}

/** Serialize an Article (dated content) into schema.org JSON-LD. */
export function articleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    ...(opts.image ? { image: opts.image } : {}),
    author: { "@type": "Organization", name: "Cabinet Erkilic Expertise Comptable" },
    publisher: {
      "@type": "Organization",
      name: "Cabinet Erkilic",
      logo: { "@type": "ImageObject", url: "https://erkilic.fr/favicon.png" },
    },
  });
}
