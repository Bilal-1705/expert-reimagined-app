import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, articleJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/actualites/loi-finances-2026";
const PUBLISHED = "2026-02-05";
const UPDATED = "2026-07-08";

export const Route = createFileRoute("/actualites/loi-finances-2026")({
  head: () => ({
    meta: [
      { title: "Loi de Finances 2026 : ce qui change pour TPE et PME | Erkilic" },
      {
        name: "description",
        content:
          "Synthèse de la Loi de Finances 2026 : IS, TVA, CFE, aides à l'embauche, mesures pour les TPE/PME et professions libérales de l'Hérault.",
      },
      { property: "og:title", content: "Loi de Finances 2026 — synthèse dirigeants" },
      { property: "og:description", content: "Les mesures fiscales et sociales qui touchent les TPE, PME et indépendants." },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: articleJsonLd({
          headline: "Loi de Finances 2026 : les mesures qui touchent TPE, PME et indépendants",
          description:
            "Synthèse pratique de la Loi de Finances 2026 pour les dirigeants de Montpellier et de l'Hérault.",
          url: `${SITE}${PATH}`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Actualités" },
        { label: "Loi de Finances 2026" },
      ]}
      eyebrow="Actualité fiscale · Synthèse 2026"
      h1="Loi de Finances 2026"
      italic="ce que ça change pour votre entreprise."
      datePublished={PUBLISHED}
      dateModified={UPDATED}
      intro={
        <>
          <p>
            La Loi de Finances pour 2026 introduit plusieurs mesures qui impactent
            directement les TPE, PME et professions libérales de la région de
            Montpellier. Cette page synthétise les points d'attention immédiats
            pour un dirigeant, avec les arbitrages à faire dès le premier trimestre.
          </p>
          <p className="mt-4 text-sm text-ink/60 italic">
            Cette synthèse est mise à jour à mesure que les décrets d'application
            sont publiés. Contactez le cabinet Erkilic pour un audit personnalisé
            de votre situation.
          </p>
        </>
      }
      sections={[
        {
          title: "Impôt sur les sociétés (IS)",
          bullets: [
            "Maintien du taux réduit à 15 % sur les 42 500 premiers euros de bénéfice pour les PME éligibles.",
            "Taux normal maintenu à 25 % au-delà.",
            "Renforcement des dispositifs anti-abus sur les distributions déguisées.",
            "Nouveaux crédits d'impôt sectoriels (transition écologique, industrie verte).",
          ],
        },
        {
          title: "TVA & seuils",
          bullets: [
            "Nouveaux seuils de la franchise en base à surveiller dès le premier euro de dépassement.",
            "Alignement progressif du régime simplifié sur le réel normal.",
            "Facturation électronique obligatoire par vagues 2026-2027 (voir notre page dédiée).",
          ],
        },
        {
          title: "Charges sociales & emploi",
          bullets: [
            "Ajustement des allègements généraux (ex-Fillon) sur les bas salaires.",
            "Prolongation de dispositifs pour l'embauche des jeunes et l'apprentissage.",
            "Nouveaux plafonds URSSAF 2026 — voir notre page barèmes.",
          ],
        },
        {
          title: "Fiscalité des dirigeants",
          bullets: [
            "Barème IR revalorisé pour tenir compte de l'inflation.",
            "PFU (flat tax) maintenu à 30 % sur dividendes et plus-values mobilières.",
            "Arbitrage rémunération vs dividendes à refaire pour chaque dirigeant EURL/SASU.",
          ],
        },
        {
          title: "Ce que le cabinet Erkilic recommande de faire au T1 2026",
          bullets: [
            "Refaire l'arbitrage salaire/dividendes en fonction des nouveaux plafonds.",
            "Valider votre calendrier de passage à la facture électronique.",
            "Vérifier votre éligibilité aux crédits d'impôt sectoriels.",
            "Anticiper la clôture 2025 pour intégrer les nouvelles règles dès l'exercice suivant.",
          ],
        },
      ]}
      cta={{
        label: "Auditer ma fiscalité 2026",
        to: "/contact",
        sub: "30 minutes pour cadrer les impacts sur votre entreprise.",
      }}
    />
  ),
});
