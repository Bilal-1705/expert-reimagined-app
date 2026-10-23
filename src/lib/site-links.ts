/**
 * Internal-linking catalogue. Each content page gets 4-6 contextual links
 * from its topical cluster (instead of relying on the sitewide footer only),
 * which helps Google crawl and understand the hub/spoke structure.
 */
export type SiteLink = { to: string; label: string; desc: string };

export const LINKS: Record<string, SiteLink> = {
  "/expert-comptable-montpellier": {
    to: "/expert-comptable-montpellier",
    label: "Expert-comptable à Montpellier",
    desc: "Le cabinet pour les entreprises de Montpellier et de la métropole.",
  },
  "/expert-comptable-juvignac": {
    to: "/expert-comptable-juvignac",
    label: "Cabinet comptable à Juvignac",
    desc: "Adresse, accès et missions du cabinet à Juvignac (34990).",
  },
  "/zone/grabels": { to: "/zone/grabels", label: "Comptable à Grabels", desc: "Accompagnement des entreprises de Grabels." },
  "/zone/saint-georges-dorques": {
    to: "/zone/saint-georges-dorques",
    label: "Comptable à Saint-Georges-d'Orques",
    desc: "Le cabinet voisin pour les entrepreneurs de Saint-Georges-d'Orques.",
  },
  "/zone/celleneuve-mosson": {
    to: "/zone/celleneuve-mosson",
    label: "Comptable à Celleneuve et La Mosson",
    desc: "Montpellier Ouest : Celleneuve, La Mosson, Hauts de Massane.",
  },
  "/pack/createur": { to: "/pack/createur", label: "Pack Créateur d'entreprise", desc: "Statut, prévisionnel, aides et immatriculation." },
  "/pack/auto-entrepreneur": {
    to: "/pack/auto-entrepreneur",
    label: "Pack Auto-entrepreneur",
    desc: "Déclarations URSSAF, seuils de TVA et passage en société.",
  },
  "/pack/profession-liberale": {
    to: "/pack/profession-liberale",
    label: "Expert-comptable profession libérale (BNC)",
    desc: "Déclaration 2035, CARMF, CIPAV, SELARL.",
  },
  "/pack/pro": { to: "/pack/pro", label: "Pack Artisans, commerçants et PME", desc: "Bilan, TVA, paie et pilotage de l'activité." },
  "/pack/particulier": { to: "/pack/particulier", label: "Pack Particulier", desc: "Déclaration de revenus, foncier, IFI." },
  "/creation-entreprise/sasu-eurl-ei": {
    to: "/creation-entreprise/sasu-eurl-ei",
    label: "SASU, EURL ou EI : quel statut à Montpellier ?",
    desc: "Le choix du statut selon votre projet et votre situation.",
  },
  "/comparatif/eurl-vs-sasu": {
    to: "/comparatif/eurl-vs-sasu",
    label: "SASU ou EURL : le comparatif chiffré 2026",
    desc: "Charges, dividendes, retraite et chômage, sur des cas réels.",
  },
  "/simulateur-statut": {
    to: "/simulateur-statut",
    label: "Simulateur de statut juridique",
    desc: "Comparez micro, EURL et SASU sur votre chiffre d'affaires.",
  },
  "/creation-entreprise/aides-locales-montpellier": {
    to: "/creation-entreprise/aides-locales-montpellier",
    label: "Aides à la création d'entreprise à Montpellier",
    desc: "ACRE, ARCE, prêts d'honneur et aides locales 2026.",
  },
  "/creation-entreprise/juvignac": {
    to: "/creation-entreprise/juvignac",
    label: "Créer son entreprise à Juvignac",
    desc: "Les étapes avec un expert-comptable de proximité.",
  },
  "/services/comptabilite": {
    to: "/services/comptabilite",
    label: "Comptabilité, bilan et liasse fiscale",
    desc: "Tenue, révision et comptes annuels.",
  },
  "/services/fiscalite-tva": { to: "/services/fiscalite-tva", label: "Fiscalité et TVA", desc: "Déclarations de TVA, IS, IR et optimisation." },
  "/services/social-juridique": { to: "/services/social-juridique", label: "Paie, social et juridique", desc: "Bulletins, DSN, statuts et AG." },
  "/services/conseil-gestion": {
    to: "/services/conseil-gestion",
    label: "Conseil de gestion et prévisionnel",
    desc: "Tableaux de bord, trésorerie, financement.",
  },
  "/secteur/commerce-ecommerce": {
    to: "/secteur/commerce-ecommerce",
    label: "Expert-comptable e-commerce",
    desc: "TVA OSS, marketplaces, stocks et Shopify.",
  },
  "/secteur/artisans-commercants": {
    to: "/secteur/artisans-commercants",
    label: "Expert-comptable artisans et commerçants",
    desc: "BTP, métiers de bouche, commerce de proximité.",
  },
  "/secteur/professions-liberales-medicales": {
    to: "/secteur/professions-liberales-medicales",
    label: "Professions médicales et paramédicales",
    desc: "Médecins, kinés, infirmiers : BNC et SEL.",
  },
  "/secteur/immobilier-lmnp-sci": {
    to: "/secteur/immobilier-lmnp-sci",
    label: "Expert-comptable LMNP et SCI",
    desc: "Location meublée, SCI à l'IS ou à l'IR.",
  },
  "/expert-comptable-pennylane": {
    to: "/expert-comptable-pennylane",
    label: "Expert-comptable sur Pennylane",
    desc: "Un cabinet qui travaille dans Pennylane avec vous.",
  },
  "/comparatif/pennylane-vs-erkilic": {
    to: "/comparatif/pennylane-vs-erkilic",
    label: "Pennylane ou expert-comptable ?",
    desc: "Ce que fait le logiciel, ce que fait le cabinet.",
  },
  "/comparatif/cabinet-vs-en-ligne": {
    to: "/comparatif/cabinet-vs-en-ligne",
    label: "Cabinet comptable en ligne ou local ?",
    desc: "Prix, réactivité, conseil : le vrai comparatif.",
  },
  "/comparatif/indy-vs-erkilic": { to: "/comparatif/indy-vs-erkilic", label: "Indy ou expert-comptable ?", desc: "Logiciel seul ou accompagnement." },
  "/comparatif/dougs-vs-erkilic": { to: "/comparatif/dougs-vs-erkilic", label: "Dougs ou cabinet local ?", desc: "Deux modèles d'expertise comptable." },
  "/comparatif/keobiz-vs-erkilic": { to: "/comparatif/keobiz-vs-erkilic", label: "Keobiz ou cabinet local ?", desc: "Réseau national ou proximité." },
  "/actualites/micro-entreprise-seuils-tva-2026": {
    to: "/actualites/micro-entreprise-seuils-tva-2026",
    label: "Micro-entreprise : seuils de TVA 2026",
    desc: "Franchise en base et passage en société.",
  },
  "/actualites/facturation-electronique-septembre-2026": {
    to: "/actualites/facturation-electronique-septembre-2026",
    label: "Facture électronique : le cap de septembre 2026",
    desc: "Ce qui change pour votre entreprise.",
  },
  "/actualites/loi-finances-2026": { to: "/actualites/loi-finances-2026", label: "Loi de finances 2026", desc: "Les mesures pour les TPE et PME." },
  "/actualites/baremes-2026": { to: "/actualites/baremes-2026", label: "Barèmes et seuils 2026", desc: "Kilométrique, URSSAF, micro." },
  "/actualites/declaration-revenus-2026": {
    to: "/actualites/declaration-revenus-2026",
    label: "Déclaration de revenus 2026",
    desc: "Dates, nouveautés et pièges.",
  },
  "/actualites/facturation-electronique-2026": {
    to: "/actualites/facturation-electronique-2026",
    label: "Facturation électronique 2026-2027",
    desc: "Le calendrier complet.",
  },
};

