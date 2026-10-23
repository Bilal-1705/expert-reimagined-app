import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/expert-comptable-juvignac";

const faq = [
  {
    q: "Comment trouver un expert-comptable à Juvignac ?",
    a: "Le cabinet Erkilic Expertise Comptable est situé au 29 bis rue du Poumpidou, 34990 Juvignac, et reçoit sur rendez-vous. Vous pouvez appeler le 09 72 54 07 71 ou réserver directement un créneau en ligne. Avant de choisir, vérifiez toujours que le professionnel est inscrit au tableau de l'Ordre des Experts-Comptables : le cabinet est inscrit à l'Ordre de Montpellier.",
  },
  {
    q: "Combien coûte un expert-comptable à Juvignac ?",
    a: "Les honoraires dépendent de votre activité, du volume de pièces et des missions confiées (tenue, bilan, paie, conseil). Erkilic Expertise Comptable établit un devis gratuit et détaillé après un premier rendez-vous, sans engagement. Les packs publiés sur ce site donnent une idée des périmètres proposés.",
  },
  {
    q: "Quel expert-comptable choisir pour créer une SAS à Juvignac ?",
    a: "Choisissez un cabinet qui accompagne la création de A à Z : choix du statut, rédaction des statuts, prévisionnel financier pour la banque et mise en place de la comptabilité dès le premier jour. C'est précisément la mission « Créateur d'entreprise » proposée par Erkilic Expertise Comptable à Juvignac.",
  },
  {
    q: "Un expert-comptable à Juvignac peut-il accompagner une entreprise située à Montpellier ?",
    a: "Oui. Le cabinet accompagne des entreprises situées à Montpellier, Grabels, Saint-Georges-d'Orques, Pignan, Montarnaud, Cournonsec, Cournonterral, Fabrègues et dans tout l'Hérault. Juvignac jouxte l'ouest de Montpellier : les rendez-vous en cabinet sont à quelques minutes, et les échanges se font aussi à distance (téléphone, visio, espace documentaire).",
  },
  {
    q: "Quels services propose le cabinet Erkilic Expertise Comptable ?",
    a: "Quatre domaines : comptabilité (tenue, révision, bilan, liasse fiscale), fiscalité (TVA, IS, déclarations, optimisation), social et paie (bulletins, DSN, droit du travail) et juridique (statuts, secrétariat juridique, transmission). Le cabinet accompagne aussi la création d'entreprise, le prévisionnel et le pilotage de gestion.",
  },
];

