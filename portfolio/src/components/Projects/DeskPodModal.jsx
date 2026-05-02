import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { SiElectron, SiReact, SiSpotify, SiVite } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import deskpod from "../../assets/projects/deskpod.png";
import "./styles/Modal.css";

const techStack = [
  { icon: SiElectron, label: "Electron"   },
  { icon: SiReact,    label: "React"      },
  { icon: FaNodeJs,   label: "Node.js"    },
  { icon: FaCss3Alt,  label: "CSS Modules"},
  { icon: SiSpotify,  label: "Spotify API"},
  { icon: SiVite,     label: "Vite"       },
];

export default function DeskPodModal({ onClose }) {
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
          <img src={deskpod} alt="DeskPod" className="modal__image" />
          <div className="modal__image-overlay" />
          <div className="modal__image-badge">02</div>
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">DeskPod</h2>
            <span className="modal__status">Personal Project — In Progress</span>
          </div>

          <p className="modal__description">
            A desktop Spotify controller that emulates a 5th-generation iPod Classic —
            complete with a functional click wheel, LCD display, and system tray
            integration. Built with Electron and React, it sits always-on-top as a
            frameless overlay, letting you control playback without leaving your workflow.
          </p>

          <div className="modal__stats">
            <div className="modal__stat">
              <span className="modal__stat-value">iPod</span>
              <span className="modal__stat-label">UI Concept</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">OAuth</span>
              <span className="modal__stat-label">Spotify Auth</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">IPC</span>
              <span className="modal__stat-label">Secure Bridge</span>
            </div>
            <div className="modal__stat">
              <span className="modal__stat-value">F/P</span>
              <span className="modal__stat-label">Free + Premium</span>
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