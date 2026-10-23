import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/expert-comptable-montpellier";
const PUBLISHED = "2026-10-23";

const faq = [
  {
    q: "Comment choisir un expert-comptable à Montpellier ?",
    a: "Vérifiez d'abord l'inscription au tableau de l'Ordre des experts-comptables : seul un professionnel inscrit peut tenir et présenter vos comptes. Regardez ensuite qui suivra votre dossier au quotidien, comment on vous répond (délai, canal) et si le cabinet connaît votre secteur. Demandez enfin un devis écrit qui détaille ce qui est compris : tenue, bilan, liasse, TVA, paie, conseil.",
  },
  {
    q: "Combien coûte un expert-comptable à Montpellier ?",
    a: "Le prix dépend du volume de pièces, du régime fiscal, du nombre de salariés et des missions confiées. Une micro-entreprise ou une petite SASU sans salarié ne demande pas le même travail qu'une SARL de dix salariés. Le cabinet Erkilic chiffre votre dossier après un premier rendez-vous gratuit et vous remet un devis détaillé sous 24 heures.",
  },
  {
    q: "Le cabinet est à Juvignac : est-ce pratique pour une entreprise de Montpellier ?",
    a: "Oui. Juvignac touche l'ouest de Montpellier et la ligne 3 du tramway dessert la commune. Les clients des quartiers Celleneuve, La Mosson, Hauts de Massane ou Ovalie sont tout proches. Pour les autres quartiers, la plupart des échanges se font par téléphone, visio et espace documentaire partagé, et vous venez au cabinet quand c'est utile, par exemple pour le bilan.",
  },
  {
    q: "Peut-on changer d'expert-comptable en cours d'année ?",
    a: "Oui. Le changement est le plus simple après la clôture de l'exercice, mais il reste possible en cours d'année. Le nouveau cabinet contacte l'ancien, qui doit transmettre les documents du dossier. Erkilic s'occupe de cette reprise et vérifie les derniers comptes avant de prendre le relais.",
  },
  {
    q: "Le cabinet travaille-t-il avec des logiciels en ligne comme Pennylane ?",
    a: "Oui. Le cabinet travaille avec des outils collaboratifs comme Pennylane : synchronisation bancaire, dépôt des justificatifs en photo, suivi en temps réel. Vous gardez la simplicité d'un outil en ligne et vous avez en face une experte-comptable qui révise et signe vos comptes.",
  },
];

