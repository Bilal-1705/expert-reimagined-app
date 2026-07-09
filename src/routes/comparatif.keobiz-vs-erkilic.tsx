import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/comparatif/keobiz-vs-erkilic";

const faq = [
  {
    q: "Keobiz ou L-Expert-Comptable.com sont-ils de vrais experts-comptables ?",
    plain:
      "Oui, ce sont des cabinets d'expertise comptable inscrits à l'Ordre. Leur particularité : ils fonctionnent 100 % à distance via une plateforme téléphonique / e-mail avec des équipes internes, sans cabinet physique où vous recevoir. Le service est réel mais dépersonnalisé.",
  },
  {
    q: "Quels sont les inconvénients d'un cabinet 100 % en ligne ?",
    plain:
      "Rotation fréquente des interlocuteurs (vous racontez votre dossier à chaque appel), temps d'attente en support, absence de conseil ancré dans votre écosystème local (banquiers, notaires, avocats, CCI, French Tech Montpellier), impossibilité d'un rendez-vous physique pour signer, remettre des pièces ou parler d'un sujet sensible.",
  },
  {
    q: "Combien coûte un cabinet local vs Keobiz ?",
    plain:
      "Les cabinets en ligne affichent des tarifs souvent 10 à 25 % plus bas grâce à l'automatisation et l'absence de locaux à Paris. Erkilic à Juvignac reste compétitif car les charges immobilières sont raisonnables et le cabinet est optimisé — la différence de prix est marginale, la différence de service considérable.",
  },
];

export const Route = createFileRoute("/comparatif/keobiz-vs-erkilic")({
  head: () => ({
    meta: [
      { title: "Keobiz vs Erkilic : cabinet en ligne ou cabinet local ?" },
      {
        name: "description",
        content:
          "Comparaison entre les cabinets 100 % à distance (Keobiz, L-Expert-Comptable.com) et le cabinet local Erkilic à Juvignac : proximité, réactivité, tarif.",
      },
      { property: "og:title", content: "Keobiz vs Erkilic — Cabinet en ligne ou de proximité" },
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
        { label: "Keobiz vs Erkilic" },
      ]}
      eyebrow="Comparatif · Distance vs proximité"
      h1="Keobiz, L-Expert-Comptable.com vs Erkilic :"
      italic="deux modèles, un choix."
      intro={
        <p>
          Les mastodontes de la comptabilité en ligne ont un vrai
          savoir-faire — et une vraie faiblesse : la standardisation. Un
          cabinet local comme Erkilic joue une autre partition : moins
          d'automatisation industrielle, plus de connaissance intime de
          votre dossier et de votre territoire.
        </p>
      }
      sections={[
        {
          title: "Cabinet en ligne : le modèle plateforme",
          body: (
            <p>
              Keobiz, L-Expert-Comptable.com, Amarris et consorts fonctionnent
              comme un centre d'appels : votre dossier est traité par une
              équipe, pas par une personne. Vous joignez un standard, on
              vous rappelle. Le comptable qui répond n'est pas toujours le
              même. C'est efficace pour du volume, moins pour un conseil
              incarné.
            </p>
          ),
          bullets: [
            "Rotation des interlocuteurs — vous ré-expliquez à chaque contact.",
            "Standards téléphoniques, réponses aux e-mails sous 24–72h.",
            "Pas de rendez-vous physique possible.",
            "Conseil générique, pas ancré dans votre écosystème local.",
          ],
        },
        {
          title: "Cabinet Erkilic Expertise Comptable : la proximité comme méthode",
          body: (
            <p>
              À Juvignac, rue du Poumpidou, vous êtes reçu par la personne
              qui suit votre dossier. En 10 minutes de voiture depuis
              Montpellier centre, Saint-Georges-d'Orques ou Grabels, vous
              posez votre question, vous signez, vous repartez avec une
              réponse. Le cabinet connaît la banque au bout de la rue, le
              notaire de la place, l'avocat spécialiste sur Montpellier —
              votre dossier avance vraiment.
            </p>
          ),
          bullets: [
            "Un interlocuteur unique du premier rendez-vous à la clôture.",
            "Rendez-vous physique disponible en 48h maximum.",
            "Réseau local activé pour vous : banquiers, notaires, avocats.",
            "Réponse aux e-mails et appels dans la journée ouvrée.",
          ],
        },
        {
          title: "Quand un cabinet en ligne suffit vraiment",
          body: (
            <p>
              Soyons honnêtes : si votre activité est très simple (petit
              e-commerce, freelance sans employés, pas de patrimoine
              particulier), un cabinet 100 % en ligne peut convenir. Dès
              que la fiscalité se complexifie (immobilier, dividendes,
              transmission, restructuration, contrôle), la valeur d'un
              cabinet incarné devient évidente.
            </p>
          ),
        },
      ]}
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Rencontrer le cabinet", to: "/contact", sub: "Un premier échange en cabinet, sans engagement." }}
    />
  ),
});
