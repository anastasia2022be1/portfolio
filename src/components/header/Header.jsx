import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { profileLinks } from "../../utils/profileLinks.js";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            <em>{t("header.name")}</em>
          </strong>
          <br />
          {t("header.title")}
        </h1>

        <div className="header__text">
          <p>{t("header.subtitle")}</p>
        </div>

        <ul className="header__quick-links" aria-label={t("header.quickLinksLabel")}>
          <li>
            <a href={profileLinks.cvRequest}>
              <FaFileAlt />
              {t("header.cv")}
            </a>
          </li>
          <li>
            <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${profileLinks.email}`}>
              <FaEnvelope />
              Email
            </a>
          </li>
          <li className="header__quick-links-location">
            <FaMapMarkerAlt />
            {profileLinks.location}
          </li>
        </ul>
        
        <div className="header__buttons">
          <Link to="/projects" className="btn btn-primary">
            {t("header.work")}
          </Link>
          <Link to="/contacts" className="btn btn-secondary">
            {t("header.contact")}
          </Link>
        </div>
      </div>
    </header>
  );
}
