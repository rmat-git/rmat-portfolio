import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { SiTensorflow, SiKeras, SiFlask, SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import sentimentai from "../../assets/projects/sentimentai.png";
import "./styles/Modal.css";

const techStack = [
  { icon: FaPython,      label: "Python"      },
  { icon: SiFlask,       label: "Flask"       },
  { icon: SiTensorflow,  label: "TensorFlow"  },
  { icon: SiKeras,       label: "Keras"       },
  { icon: SiJavascript,  label: "JavaScript"  },
  { icon: FaCss3Alt,     label: "CSS"         },
];

export default function SentimentAIModal({ onClose }) {
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
          <img src={sentimentai} alt="SentimentAI" className="modal__image" />
          <div className="modal__image-overlay" />
          <div className="modal__image-badge">05</div>
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">SentimentAI</h2>
            <span className="modal__status">Classwork</span>
          </div>

          <p className="modal__description">
            A binary sentiment classifier for tweet-style text. Powered by a BiLSTM
            deep learning model, it predicts whether input is positive or negative —
            served through a Flask REST API with a polished chat-style frontend.
          </p>

          <div className="modal__stats">
            <div className="modal__stat">
              <span className="modal__stat-value">BiLSTM</span>
              <span className="modal__stat-label">Model Type</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Binary</span>
              <span className="modal__stat-label">Output</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Flask</span>
              <span className="modal__stat-label">Backend</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">Chat</span>
              <span className="modal__stat-label">UI Style</span>
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