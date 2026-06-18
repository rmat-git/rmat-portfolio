import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { SiReact, SiReactrouter, SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import eboss from "../../assets/projects/eboss.png";
import "./styles/Modal.css";

const techStack = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: FaCss3Alt,           label: "CSS3"       },
  { icon: SiReact,          label: "React"      },
  { icon: SiReactrouter,    label: "React Router" },
];

export default function EBOSSModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal__close" onClick={onClose} aria-label="Close">
          <IoClose size={22} />
        </button>

        <div className="modal__image-wrap">
          <img src={eboss} alt="eBOSS" className="modal__image" />
          <div className="modal__image-overlay" />
          <div className="modal__image-badge">03</div>
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">eBOSS</h2>
            <span className="modal__status">Internship - To be Deployed</span>
          </div>

        <p className="modal__description">
            Landing page for eBOSS (e-Business One Stop Shop) — a guide for business
            owners navigating the registration and renewal of their business permits.
            Built to digitize the process, reduce friction, and make applications
            faster and easier for the people of Bacolod City.
          </p>
 
          <div className="modal__stats">
            <div className="modal__stat">
              <span className="modal__stat-value">LGU</span>
              <span className="modal__stat-label">Bacolod City</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">2-in-1</span>
              <span className="modal__stat-label">New & Renewal</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">React</span>
              <span className="modal__stat-label">Frontend</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Permit</span>
              <span className="modal__stat-label">Digitized</span>
            </div>
          </div>

          <div className="modal__tech-section">
            <span className="modal__tech-label">Tech Stack</span>
            <div className="modal__tech-grid">
              {techStack.map(({ icon: Icon, label }) => (
                <div className="modal__tech-item" key={label}>
                  <Icon size={20} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}