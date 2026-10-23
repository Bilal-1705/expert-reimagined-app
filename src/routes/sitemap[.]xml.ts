import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://erkilic.fr";

// Last real content change per page (YYYY-MM-DD). Update when a page changes.
const DEFAULT_LASTMOD = "2026-08-24";
const LASTMOD: Record<string, string> = {
  "/": "2026-10-23",
  "/services": "2026-10-23",
  "/cabinet": "2026-10-23",
  "/a-propos": "2026-10-23",
  "/guide": "2026-10-23",
  "/actualites": "2026-10-23",
  "/comparatifs": "2026-08-16",
  "/faq": "2026-10-23",
  "/contact": "2026-10-23",
  "/pack/createur": "2026-10-23",
  "/pack/auto-entrepreneur": "2026-10-23",
  "/pack/profession-liberale": "2026-10-23",
  "/pack/pro": "2026-10-23",
  "/pack/particulier": "2026-10-23",
  "/comparatif/indy-vs-erkilic": "2026-10-23",
  "/comparatif/pennylane-vs-erkilic": "2026-10-23",
  "/comparatif/keobiz-vs-erkilic": "2026-10-23",
  "/comparatif/dougs-vs-erkilic": "2026-07-09",
  "/expert-comptable-juvignac": "2026-10-23",
  "/expert-comptable-montpellier": "2026-10-23",
  "/expert-comptable-pennylane": "2026-10-23",
  "/creation-entreprise/juvignac": "2026-10-23",
  "/services/comptabilite": "2026-10-23",
  "/services/fiscalite-tva": "2026-10-23",
  "/services/social-juridique": "2026-10-23",
  "/services/conseil-gestion": "2026-10-23",
  "/secteur/commerce-ecommerce": "2026-10-23",
  "/secteur/artisans-commercants": "2026-07-09",
  "/secteur/professions-liberales-medicales": "2026-07-09",
  "/secteur/immobilier-lmnp-sci": "2026-07-09",
  "/zone/saint-georges-dorques": "2026-10-23",
  "/zone/grabels": "2026-10-23",
  "/zone/celleneuve-mosson": "2026-10-23",
  "/creation-entreprise/aides-locales-montpellier": "2026-10-23",
  "/creation-entreprise/sasu-eurl-ei": "2026-10-23",
  "/comparatif/cabinet-vs-en-ligne": "2026-10-23",
  "/comparatif/eurl-vs-sasu": "2026-10-23",
  "/simulateur-statut": "2026-10-23",
  "/actualites/facturation-electronique-2026": "2026-10-23",
  "/actualites/loi-finances-2026": "2026-10-23",
  "/actualites/baremes-2026": "2026-10-23",
  "/actualites/facturation-electronique-septembre-2026": "2026-10-23",
  "/actualites/declaration-revenus-2026": "2026-10-23",
  "/actualites/micro-entreprise-seuils-tva-2026": "2026-10-23",
};

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/cabinet", priority: "0.8", changefreq: "monthly" as const },
  { path: "/a-propos", priority: "0.6", changefreq: "yearly" as const },
  { path: "/guide", priority: "0.8", changefreq: "monthly" as const },
  { path: "/actualites", priority: "0.9", changefreq: "weekly" as const },
  { path: "/comparatifs", priority: "0.9", changefreq: "monthly" as const },
  { path: "/faq", priority: "0.8", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.8", changefreq: "yearly" as const },
  { path: "/pack/createur", priority: "0.9", changefreq: "monthly" as const },
  { path: "/pack/auto-entrepreneur", priority: "0.9", changefreq: "monthly" as const },
  { path: "/pack/profession-liberale", priority: "0.9", changefreq: "monthly" as const },
  { path: "/pack/pro", priority: "0.9", changefreq: "monthly" as const },
  { path: "/pack/particulier", priority: "0.9", changefreq: "monthly" as const },
  { path: "/comparatif/indy-vs-erkilic", priority: "0.8", changefreq: "monthly" as const },
  { path: "/comparatif/pennylane-vs-erkilic", priority: "0.8", changefreq: "monthly" as const },
  { path: "/comparatif/keobiz-vs-erkilic", priority: "0.8", changefreq: "monthly" as const },
  { path: "/comparatif/dougs-vs-erkilic", priority: "0.8", changefreq: "monthly" as const },
  { path: "/expert-comptable-juvignac", priority: "0.9", changefreq: "monthly" as const },
  { path: "/expert-comptable-montpellier", priority: "0.9", changefreq: "monthly" as const },
  { path: "/expert-comptable-pennylane", priority: "0.8", changefreq: "monthly" as const },
  { path: "/creation-entreprise/juvignac", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/comptabilite", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/fiscalite-tva", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/social-juridique", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/conseil-gestion", priority: "0.8", changefreq: "monthly" as const },
  { path: "/secteur/commerce-ecommerce", priority: "0.8", changefreq: "monthly" as const },
  { path: "/secteur/artisans-commercants", priority: "0.8", changefreq: "monthly" as const },
  {
    path: "/secteur/professions-liberales-medicales",
    priority: "0.8",
    changefreq: "monthly" as const,
  },
  { path: "/secteur/immobilier-lmnp-sci", priority: "0.8", changefreq: "monthly" as const },
  { path: "/zone/saint-georges-dorques", priority: "0.7", changefreq: "monthly" as const },
  { path: "/zone/grabels", priority: "0.7", changefreq: "monthly" as const },
  { path: "/zone/celleneuve-mosson", priority: "0.7", changefreq: "monthly" as const },
  {
    path: "/creation-entreprise/aides-locales-montpellier",
    priority: "0.8",
    changefreq: "monthly" as const,
  },
  { path: "/creation-entreprise/sasu-eurl-ei", priority: "0.8", changefreq: "monthly" as const },
  { path: "/comparatif/cabinet-vs-en-ligne", priority: "0.8", changefreq: "monthly" as const },
  { path: "/comparatif/eurl-vs-sasu", priority: "1.0", changefreq: "monthly" as const },
  { path: "/simulateur-statut", priority: "0.9", changefreq: "monthly" as const },
  {
    path: "/actualites/facturation-electronique-2026",
    priority: "0.9",
    changefreq: "weekly" as const,
  },
  { path: "/actualites/loi-finances-2026", priority: "0.9", changefreq: "monthly" as const },
  { path: "/actualites/baremes-2026", priority: "0.9", changefreq: "monthly" as const },
  {
    path: "/actualites/facturation-electronique-septembre-2026",
    priority: "0.9",
    changefreq: "weekly" as const,
  },
  { path: "/actualites/declaration-revenus-2026", priority: "0.9", changefreq: "monthly" as const },
  {
    path: "/actualites/micro-entreprise-seuils-tva-2026",
    priority: "0.9",
    changefreq: "monthly" as const,
  },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${LASTMOD[e.path] ?? DEFAULT_LASTMOD}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
