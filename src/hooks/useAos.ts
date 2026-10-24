import { useEffect } from "react";

/**
 * Replicates `AOS.init()` (AOS 2.3.1 with default options): every element
 * carrying [data-aos] gets the `aos-animate` class while it sits at least
 * 120px above the bottom edge of the viewport, and loses it when it
 * scrolls back out — so animations replay, exactly like the original
 * library's `once: false` behaviour.
 */
export function useAos() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-aos]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        }
      },
      { rootMargin: "0px 0px -120px 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
