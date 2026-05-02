import { 
  SiReact, SiTailwindcss, SiCplusplus, SiFastapi, SiTensorflow, 
  SiOpencv, SiMysql, SiDocker, SiFlask, SiN8N, SiGit 
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const techByCategory = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
  backend: [
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flask", icon: SiFlask },
    { name: "MySQL", icon: SiMysql },
    { name: "Docker", icon: SiDocker },
  ],
  ml: [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "OpenCV", icon: SiOpencv },
  ],
  tools: [
    { name: "C++", icon: SiCplusplus },
    { name: "N8N", icon: SiN8N },
    { name: "Photoshop", icon: DiPhotoshop },
    { name: "Git", icon: SiGit },
  ],
};

const experience = [
  { company: "Bacolod Governement Center — MITCS", start: "04/2026", end: "now" },
  { company: "Globe Telecom — Network Department", start: "08/2024", end: "08/2024" },
  { company: "TUP Visayas — UITC", start: "07/2023", end: "08/2023" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <p className="about__bio">
          A Graduating Computer Engineering Student with background on graphic design
          {" "}I enjoy designing and use Front-End Development as my outlet.
          With little experience in the field, I seek guidance and mentorship to grow as a developer and designer.
        </p>

        <table className="about__experience-table">
          <tbody>
            {experience.map((job, i) => (
              <tr key={i} className="about__exp-row">
                <td className="about__exp-company">{job.company}</td>
                <td className="about__exp-date">{job.start}</td>
                <td className="about__exp-date">{job.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="about__right">
        
        <div className="about__tech-grid">
          {/* Frontend */}
          <div>
            <h4 className="about__tech-header">Frontend</h4>
            <div className="about__tech-row">
              {techByCategory.frontend.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div className="about__tech-icon" key={tech.name} title={tech.name}>
                    <IconComponent size={36} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="about__tech-header">Backend & Database</h4>
            <div className="about__tech-row">
              {techByCategory.backend.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div className="about__tech-icon" key={tech.name} title={tech.name}>
                    <IconComponent size={36} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ML */}
          <div>
            <h4 className="about__tech-header">Machine Learning</h4>
            <div className="about__tech-row">
              {techByCategory.ml.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div className="about__tech-icon" key={tech.name} title={tech.name}>
                    <IconComponent size={36} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="about__tech-header">Tools & Languages</h4>
            <div className="about__tech-row">
              {techByCategory.tools.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div className="about__tech-icon" key={tech.name} title={tech.name}>
                    <IconComponent size={36} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}