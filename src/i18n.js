import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    de: { translation: translationDE },
  },
  lng: localStorage.getItem("language") || "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
