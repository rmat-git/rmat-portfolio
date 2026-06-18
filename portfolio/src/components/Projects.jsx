import { useState } from "react";
import { SiReact, SiTailwindcss, SiVite, SiFigma, SiJavascript, SiElectron, SiFlask, SiReactrouter, SiLaravel, SiPhp} from "react-icons/si";
import { FaCss3Alt, FaPython, FaSpotify } from "react-icons/fa";
import talksign from "../assets/projects/talksign.png";
import deskpod from "../assets/projects/deskpod.png";
import sentimentai from "../assets/projects/sentimentai.png";
import eboss from "../assets/projects/eboss.png";
import bcho from "../assets/projects/bcho.png";
import TalkSignModal from "./Projects/TalkSignModal";
import DeskPodModal from "./Projects/DeskPodModal";
import SentimentAIModal from "./Projects/SentimentAIModal";
import EBossModal from "./Projects/EBossModal";
import BCHOModal from "./Projects/BCHOModal";                                 


const TOOL_ICONS = {
  React:      SiReact,
  Tailwind:   SiTailwindcss,
  Vite:       SiVite,
  Figma:      SiFigma,
  JavaScript: SiJavascript,
  CSS:        FaCss3Alt,
  Python:     FaPython,
  Spotify:    FaSpotify,
  Electron:   SiElectron,
  Flask:      SiFlask,      
  ReactRouter: SiReactrouter,
  Laravel:    SiLaravel,
  PHP:        SiPhp,
};      

const projects = [
  {
    id: "deskpod",
    number: "01",
    title: "DeskPod",
    tools: ["React", "Electron", "Spotify"],
    image: deskpod,
    variant: "dark",
    hasModal: true,
  },
  {
    id: "bcho",
    number: "02",
    title: "BCHO Appointment System",
    tools: ["React", "Laravel", "PHP"],
    image: bcho,
    variant: "mid",
    hasModal: true,
  },
  {
    id: "talksign",
    number: "03",
    title: "TalkSign",
    tools: ["React", "Tailwind", "Python"],
    image: talksign,
    variant: "light",
    hasModal: true,
  },
  {
    id: "eboss",
    number: "04",
    title: "eBOSS",
    tools: ["React", "CSS", "ReactRouter"],
    image: eboss,
    variant: "dark",
    hasModal: true,
  },
  {
    id: "sentimentai",          // ← new entry
    number: "05",
    title: "SentimentAI",
    tools: ["Python", "Flask", "CSS"],
    image: sentimentai,
    variant: "mid",
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
      {activeModal === "sentimentai" && (
        <SentimentAIModal onClose={() => setActiveModal(null)} />
      )}
     {activeModal === "bcho" && (
        <BCHOModal onClose={() => setActiveModal(null)} 
          projectUrl="https://cityhealth.bacolodcity.gov.ph" 
        />
      )}
      {activeModal === "eboss" && (
        <EBossModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}