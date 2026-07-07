import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/secteur/immobilier-lmnp-sci";

const faq = [
  {
    q: "LMNP au micro-BIC ou au réel : lequel choisir ?",
    plain:
      "Le micro-BIC applique un abattement forfaitaire de 50 % (30 % à compter de 2025 pour meublés de tourisme non classés). Le régime réel permet d'amortir le bien, le mobilier, et de déduire les charges réelles — souvent plus intéressant dès la première année sur un bien à Montpellier ou Juvignac. Le cabinet Erkilic établit le comparatif chiffré.",
  },
  {
    q: "SCI à l'IR ou SCI à l'IS : que choisir ?",
    plain:
      "La SCI à l'IR est la forme par défaut : transparente fiscalement, adaptée à la détention long terme d'un bien nu, à la transmission familiale. La SCI à l'IS permet d'amortir le bien et de déduire toutes les charges, mais génère une plus-value professionnelle à la revente. Choix crucial, souvent définitif : à décider avec un expert.",
  },
  {
    q: "Investir en LMNP dans l'Hérault : est-ce toujours intéressant en 2026 ?",
    plain:
      "Oui, sur des zones tendues comme Montpellier centre, Grabels, Juvignac ou le littoral (Palavas, Carnon), le LMNP au réel reste fiscalement très avantageux, notamment sur le neuf ou l'ancien avec travaux. Attention à la réforme des meublés de tourisme depuis 2025 qui a réduit l'attrait du saisonnier non classé.",
  },
  {
    q: "Puis-je récupérer la TVA sur un investissement locatif ?",
    plain:
      "La récupération de TVA sur un investissement locatif est possible uniquement en résidence de services (para-hôtellerie, résidence étudiante, EHPAD) avec un bail commercial 9 ans à un exploitant. Le cabinet Erkilic monte le dossier et gère la déclaration de TVA.",
  },
];

export const Route = createFileRoute("/secteur/immobilier-lmnp-sci")({
  head: () => ({
    meta: [
      { title: "Comptable LMNP & SCI Montpellier Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Expert-comptable spécialisé LMNP, SCI à l'IR et à l'IS dans l'Hérault. Amortissement, régime réel, TVA sur résidence de services. Devis gratuit.",
      },
      { property: "og:title", content: "Comptable LMNP & SCI — Montpellier & Juvignac" },
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
        { label: "Immobilier LMNP & SCI" },
      ]}
      eyebrow="Secteur · Immobilier & patrimoine"
      h1="Investir sereinement dans l'immobilier"
      italic="à Montpellier et dans l'Hérault."
      intro={
        <p>
          LMNP, SCI à l'IR ou à l'IS, résidence de services : les choix
          faits à l'acquisition conditionnent 10 ou 20 ans de fiscalité.
          Le cabinet Erkilic accompagne les investisseurs locatifs de
          l'Hérault dans l'arbitrage, le montage et la déclaration
          annuelle.
        </p>
      }
      sections={[
        {
          title: "Location meublée non professionnelle (LMNP)",
          body: (
            <p>
              Régime fiscal privilégié pour la location meublée d'un bien
              d'habitation. Le régime réel permet d'amortir le bien
              (typiquement 25–30 ans) et le mobilier (5–7 ans), ce qui
              neutralise fréquemment le revenu imposable pendant 10 à 15
              ans. Combiné aux prêts en cours, l'effet fiscal est
              considérable sur un T2 à Juvignac ou un studio étudiant à
              Montpellier.
            </p>
          ),
        },
        {
          title: "SCI : le bon véhicule selon votre objectif",
          bullets: [
            "SCI à l'IR : détention long terme, transmission familiale, location nue.",
            "SCI à l'IS : amortissement du bien, activité mixte, réinvestissement.",
            "SCI + LMNP : montage possible pour combiner amortissement et transmission.",
            "Attention : le choix IR / IS est en pratique irréversible, à valider avec un expert.",
          ],
        },
        {
          title: "Ce que le cabinet fait pour vous",
          bullets: [
            "Simulation comparative micro / réel / SCI avant investissement.",
            "Rédaction des statuts SCI et immatriculation.",
            "Déclaration 2031 (LMNP réel) ou 2072 (SCI à l'IR) chaque année.",
            "Gestion de la TVA sur résidences de services.",
            "Optimisation IFI, transmission, démembrement.",
          ],
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Voir le pack particulier", to: "/pack/particulier", sub: "Un accompagnement patrimonial complet." }}
    />
  ),
});
