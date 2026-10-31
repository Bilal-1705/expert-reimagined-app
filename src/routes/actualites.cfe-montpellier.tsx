import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/cfe-montpellier";
const PUBLISHED = "2026-10-31";
const UPDATED = "2026-10-31";

const faq = [
  {
    q: "Quand faut-il payer la CFE 2026 ?",
    a: "Au plus tard le 15 décembre 2026. Si votre CFE de l'an dernier dépassait 3 000 €, vous avez aussi dû verser un acompte de 50 % entre le 26 mai et le 16 juin, et le 15 décembre ne concerne que le solde. L'avis se consulte dans votre espace professionnel sur impots.gouv.fr, où le paiement en ligne est le mode par défaut.",
  },
  {
    q: "Un auto-entrepreneur paie-t-il la CFE ?",
    a: "Oui, dans les mêmes conditions que les autres entreprises. Il est exonéré l'année de création, puis paie à partir de l'année suivante, avec une base réduite de moitié la première année d'imposition. Il est aussi exonéré tant que son chiffre d'affaires de l'avant-dernière année ne dépasse pas 5 000 €.",
  },
  {
    q: "Je viens de créer mon entreprise : dois-je faire quelque chose pour la CFE ?",
    a: "Oui. L'exonération de l'année de création suppose de déposer la déclaration initiale 1447-C-SD auprès du service des impôts des entreprises avant le 31 décembre de l'année de création. Pour une entreprise créée en 2026 à Montpellier ou à Juvignac, la date limite est donc le 31 décembre 2026.",
  },
  {
    q: "Pourquoi ma CFE est-elle plus élevée que celle d'un ami installé ailleurs ?",
    a: "Parce que la CFE est un impôt local. Le taux et le montant de la base minimum (dans la fourchette fixée par la loi) sont votés par la collectivité. À Montpellier et à Juvignac, c'est Montpellier Méditerranée Métropole qui les fixe. Deux entreprises identiques peuvent donc payer des montants différents d'une intercommunalité à l'autre.",
  },
  {
    q: "Que risque-t-on en payant la CFE en retard ?",
    a: "Une majoration de 5 % des sommes non payées (article 1731 du CGI), à laquelle peut s'ajouter l'intérêt de retard. Sur une CFE de 600 €, la majoration représente 30 €. Pour l'éviter sans y penser, vous pouvez opter pour le prélèvement à l'échéance jusqu'au 30 novembre.",
  },
];

