/**
 * Lightweight analytics layer (GA4 + Consent Mode v2).
 *
 * - Nothing is sent to Google before the visitor accepts (CNIL): consent
 *   defaults to "denied" and gtag.js is only injected after acceptance.
 * - Set GA_MEASUREMENT_ID to the GA4 property ID ("G-XXXXXXX") to enable it.
 *   While it is empty, events are only pushed to window.dataLayer.
 */
export const GA_MEASUREMENT_ID: string = "G-ECSJJEQPYJ";

export const CONSENT_KEY = "erkilic-consent-v1";
export type ConsentChoice = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the `arguments` object shape, not a plain array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments as unknown);
  void args;
}

export function readConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* private mode: consent only lasts for this page view */
  }
  applyConsent(choice);
}

let loaded = false;

function loadGtag() {
  if (loaded || !GA_MEASUREMENT_ID) return;
  loaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function applyConsent(choice: ConsentChoice) {
  gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: choice,
  });
  if (choice === "granted") loadGtag();
}

/** Called once on the client, before any event. */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  window.gtag = window.gtag || (gtag as Gtag);
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  const choice = readConsent();
  if (choice) applyConsent(choice);

  // Phone / e-mail clicks anywhere on the site.
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    const href = a?.getAttribute("href") ?? "";
    if (href.startsWith("tel:"))
      track("click_tel", { link_url: href, page_path: location.pathname });
    else if (href.startsWith("mailto:")) track("click_email", { page_path: location.pathname });
  });
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  gtag("event", event, params);
}
