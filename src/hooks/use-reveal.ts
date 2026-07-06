import { useEffect, useRef } from "react";

/**
 * Attaches a scroll-triggered "in-view" class to the element and any
 * descendant [data-reveal] targets. Content is ALWAYS visible by default;
 * this only layers a subtle entrance animation on top when the element
 * enters the viewport. If IntersectionObserver never fires (SSR / older
 * browsers), the CSS keeps the content fully visible.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = [el, ...Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))];

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return ref;
}
