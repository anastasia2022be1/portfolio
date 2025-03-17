import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импортируем файлы перевода
import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";

// Конфигурация i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    de: { translation: translationDE },
  },
  lng: localStorage.getItem("language") || "en", // Устанавливаем язык из localStorage
  fallbackLng: "en", // Если язык не найден, используем английский
  interpolation: {
    escapeValue: false, // Не экранируем HTML
  },
});

export default i18n;
