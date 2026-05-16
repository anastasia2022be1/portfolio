import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, category, description, technologies, img }) {
  if (!id) {
    console.error("ProjectCard: id is undefined!");
    return null;
  }

  return (
    <li className="project-card">
      <Link to={`/projects/${id}`} className="project-card__link">
        <img src={img} alt={title} className="project-card__img" />
        <div className="project-card__content">
          <span className="project-card__category">{category}</span>
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
          <p className="project-card__stack">{technologies}</p>
        </div>
      </Link>
    </li>
  );
}
