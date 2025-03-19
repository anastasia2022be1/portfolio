import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaInfoCircle, FaCode, FaTools } from "react-icons/fa";

import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";
import BtnJoin from "../components/btnJoin/BtnJoin.jsx";

import { projects } from "../helpers/projectsList.js";

export default function Project() {
  const { id } = useParams();
  const projectId = Number(id);
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects.find((p) => p.id === projectId);
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!project) {
    return <h2>Project not found</h2>;
  }

  // Переход к следующему проекту
  const handleNextProject = () => {
    if (projectIndex < projects.length - 1) {
      const nextProjectId = projects[projectIndex + 1].id;
      navigate(`/projects/${nextProjectId}`);
    }
  };

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-2">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <h2 className="title-3">{t("project.details")}</h2>

            <div className="project-info">
              <FaInfoCircle className="project-info__icon" />
              <p>
                <strong>{t("project.description")}: </strong>{" "}
                {project.description}
              </p>
            </div>

            <div className="project-info">
              <FaCode className="project-info__icon" />
              <p>
                <strong>{t("project.skills")}: </strong> {project.skills}
              </p>
            </div>

            <div className="project-info">
              <FaTools className="project-info__icon" />
              <p>
                <strong>{t("project.technologies")}: </strong>{" "}
                {project.technologies}
              </p>
            </div>
          </div>

          <div className="project-details__buttons">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.deployLink && <BtnJoin link={project.deployLink} />}
          </div>

          {projectIndex < projects.length - 1 && (
            <button className="btn-next" onClick={handleNextProject}>
              {t("project.next")} <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
