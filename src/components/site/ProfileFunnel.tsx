import { useState, type FormEvent } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { track } from "@/lib/analytics";
import { sendCallbackRequest } from "@/lib/lead";

export type ProfileId =
  "createur" | "auto-entrepreneur" | "liberal" | "pro" | "particulier" | "immobilier";

type Question = { id: string; label: string; options: string[] };
type Profile = { id: ProfileId; label: string; hint: string; questions: Question[] };

export const PROFILES: Profile[] = [
  {
    id: "createur",
    label: "Je crée mon entreprise",
    hint: "Statut, prévisionnel, aides",
    questions: [
      {
        id: "stade",
        label: "Où en est votre projet ?",
        options: ["Idée à valider", "Création dans les 3 mois", "Déjà immatriculé"],
      },
      {
        id: "statut",
        label: "Statut envisagé",
        options: ["Micro-entreprise / EI", "EURL / SARL", "SASU / SAS", "Je ne sais pas encore"],
      },
      {
        id: "besoin",
        label: "Votre priorité",
        options: [
          "Choisir le statut",
          "Prévisionnel et financement",
          "Aides (ACRE, ARCE…)",
          "Tout l'accompagnement",
        ],
      },
    ],
  },
  {
    id: "auto-entrepreneur",
    label: "Je suis auto-entrepreneur",
    hint: "URSSAF, TVA, passage en société",
    questions: [
      {
        id: "ca",
        label: "Chiffre d'affaires annuel",
        options: ["Moins de 37 500 €", "37 500 à 85 000 €", "Plus de 85 000 €"],
      },
      {
        id: "besoin",
        label: "Votre question principale",
        options: ["Seuils de TVA", "Passer en société", "Déclarations URSSAF", "Autre"],
      },
    ],
  },
  {
    id: "liberal",
    label: "Profession libérale",
    hint: "BNC, 2035, SELARL",
    questions: [
      {
        id: "metier",
        label: "Votre activité",
        options: [
          "Santé (médecin, kiné, infirmier…)",
          "Conseil / consultant",
          "Juridique / technique",
          "Autre",
        ],
      },
      {
        id: "situation",
        label: "Votre situation",
        options: [
          "Installation",
          "En activité (BNC)",
          "Passage en SEL / société",
          "Changement d'expert-comptable",
        ],
      },
    ],
  },
  {
    id: "pro",
    label: "Artisan, commerçant, PME",
    hint: "Bilan, TVA, paie, pilotage",
    questions: [
      {
        id: "activite",
        label: "Votre activité",
        options: ["Artisan / BTP", "Commerce / restauration", "E-commerce", "Services / PME"],
      },
      { id: "salaries", label: "Salariés", options: ["Aucun", "1 à 5", "6 à 20", "Plus de 20"] },
      {
        id: "besoin",
        label: "Votre besoin",
        options: ["Changer d'expert-comptable", "Bilan et liasse", "Paie", "Conseil et trésorerie"],
      },
    ],
  },
  {
    id: "particulier",
    label: "Particulier",
    hint: "Impôts, foncier, IFI",
    questions: [
      {
        id: "besoin",
        label: "Votre besoin",
        options: ["Déclaration de revenus", "Revenus fonciers", "Succession / donation", "IFI"],
      },
    ],
  },
  {
    id: "immobilier",
    label: "LMNP ou SCI",
    hint: "Location meublée, SCI IS/IR",
    questions: [
      {
        id: "type",
        label: "Votre situation",
        options: ["LMNP (location meublée)", "SCI à l'IR", "SCI à l'IS", "Projet d'investissement"],
      },
      { id: "biens", label: "Nombre de biens", options: ["1", "2 à 4", "5 ou plus"] },
    ],
  },
];

const SLOTS = ["Le matin (9 h-12 h)", "L'après-midi (14 h-18 h)", "Peu importe"];

const chip =
  "text-left px-4 py-3 border border-ink/15 bg-paper hover:border-ink hover:bg-paper-dark/40 transition-colors";
const field =
  "mt-1.5 w-full border border-ink/20 bg-paper px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink";

