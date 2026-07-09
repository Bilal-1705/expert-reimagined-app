import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/creation-entreprise/aides-locales-montpellier";

export const Route = createFileRoute("/creation-entreprise/aides-locales-montpellier")({
  head: () => ({
    meta: [
      { title: "Aides Création Entreprise Montpellier & Juvignac 2026" },
      {
        name: "description",
        content:
          "Panorama des aides à la création d'entreprise à Montpellier : CCI Hérault, Région Occitanie, French Tech, Bpifrance, ACRE. Guide 2026 par Erkilic.",
      },
      { property: "og:title", content: "Aides à la création d'entreprise — Montpellier & Juvignac" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Création d'entreprise" },
        { label: "Aides locales Montpellier" },
      ]}
      eyebrow="Création d'entreprise · Aides locales"
      h1="Créer son entreprise à Montpellier :"
      italic="le guide des aides locales."
      intro={
        <p>
          Créer une entreprise à Montpellier, Juvignac ou dans l'Hérault
          ouvre l'accès à un écosystème d'aides denses : CCI Hérault,
          Région Occitanie, French Tech Montpellier, Bpifrance, aides
          nationales (ACRE, ARCE). Ce guide, mis à jour en 2026, recense
          les dispositifs à activer par le cabinet Erkilic Expertise Comptable pour ses
          clients créateurs.
        </p>
      }
      sections={[
        {
          title: "CCI Hérault : le premier réflexe",
          body: (
            <p>
              La CCI Hérault (Chambre de Commerce et d'Industrie) propose
              des parcours d'accompagnement gratuits ou à prix modéré :
              réunions d'information « 5 jours pour entreprendre »,
              diagnostics personnalisés, mise en réseau avec le tissu
              économique montpelliérain. Le cabinet Erkilic Expertise Comptable collabore
              régulièrement avec les conseillers CCI sur des dossiers
              partagés.
            </p>
          ),
        },
        {
          title: "Région Occitanie : le pass Créa et les subventions",
          bullets: [
            "Pass Créa : aide financière de 1 500 à 10 000 € selon le projet et la commune.",
            "Contrat Occitanie Innovation : financement des projets à forte composante R&D.",
            "Aides à l'installation en zone rurale ou QPV avec exonérations et primes.",
            "Chèque numérique pour digitalisation des TPE.",
          ],
        },
        {
          title: "French Tech Montpellier : si vous êtes une startup",
          body: (
            <p>
              L'écosystème French Tech de Montpellier est l'un des plus
              denses de France (Halle Tropisme, BIC Cap Omega, La Cité de
              l'Économie). Le cabinet Erkilic Expertise Comptable accompagne des startups sur
              la levée de fonds, le CIR (Crédit d'Impôt Recherche), la
              JEI (Jeune Entreprise Innovante) et l'ingénierie
              financière.
            </p>
          ),
        },
        {
          title: "Aides nationales activables depuis Montpellier",
          bullets: [
            "ACRE : exonération de cotisations sociales la première année.",
            "ARCE : versement en capital de 60 % de vos droits Pôle Emploi.",
            "NACRE : accompagnement en 3 phases + prêt à taux zéro.",
            "Bpifrance : prêts d'honneur, garanties, prêts d'amorçage.",
            "Prêt Initiative Occitanie via Initiative Montpellier Pic Saint-Loup.",
          ],
        },
        {
          title: "Ce que le cabinet Erkilic Expertise Comptable fait pour vous",
          body: (
            <p>
              Nous identifions les dispositifs auxquels vous êtes éligible,
              chiffrons leur impact dans votre prévisionnel, montons le
              dossier administratif et vous accompagnons devant les
              organismes financeurs. Objectif : maximiser vos aides sans
              perdre 30 heures dans la paperasse.
            </p>
          ),
        },
      ]}
      cta={{ label: "Découvrir le pack Créateur", to: "/pack/createur", sub: "Un accompagnement complet pour votre lancement." }}
    />
  ),
});