export const Route = createFileRoute("/expert-comptable-juvignac")({
  head: () => ({
    meta: [
      { title: "Cabinet comptable à Juvignac (34990) : adresse, accès, missions" },
      {
        name: "description",
        content:
          "Le cabinet comptable de Juvignac, 29 bis rue du Poumpidou : parking, horaires, missions (bilan, TVA, paie, création) et rendez-vous sous 48 h.",
      },
      { property: "og:title", content: "Expert-comptable à Juvignac — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Comptabilité, fiscalité, TVA, bilan, création d'entreprise : le cabinet Erkilic Expertise Comptable accompagne les entreprises de Juvignac, Montpellier et l'Hérault.",
      },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Expert-comptable à Juvignac",
          description:
            "Présentation du cabinet Erkilic Expertise Comptable, expert-comptable à Juvignac (34990) : services, entreprises accompagnées, contact.",
          url: `${SITE}${PATH}`,
          about: { "@id": `${SITE}/#cabinet` },
          isPartOf: { "@id": `${SITE}/#website` },
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
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Expert-comptable à Juvignac" }]}
      eyebrow="Cabinet local · Juvignac (34990)"
      h1="Expert-comptable à Juvignac,"
      italic="au service de votre entreprise."
      intro={
        <>
          <p>
            Erkilic Expertise Comptable est un cabinet d'expertise comptable
            situé au <strong>29 bis rue du Poumpidou, 34990 Juvignac</strong>,
            aux portes de Montpellier. Le cabinet accompagne les entreprises,
            indépendants, professions libérales et particuliers de Juvignac,
            Montpellier et de tout l'Hérault.
          </p>
          <ul className="mt-4 space-y-2">
            <li>• Tenue comptable, bilan annuel et liasse fiscale</li>
            <li>• Déclarations de TVA et optimisation fiscale</li>
            <li>• Création d'entreprise : statuts, prévisionnel, immatriculation</li>
            <li>• Paie, DSN et conseil social</li>
            <li>• Accompagnement du dirigeant : trésorerie, développement, transmission</li>
          </ul>
        </>
      }
      sections={[
        {
          title: "Un cabinet d'expertise comptable implanté à Juvignac",
          body: (
            <>
              <p>
                Le cabinet Erkilic Expertise Comptable est implanté à Juvignac,
                dans le quartier de Font-Mas, à proximité immédiate de
                l'avenue de la Valsière, du centre commercial de la Plaine et
                de la route de Saint-Georges-d'Orques. La commune est desservie
                par la ligne 3 du tramway de Montpellier (station Juvignac)
                et par la ligne de bus 23.
              </p>
              <p>
                Le cabinet est dirigé par <strong>Nazifé Erkilic</strong>,
                experte-comptable inscrite au tableau de l'
                <strong>Ordre des Experts-Comptables de Montpellier</strong>,
                forte de 23 années d'expérience. Cette inscription garantit le
                respect d'une déontologie stricte : compétence, indépendance,
                intégrité et secret professionnel.
              </p>
            </>
          ),
        },
        {
          title: "Nos services",
          body: (
            <p>
              Le cabinet couvre l'intégralité des besoins comptables, fiscaux,
              sociaux et juridiques d'une entreprise :
            </p>
          ),
          bullets: [
            "Tenue comptable : saisie des journaux, rapprochements bancaires, suivi clients et fournisseurs.",
            "Révision des comptes et établissement du bilan annuel, commenté avec vous en rendez-vous.",
            "Liasse fiscale et télétransmission à l'administration.",
            "Déclarations de TVA, IS, CFE, CVAE et autres taxes.",
            "Paie, bulletins de salaire, DSN et conseil en droit du travail.",
            "Création d'entreprise : choix du statut, statuts, prévisionnel, immatriculation.",
            "Prévisionnels, tableaux de bord et pilotage de la trésorerie.",
            "Accompagnement du dirigeant : optimisation, croissance, transmission.",
          ],
        },
        {
          title: "Les entreprises que nous accompagnons",
          body: (
            <p>
              Le cabinet travaille avec des structures de toutes tailles et de
              tous statuts, à Juvignac et dans toute la métropole de
              Montpellier :
            </p>
          ),
          bullets: [
            "SAS, SASU, SARL, EURL, EI, SCI et associations.",
            "Indépendants et auto-entrepreneurs.",
            "Professions libérales : santé, droit, conseil, architecture.",
            "Artisans, commerçants et PME de l'Ouest montpelliérain.",
            "Particuliers : impôt sur le revenu, IFI, LMNP, SCI.",
          ],
        },
        {
          title: "Pourquoi choisir un cabinet local à Juvignac ?",
          body: (
            <>
              <p>
                Un expert-comptable de proximité, c'est un interlocuteur unique
                qui connaît votre dossier et votre territoire : le tissu
                économique de l'Ouest montpelliérain, les aides locales à la
                création, les spécificités de vos commerces et professions.
              </p>
              <p>
                Chez Erkilic Expertise Comptable, vous êtes reçu en cabinet,
                rue du Poumpidou, sans plateforme anonyme ni standard
                délocalisé : un rendez-vous, un visage, une responsabilité
                professionnelle engagée sur chaque bilan signé.
              </p>
            </>
          ),
        },
        {
          title: "Contact et prise de rendez-vous",
          body: (
            <>
              <p>
                Le premier échange est gratuit. Appelez le{" "}
                <strong>09 72 54 07 71</strong> (ou le 06 59 88 40 80),
                écrivez à <strong>cabinet@erkilic.fr</strong>, ou réservez
                directement un créneau en ligne via notre page contact. Le
                cabinet vous reçoit au 29 bis rue du Poumpidou, 34990
                Juvignac, du lundi au vendredi de 9h à 18h.
              </p>
              <p className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/contact" className="font-bold underline underline-offset-4">
                  Prendre rendez-vous en ligne →
                </Link>
                <Link to="/pack/createur" className="font-bold underline underline-offset-4">
                  Voir le pack Créateur d'entreprise →
                </Link>
                <Link to="/creation-entreprise/juvignac" className="font-bold underline underline-offset-4">
                  Créer son entreprise à Juvignac →
                </Link>
              </p>
            </>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
      cta={{ label: "Prendre rendez-vous", to: "/contact", sub: "Un premier rendez-vous gratuit à Juvignac." }}
    />
  ),
});
