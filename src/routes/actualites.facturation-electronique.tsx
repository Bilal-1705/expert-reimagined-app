import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/facturation-electronique";
const PUBLISHED = "2026-07-08";
const UPDATED = "2026-11-01";

const faq = [
  {
    q: "Qui est concerné par la facturation électronique ?",
    plain:
      "Toutes les entreprises assujetties à la TVA en France, quelle que soit leur taille. Depuis le 1er septembre 2026, chacune doit pouvoir recevoir des factures électroniques. L'émission est obligatoire depuis le 1er septembre 2026 pour les grandes entreprises et les ETI, et le sera au 1er septembre 2027 pour les PME, TPE et micro-entreprises.",
  },
  {
    q: "Je suis auto-entrepreneur : que dois-je faire maintenant ?",
    plain:
      "Depuis le 1er septembre 2026, vous devez pouvoir recevoir les factures électroniques de vos fournisseurs via une plateforme agréée. Vous avez jusqu'au 1er septembre 2027 pour émettre vos propres factures au format électronique à vos clients professionnels français. Mieux vaut choisir la plateforme dès maintenant et tester l'émission avant l'échéance.",
  },
  {
    q: "Qu'est-ce qu'une plateforme agréée et comment la choisir ?",
    plain:
      "Une plateforme agréée (PA, ex-PDP) est un opérateur privé immatriculé par la DGFiP. C'est le seul intermédiaire reconnu par l'administration pour émettre, recevoir et transmettre les factures électroniques et les données de facturation. Le choix dépend de votre logiciel, de vos volumes et du prix. Le cabinet Erkilic Expertise Comptable vous aide à choisir et paramètre la plateforme.",
  },
  {
    q: "Qu'est-ce que le e-reporting ?",
    plain:
      "C'est la transmission à l'administration des données des opérations qui ne passent pas par une facture électronique entre entreprises françaises : ventes aux particuliers et opérations avec des clients ou fournisseurs établis à l'étranger, ainsi que certaines données de paiement. Pour les PME, TPE et micro-entreprises, il s'applique avec l'émission, au 1er septembre 2027.",
  },
  {
    q: "Puis-je continuer à envoyer des factures PDF par e-mail ?",
    plain:
      "Pas entre entreprises françaises assujetties à la TVA, une fois votre obligation d'émission en vigueur. Un PDF simple envoyé par e-mail ne vaut plus facture : il faut passer par une plateforme agréée et un format structuré (Factur-X, UBL ou CII).",
  },
  {
    q: "Que se passe-t-il si je ne suis pas prêt ?",
    plain:
      "Le premier risque est opérationnel : vos clients peuvent rejeter une facture non conforme, ce qui retarde vos encaissements. Le Code général des impôts prévoit aussi des amendes pour chaque facture non émise au format électronique et pour chaque défaut de e-reporting. Il est donc prudent d'anticiper.",
  },
];

