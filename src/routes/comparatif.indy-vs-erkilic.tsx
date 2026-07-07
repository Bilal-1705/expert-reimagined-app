import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://expert-reimagined-app.lovable.app";
const PATH = "/comparatif/indy-vs-erkilic";

const faq = [
  {
    q: "Indy est-il un expert-comptable ?",
    plain:
      "Non. Indy est un logiciel de comptabilité en ligne édité par une société commerciale. Il n'est pas inscrit à l'Ordre des Experts-Comptables et ne peut ni signer un bilan, ni engager de responsabilité civile professionnelle sur vos comptes. En cas d'erreur ou de contrôle fiscal, vous êtes seul responsable face à l'administration.",
  },
  {
    q: "Puis-je remplacer un expert-comptable par Indy ?",
    plain:
      "Légalement, aucune loi n'oblige un indépendant à recourir à un expert-comptable. Mais Indy ne fait que la saisie automatisée : le conseil fiscal, l'optimisation du statut, la défense en cas de contrôle et la validation légale de vos comptes ne sont pas assurés. Le cabinet Erkilic engage sa responsabilité sur ces points, Indy non.",
  },
  {
    q: "Combien coûte un expert-comptable pour un freelance à Montpellier ?",
    plain:
      "Pour un freelance en BNC ou une EURL simple à Montpellier / Juvignac, comptez à partir de 90–140 € HT / mois pour un accompagnement Erkilic complet, contre 30–70 € / mois pour un logiciel seul. La différence : un interlocuteur unique, une lettre de mission signée, et une responsabilité professionnelle engagée.",
  },
];

export const Route = createFileRoute("/comparatif/indy-vs-erkilic")({
  head: () => ({
    meta: [
      { title: "Indy vs Cabinet Erkilic : logiciel ou expert-comptable ?" },
      {
        name: "description",
        content:
          "Indy est un logiciel, pas un expert-comptable. Comparatif honnête entre Indy et le cabinet Erkilic à Juvignac : responsabilité, conseil, prix.",
      },
      { property: "og:title", content: "Indy vs Cabinet Erkilic — Comparatif honnête" },
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
        { label: "Conseils", to: "/conseils" },
        { label: "Indy vs Erkilic" },
      ]}
      eyebrow="Comparatif · Logiciel vs Expert"
      h1="Indy vs Cabinet Erkilic :"
      italic="ce qu'un logiciel ne peut pas faire."
      intro={
        <>
          <p>
            Indy est un logiciel de comptabilité en ligne, très bien
            marketé, populaire chez les freelances français. Le cabinet
            Erkilic est un cabinet d'expert-comptable inscrit à l'Ordre,
            basé à Juvignac près de Montpellier. Confondre les deux, c'est
            confondre un tableur avec un fiscaliste.
          </p>
          <p className="mt-4">
            Ce comparatif ne cherche pas à disqualifier Indy — leur produit
            est bon pour ce qu'il est. Il cherche à dire la vérité sur ce
            qu'il n'est pas.
          </p>
        </>
      }
      sections={[
        {
          title: "Le statut légal : la différence essentielle",
          body: (
            <>
              <p>
                Un expert-comptable est un professionnel réglementé,
                diplômé (DEC bac+8), inscrit à l'Ordre, prêtant serment et
                engageant sa responsabilité civile professionnelle sur
                chaque mission par une lettre de mission signée. C'est le
                seul professionnel habilité à tenir, présenter et
                certifier vos comptes annuels en France (loi du 30 avril
                1946, article 2).
              </p>
              <p>
                Indy est une SAS commerciale qui édite un SaaS. Les CGU
                d'Indy précisent explicitement que la société n'est pas
                un expert-comptable, ne rend pas de conseil individualisé
                et ne se substitue pas à ce dernier. En cas d'erreur dans
                votre bilan, la responsabilité vous incombe intégralement.
              </p>
            </>
          ),
        },
        {
          title: "Ce qu'Indy fait bien",
          bullets: [
            "Interface fluide, saisie rapide, catégorisation intelligente des dépenses.",
            "Prix bas (à partir de ~30 € / mois), sans engagement.",
            "Bonne UX pour BNC / micro-BIC simples avec peu d'opérations.",
            "Génération automatique des déclarations 2035 / 2042-C-PRO.",
          ],
        },
        {
          title: "Ce qu'Indy ne peut pas faire",
          bullets: [
            "Signer votre liasse fiscale (l'Administration accepte, mais aucun professionnel n'engage sa responsabilité).",
            "Vous défendre en cas de contrôle fiscal : Indy ne mandate pas d'expert pour vous.",
            "Arbitrer entre régimes (micro / réel, BNC / BIC, IR / IS) sur votre situation personnelle.",
            "Anticiper les impacts patrimoniaux, sociaux, matrimoniaux de vos choix.",
            "Vous accompagner dans un passage micro → EURL / SASU.",
          ],
        },
        {
          title: "Pourquoi choisir Erkilic à Juvignac",
          body: (
            <p>
              Vous êtes reçu rue du Poumpidou pour un premier échange
              gratuit. Une lettre de mission fixe le périmètre. Le cabinet
              signe votre bilan et engage sa responsabilité. Vous avez un
              interlocuteur unique, joignable au 09 72 54 07 71, qui
              connaît votre dossier. En cas de contrôle fiscal, le cabinet
              vous défend — c'est inclus dans la mission.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Demander un devis", to: "/contact", sub: "Un vrai expert-comptable pour votre activité." }}
    />
  ),
});
