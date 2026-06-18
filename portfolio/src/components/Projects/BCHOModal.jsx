import { useEffect } from "react";
import { IoClose, IoArrowForward } from "react-icons/io5";
import { SiReact, SiLaravel, SiVite, SiPhp, SiReactrouter} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import bcho from "../../assets/projects/bcho.png";
import "./styles/Modal.css";

const techStack = [
  { icon: SiReact,   label: "React"        },
  { icon: SiLaravel, label: "Laravel"      },
  { icon: SiPhp,     label: "PHP"          },
  { icon: SiVite,    label: "Vite"         },
  { icon: SiReactrouter,  label: "React Router" },
  { icon: FaCss3Alt,    label: "CSS3"         },
];

export default function BCHOModal({ onClose, projectUrl }) {
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
          <img src={bcho} alt="Bacolod City Health Office" className="modal__image" />
          <div className="modal__image-overlay" />
          <div className="modal__image-badge">02</div>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__view-project"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
              <IoArrowForward size={16} />
            </a>
          )}
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">BCHO</h2>
            <span className="modal__status">Internship - Deployed</span>
          </div>

          <p className="modal__description">
            A digital health portal for residents of Bacolod City to schedule
            medical, dental, and animal-bite appointments at the City Health
            Office. Features a guided multi-step booking wizard with strict
            client-side validation and a secure Laravel backend API.
          </p>

          <div className="modal__stats">
            <div className="modal__stat">
              <span className="modal__stat-value">3</span>
              <span className="modal__stat-label">Service Types</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">PHP</span>
              <span className="modal__stat-label">Backend</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Printable</span>
              <span className="modal__stat-label">Reference No.</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Calendar</span>
              <span className="modal__stat-label">Booking</span>
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