export default function Footer() {
  return (
    <footer>
      <div className="box1">
        <span data-aos="fade-up">ABOUT GRANDPRIX</span>
        <p data-aos="fade-up" className="paragraph">
          If you are looking for the smoothest way to reach the top speed & cruise in front of
          your competitors, you&rsquo;re in the right place. Welcome to GrandPrix.
        </p>
        <div className="img-text-container">
          <img
            data-aos="fade-up"
            style={{ marginTop: "4px" }}
            src="/assets/img/footer-img-1.png"
            width="18px"
            height="18px"
            alt=""
          />
          <p data-aos="fade-up" className="paragraph2">
            Monday-Friday: 9am to 5pm; Satuday: 10am to 2pm
          </p>
        </div>
      </div>
      <div className="box2">
        <span data-aos="fade-up">OUR SERVICES</span>
        <p data-aos="fade-up">Chemical Engineering Projects</p>
        <p data-aos="fade-up">Mining Engineering</p>
        <p data-aos="fade-up">Construction Engineering</p>
        <p data-aos="fade-up">Welding Engineering</p>
        <p data-aos="fade-up">Space Program XYZ</p>
      </div>
      <div className="box3">
        <span data-aos="fade-up">OFFICE IN NEW YORK</span>
        <br />
        <div className="icon-text-container">
          <iconify-icon
            data-aos="fade-up"
            style={{ color: "white" }}
            icon="codicon:location"
            widht="30px"
            height="30px"
          ></iconify-icon>
          <p data-aos="fade-up" className="icon-paragraph">
            7398 Colonial Rd, Brooklyn
          </p>
        </div>
        <p data-aos="fade-up" className="other-paragraph">
          242 Wythe Ave #4, Brooklyn
        </p>

        <div className="icon-text-container2">
          <iconify-icon
            data-aos="fade-up"
            style={{ color: "white" }}
            icon="bi:telephone"
            widht="5px"
            height="20px"
          ></iconify-icon>
          <p data-aos="fade-up" className="icon-paragraph2">
            + (123) 124-567-8901
          </p>
        </div>
        <p data-aos="fade-up" className="other-paragraph2">
          + (123) 124-567-8901
        </p>

        <div className="icon-text-container3">
          <iconify-icon
            data-aos="fade-up"
            style={{ color: "white", cursor: "pointer" }}
            widht="25px"
            height="25px"
            icon="typcn:mail"
          ></iconify-icon>
          <p data-aos="fade-up" className="icon-paragraph3">
            carrier@qodeinteractive.com
          </p>
        </div>
        <p data-aos="fade-up" className="other-paragraph3">
          grand@qodeinteractive.com
        </p>
      </div>
      <div className="box4">
        <span data-aos="fade-up">OUR LOCATIONS</span>
        <img
          data-aos="zoom-out"
          style={{ marginTop: "10px" }}
          src="/assets/img/footer-img-5.png"
          width="90%"
          height="170px"
          alt=""
        />
      </div>
    </footer>
  );
}
