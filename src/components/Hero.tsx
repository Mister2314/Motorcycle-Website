import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "HOME", href: "#top" },
  { label: "CATALOGUE", href: "#catalogue" },
  { label: "SHOWROOM", href: "#showroom" },
  { label: "BOOK A RIDE", href: "#book" },
];

export default function Hero() {
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 100);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <header className={`site-header${compact ? " compact" : ""}`}>
        <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
        <a className="skip-link" href="#grid">
          Skip to catalogue
        </a>
        <div className="header-container">
          <div className="left">
            <a href="#top" aria-label="Grand Prix — home">
              <img src="/assets/img/borko-logo-white.png" alt="Grand Prix" />
            </a>
          </div>

          <nav className="navigation" aria-label="Main">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.href} className={i === 0 ? "is-current" : undefined}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="right">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="hero-text">
        <h6 data-reveal>PERFORMANCE</h6>
        <h1 data-reveal data-reveal-delay="90">
          STANDARD
        </h1>
        <p className="hero-sub" data-reveal data-reveal-delay="180">
          Grand Prix 900 — built in Brooklyn, ridden everywhere. Configure yours below.
        </p>
        <a className="hero-cta" href="#showroom" data-reveal data-reveal-delay="260">
          ENTER THE SHOWROOM
        </a>
      </div>
    </section>
  );
}
