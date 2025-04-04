import { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode.jsx";
import BtnLanguage from "../btnLanguage/BtnLanguage.jsx";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "home" },
    { to: "/about-me", label: "about" },
    { to: "/skills", label: "skills" },
    { to: "/projects", label: "projects" },
    { to: "/contacts", label: "contacts" },
  ];

  return (
    <nav className="nav">
      <div className="container nav-row">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <strong>{t("portfolio")}</strong>
        </NavLink>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-list ${menuOpen ? "nav-list--open" : ""}`}>
          {navItems.map(({ to, label }, index) => (
            <li
              className="nav-list__item"
              key={to}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
                onClick={closeMenu}
              >
                {t(`nav.${label}`)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <BtnDarkMode />
          <BtnLanguage />
        </div>
      </div>
    </nav>
  );
}
