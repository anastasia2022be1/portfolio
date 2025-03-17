import { useState, useEffect } from "react";

export function useLanguage(defaultLanguage = "en") {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return [language, setLanguage];
}
