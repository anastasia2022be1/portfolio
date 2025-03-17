import { useTranslation } from "react-i18next";
import "./style.css";

export default function BtnLanguage() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`language-btn ${i18n.language === "de" ? "language-btn--active" : ""}`}
    >
      <span className="language-btn__text">{i18n.language.toUpperCase()}</span>
    </button>
  );
}
