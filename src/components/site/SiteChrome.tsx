import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { GA_MEASUREMENT_ID, initAnalytics, readConsent, saveConsent, track } from "@/lib/analytics";

/** Cookie consent (CNIL: "Refuser" as visible as "Accepter"). */
function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initAnalytics();
    // No banner until an analytics tool is actually configured.
    setVisible(GA_MEASUREMENT_ID !== "" && readConsent() === null);
  }, []);

  if (!visible) return null;
  const choose = (c: "granted" | "denied") => {
    saveConsent(c);
    setVisible(false);
  };
  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-paper text-ink border border-ink/15 shadow-lg p-5"
    >
      <p className="text-sm leading-relaxed text-ink/80">
        Nous mesurons l'audience du site pour l'améliorer (Google Analytics, sans publicité). Vous
        pouvez accepter ou refuser.{" "}
        <Link to="/politique-confidentialite" className="underline underline-offset-2">
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-4 py-2.5 border border-ink text-[11px] font-bold uppercase tracking-widest"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-4 py-2.5 bg-ink text-paper text-[11px] font-bold uppercase tracking-widest"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

/** Sticky call / booking bar on mobile (hidden on the booking pages themselves). */
function MobileCtaBar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path === "/contact" || path === "/rendez-vous") return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-paper text-[11px] font-bold uppercase tracking-widest">
      <a href="tel:+33972540771" className="py-4 text-center border-r border-ink/10">
        Appeler
      </a>
      <a
        href="#rendez-vous"
        onClick={(e) => {
          if (!document.getElementById("rendez-vous")) {
            e.preventDefault();
            window.location.assign("/rendez-vous");
          }
          track("cta_click", { cta: "mobile_bar_rdv", page_path: path });
        }}
        className="py-4 text-center bg-ink text-paper"
      >
        Être rappelé
      </a>
    </div>
  );
}

export function SiteChrome() {
  return (
    <>
      <MobileCtaBar />
      <ConsentBanner />
    </>
  );
}
