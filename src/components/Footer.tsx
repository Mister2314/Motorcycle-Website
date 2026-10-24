export default function Footer() {
  return (
    <footer>
      <div className="box1">
        <span data-reveal>ABOUT GRANDPRIX</span>
        <p data-reveal className="paragraph">
          If you are looking for the smoothest way to reach the top speed & cruise in front of
          your competitors, you&rsquo;re in the right place. Welcome to GrandPrix.
        </p>
        <div className="img-text-container">
          <img
            data-reveal
            style={{ marginTop: "4px" }}
            src="/assets/img/footer-img-1.png"
            width="18px"
            height="18px"
            alt=""
          />
          <p data-reveal className="paragraph2">
            Monday-Friday: 9am to 5pm; Saturday: 10am to 2pm
          </p>
        </div>
      </div>
      <div className="box2">
        <span data-reveal>OUR SERVICES</span>
        <p data-reveal>Chemical Engineering Projects</p>
        <p data-reveal>Mining Engineering</p>
        <p data-reveal>Construction Engineering</p>
        <p data-reveal>Welding Engineering</p>
        <p data-reveal>Space Program XYZ</p>
      </div>
      <div className="box3">
        <span data-reveal>OFFICE IN NEW YORK</span>
        <div className="icon-text-container">
          <iconify-icon
            data-reveal
            style={{ color: "white" }}
            icon="codicon:location"
            width="30px"
            height="30px"
            aria-hidden="true"
          ></iconify-icon>
          <p data-reveal className="icon-paragraph">
            7398 Colonial Rd, Brooklyn
          </p>
        </div>
        <p data-reveal className="other-paragraph">
          242 Wythe Ave #4, Brooklyn
        </p>

        <div className="icon-text-container2">
          <iconify-icon
            data-reveal
            style={{ color: "white" }}
            icon="bi:telephone"
            width="20px"
            height="20px"
            aria-hidden="true"
          ></iconify-icon>
          <p data-reveal className="icon-paragraph2">
            + (123) 124-567-8901
          </p>
        </div>
        <p data-reveal className="other-paragraph2">
          + (123) 124-567-8901
        </p>

        <div className="icon-text-container3">
          <iconify-icon
            data-reveal
            style={{ color: "white", cursor: "pointer" }}
            width="25px"
            height="25px"
            icon="typcn:mail"
            aria-hidden="true"
          ></iconify-icon>
          <p data-reveal className="icon-paragraph3">
            carrier@qodeinteractive.com
          </p>
        </div>
        <p data-reveal className="other-paragraph3">
          grand@qodeinteractive.com
        </p>
      </div>
      <div className="box4">
        <span data-reveal>OUR LOCATIONS</span>
        <img
          data-reveal
          style={{ marginTop: "10px" }}
          src="/assets/img/footer-img-5.png"
          width="90%"
          height="170px"
          alt="Map of Grand Prix office locations in Brooklyn"
        />
      </div>
    </footer>
  );
}
