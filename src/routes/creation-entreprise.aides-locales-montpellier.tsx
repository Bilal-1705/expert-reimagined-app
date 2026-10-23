import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, articleJsonLd, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/creation-entreprise/aides-locales-montpellier";
const PUBLISHED = "2026-07-07";
const UPDATED = "2026-10-23";

const faq = [
  {
    q: "Quelles aides pour créer son entreprise à Montpellier en 2026 ?",
    a: "Les principales sont l'ACRE (exonération partielle de cotisations au démarrage, sur demande), l'ARCE si vous touchez l'ARE de France Travail, les prêts d'honneur à taux zéro des réseaux Initiative et Réseau Entreprendre, les aides de la Région Occitanie via l'agence AD'OCC, et les garanties de Bpifrance qui facilitent le prêt bancaire. Les startups innovantes peuvent en plus viser l'accompagnement du BIC de Montpellier, le statut JEI et le crédit d'impôt recherche.",
  },
  {
    q: "L'ACRE est-elle encore automatique en 2026 ?",
    a: "Non. Depuis le 1er janvier 2026, il faut la demander à l'URSSAF dans les 60 jours qui suivent l'immatriculation. Le dispositif a aussi été recentré sur certains publics et l'exonération a été réduite, notamment pour les micro-entrepreneurs à partir du 1er juillet 2026. Vérifiez votre éligibilité avant de bâtir votre prévisionnel dessus.",
  },
  {
    q: "Faut-il choisir entre l'ARCE et le maintien de l'ARE ?",
    a: "Oui. Avec l'ARCE, vous recevez une partie de vos droits restants en capital, en deux versements. Avec le maintien, vous continuez à percevoir l'ARE chaque mois, réduite si vous vous versez une rémunération. Le bon choix dépend de vos besoins de trésorerie au démarrage et de la rémunération que vous prévoyez de vous verser.",
  },
  {
    q: "Un prêt d'honneur, c'est quoi exactement ?",
    a: "C'est un prêt personnel à taux zéro, sans garantie, accordé au créateur et non à l'entreprise. Vous l'apportez ensuite à votre société comme fonds propres, ce qui rassure la banque pour le prêt principal. Le dossier passe devant un comité : un prévisionnel solide et un projet bien présenté font la différence.",
  },
  {
    q: "Le cabinet peut-il monter les dossiers d'aides ?",
    a: "Oui. Le cabinet identifie les aides auxquelles vous avez droit, les intègre dans votre prévisionnel, prépare le dossier financier pour les comités de prêt d'honneur et la banque, et fait les demandes ACRE dans les délais.",
  },
];