const CLUSTERS: Record<string, string[]> = {
  creation: [
    "/simulateur-statut",
    "/comparatif/eurl-vs-sasu",
    "/creation-entreprise/sasu-eurl-ei",
    "/creation-entreprise/aides-locales-montpellier",
    "/pack/createur",
    "/creation-entreprise/juvignac",
    "/pack/auto-entrepreneur",
    "/actualites/micro-entreprise-seuils-tva-2026",
  ],
  local: [
    "/expert-comptable-montpellier",
    "/expert-comptable-juvignac",
    "/zone/celleneuve-mosson",
    "/zone/grabels",
    "/zone/saint-georges-dorques",
    "/creation-entreprise/juvignac",
  ],
  services: ["/services/comptabilite", "/services/fiscalite-tva", "/services/social-juridique", "/services/conseil-gestion"],
  secteurs: [
    "/secteur/commerce-ecommerce",
    "/secteur/artisans-commercants",
    "/pack/profession-liberale",
    "/secteur/professions-liberales-medicales",
    "/secteur/immobilier-lmnp-sci",
    "/pack/pro",
  ],
  comparatifs: [
    "/comparatif/cabinet-vs-en-ligne",
    "/expert-comptable-pennylane",
    "/comparatif/pennylane-vs-erkilic",
    "/comparatif/indy-vs-erkilic",
    "/comparatif/dougs-vs-erkilic",
    "/comparatif/keobiz-vs-erkilic",
  ],
  actualites: [
    "/actualites/micro-entreprise-seuils-tva-2026",
    "/actualites/loi-finances-2026",
    "/actualites/baremes-2026",
    "/actualites/facturation-electronique-septembre-2026",
    "/actualites/declaration-revenus-2026",
  ],
};

