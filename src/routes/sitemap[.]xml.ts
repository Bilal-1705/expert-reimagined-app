import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://expert-reimagined-app.lovable.app";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/cabinet", priority: "0.8", changefreq: "monthly" as const },
  { path: "/a-propos", priority: "0.6", changefreq: "yearly" as const },
  { path: "/guide", priority: "0.8", changefreq: "monthly" as const },
  { path: "/conseils", priority: "0.8", changefreq: "monthly" as const },
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
  { path: "/secteur/artisans-commercants", priority: "0.8", changefreq: "monthly" as const },
  { path: "/secteur/professions-liberales-medicales", priority: "0.8", changefreq: "monthly" as const },
  { path: "/secteur/immobilier-lmnp-sci", priority: "0.8", changefreq: "monthly" as const },
  { path: "/zone/saint-georges-dorques", priority: "0.7", changefreq: "monthly" as const },
  { path: "/zone/grabels", priority: "0.7", changefreq: "monthly" as const },
  { path: "/zone/celleneuve-mosson", priority: "0.7", changefreq: "monthly" as const },
  { path: "/creation-entreprise/aides-locales-montpellier", priority: "0.8", changefreq: "monthly" as const },
  { path: "/creation-entreprise/sasu-eurl-ei", priority: "0.8", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
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
