import { Link, useRouterState } from "@tanstack/react-router";
import ordreLogo from "@/assets/ordre-experts-comptables.png";
import avatarWebp from "@/assets/nazife-erkilic-avatar.webp";
import { relatedLinks } from "@/lib/site-links";

const SITE = "https://erkilic.fr";

export const AUTHOR = {
  "@type": "Person",
  "@id": `${SITE}/a-propos#nazife-erkilic`,
  name: "Nazifé Erkilic",
  jobTitle: "Experte-comptable",
  url: `${SITE}/a-propos`,
  worksFor: { "@id": `${SITE}/#cabinet` },
  sameAs: ["https://fr.linkedin.com/in/erkilicnazife"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Diplôme d'expertise comptable",
    recognizedBy: { "@type": "Organization", name: "Ordre des Experts-Comptables" },
  },
} as const;

/** E-E-A-T block: who wrote / checked the page, and her credentials. */
export function AuthorBox({ dateModified }: { dateModified?: string }) {
  const updated = dateModified
    ? new Date(dateModified).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
  return (
    <section className="px-6 py-12 border-t border-ink/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 sm:items-center border border-ink/10 p-6 md:p-8">
        <img
          src={avatarWebp}
          alt="Nazifé Erkilic"
          width={64}
          height={64}
          loading="lazy"
          className="portrait-warm shrink-0 h-16 w-16 rounded-full object-cover ring-2 ring-gold/60 ring-offset-2 ring-offset-paper"
        />
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 block mb-2">
            Rédigé et vérifié par
          </span>
          <p className="font-sora text-lg font-bold leading-snug">
            <Link to="/a-propos" className="hover:text-ink/60 transition-colors">
              Nazifé Erkilic
            </Link>
            , experte-comptable
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-1">
            Inscrite au tableau de l'Ordre des experts-comptables, plus de 20 ans d'expérience
            auprès des entrepreneurs de Juvignac et de Montpellier.
            {updated && <> Contenu vérifié le {updated}.</>}
          </p>
        </div>
        <img
          src={ordreLogo}
          alt="Ordre des experts-comptables"
          width={154}
          height={21}
          loading="lazy"
          className="h-5 w-auto opacity-70"
        />
      </div>
    </section>
  );
}

/** Contextual links to the page's topical cluster. */
export function RelatedLinks({ title = "À lire aussi" }: { title?: string }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const links = relatedLinks(path);
  if (links.length === 0) return null;
  return (
    <section className="py-16 md:py-20 px-6 border-t border-ink/5">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 mb-4 block">
          Pour aller plus loin
        </span>
        <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          {title}
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {links.map((l) => (
            <li key={l.to} className="bg-paper">
              <Link
                to={l.to}
                className="group block h-full p-6 hover:bg-paper-dark/50 transition-colors"
              >
                <span className="font-sora font-bold leading-snug block group-hover:underline underline-offset-4">
                  {l.label}
                </span>
                <span className="text-sm text-ink/65 leading-relaxed block mt-2">{l.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** schema.org BreadcrumbList for a visible breadcrumb trail. */
export function breadcrumbJsonLd(items: { label: string; to?: string }[], currentPath: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      item: `${SITE}${b.to ?? currentPath}`,
    })),
  });
}
