import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode.jsx";
import BtnLanguage from "../btnLanguage/BtnLanguage.jsx";
import { useTranslation } from "react-i18next";

import "./style.css";

export default function Navbar() {
  const { t } = useTranslation();

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>{t("portfolio")}</strong>
          </NavLink>

          <BtnDarkMode />

          <BtnLanguage />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                {t("nav.home")}
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                {t("nav.about")}
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                {t("nav.skills")}
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                {t("nav.projects")}
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                {t("nav.contacts")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
