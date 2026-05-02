import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// Replace with your real links
const LINKEDIN_URL = "https://linkedin.com/in/ross-mathew-negrido-508617206";
const GITHUB_URL = "https://github.com/rmat-git";
const EMAIL = "mathewnegrido@gmail.com";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__status">
        Im Currently an <span className="contact__status--highlight">Intern</span> at{" "}
        <span className="contact__status--highlight">Bacolod City Government Center - MITCS</span>,
        Open for Jobs and Projects
      </p>
      <p className="contact__tagline">Feel Free to Contact Me</p>
      <a className="contact__email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <div className="contact__socials">
        <a
          className="contact__social-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          className="contact__social-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}