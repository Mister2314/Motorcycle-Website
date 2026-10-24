import { useEffect, useState } from "react";

export default function Hero() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <header className={`site-header${compact ? " compact" : ""}`}>
        <a className="skip-link" href="#grid">
          Skip to catalogue
        </a>
        <div className="header-container">
          <div className="left">
            <img src="/assets/img/borko-logo-white.png" alt="Grand Prix" />
          </div>

          <nav className="navigation" aria-label="Main">
            <ul>
              <li>HOME</li>
              <li>PAGES</li>
              <li className="is-current">PORTFOLIO</li>
              <li>BLOG</li>
              <li>SHOP</li>
              <li>LANDING</li>
            </ul>
          </nav>
          <div className="right">
            <input
              type="text"
              placeholder="SEARCH"
              aria-label="Search"
              autoComplete="off"
            />
            <span className="cart">CART</span>
            <div className="shop" aria-label="Cart items: 0">
              <span className="number">0</span>
            </div>
            <div className="right-box" aria-hidden="true">
              <span className="points-container">
                <div className="points">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="points2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="points3">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="hero-text">
        <h6 data-reveal>PERFORMANCE</h6>
        <h1 data-reveal data-reveal-delay="90">
          STANDARD
        </h1>
      </div>
    </section>
  );
}
