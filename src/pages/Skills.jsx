import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaServer, FaRobot, FaProjectDiagram } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiRedux, SiNextdotjs } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills">
      <div className="container skills__wrapper">

        <div className="skills__set">
          <h2 className="title-1">{t("skills.title")}</h2>
          <p>{t("skills.description")}</p>
          <p className="skills__contact">
            {t("skills.contact")} <Link to="/contacts">{t("skills.contact_link")}</Link>
          </p>
        </div>

        <div className="skills__icons">
          <div className="skill">
            <FaHtml5 className="skill-icon" />
            <span>HTML5</span>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon" />
            <span>CSS3</span>
          </div>
          <div className="skill">
            <FaJs className="skill-icon" />
            <span>JavaScript (ES6+)</span>
          </div>
          <div className="skill">
            <FaSass className="skill-icon" />
            <span>SASS / SCSS</span>
          </div>
          <div className="skill">
            <FaBootstrap className="skill-icon" />
            <span>Bootstrap</span>
          </div>
          <div className="skill">
            <FaReact className="skill-icon" />
            <span>React</span>
          </div>
          <div className="skill">
            <SiNextdotjs className="skill-icon" />
            <span>Next.js</span>
          </div>
          <div className="skill">
            <SiRedux className="skill-icon" />
            <span>Redux Toolkit</span>
          </div>
          <div className="skill">
            <FaNodeJs className="skill-icon" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <SiExpress className="skill-icon" />
            <span>Express</span>
          </div>
          <div className="skill">
            <FaServer className="skill-icon" />
            <span>REST API</span>
          </div>
          <div className="skill">
            <SiPostgresql className="skill-icon" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill">
            <SiMongodb className="skill-icon" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <FaGitAlt className="skill-icon" />
            <span>Git / GitHub</span>
          </div>
          <div className="skill">
            <FaDocker className="skill-icon" />
            <span>Docker</span>
          </div>
          <div className="skill">
            <FaProjectDiagram className="skill-icon" />
            <span>n8n Automation</span>
          </div>
          <div className="skill">
            <FaRobot className="skill-icon" />
            <span>AI API Integration</span>
          </div>
          <div className="skill">
            <SiTypescript className="skill-icon" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