function CallbackForm({ summary, onReset }: { summary: string; onReset: () => void }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [slot, setSlot] = useState(SLOTS[0]);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    setState("sending");
    try {
      const result = await sendCallbackRequest({
        name: String(f.get("name") ?? "").trim(),
        phone: String(f.get("phone") ?? "").trim(),
        email: String(f.get("email") ?? "").trim(),
        message: String(f.get("message") ?? "").trim(),
        slot,
        summary,
        page: path,
      });
      setState(result);
      track("generate_lead", {
        method: result === "sent" ? "callback_form" : "callback_mailto",
        page_path: path,
      });
    } catch {
      setState("error");
    }
  };

  if (state === "sent" || state === "mailto") {
    return (
      <div className="border-l-2 border-ink pl-5 py-2">
        <p className="font-sora text-xl font-bold">Merci, votre demande est bien partie.</p>
        <p className="mt-2 text-ink/70 leading-relaxed">
          {state === "sent"
            ? "Nazifé Erkilic vous rappelle dans la journée ouvrée, sur le créneau indiqué."
            : "Votre messagerie s'est ouverte avec la demande pré-remplie : il ne reste qu'à l'envoyer. Le cabinet vous rappelle dans la journée ouvrée."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <p className="text-sm text-ink/70">
        <span className="font-bold text-ink">{summary}</span>{" "}
        <button type="button" onClick={onReset} className="underline underline-offset-4">
          Modifier
        </button>
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-[12px] font-bold uppercase tracking-[0.15em] text-ink/70">
          Nom et prénom
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-[12px] font-bold uppercase tracking-[0.15em] text-ink/70">
          Téléphone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9 +().-]{9,}"
            className={field}
          />
        </label>
      </div>
      <label className="block text-[12px] font-bold uppercase tracking-[0.15em] text-ink/70">
        E-mail (facultatif)
        <input name="email" type="email" autoComplete="email" className={field} />
      </label>
      <fieldset>
        <legend className="text-[12px] font-bold uppercase tracking-[0.15em] text-ink/70 mb-2">
          Quand vous rappeler ?
        </legend>
        <div className="flex flex-wrap gap-2">
          {SLOTS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSlot(s)}
              aria-pressed={slot === s}
              className={`px-4 py-2 border text-sm font-semibold transition-colors ${
                slot === s ? "bg-ink text-paper border-ink" : "border-ink/20 hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="block text-[12px] font-bold uppercase tracking-[0.15em] text-ink/70">
        Un mot sur votre situation (facultatif)
        <textarea name="message" rows={3} className={field} />
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <p className="text-xs text-ink/55 leading-relaxed">
        Vos coordonnées servent uniquement à vous rappeler et à préparer le devis.{" "}
        <Link to="/politique-confidentialite" className="underline underline-offset-2">
          Politique de confidentialité
        </Link>
      </p>
      <button
        type="submit"
        disabled={state === "sending"}
        className="justify-self-start px-8 py-4 bg-ink text-paper text-sm font-bold uppercase tracking-widest hover:bg-ink-muted transition-colors disabled:opacity-60"
      >
        {state === "sending" ? "Envoi…" : "Être rappelé gratuitement"}
      </button>
      {state === "error" && (
        <p className="text-sm text-red-700">
          L'envoi n'a pas fonctionné. Appelez le 09 72 54 07 71 ou écrivez à cabinet@erkilic.fr.
        </p>
      )}
    </form>
  );
}

/**
 * Light booking card: one to three clicks to qualify the visitor, then a
 * short callback request carrying the answers to the cabinet.
 */
export function ProfileFunnel({
  profile: initial,
  title = "Votre premier rendez-vous, offert",
  intro = "Deux ou trois clics pour préciser votre besoin, puis l'experte-comptable vous rappelle. Sans engagement.",
  embedded = false,
}: {
  profile?: ProfileId;
  title?: string;
  intro?: string;
  /** Render without the outer section (e.g. inside the contact page column). */
  embedded?: boolean;
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
    if (next >= questions.length)
      track("funnel_complete", { funnel_profile: profileId, page_path: path });
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    if (!initial) setProfileId(undefined);
  };

  const summary = profile
    ? [profile.label, ...questions.map((q) => answers[q.id]).filter(Boolean)].join(" · ")
    : "";

  const card = (
    <div className="border border-ink/15 bg-paper-dark/30 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/60 block mb-3">
            Rendez-vous gratuit
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-ink/70 max-w-2xl leading-relaxed">{intro}</p>
        </div>
        <a
          href="tel:+33972540771"
          className="shrink-0 text-sm font-bold underline underline-offset-4"
        >
          ou appelez le 09 72 54 07 71
        </a>
      </div>

      {!profile && (
        <div>
          <p className="font-sora font-bold mb-3">Vous êtes…</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PROFILES.map((p) => (
              <button key={p.id} type="button" onClick={() => chooseProfile(p.id)} className={chip}>
                <span className="font-sora font-bold block">{p.label}</span>
                <span className="text-sm text-ink/60">{p.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {profile && !done && (
        <div>
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60 mb-3">
            <span>{profile.label}</span>
            <span>·</span>
            <span>
              Étape {step + 1} / {questions.length}
            </span>
          </div>
          <p className="font-sora text-lg font-bold mb-3">{questions[step].label}</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {questions[step].options.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => answer(questions[step], o)}
                className={`${chip} font-semibold`}
              >
                {o}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={reset}
            className="mt-4 text-sm text-ink/60 underline underline-offset-4"
          >
            Recommencer
          </button>
        </div>
      )}

      {profile && done && <CallbackForm summary={summary} onReset={reset} />}
    </div>
  );

  if (embedded)
    return (
      <div id="rendez-vous" className="scroll-mt-24">
        {card}
      </div>
    );
  return (
    <section id="rendez-vous" className="px-6 py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto">{card}</div>
    </section>
  );
}
