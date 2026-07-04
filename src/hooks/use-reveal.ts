import { useEffect, useRef } from "react";

/**
 * Adds a "revealed" class to the element (and any [data-reveal] descendants)
 * when it enters the viewport. Pair with the .reveal / .reveal-child CSS.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    const targets = [el, ...Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))];
    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  return ref;
}
