import { useTranslation } from "react-i18next";
import ProjectCard from "../components/project/ProjectCard.jsx";
import { projects } from "../helpers/projectsList.js";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">{t("projects.title")}</h2>
        <ul className="projects">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              id={project.id} 
              title={project.title} 
              img={project.img} 
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