/** Hand-picked cross-cluster links for pages where intent spans topics. */
const CURATED: Record<string, string[]> = {
  "/comparatif/eurl-vs-sasu": [
    "/simulateur-statut",
    "/creation-entreprise/sasu-eurl-ei",
    "/pack/createur",
    "/creation-entreprise/aides-locales-montpellier",
    "/services/social-juridique",
    "/actualites/micro-entreprise-seuils-tva-2026",
  ],
  "/creation-entreprise/sasu-eurl-ei": [
    "/comparatif/eurl-vs-sasu",
    "/simulateur-statut",
    "/creation-entreprise/aides-locales-montpellier",
    "/pack/createur",
    "/pack/auto-entrepreneur",
    "/expert-comptable-montpellier",
  ],
  "/expert-comptable-juvignac": [
    "/expert-comptable-montpellier",
    "/creation-entreprise/juvignac",
    "/zone/saint-georges-dorques",
    "/zone/grabels",
    "/services/comptabilite",
    "/services/fiscalite-tva",
  ],
  "/expert-comptable-montpellier": [
    "/expert-comptable-juvignac",
    "/zone/celleneuve-mosson",
    "/creation-entreprise/aides-locales-montpellier",
    "/secteur/commerce-ecommerce",
    "/pack/profession-liberale",
    "/services/conseil-gestion",
  ],
  "/expert-comptable-pennylane": [
    "/comparatif/pennylane-vs-erkilic",
    "/comparatif/cabinet-vs-en-ligne",
    "/services/comptabilite",
    "/secteur/commerce-ecommerce",
    "/expert-comptable-montpellier",
    "/actualites/facturation-electronique-septembre-2026",
  ],
  "/comparatif/pennylane-vs-erkilic": [
    "/expert-comptable-pennylane",
    "/comparatif/cabinet-vs-en-ligne",
    "/comparatif/indy-vs-erkilic",
    "/services/comptabilite",
    "/expert-comptable-montpellier",
  ],
  "/secteur/commerce-ecommerce": [
    "/services/fiscalite-tva",
    "/expert-comptable-pennylane",
    "/pack/pro",
    "/secteur/artisans-commercants",
    "/actualites/facturation-electronique-septembre-2026",
    "/expert-comptable-montpellier",
  ],
  "/pack/profession-liberale": [
    "/secteur/professions-liberales-medicales",
    "/services/fiscalite-tva",
    "/services/conseil-gestion",
    "/actualites/declaration-revenus-2026",
    "/expert-comptable-montpellier",
  ],
  "/secteur/professions-liberales-medicales": [
    "/pack/profession-liberale",
    "/services/fiscalite-tva",
    "/services/social-juridique",
    "/expert-comptable-montpellier",
  ],
  "/creation-entreprise/aides-locales-montpellier": [
    "/pack/createur",
    "/simulateur-statut",
    "/comparatif/eurl-vs-sasu",
    "/creation-entreprise/sasu-eurl-ei",
    "/expert-comptable-montpellier",
    "/services/conseil-gestion",
  ],
};

function clusterOf(path: string): string[] {
  if (path.startsWith("/services/")) return [...CLUSTERS.services, ...CLUSTERS.local.slice(0, 2)];
  if (path.startsWith("/zone/") || path.includes("expert-comptable-")) return [...CLUSTERS.local, ...CLUSTERS.services.slice(0, 2)];
  if (path.startsWith("/comparatif/")) return [...CLUSTERS.comparatifs, "/expert-comptable-montpellier"];
  if (path.startsWith("/actualites/")) return [...CLUSTERS.actualites, "/services/fiscalite-tva", "/pack/createur"];
  if (path.startsWith("/secteur/") || path === "/pack/pro" || path === "/pack/particulier") return [...CLUSTERS.secteurs, ...CLUSTERS.services.slice(0, 2)];
  if (path.startsWith("/pack/") || path.startsWith("/creation-entreprise/") || path === "/simulateur-statut") return CLUSTERS.creation;
  return [...CLUSTERS.local.slice(0, 2), ...CLUSTERS.services];
}

export function relatedLinks(path: string, max = 6): SiteLink[] {
  const clean = path.replace(/\/+$/, "") || "/";
  const candidates = CURATED[clean] ?? clusterOf(clean);
  return candidates
    .filter((p) => p !== clean && LINKS[p])
    .slice(0, max)
    .map((p) => LINKS[p]);
}
