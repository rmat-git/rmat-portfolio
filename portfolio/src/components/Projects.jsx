import { useState } from "react";
import { SiReact, SiTailwindcss, SiVite, SiFigma, SiJavascript, SiElectron } from "react-icons/si";
import { FaCss3Alt, FaPython, FaSpotify } from "react-icons/fa";
import talksign from "../assets/projects/talksign.png";
import deskpod from "../assets/projects/deskpod.png";
import TalkSignModal from "./Projects/TalkSignModal";
import DeskPodModal from "./Projects/DeskPodModal";

const TOOL_ICONS = {
  React:      SiReact,
  Tailwind:   SiTailwindcss,
  Vite:       SiVite,
  Figma:      SiFigma,
  JavaScript: SiJavascript,
  CSS:        FaCss3Alt,
  Python:     FaPython,
  Spotify:    FaSpotify,
  Electron:   SiElectron
};

const projects = [
  {
    id: "talksign",
    number: "01",
    title: "TalkSign",
    tools: ["React", "Tailwind", "Python"],
    image: talksign,
    variant: "dark",
    hasModal: true,
  },
  {
    id: "deskpod",
    number: "02",
    title: "DeskPod",
    tools: ["React", "Electron", "Spotify"],
    image: deskpod,
    variant: "light",
    hasModal: true,
  },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section className="projects" id="projects">
        <h3 className="section-label">MY Projects</h3>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => setActiveModal(project.id)}
              onKeyDown={(e) => e.key === "Enter" && setActiveModal(project.id)}
              className={`projects__card projects__card--${project.variant}`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__card-img"
                />
              )}

              <div className="projects__card-header">
                <span className="projects__card-number">{project.number}</span>
                <span className="projects__card-title">{project.title}</span>
              </div>

              <div className="projects__card-footer">
                {project.tools.map((tool) => {
                  const Icon = TOOL_ICONS[tool];
                  return Icon ? (
                    <span key={tool} className="projects__card-tool-icon" title={tool}>
                      <Icon size={36} />
                    </span>
                  ) : (
                    <span key={tool} className="projects__card-tool">{tool}</span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeModal === "talksign" && (
        <TalkSignModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "deskpod" && (
        <DeskPodModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}