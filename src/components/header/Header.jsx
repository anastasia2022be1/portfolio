import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.css";

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
