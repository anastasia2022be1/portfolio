import { useTranslation } from "react-i18next";

import flagEN from "../../assets/icons/en.svg";
import flagDE from "../../assets/icons/de.svg";

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
      <img src={flagEN} alt="EN" className="language-flag flag-en" />
      <img src={flagDE} alt="DE" className="language-flag flag-de" />
    </button>
  );
}