export const Route = createFileRoute("/actualites/cfe-montpellier")({
  head: () => ({
    meta: [
      { title: "CFE à Montpellier : calcul, échéance et exonérations" },
      {
        name: "description",
        content:
          "CFE 2026 à Montpellier et Juvignac : qui la paie, base minimum, exonération la première année, échéance du 15 décembre et cas des auto-entrepreneurs.",
      },
      { property: "og:title", content: "CFE à Montpellier et Juvignac : le guide pratique" },
      {
        property: "og:description",
        content:
          "Calcul, barème 2026 de la base minimum, exonérations et paiement : l'essentiel sur la CFE par Erkilic Expertise Comptable.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "CFE à Montpellier et Juvignac : calcul, échéance et exonérations",
          description:
            "Qui paie la CFE, barème 2026 de la base minimum, exonérations, échéance du 15 décembre et cas des auto-entrepreneurs de l'Hérault.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          image: "https://erkilic.fr/og-cabinet.jpg",
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.a }))),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Actualités", to: "/actualites" },
        { label: "CFE à Montpellier" },
      ]}
      eyebrow="Actualité · Fiscalité locale"
      h1="CFE à Montpellier et Juvignac :"
      italic="calcul, échéance, exonérations."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            La cotisation foncière des entreprises (CFE) tombe chaque année en fin d'année, et elle
            surprend souvent les jeunes entreprises la deuxième ou la troisième année. Pour la CFE
            2026, la date limite de paiement est le 15 décembre 2026. L'avis ne part pas par
            courrier : il faut aller le chercher dans votre espace professionnel sur impots.gouv.fr.
          </p>
          <p className="mt-4">
            Ce guide reprend ce que le cabinet explique à ses clients de Montpellier, de Juvignac et
            du reste de l'Hérault : qui paie, comment le montant est calculé, quelles exonérations
            demander et comment éviter la majoration.
          </p>
        </>
      }
      sections={[
        {
          title: "Qui doit payer la CFE ?",
          body: (
            <>
              <p>
                En bref : toute entreprise ou personne qui exerce une activité professionnelle non
                salariée à titre habituel, quel que soit son statut. Société (SASU, EURL, SARL),
                entreprise individuelle, profession libérale ou micro-entrepreneur : tous sont
                concernés, même sans local, par exemple quand l'activité est domiciliée au domicile
                du dirigeant.
              </p>
              <p>
                Les micro-entrepreneurs paient la CFE dans les mêmes conditions que les autres
                entreprises. C'est l'erreur la plus fréquente que nous voyons chez les
                auto-entrepreneurs de la métropole : ils pensent que le versement libératoire ou les
                cotisations URSSAF couvrent tout, puis découvrent un avis de CFE en novembre de leur
                deuxième année.
              </p>
              <p>
                Pour la location meublée, des règles particulières s'appliquent : la CFE est due
                au-delà de 5 000 € de recettes, mais pas pour une location meublée dans la résidence
                principale du propriétaire. Les investisseurs en LMNP trouveront plus de détails sur
                notre page{" "}
                <Link
                  to="/secteur/immobilier-lmnp-sci"
                  className="font-bold underline underline-offset-4"
                >
                  LMNP et SCI
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Comment le montant de la CFE est calculé",
          body: (
            <>
              <p>
                La CFE se calcule en multipliant une base d'imposition par un taux voté localement.
                La base correspond à la valeur locative des biens immobiliers utilisés pour
                l'activité deux ans plus tôt (l'année N-2, donc 2024 pour la CFE 2026).
              </p>
              <p>
                Quand cette valeur locative est faible ou nulle, ce qui est le cas de beaucoup
                d'indépendants qui travaillent depuis chez eux, c'est une base minimum qui
                s'applique. Son montant dépend du chiffre d'affaires hors taxes de l'année N-2 et de
                la décision de la collectivité, dans une fourchette fixée par la loi.
              </p>
              <p>
                À Montpellier, à Juvignac et dans les autres communes de la métropole, le taux et la
                base minimum sont votés par Montpellier Méditerranée Métropole. Le chiffre exact
                figure sur votre avis. Pour illustrer le calcul avec des valeurs fictives : une base
                de 500 € et un taux de 35 % donneraient une cotisation de 175 €, à laquelle
                s'ajoutent la taxe pour frais de chambre consulaire et les frais de gestion.
              </p>
            </>
          ),
        },
        {
          title: "Le barème 2026 de la base minimum",
          body: (
            <p>
              Voici les fourchettes légales pour la CFE 2026, selon le chiffre d'affaires hors taxes
              réalisé en 2024. La collectivité choisit un montant à l'intérieur de chaque fourchette
              :
            </p>
          ),
          bullets: [
            "Jusqu'à 10 000 € : base comprise entre 250 € et 597 €.",
            "De 10 001 € à 32 600 € : entre 250 € et 1 194 €.",
            "De 32 601 € à 100 000 € : entre 250 € et 2 509 €.",
            "De 100 001 € à 250 000 € : entre 250 € et 4 183 €.",
            "De 250 001 € à 500 000 € : entre 250 € et 5 974 €.",
            "À partir de 500 001 € : entre 250 € et 7 769 €.",
          ],
        },
        {
          title: "Les exonérations à connaître",
          body: (
            <>
              <p>
                Trois exonérations reviennent dans la plupart des dossiers de nos clients créateurs.
              </p>
              <p>
                L'année de création, l'entreprise est exonérée jusqu'au 31 décembre. L'année
                suivante, sa base d'imposition est réduite de moitié. Une SASU créée en mars 2026 ne
                paiera donc pas de CFE en 2026 et paiera sur une base réduite en 2027.
              </p>
              <p>
                Ensuite, l'entreprise est exonérée tant que son chiffre d'affaires de l'année N-2 ne
                dépasse pas 5 000 € hors taxes. Exemple : une graphiste micro-entrepreneuse de
                Juvignac qui a facturé 4 800 € en 2024 n'a pas de CFE à payer en 2026. Si elle
                facture 12 000 € en 2025, elle sera imposable en 2027.
              </p>
              <p>
                Enfin, certaines activités sont exonérées de plein droit (par exemple certains
                artisans travaillant seuls, ou l'enseignement privé sous conditions), et la
                collectivité peut voter des exonérations facultatives. Le cabinet vérifie votre cas
                avant le dépôt de la déclaration.
              </p>
            </>
          ),
        },
        {
          title: "La déclaration 1447-C-SD : à faire avant le 31 décembre",
          body: (
            <>
              <p>
                Si vous avez créé votre entreprise en 2026, vous devez déposer la déclaration
                initiale de CFE (formulaire 1447-C-SD) auprès de votre service des impôts des
                entreprises au plus tard le 31 décembre 2026. C'est elle qui déclenche l'exonération
                de la première année et qui permet de calculer la base de l'année suivante.
              </p>
              <p>
                Pour un micro-entrepreneur, l'envoi se fait par courrier au SIE. Pour les créateurs
                de Juvignac et de l'ouest montpelliérain, c'est un oubli fréquent : la date tombe en
                pleine période de fêtes, et l'exonération est perdue sans la déclaration. Notre{" "}
                <Link to="/pack/createur" className="font-bold underline underline-offset-4">
                  pack Créateur
                </Link>{" "}
                inclut ce dépôt dans le calendrier des premières échéances.
              </p>
            </>
          ),
        },
        {
          title: "Quand et comment payer la CFE 2026",
          body: (
            <>
              <p>
                Si votre CFE ne dépasse pas 3 000 €, vous la payez en une fois, au plus tard le 15
                décembre 2026. Au-delà de 3 000 €, vous avez versé un acompte égal à 50 % de la CFE
                de l'année précédente entre le 26 mai et le 16 juin, et vous réglez le solde au plus
                tard le 15 décembre.
              </p>
              <p>
                Exemple : une PME de Montpellier dont la CFE 2025 était de 4 000 € a versé 2 000 €
                d'acompte en juin 2026. Si sa CFE 2026 s'élève à 4 300 €, elle doit régler les 2 300
                € restants avant le 15 décembre.
              </p>
              <p>
                Le paiement en ligne depuis l'espace professionnel est le mode par défaut. Vous
                pouvez aussi choisir le prélèvement à l'échéance jusqu'au 30 novembre, ou le
                prélèvement mensuel (option possible jusqu'au 30 juin). Les micro-entrepreneurs
                paient la taxe pour frais de chambre consulaire depuis leur espace URSSAF
                d'auto-entrepreneur.
              </p>
            </>
          ),
        },
        {
          title: "En cas de retard ou d'erreur sur l'avis",
          body: (
            <>
              <p>
                Un paiement en retard entraîne une majoration de 5 % des sommes dues (article 1731
                du CGI). Sur une CFE de 600 €, cela fait 30 € de plus, pour un simple oubli.
              </p>
              <p>
                Si le montant vous paraît anormal (chiffre d'affaires mal pris en compte,
                exonération de création oubliée, local qui n'est plus utilisé), une réclamation
                auprès du SIE est possible. Avant de payer un avis qui semble faux, faites-le
                vérifier : le cabinet contrôle chaque avis de CFE de ses clients dans le cadre de sa
                mission{" "}
                <Link
                  to="/services/fiscalite-tva"
                  className="font-bold underline underline-offset-4"
                >
                  fiscalité et TVA
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Ce que fait le cabinet pour vous",
          bullets: [
            "Déposer la déclaration 1447-C-SD dans les délais l'année de création.",
            "Vérifier chaque avis de CFE : base retenue, chiffre d'affaires N-2, exonérations.",
            "Programmer le paiement ou le prélèvement pour éviter la majoration de 5 %.",
            "Intégrer la CFE dans le prévisionnel et dans le choix du statut, avec notre simulateur.",
          ],
        },
        {
          title: "Sources",
          body: (
            <p className="text-sm text-ink/70">
              Service-public.fr (Entreprendre), fiches « Cotisation foncière des entreprises » et «
              CFE du micro-entrepreneur », vérifiées respectivement le 2 avril et le 26 mars 2026
              (barème 2026 de la base minimum, exonérations, échéances de paiement, déclaration
              1447-C-SD) ; article 1647 D du CGI (base minimum) ; article 1731 du CGI et BOFiP
              (majoration de 5 %). Pour estimer l'effet de la CFE selon votre statut, utilisez notre{" "}
              <Link to="/simulateur-statut" className="underline underline-offset-4">
                simulateur de statut juridique
              </Link>{" "}
              ou découvrez notre{" "}
              <Link to="/pack/auto-entrepreneur" className="underline underline-offset-4">
                pack Auto-entrepreneur
              </Link>
              .
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
    />
  ),
});