export const Route = createFileRoute("/creation-entreprise/aides-locales-montpellier")({
  head: () => ({
    meta: [
      { title: "Aides à la création d'entreprise à Montpellier : le guide 2026" },
      {
        name: "description",
        content:
          "ACRE 2026, ARCE, prêts d'honneur, Région Occitanie, Bpifrance, BIC de Montpellier : les aides pour créer son entreprise à Montpellier et comment les obtenir.",
      },
      { property: "og:title", content: "Aides à la création d'entreprise à Montpellier (2026)" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "Aides à la création d'entreprise à Montpellier : le guide 2026",
          description:
            "ACRE, ARCE, prêts d'honneur, aides régionales et accompagnement à Montpellier.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
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
        { label: "Création d'entreprise", to: "/pack/createur" },
        { label: "Aides à Montpellier" },
      ]}
      eyebrow="Création d'entreprise · Aides 2026"
      h1="Aides à la création d'entreprise à Montpellier :"
      italic="le guide 2026."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            Créer son entreprise à Montpellier, à Juvignac ou ailleurs dans l'Hérault donne accès à
            des aides nationales, régionales et locales. Certaines réduisent vos charges la première
            année, d'autres renforcent vos fonds propres pour obtenir un prêt bancaire. Les règles
            ont changé en 2026, en particulier pour l'ACRE.
          </p>
          <p className="mt-4">
            Ce guide liste les dispositifs que le cabinet active le plus souvent pour ses clients
            créateurs, avec ce qu'il faut savoir pour ne pas les rater.
          </p>
        </>
      }
      sections={[
        {
          title: "ACRE 2026 : une demande à faire dans les 60 jours",
          body: (
            <>
              <p>
                L'ACRE (aide aux créateurs et repreneurs d'entreprise) réduit vos cotisations
                sociales au démarrage. Depuis le 1er janvier 2026, elle n'est plus accordée
                automatiquement : vous devez la demander à l'URSSAF dans les 60 jours qui suivent
                l'immatriculation.
              </p>
              <p>
                La loi de financement de la sécurité sociale pour 2026 a aussi recentré l'aide sur
                certains publics (notamment les demandeurs d'emploi indemnisés et les bénéficiaires
                de minima sociaux) et réduit l'exonération, avec un changement pour les
                micro-entrepreneurs au 1er juillet 2026. Le cabinet vérifie votre éligibilité au cas
                par cas avant de l'intégrer au prévisionnel.
              </p>
            </>
          ),
        },
        {
          title: "Si vous touchez l'ARE : ARCE ou maintien des allocations",
          body: (
            <p>
              Si vous êtes indemnisé par France Travail, deux options s'offrent à vous. L'ARCE vous
              verse en capital une partie de vos droits restants (60 %), en deux fois ; elle suppose
              d'avoir obtenu l'ACRE. Le maintien de l'ARE vous laisse percevoir l'allocation chaque
              mois pendant le démarrage. En SASU sans salaire, le maintien est souvent intéressant ;
              si vous avez besoin de fonds pour investir, l'ARCE peut l'être davantage. Voyez aussi
              notre{" "}
              <Link
                to="/comparatif/eurl-vs-sasu"
                className="font-bold underline underline-offset-4"
              >
                comparatif EURL ou SASU
              </Link>
              , car le statut choisi change la donne.
            </p>
          ),
        },
        {
          title: "Prêts d'honneur : renforcer vos fonds propres",
          body: (
            <p>
              Les prêts d'honneur sont des prêts personnels à taux zéro et sans garantie. Dans
              l'Hérault, ils passent principalement par le réseau Initiative (plateforme Initiative
              Montpellier Pic Saint-Loup) et par Réseau Entreprendre Occitanie, qui ajoute un
              mentorat par des chefs d'entreprise. Les montants varient selon le réseau et le
              projet. Ils servent souvent de levier pour obtenir le prêt bancaire principal.
            </p>
          ),
        },
        {
          title: "Région Occitanie et AD'OCC",
          body: (
            <p>
              La Région Occitanie finance la création et le développement des entreprises par son
              agence AD'OCC. Le Pass Occitanie, par exemple, subventionne une partie des
              investissements des jeunes entreprises, dans la limite de 10 000 € et sans dépasser
              leurs fonds propres. Les conditions évoluent souvent : le cabinet vérifie les
              dispositifs ouverts au moment de votre projet. Occitanie Garantie et Bpifrance peuvent
              par ailleurs garantir une partie de votre prêt bancaire.
            </p>
          ),
        },
        {
          title: "Startups et projets innovants",
          body: (
            <p>
              Montpellier Méditerranée Métropole accompagne les projets innovants par son BIC
              (Business & Innovation Centre), et l'écosystème French Tech Méditerranée fédère
              startups et investisseurs. Côté fiscal, le statut de jeune entreprise innovante (JEI)
              et le crédit d'impôt recherche (CIR) se préparent dès la création, car ils dépendent
              de la nature et du suivi de vos dépenses.
            </p>
          ),
        },
        {
          title: "Chambres consulaires : CCI Hérault et Chambre de métiers",
          body: (
            <p>
              La CCI Hérault (pour les commerçants et prestataires) et la Chambre de métiers et de
              l'artisanat de l'Hérault (pour les artisans) proposent des réunions d'information et
              des formations à la création. C'est un bon point de départ pour valider votre projet
              avant de passer au prévisionnel.
            </p>
          ),
        },
        {
          title: "Ce que fait le cabinet pour vous",
          bullets: [
            "Lister les aides auxquelles vous avez réellement droit, selon votre situation et votre statut.",
            "Construire le prévisionnel sur 3 ans qui sert aux comités de prêt d'honneur et à la banque.",
            "Faire la demande d'ACRE dans le délai de 60 jours et préparer l'arbitrage ARCE ou maintien de l'ARE.",
            "Choisir le statut avec vous, avec notre simulateur puis une étude chiffrée.",
          ],
        },
        {
          title: "Sources",
          body: (
            <p className="text-sm text-ink/70">
              LFSS 2026 et URSSAF (ACRE), France Travail (ARCE et maintien de l'ARE), Région
              Occitanie et AD'OCC (Pass Occitanie), Initiative France et Réseau Entreprendre (prêts
              d'honneur), Bpifrance. Les montants et conditions évoluent : ils sont vérifiés à
              chaque dossier. Pour comparer les statuts, utilisez notre{" "}
              <Link to="/simulateur-statut" className="underline underline-offset-4">
                simulateur de statut juridique
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
