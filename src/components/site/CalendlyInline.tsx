import { useEffect, useRef, useState } from "react";

/**
 * Robust Calendly inline widget.
 * Uses the "Advanced Embed" API (Calendly.initInlineWidget) so we can
 * force re-init on route changes and after the script loads — this fixes
 * the intermittent "blank widget on reload" issue you get with the
 * script-only integration.
 *
 * https://help.calendly.com/hc/en-us/articles/223147027-Advanced-embed-options
 */
type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";
const JS_SRC = "https://assets.calendly.com/assets/external/widget.js";

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof document === "undefined") return resolve();

    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${JS_SRC}"]`,
    );
    if (window.Calendly) return resolve();
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = JS_SRC;
    s.async = true;
    s.onload = () => resolve();
    document.head.appendChild(s);
  });
}

export function CalendlyInline({
  url,
  height = 720,
  className = "",
}: {
  url: string;
  height?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    ensureCalendlyAssets().then(() => {
      if (cancelled) return;
      const el = containerRef.current;
      if (!el || !window.Calendly) return;
      // Clear any previous render (protects against React StrictMode double-init
      // and reloads that leave a stale iframe).
      el.innerHTML = "";
      window.Calendly.initInlineWidget({ url, parentElement: el });
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      className={`relative bg-paper border border-ink/10 rounded-sm ${className}`}
      style={{ minWidth: 320, height }}
    >
      <div ref={containerRef} className="w-full h-full" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
            Chargement du calendrier…
          </span>
        </div>
      )}
    </div>
  );
}
