import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteChrome } from "@/components/site/SiteChrome";

const SITE = "https://erkilic.fr";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${SITE}/#cabinet`,
  name: "Erkilic Expertise Comptable",
  legalName: "ERKILIC EXPERTISE COMPTABLE",
  alternateName: ["Cabinet Erkilic", "EEC"],
  identifier: { "@type": "PropertyValue", propertyID: "SIREN", value: "814349841" },
  founder: { "@id": `${SITE}/a-propos#nazife-erkilic` },
  description:
    "Cabinet d'expert-comptable à Juvignac, près de Montpellier. Comptabilité, fiscalité, social et juridique pour créateurs, professions libérales, PME et particuliers.",
  url: SITE,
  logo: `${SITE}/favicon.png`,
  telephone: ["+33972540771", "+33659884080"],
  email: "cabinet@erkilic.fr",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "29 bis rue du Poumpidou",
    addressLocality: "Juvignac",
    postalCode: "34990",
    addressRegion: "Hérault",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.613175, longitude: 3.804126 },
  areaServed: [
    { "@type": "City", name: "Juvignac" },
    { "@type": "City", name: "Montpellier" },
    { "@type": "City", name: "Saint-Georges-d'Orques" },
    { "@type": "City", name: "Pignan" },
    { "@type": "City", name: "Montarnaud" },
    { "@type": "City", name: "Grabels" },
    { "@type": "AdministrativeArea", name: "Hérault" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Ordre des Experts-Comptables de Montpellier",
    url: "https://www.experts-comptables.fr/",
  },
  knowsAbout: [
    "Expertise comptable",
    "Création d'entreprise",
    "Optimisation fiscale TPE",
    "Comptabilité auto-entrepreneur",
    "Déclaration 2035 profession libérale",
    "Bilan comptable PME",
    "LMNP et SCI",
    "Choix de statut juridique SASU EURL SARL",
    "Paie et DSN",
  ],
  slogan: "Parce que vous comptez pour nous, nous comptons pour vous.",
  image: `${SITE}/og-cabinet.jpg`,
  sameAs: [
    "https://annuaire-entreprises.data.gouv.fr/entreprise/814349841",
    "https://www.facebook.com/www.erkilic.fr/",
    "https://www.pagesjaunes.fr/pros/56173219",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Erkilic Expertise Comptable",
  alternateName: "Cabinet Erkilic — Expert-Comptable Juvignac",
  url: SITE,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE}/#cabinet` },
};


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-sora text-7xl font-extrabold tracking-tighter text-ink">404</h1>
        <h2 className="mt-4 font-sora text-xl font-bold text-ink">Page introuvable</h2>
        <p className="mt-2 text-sm text-ink/60">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-paper transition-colors hover:bg-ink-muted"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-sora text-xl font-bold tracking-tight text-ink">
          Cette page n'a pas pu s'afficher
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-paper transition-colors hover:bg-ink-muted"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-paper px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-paper-dark"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f5f3ee" },
      { name: "author", content: "Erkilic Expertise Comptable" },
      { property: "og:site_name", content: "Erkilic Expertise Comptable" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <div className="pb-14 md:pb-0">
        <Outlet />
      </div>
      <SiteChrome />
    </QueryClientProvider>
  );
}
