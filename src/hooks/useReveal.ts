import { useEffect } from "react";

/**
 * Once-only scroll reveals. Every element carrying [data-reveal] gets the
 * `is-revealed` class the first time it enters the viewport (120px early),
 * then never loses it — editorial pages should not replay themselves.
 * A per-element `data-reveal-delay` (ms) sets the transition delay so rows
 * stagger in rhythm (0 / 70 / 140ms).
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -120px 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
