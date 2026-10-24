export default function Hero() {
  return (
    <section className="hero">
      <header>
        <div data-aos="zoom-out" className="header-container">
          <div className="left">
            <img src="/assets/img/borko-logo-white.png" alt="" />
          </div>

          <div className="navigation">
            <ul>
              <li>HOME</li>
              <li>PAGES</li>
              <li style={{ border: "1px solid #e5e5e5", padding: "23px 22px" }}>PORTFOLIO</li>
              <li>BLOG</li>
              <li>SHOP</li>
              <li>LANDING</li>
            </ul>
          </div>
          <div className="right">
            <input type="text" placeholder="SEARCH" autoComplete="off" required />
            <span className="cart">CART</span>{" "}
            <div className="shop">
              <span className="number">0</span>
            </div>
            <div className="right-box">
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
      <div data-aos="fade-right" className="hero-text">
        <h6>PERFORMANCE</h6>
        <h1>STANDARD</h1>
      </div>
    </section>
  );
}
