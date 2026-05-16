import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  id,
  title,
  category,
  description,
  role,
  technologies,
  img,
  gitHubLink,
  deployLink,
  codeLabel,
  liveLabel,
}) {
  if (!id) {
    console.error("ProjectCard: id is undefined!");
    return null;
  }

  const stackItems = technologies.split(",").map((item) => item.trim()).filter(Boolean);

  return (
    <li className="project-card">
      <Link to={`/projects/${id}`} className="project-card__media">
        <img src={img} alt={title} className="project-card__img" />
      </Link>
      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <Link to={`/projects/${id}`} className="project-card__title-link">
          <h3 className="project-card__title">{title}</h3>
        </Link>
        <p className="project-card__description">{description}</p>
        <p className="project-card__role">{role}</p>
        <ul className="project-card__stack" aria-label="Technologies">
          {stackItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className="project-card__action">
              <FaExternalLinkAlt />
              {liveLabel}
            </a>
          )}
          {gitHubLink && (
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="project-card__action">
              <FaGithub />
              {codeLabel}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