export const Route = createFileRoute("/actualites/facturation-electronique")({
  head: () => ({
    meta: [
      { title: "Facture électronique : calendrier et obligations | Erkilic" },
      {
        name: "description",
        content:
          "Réception depuis septembre 2026, émission en septembre 2027 pour les PME, TPE et auto-entrepreneurs : calendrier, plateforme agréée, e-reporting et check-list.",
      },
      { property: "og:title", content: "Facture électronique : calendrier et obligations" },
      {
        property: "og:description",
        content:
          "Ce que la réforme impose à votre entreprise, échéance par échéance, expliqué par un cabinet d'expertise comptable à Juvignac.",
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
          headline: "Facture électronique : calendrier et obligations pour votre entreprise",
          description:
            "Réception, émission, plateforme agréée et e-reporting : les échéances de 2026 et 2027 et la façon de s'y préparer.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
      {
        type: "application/ld+json",
        children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Actualités", to: "/actualites" },
        { label: "Facture électronique" },
      ]}
      eyebrow="Réforme · Mis à jour le 1er novembre 2026"
      h1="Facture électronique :"
      italic="ce qui change pour votre entreprise."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            La facturation électronique devient <strong>obligatoire entre entreprises</strong>{" "}
            françaises assujetties à la TVA. La réforme se déroule en deux temps : depuis le 1
            <sup>er</sup> septembre 2026, toutes les entreprises doivent pouvoir{" "}
            <strong>recevoir</strong> une facture électronique ; au 1<sup>er</sup> septembre 2027,
            les PME, TPE et micro-entreprises devront aussi en <strong>émettre</strong>.
          </p>
          <p className="mt-4">Voici l'essentiel :</p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Réception obligatoire pour toutes les entreprises depuis septembre 2026.</li>
            <li>
              Émission : grandes entreprises et ETI depuis septembre 2026, PME, TPE et
              micro-entreprises en septembre 2027.
            </li>
            <li>Raccordement indispensable à une plateforme agréée (PA).</li>
            <li>Des données de facturation fiables : SIREN, TVA, mentions obligatoires.</li>
            <li>
              Erkilic Expertise Comptable choisit, paramètre et teste la plateforme avec ses clients
              de Juvignac et Montpellier.
            </li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Le calendrier officiel",
          bullets: [
            "1er septembre 2026 : toutes les entreprises assujetties à la TVA doivent pouvoir recevoir les factures électroniques.",
            "1er septembre 2026 : émission obligatoire pour les grandes entreprises et les ETI.",
            "1er septembre 2027 : émission obligatoire pour les PME, TPE, professions libérales et micro-entreprises.",
            "Le e-reporting (ventes aux particuliers, opérations internationales) suit le même calendrier que l'émission.",
          ],
        },
        {
          title: "Ce qui change concrètement pour un dirigeant",
          bullets: [
            "Fin des factures PDF envoyées par e-mail entre entreprises françaises assujetties à la TVA.",
            "Raccordement à une plateforme agréée, choisie par chaque entreprise.",
            "Factures au format structuré : Factur-X (PDF et XML), UBL ou CII.",
            "Transmission automatique des données de TVA à l'administration.",
            "Suivi des statuts de chaque facture (déposée, refusée, encaissée) dans la plateforme.",
          ],
        },
        {
          title: "Choisir sa plateforme agréée : 4 critères",
          bullets: [
            "Compatibilité avec votre logiciel de comptabilité et de gestion (Pennylane, Sage, Cegid, EBP, Tiime).",
            "Prix à la facture ou abonnement fixe, à arbitrer selon vos volumes.",
            "Ergonomie pour les non-comptables (dirigeant, assistant).",
            "Qualité du support en français et solidité de l'opérateur.",
          ],
        },
        {
          title: "Check-list de préparation pour une TPE de l'Hérault",
          bullets: [
            "Inventorier vos outils actuels : logiciel de facturation, caisse, tableur, e-mail.",
            "Choisir la plateforme agréée adaptée à votre volume mensuel de factures.",
            "Nettoyer votre base clients et fournisseurs (SIRET manquants, doublons).",
            "Adapter vos mentions de facture : numéro, TVA, catégorie d'opération, option de paiement.",
            "Faire un test d'émission et de réception plusieurs mois avant septembre 2027.",
          ],
        },
        {
          title: "Comment le cabinet vous accompagne",
          body: (
            <p>
              Nous auditons votre chaîne de facturation (volumes entre entreprises, ventes aux
              particuliers, international), choisissons la plateforme, la paramétrons avec vous et
              vérifions les premiers flux réels. Les clients du cabinet, à Juvignac comme à
              Saint-Georges-d'Orques, Grabels ou Celleneuve, n'ont pas à devenir experts de la
              réforme : le paramétrage fait partie de la mission.
            </p>
          ),
        },
        {
          title: "Sources officielles",
          body: (
            <p className="text-sm">
              Sources : service-public.fr,{" "}
              <a
                href="https://entreprendre.service-public.gouv.fr/vosdroits/F39785"
                className="underline underline-offset-4"
                rel="noopener"
              >
                « Comment se mettre en conformité avec l'obligation de facturation électronique ? »
              </a>{" "}
              (vérifiée le 7 août 2026) ; impots.gouv.fr, espace professionnel, rubrique facturation
              électronique.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{
        label: "Faire le point sur ma facturation",
        to: "/contact",
        sub: "30 minutes pour cadrer votre passage à la facture électronique.",
      }}
    />
  ),
});
