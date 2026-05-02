import LiveClock from "./LiveClock";
import NavCard from "./NavCard";
import logo from "../assets/logoo.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={logo} alt="Logo" className="hero__logo" />

      <div className="hero__name-row">
        <span className="hero__name-word">Ross</span>
        {/* <span className="hero__name-word">Ross Mathew Negrido</span> */}
        <span className="hero__name-word">Mathew</span>
        <span className="hero__name-word">Negrido</span>
      </div>

      <div className="hero__meta-bar">
        <hr className="hero__rule" />
        <div className="hero__meta-labels">
          <span>COMPUTER ENGINEERING STUDENT </span>
          <span>ASPIRING FRONT-END DEVELOPER</span>
        </div>
      </div>

      <div className="hero__bottom-row">
        <div className="hero__hometown-block">
          <p className="hero__hometown-label">HOMETOWN</p>
          <p className="hero__hometown-city">
            BACOLOD <LiveClock />
          </p>
        </div>

        <div className="hero__nav-cards">
          <NavCard label="About"    number="01" href="#about"    variant="dark"  />
          <NavCard label="Projects" number="02" href="#projects" variant="mid"   />
          <NavCard label="Contact"  number="03" href="#contact"  variant="light" />
        </div>
      </div>
    </section>
  );
}