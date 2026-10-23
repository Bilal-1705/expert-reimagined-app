import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/services/social-juridique";

export const Route = createFileRoute("/services/social-juridique")({
  head: () => ({
    meta: [
      { title: "Paie, social et juridique à Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Bulletins de paie, DSN, conseil en droit du travail, statuts et secrétariat juridique à Juvignac (34990). Cabinet Erkilic Expertise Comptable.",
      },
      { property: "og:title", content: "Paie, social et juridique — Erkilic Expertise Comptable" },
      {
        property: "og:description",
        content:
          "Externalisation de la paie, DSN, secrétariat juridique et transmission d'entreprise. Cabinet d'expertise comptable à Juvignac.",
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
          "@type": "Service",
          name: "Paie, social et juridique",
          provider: { "@id": `${SITE}/#cabinet` },
          areaServed: "Juvignac, Montpellier, Hérault",
          url: `${SITE}${PATH}`,
        }),
      },
      
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Prestations", to: "/services" }, { label: "Social & juridique" }]}
      eyebrow="Prestation · Social & juridique"
      h1="Paie, social"
      italic="et juridique."
      intro={
        <p>
          Embaucher, payer, déclarer, puis faire vivre la société dans les
          règles : le social et le juridique sont les deux faces administratives
          de votre développement. Erkilic Expertise Comptable les prend en
          charge à Juvignac, pour que vous restiez concentré sur votre métier.
        </p>
      }
      sections={[
        {
          title: "Social & paie : ce que comprend la mission",
          bullets: [
            "Externalisation complète des paies : bulletins, conventions collectives, DSN.",
            "Conseil en gestion sociale : embauche, rémunération, aides et exonérations.",
            "Accords d'intéressement et de participation : rédaction et calculs.",
            "Assistance en contrôle URSSAF : préparation, présence, réponses.",
            "Régime social des indépendants : analyse et correction de l'assiette.",
          ],
        },
        {
          title: "Juridique : ce que comprend la mission",
          bullets: [
            "Tenue permanente du dossier juridique : PV d'assemblées, dépôts au Greffe.",
            "Constitution et dissolution : choix de la forme, rédaction des statuts.",
            "Approbation des comptes annuels et formalités associées.",
            "Transmission et cession : préparation, analyse patrimoniale.",
            "Conventions de trésorerie et management fees entre sociétés.",
          ],
        },
        {
          title: "Pour qui ?",
          bullets: [
            "TPE qui embauchent leur premier salarié.",
            "PME qui veulent externaliser la paie sans recruter un gestionnaire.",
            "Dirigeants qui préparent une transmission ou une cession.",
            "Sociétés en retard dans leurs formalités juridiques annuelles.",
          ],
        },
        {
          title: "Pourquoi c'est important",
          body: (
            <p>
              Une paie erronée ou une assemblée générale non tenue expose la
              société à des sanctions et le dirigeant à une mise en cause
              personnelle. Le secrétariat social et juridique d'un
              expert-comptable sécurise ces obligations, dans les délais, avec
              une traçabilité complète.
            </p>
          ),
        },
      ]}
      cta={{ label: "Demander un devis", to: "/contact", sub: "Paie et juridique en règle, sans y penser." }}
    />
  ),
});
