import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/secteur/professions-liberales-medicales";

const faq = [
  {
    q: "Un médecin ou un kiné à Juvignac doit-il tenir une comptabilité ?",
    plain:
      "Oui. Toute profession libérale relevant des BNC doit tenir un livre-journal des recettes-dépenses et produire une déclaration 2035 annuelle. Le cabinet Erkilic prend en charge cette obligation, gère la ventilation des honoraires, la TVA le cas échéant, la CARMF ou CARPIMKO, et l'adhésion AGA.",
  },
  {
    q: "Qu'est-ce que la déclaration 2035 ?",
    plain:
      "La déclaration 2035 est la déclaration fiscale annuelle des professions libérales imposées au réel BNC. Elle synthétise recettes, dépenses professionnelles, amortissements et détermine le bénéfice imposable reporté sur votre déclaration 2042-C-PRO. Elle doit être télétransmise chaque année en mai.",
  },
  {
    q: "Passer en SELARL ou SELAS : quand est-ce intéressant pour un médecin ?",
    plain:
      "Le passage en SELARL / SELAS devient pertinent quand le bénéfice dépasse ~90–100 k€ (arbitrage rémunération / dividendes en IS), en cas d'association entre confrères, ou pour préparer la transmission du cabinet. Le cabinet Erkilic établit une simulation chiffrée sur 3 ans avant la décision.",
  },
  {
    q: "Puis-je déduire mes véhicules et déplacements comme kiné à domicile ?",
    plain:
      "Oui. Les frais de véhicule (barème kilométrique ou frais réels), les frais de repas hors domicile, la formation continue obligatoire, le matériel médical et les cotisations professionnelles sont déductibles. Le cabinet vous fournit une grille de suivi pour ne rien oublier.",
  },
];

export const Route = createFileRoute("/secteur/professions-liberales-medicales")({
  head: () => ({
    meta: [
      { title: "Comptable Professions Libérales Médicales Juvignac" },
      {
        name: "description",
        content:
          "Expert-comptable spécialisé professions libérales et médicales à Juvignac / Montpellier : BNC, déclaration 2035, CARMF, CARPIMKO, SELARL, SELAS.",
      },
      { property: "og:title", content: "Comptable Professions Libérales & Médicales" },
      { property: "og:url", content: `${SITE}${PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${PATH}` }],
    scripts: [
      { type: "application/ld+json", children: faqJsonLd(faq.map((f) => ({ q: f.q, plainAnswer: f.plain }))) },
    ],
  }),
  component: () => (
    <ContentPage
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Secteurs" },
        { label: "Professions libérales & médicales" },
      ]}
      eyebrow="Secteur · Libéraux & santé"
      h1="Professions libérales & médicales,"
      italic="à Juvignac et Montpellier Ouest."
      intro={
        <p>
          Juvignac, Grabels et les hauts de Massane regroupent une forte
          densité de professionnels de santé (médecins généralistes,
          spécialistes, kinés, infirmiers, dentistes, ostéopathes) et
          libéraux (avocats, architectes, consultants). Le cabinet Erkilic
          les accompagne depuis plus de 20 ans avec un savoir-faire pointu
          sur les BNC.
        </p>
      }
      sections={[
        {
          title: "Vos obligations spécifiques en BNC",
          bullets: [
            "Tenue d'un livre-journal recettes-dépenses coté et paraphé.",
            "Déclaration 2035 annuelle et report 2042-C-PRO.",
            "Adhésion AGA recommandée (majoration 10 % évitée avant 2023, aide fiscale toujours utile).",
            "Cotisations URSSAF, CARMF / CARPIMKO / CIPAV / CNBF selon la profession.",
            "TVA (franchise ou réel) selon le type d'actes et le seuil.",
            "Régime DPC pour les professions de santé.",
          ],
        },
        {
          title: "Ce que le cabinet Erkilic prend en charge",
          bullets: [
            "Tenue trimestrielle ou mensuelle, révision et clôture.",
            "Établissement et télétransmission de la déclaration 2035.",
            "Suivi URSSAF, régularisations, calculs de trop-perçus.",
            "Simulation SELARL / SELAS et accompagnement au passage.",
            "Gestion des rétrocessions d'honoraires entre confrères.",
            "Bilan patrimonial : IR, IFI, LMNP, préparation retraite.",
          ],
        },
        {
          title: "Un cabinet à 10 minutes de votre patientèle",
          body: (
            <p>
              Basé rue du Poumpidou à Juvignac, à quelques minutes du
              tramway Ligne 3 (Mosson) et de l'axe Route de Saint-Georges,
              le cabinet est accessible depuis Grabels, Celleneuve, La
              Paillade, Cournonterral et tout Montpellier Ouest sans
              perdre une demi-journée de consultation.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Voir le pack profession libérale", to: "/pack/profession-liberale", sub: "Un pack pensé pour les libéraux et les métiers de santé." }}
    />
  ),
});