export const Route = createFileRoute("/expert-comptable-montpellier")({
  head: () => ({
    meta: [
      { title: "Expert-comptable à Montpellier | Cabinet Erkilic, Ouest Montpellier" },
      {
        name: "description",
        content:
          "Expert-comptable pour les entreprises de Montpellier : création, comptabilité, TVA, paie, conseil. Cabinet aux portes de Montpellier (Juvignac, tram 3). 1er rendez-vous offert.",
      },
      { property: "og:title", content: "Expert-comptable à Montpellier : le cabinet Erkilic" },
      {
        property: "og:description",
        content: "Un cabinet d'expertise comptable de proximité pour les TPE, indépendants et professions libérales de Montpellier.",
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
          "@id": `${SITE}${PATH}#webpage`,
          url: `${SITE}${PATH}`,
          name: "Expert-comptable à Montpellier",
          about: { "@id": `${SITE}/#cabinet` },
          isPartOf: { "@id": `${SITE}/#website` },
          spatialCoverage: { "@type": "City", name: "Montpellier" },
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
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Expert-comptable à Montpellier" }]}
      eyebrow="Expert-comptable · Montpellier"
      h1="Expert-comptable à Montpellier,"
      italic="un cabinet à taille humaine."
      funnel="choose"
      datePublished={PUBLISHED}
      dateModified={PUBLISHED}
      intro={
        <>
          <p>
            Vous cherchez un expert-comptable à Montpellier qui réponde au téléphone, connaisse votre dossier
            et vous dise clairement quoi faire ? Le cabinet Erkilic Expertise Comptable est installé à
            Juvignac, en limite ouest de Montpellier. Il accompagne les créateurs, indépendants, professions
            libérales, artisans, commerçants et PME de toute la métropole.
          </p>
          <p className="mt-4">
            Le cabinet est dirigé par Nazifé Erkilic, experte-comptable inscrite au tableau de l'Ordre. Vous
            avez une seule interlocutrice, du premier rendez-vous à la signature du bilan.
          </p>
        </>
      }
      sections={[
        {
          title: "Ce que le cabinet fait pour les entreprises montpelliéraines",
          body: (
            <p>
              Le cabinet prend en charge tout ou partie de la vie comptable, fiscale et sociale de votre
              entreprise. Vous choisissez le périmètre : certains clients déposent leurs pièces et nous
              faisons le reste, d'autres tiennent leur comptabilité dans un logiciel et nous confient la
              révision, le bilan et le conseil.
            </p>
          ),
          bullets: [
            "Tenue comptable, révision, bilan annuel et liasse fiscale.",
            "Déclarations de TVA, impôt sur les sociétés, CFE et autres impôts.",
            "Bulletins de paie, DSN et questions de droit du travail.",
            "Création d'entreprise : choix du statut, statuts, prévisionnel, immatriculation.",
            "Tableaux de bord, trésorerie, rémunération du dirigeant, dossiers de financement.",
          ],
        },
        {
          title: "Les profils que nous accompagnons à Montpellier",
          body: (
            <>
              <p>
                Montpellier compte beaucoup de créations d'entreprises, de professions de santé autour du
                pôle hospitalo-universitaire, de consultants et d'activités de services. Le cabinet a construit
                ses offres autour de ces profils :
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/pack/createur" className="font-bold underline underline-offset-4">
                    Créateurs d'entreprise
                  </Link>{" "}
                  : choix entre micro, EURL et SASU, prévisionnel pour la banque, aides à la création.
                </li>
                <li>
                  <Link to="/pack/profession-liberale" className="font-bold underline underline-offset-4">
                    Professions libérales
                  </Link>{" "}
                  : déclaration 2035, cotisations des caisses, passage en société d'exercice libéral.
                </li>
                <li>
                  <Link to="/secteur/commerce-ecommerce" className="font-bold underline underline-offset-4">
                    Commerçants et e-commerçants
                  </Link>{" "}
                  : TVA, stocks, ventes sur marketplaces.
                </li>
                <li>
                  <Link to="/pack/pro" className="font-bold underline underline-offset-4">
                    Artisans et PME
                  </Link>{" "}
                  : bilan, paie, pilotage de la marge et de la trésorerie.
                </li>
                <li>
                  <Link to="/secteur/immobilier-lmnp-sci" className="font-bold underline underline-offset-4">
                    Investisseurs LMNP et SCI
                  </Link>{" "}
                  : amortissements, choix IR ou IS, déclarations annuelles.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Un cabinet local, sans renoncer aux outils en ligne",
          body: (
            <>
              <p>
                Les cabinets 100 % en ligne sont pratiques mais votre dossier change souvent de main. Ici, la
                même experte-comptable suit votre entreprise d'une année sur l'autre et vous pouvez la
                rencontrer au cabinet.
              </p>
              <p>
                Le cabinet utilise aussi des outils collaboratifs comme{" "}
                <Link to="/expert-comptable-pennylane" className="font-bold underline underline-offset-4">
                  Pennylane
                </Link>{" "}
                : vos relevés bancaires remontent seuls, vous déposez vos justificatifs depuis votre téléphone
                et vous suivez vos chiffres quand vous voulez. Pour comparer les deux modèles, lisez notre{" "}
                <Link to="/comparatif/cabinet-vs-en-ligne" className="font-bold underline underline-offset-4">
                  comparatif cabinet en ligne ou local
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Quartiers et communes desservis",
          body: (
            <p>
              Le cabinet reçoit à Juvignac (29 bis rue du Poumpidou, 34990), desservi par la ligne 3 du
              tramway. Il accompagne des entreprises de tout Montpellier : Écusson, Antigone, Port Marianne,
              Hôpitaux-Facultés, Ovalie, Près d'Arènes, et plus particulièrement l'Ouest montpelliérain avec{" "}
              <Link to="/zone/celleneuve-mosson" className="font-bold underline underline-offset-4">
                Celleneuve et La Mosson
              </Link>
              . Le cabinet suit aussi des clients à{" "}
              <Link to="/zone/grabels" className="font-bold underline underline-offset-4">
                Grabels
              </Link>
              ,{" "}
              <Link to="/zone/saint-georges-dorques" className="font-bold underline underline-offset-4">
                Saint-Georges-d'Orques
              </Link>
              , Pignan, Lavérune et Montarnaud.
            </p>
          ),
        },
        {
          title: "Comment se passe le premier rendez-vous",
          body: (
            <p>
              Le premier échange dure 30 minutes et ne vous engage à rien. Vous répondez à deux ou trois
              questions ci-dessous pour que l'experte-comptable prépare l'appel, puis vous choisissez votre
              créneau. Elle vous rappelle à l'heure prévue, fait le point sur votre situation et vous envoie
              un devis détaillé sous 24 heures. Vous pouvez aussi appeler le 09 72 54 07 71.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
    />
  ),
});
