import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, faqJsonLd } from "@/components/site/ContentPage";

const SITE = "https://erkilic.fr";
const PATH = "/faq";

const faq = [
  {
    q: "Pourquoi choisir un cabinet d'expert-comptable physique à Juvignac plutôt qu'un comptable en ligne ?",
    plain:
      "Un cabinet physique comme Erkilic à Juvignac vous donne un interlocuteur unique, joignable en 10 minutes en rendez-vous rue du Poumpidou, et signe une lettre de mission qui engage sa responsabilité civile professionnelle sur vos comptes. Un logiciel en ligne (Indy, Pennylane) ne signe rien : en cas d'erreur, vous êtes seul face au fisc.",
  },
  {
    q: "Combien coûte un expert-comptable à Juvignac ?",
    plain:
      "Les honoraires dépendent de votre structure et du volume de pièces : en général 40 à 90 € HT/mois pour un auto-entrepreneur, 90 à 150 € HT/mois pour une profession libérale en BNC, et 150 à 400 € HT/mois pour une TPE avec bilan annuel. Le cabinet Erkilic Expertise Comptable établit un devis gratuit et sans engagement après un premier rendez-vous.",
  },
  {
    q: "Comment trouver un bon expert-comptable à Juvignac ou Montpellier ?",
    plain:
      "Trois vérifications : 1) le professionnel est inscrit à l'Ordre des Experts-Comptables (vérifiable sur experts-comptables.fr), 2) il signe une lettre de mission qui engage sa responsabilité civile professionnelle, 3) il est joignable et de proximité. Le cabinet Erkilic Expertise Comptable, installé 29 bis rue du Poumpidou à Juvignac, est inscrit à l'Ordre de Montpellier et reçoit sur rendez-vous.",
  },
  {
    q: "Comment créer une SAS à Juvignac ?",
    plain:
      "Les étapes : choix du président et du capital, rédaction des statuts, dépôt du capital sur un compte bloqué, annonce légale, puis immatriculation au greffe de Montpellier via le guichet unique. Comptez 2 à 4 semaines. Le cabinet Erkilic Expertise Comptable accompagne chaque étape et prépare le prévisionnel exigé par les banques.",
  },
  {
    q: "Combien coûte un expert-comptable pour une auto-entreprise à Montpellier ?",
    plain:
      "Pour un auto-entrepreneur à Montpellier ou Juvignac, un accompagnement de base (déclarations URSSAF, suivi de CA, alerte seuils TVA) se situe généralement entre 40 et 90 € HT / mois selon le volume d'opérations et les options (comparatif micro / réel, tenue du registre). Un devis gratuit est établi après un premier échange.",
  },
  {
    q: "Quel statut juridique choisir pour créer une TPE à Montpellier Ouest ?",
    plain:
      "Le choix entre EI, EURL, SASU et SARL dépend de trois critères : votre régime social (TNS vs assimilé-salarié), votre stratégie de rémunération (dividendes vs salaire), et vos perspectives d'ouverture du capital. Le cabinet Erkilic Expertise Comptable établit un comparatif chiffré sur 24 mois avant l'immatriculation.",
  },
  {
    q: "Quelles sont les obligations comptables pour une profession libérale à Juvignac ?",
    plain:
      "Une profession libérale relevant des BNC doit tenir un livre-journal des recettes-dépenses, produire une déclaration 2035 annuelle, gérer sa TVA le cas échéant, ses cotisations URSSAF et sa caisse de retraite (CARMF, CARPIMKO, CIPAV…). L'adhésion à une AGA reste fiscalement pertinente dans de nombreux cas.",
  },
  {
    q: "Comment le cabinet Erkilic Expertise Comptable accompagne-t-il la création d'entreprise à Montpellier ?",
    plain:
      "Le pack Créateur comprend un entretien conseil, un prévisionnel financier sur 12–24 mois, la recherche d'aides locales (CCI Hérault, Région Occitanie, French Tech Montpellier), l'accompagnement bancaire, la rédaction des statuts, l'immatriculation et le suivi de la première année.",
  },
  {
    q: "Puis-je travailler à distance avec le cabinet Erkilic Expertise Comptable si je ne suis pas dans l'Hérault ?",
    plain:
      "Oui. Le cabinet accompagne ses clients partout en France par visioconférence, signature électronique et outils collaboratifs (Pennylane, Tiime). Les clients de Juvignac, Montpellier, Saint-Georges-d'Orques, Grabels, Pignan et Montarnaud bénéficient en plus de rendez-vous en cabinet.",
  },
  {
    q: "Comment déclarer un investissement LMNP dans l'Hérault ?",
    plain:
      "Un investissement LMNP peut relever du régime micro-BIC (abattement forfaitaire) ou du régime réel (amortissement du bien, déduction des charges). Sur un bien à Juvignac ou Montpellier, le régime réel est fréquemment plus intéressant dès la première année ; le cabinet établit le comparatif et gère la déclaration 2031.",
  },
  {
    q: "Pennylane, Indy, Tiime : faut-il un expert-comptable si j'utilise ces logiciels ?",
    plain:
      "Ces logiciels automatisent la saisie, pas le conseil ni la validation légale. L'expert-comptable est le seul professionnel réglementé habilité à établir et signer votre bilan, votre liasse fiscale et vos comptes annuels. Le cabinet Erkilic Expertise Comptable travaille en mode collaboratif sur Pennylane et Tiime avec ses clients qui le souhaitent.",
  },
  {
    q: "Dois-je passer de la micro-entreprise à la société quand je dépasse les seuils ?",
    plain:
      "Pas nécessairement. Le dépassement des seuils TVA (36 800 € services / 91 900 € vente) impose la TVA mais pas le changement de structure. Le passage en EURL ou SASU se justifie par un besoin de séparation de patrimoine, une optimisation charges/dividendes ou une entrée d'associés — c'est un arbitrage à faire au cas par cas.",
  },
  {
    q: "Comment optimiser sa fiscalité personnelle avec un expert-comptable ?",
    plain:
      "Au-delà de la déclaration IR et IFI, l'expert-comptable analyse votre foyer (revenus fonciers, LMNP, dividendes, plus-values) et propose des dispositifs adaptés : loi Girardin, PER, déficit foncier, arbitrage IR / IS pour les indépendants, donations et démembrement pour la transmission.",
  },
  {
    q: "Quand faut-il prendre son premier expert-comptable ?",
    plain:
      "Idéalement AVANT la création. Un rendez-vous de cadrage permet de choisir le bon statut (EURL, SASU, EI, SCI), de chiffrer le prévisionnel, de rechercher les aides locales à Montpellier et de sécuriser la première année. Une fois immatriculé, certains choix (régime fiscal, dividendes, aides) sont figés pour plusieurs années.",
  },
  {
    q: "Que se passe-t-il concrètement lors d'un contrôle fiscal ?",
    plain:
      "L'administration envoie un avis de vérification, puis un vérificateur consulte votre comptabilité sur 2 à 3 exercices. Il émet une proposition de rectification, à laquelle vous avez 30 jours pour répondre. Un expert-comptable comme Erkilic prépare le dossier, répond à l'administration et vous représente — un logiciel en ligne, non.",
  },
  {
    q: "Puis-je récupérer la TVA sur ma voiture d'entreprise ?",
    plain:
      "En principe, non pour un véhicule de tourisme (VP). Oui pour un utilitaire (camionnette, fourgonnette), un véhicule 2 places affecté à 100 % à l'activité, ou certains VP dérogatoires (auto-écoles, taxis, VTC). Le cabinet Erkilic Expertise Comptable conseille sur le choix véhicule société vs indemnités kilométriques.",
  },
  {
    q: "Comment se rémunérer optimalement en SASU ou EURL ?",
    plain:
      "L'arbitrage salaire / dividendes se refait chaque année. En SASU, un mix salaire (pour valider trimestres retraite + protection sociale) et dividendes (flat tax 30 %) est souvent optimal. En EURL à l'IS, la rémunération TNS est moins chargée mais les dividendes au-delà de 10 % du capital sont soumis aux cotisations. Le cabinet établit chaque année la simulation.",
  },
  {
    q: "Faut-il opter pour l'IS ou rester à l'IR en EURL ?",
    plain:
      "L'IR (par défaut) impose le bénéfice au barème progressif — pertinent tant que le revenu est faible ou que le foyer supporte peu d'impôt. L'IS (option irrévocable au bout de 5 ans) permet de lisser la fiscalité, de choisir sa rémunération et de sortir des dividendes. Le basculement se décide au vu des revenus prévisionnels sur 3 ans.",
  },
  {
    q: "La flat tax (PFU) 30 % est-elle toujours plus intéressante que le barème ?",
    plain:
      "Non. Pour un contribuable dans les tranches basses (TMI 0 % ou 11 %), le barème progressif + 17,2 % de prélèvements sociaux est plus favorable. Sur option globale, tous les revenus mobiliers passent au barème. Le cabinet Erkilic Expertise Comptable compare chaque année les deux options avec votre déclaration IR.",
  },
  {
    q: "Comment fonctionne le régime réel simplifié pour LMNP ?",
    plain:
      "Le régime réel LMNP permet de déduire les charges (intérêts d'emprunt, taxe foncière, syndic, assurance) ET d'amortir le bien et les meubles. Résultat : un revenu locatif souvent proche de zéro fiscalement pendant 15-20 ans. Sur un bien à Montpellier ou Juvignac, ce régime est souvent plus intéressant que le micro-BIC dès la 1ère année.",
  },
  {
    q: "Puis-je cumuler auto-entreprise et emploi salarié ?",
    plain:
      "Oui, sauf clause d'exclusivité dans votre contrat ou statut incompatible (fonctionnaire d'État soumis à autorisation). Vous cotisez deux fois pour la sécurité sociale mais ne validez de retraite qu'une seule fois par trimestre. Vigilance sur la non-concurrence avec votre employeur.",
  },
  {
    q: "Combien de temps dois-je conserver mes documents comptables ?",
    plain:
      "10 ans pour les documents comptables (livres, factures, bilans), 6 ans pour les documents fiscaux (IS, TVA, IR pro), 5 ans pour les documents sociaux (bulletins de paie), 30 ans pour les documents relatifs à un immeuble. Un expert-comptable centralise l'archivage numérique et vous met en conformité RGPD.",
  },
  {
    q: "Comment déclarer les revenus d'une SCI familiale à l'IR ?",
    plain:
      "Chaque associé déclare sa quote-part de résultat foncier dans sa déclaration 2044 (revenus fonciers). La SCI dépose une déclaration 2072-S annuelle. Les charges (intérêts d'emprunt, travaux d'entretien, taxe foncière) sont déductibles. Si des travaux importants créent un déficit, il s'impute jusqu'à 10 700 € sur le revenu global.",
  },
  {
    q: "Pourquoi mon logiciel en ligne ne détecte-t-il pas d'optimisation fiscale ?",
    plain:
      "Parce qu'il n'a pas votre foyer fiscal complet, pas votre patrimoine, pas votre historique. Il applique des règles automatiques sur des flux catégorisés. Un expert-comptable croise votre bilan pro, votre déclaration IR, votre foyer, votre immobilier, votre âge, vos projets — c'est là que naissent les vraies optimisations (PER, déficit foncier, LMNP, Girardin, holding).",
  },
  {
    q: "Un expert-comptable peut-il m'aider à racheter une entreprise ?",
    plain:
      "Oui, c'est même un rôle central : audit d'acquisition (comptable, fiscal, social), valorisation, montage juridique (holding, LBO simple), négociation du prix, accompagnement bancaire, garantie d'actif et de passif. Le cabinet Erkilic Expertise Comptable accompagne les reprises de commerces et de cabinets sur Montpellier et l'Hérault.",
  },
  {
    q: "Comment transmettre son entreprise à ses enfants sans fiscalité écrasante ?",
    plain:
      "Le Pacte Dutreil permet un abattement de 75 % sur la valeur de l'entreprise transmise, sous conditions d'engagement de conservation collectif puis individuel. Combiné à une donation-partage avec démembrement de propriété, il ramène la fiscalité de transmission à un niveau très supportable. Le cabinet met en place ces dispositifs plusieurs années à l'avance.",
  },
  {
    q: "Puis-je changer d'expert-comptable en cours d'année ?",
    plain:
      "Oui, à tout moment. La lettre de mission encadre le préavis (souvent 3 mois). Le nouveau cabinet reprend contact avec l'ancien pour récupérer les pièces (loi anti-blanchiment). Le cabinet Erkilic Expertise Comptable reprend régulièrement des dossiers en cours et remet à plat le premier bilan.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ Expert-Comptable Montpellier Juvignac | Erkilic" },
      {
        name: "description",
        content:
          "Toutes les réponses sur l'expertise comptable à Montpellier / Juvignac : statut juridique, tarifs, LMNP, comparatif logiciels, création d'entreprise.",
      },
      { property: "og:title", content: "FAQ — Cabinet Erkilic Expertise Comptable" },
      { property: "og:description", content: "Les questions que dirigeants et particuliers posent le plus souvent à un expert-comptable." },
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
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "FAQ" }]}
      eyebrow="FAQ · Réponses d'experts"
      h1="Vos questions"
      italic="nos réponses."
      intro={
        <p>
          Statut juridique, obligations comptables, création d'entreprise à
          Montpellier, LMNP, comparatif logiciels : les réponses aux
          questions que dirigeants, indépendants et particuliers posent le
          plus souvent au cabinet Erkilic Expertise Comptable à Juvignac.
        </p>
      }
      faq={faq.map((f) => ({ q: f.q, a: <p>{f.plain}</p> }))}
      cta={{ label: "Poser ma question", to: "/contact", sub: "Une question spécifique ? Prenez rendez-vous." }}
    />
  ),
});
