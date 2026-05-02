import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { SiReact, SiTailwindcss, SiVite, SiPython, SiTensorflow, SiOpencv, SiFastapi, SiGooglegemini } from "react-icons/si";
import talksign from "../../assets/projects/talksign.png";
import "./styles/Modal.css";

const techStack = [
  { icon: SiReact,       label: "React"      },
  { icon: SiTailwindcss, label: "Tailwind"   },
  { icon: SiVite,        label: "Vite"       },
  { icon: SiPython,      label: "Python"     },
  { icon: SiFastapi,     label: "FastAPI"    },
  { icon: SiTensorflow,  label: "TensorFlow" },
  { icon: SiOpencv,      label: "OpenCV"     },
  { icon: SiGooglegemini,      label: "Gemini"     },
];

export default function TalkSignModal({ onClose }) {
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
          <img src={talksign} alt="TalkSign" className="modal__image" />
          <div className="modal__image-overlay" />
          <div className="modal__image-badge">01</div>
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">TalkSign</h2>
            <span className="modal__status">Research</span>
          </div>

          <p className="modal__description">
            A real-time American Sign Language interpreter that bridges communication
            between the deaf and hearing communities. TalkSign uses a trained deep
            learning model to classify ASL alphabet signs from a live webcam feed,
            assembling them into sentences and optionally reading them aloud.
          </p>

          <div className="modal__stats">
            <div className="modal__stat">
              <span className="modal__stat-value">56</span>
              <span className="modal__stat-label">ASL Classes</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">~30fps</span>
              <span className="modal__stat-label">Inference Speed</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">TTS</span>
              <span className="modal__stat-label">Voice Output</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">AI</span>
              <span className="modal__stat-label">Gemini Polish</span>
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