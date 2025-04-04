import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, img }) {
  if (!id) {
    console.error("ProjectCard: id is undefined!");
    return null;
  }
  return (
    <li className="project-card">
      <Link to={`/projects/${id}`} className="project-card__link">
        <img src={img} alt={title} className="project-card__img" />
        <h3 className="project-card__title">{title}</h3>
      </Link>
    </li>
  );
}
