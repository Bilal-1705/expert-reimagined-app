import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { CalendlyInline } from "@/components/site/CalendlyInline";
import { track } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/cabinet-erkilic/30min";

export type ProfileId = "createur" | "auto-entrepreneur" | "liberal" | "pro" | "particulier" | "immobilier";

type Question = { id: string; label: string; options: string[] };
type Profile = { id: ProfileId; label: string; hint: string; questions: Question[] };

export const PROFILES: Profile[] = [
  {
    id: "createur",
    label: "Je crée mon entreprise",
    hint: "Statut, prévisionnel, aides",
    questions: [
      { id: "stade", label: "Où en est votre projet ?", options: ["Idée à valider", "Création dans les 3 mois", "Déjà immatriculé"] },
      { id: "statut", label: "Statut envisagé", options: ["Micro-entreprise / EI", "EURL / SARL", "SASU / SAS", "Je ne sais pas encore"] },
      { id: "besoin", label: "Votre priorité", options: ["Choisir le statut", "Prévisionnel et financement", "Aides (ACRE, ARCE…)", "Tout l'accompagnement"] },
    ],
  },
  {
    id: "auto-entrepreneur",
    label: "Je suis auto-entrepreneur",
    hint: "URSSAF, TVA, passage en société",
    questions: [
      { id: "ca", label: "Chiffre d'affaires annuel", options: ["Moins de 37 500 €", "37 500 à 85 000 €", "Plus de 85 000 €"] },
      { id: "besoin", label: "Votre question principale", options: ["Seuils de TVA", "Passer en société", "Déclarations URSSAF", "Autre"] },
    ],
  },
  {
    id: "liberal",
    label: "Profession libérale",
    hint: "BNC, 2035, SELARL",
    questions: [
      { id: "metier", label: "Votre activité", options: ["Santé (médecin, kiné, infirmier…)", "Conseil / consultant", "Juridique / technique", "Autre"] },
      { id: "situation", label: "Votre situation", options: ["Installation", "En activité (BNC)", "Passage en SEL / société", "Changement d'expert-comptable"] },
    ],
  },
  {
    id: "pro",
    label: "Artisan, commerçant, PME",
    hint: "Bilan, TVA, paie, pilotage",
    questions: [
      { id: "activite", label: "Votre activité", options: ["Artisan / BTP", "Commerce / restauration", "E-commerce", "Services / PME"] },
      { id: "salaries", label: "Salariés", options: ["Aucun", "1 à 5", "6 à 20", "Plus de 20"] },
      { id: "besoin", label: "Votre besoin", options: ["Changer d'expert-comptable", "Bilan et liasse", "Paie", "Conseil et trésorerie"] },
    ],
  },
  {
    id: "particulier",
    label: "Particulier",
    hint: "Impôts, foncier, IFI",
    questions: [
      { id: "besoin", label: "Votre besoin", options: ["Déclaration de revenus", "Revenus fonciers", "Succession / donation", "IFI"] },
    ],
  },
  {
    id: "immobilier",
    label: "LMNP ou SCI",
    hint: "Location meublée, SCI IS/IR",
    questions: [
      { id: "type", label: "Votre situation", options: ["LMNP (location meublée)", "SCI à l'IR", "SCI à l'IS", "Projet d'investissement"] },
      { id: "biens", label: "Nombre de biens", options: ["1", "2 à 4", "5 ou plus"] },
    ],
  },
];

export function buildCalendlyUrl(profile: Profile, answers: Record<string, string>, path: string) {
  const summary = [
    `Profil : ${profile.label}`,
    ...profile.questions.filter((q) => answers[q.id]).map((q) => `${q.label} : ${answers[q.id]}`),
    `Page : ${path}`,
  ].join(" | ");
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    a1: summary,
    utm_source: "site",
    utm_medium: "tunnel",
    utm_campaign: profile.id,
    utm_content: path,
  });
  return `${CALENDLY_URL}?${params.toString()}`;
}

/**
 * Two-to-four click qualifier per visitor profile, ending on the Calendly
 * booking widget with the answers pre-filled in the first booking question.
 */
export function ProfileFunnel({
  profile: initial,
  title = "Prenez rendez-vous en 1 minute",
  intro = "Trois questions pour préparer l'échange, puis vous choisissez votre créneau. Premier rendez-vous offert, sans engagement.",
}: {
  profile?: ProfileId;
  title?: string;
  intro?: string;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [profileId, setProfileId] = useState<ProfileId | undefined>(initial);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const profile = PROFILES.find((p) => p.id === profileId);
  const questions = profile?.questions ?? [];
  const done = !!profile && step >= questions.length;

  const chooseProfile = (id: ProfileId) => {
    setProfileId(id);
    setAnswers({});
    setStep(0);
    track("funnel_step", { funnel_profile: id, funnel_step: "profil", page_path: path });
  };

  const answer = (q: Question, value: string) => {
    setAnswers((a) => ({ ...a, [q.id]: value }));
    const next = step + 1;
    setStep(next);
    track("funnel_step", { funnel_profile: profileId, funnel_step: q.id, page_path: path });
    if (next >= questions.length) track("funnel_complete", { funnel_profile: profileId, page_path: path });
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    if (!initial) setProfileId(undefined);
  };

  return (
    <section id="rendez-vous" className="py-20 md:py-24 px-6 bg-ink text-paper scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/60 mb-4 block">
          Rendez-vous gratuit
        </span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-4">{title}</h2>
        <p className="text-paper/70 max-w-2xl mb-10 leading-relaxed">{intro}</p>

        {!profile && (
          <div>
            <p className="font-sora font-bold mb-4">Vous êtes…</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROFILES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => chooseProfile(p.id)}
                  className="text-left p-5 border border-paper/20 hover:border-paper hover:bg-paper/5 transition-colors"
                >
                  <span className="font-sora font-bold block">{p.label}</span>
                  <span className="text-sm text-paper/60">{p.hint}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {profile && !done && (
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-paper/60 mb-4">
              <span>{profile.label}</span>
              <span>·</span>
              <span>
                Étape {step + 1} / {questions.length}
              </span>
            </div>
            <p className="font-sora text-xl font-bold mb-4">{questions[step].label}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {questions[step].options.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => answer(questions[step], o)}
                  className="text-left p-5 border border-paper/20 hover:border-paper hover:bg-paper/5 transition-colors font-semibold"
                >
                  {o}
                </button>
              ))}
            </div>
            <button type="button" onClick={reset} className="mt-6 text-sm text-paper/60 underline underline-offset-4">
              Recommencer
            </button>
          </div>
        )}

        {profile && done && (
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-paper/70">
              <span className="font-bold text-paper">{profile.label}</span>
              {questions.map((q) => (
                <span key={q.id}>· {answers[q.id]}</span>
              ))}
              <button type="button" onClick={reset} className="underline underline-offset-4">
                Modifier
              </button>
            </div>
            <CalendlyInline url={buildCalendlyUrl(profile, answers, path)} height={700} className="text-ink" />
          </div>
        )}

        <p className="mt-8 text-sm text-paper/60">
          Vous préférez appeler ?{" "}
          <a href="tel:+33972540771" className="text-paper font-bold underline underline-offset-4">
            09 72 54 07 71
          </a>{" "}
          — du lundi au vendredi, 9 h-12 h et 14 h-18 h.
        </p>
      </div>
    </section>
  );
}
