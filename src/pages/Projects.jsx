import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/project/ProjectCard.jsx";
import { projects } from "../helpers/projectsList.js";

const filters = ["all", "frontend", "fullstack"];

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">{t("projects.title")}</h2>

        <div className="project-tabs" role="tablist" aria-label={t("projects.filterLabel")}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`project-tabs__button${activeFilter === filter ? " project-tabs__button--active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {t(`projects.categories.${filter}`)}
            </button>
          ))}
        </div>

        <ul className="projects">
          {visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              id={project.id} 
              title={t(`projects.${project.translationKey}.title`)} 
              category={t(`projects.categories.${project.category}`)}
              description={t(`projects.${project.translationKey}.description`)}
              role={t(`projects.${project.translationKey}.role`)}
              technologies={t(`projects.${project.translationKey}.technologies`)}
              img={project.img}
              gitHubLink={project.gitHubLink}
              deployLink={project.deployLink}
              codeLabel={t("project.github")}
              liveLabel={t("project.join")}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
