import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage.js";
import detectDarkMode from "../../utils/detectDarkMode.js";

import sun from "./sun.svg";
import moon from "./moon.svg";

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      // Check if darkMode is set in localStorage
      if (darkMode === "dark") {
        document.body.classList.add("dark");
        btnRef.current.classList.add("dark-mode-btn--active");
      } else {
        document.body.classList.remove("dark");
        btnRef.current.classList.remove("dark-mode-btn--active");
      }
    }
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    const handleChange = (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setDarkMode(newColorScheme);
    };
  
    mediaQuery.addEventListener("change", handleChange);
  
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setDarkMode]);

  function toggleDarkMode() {
    setDarkMode((currentValue) =>
      currentValue === "light" ? "dark" : "light"
    );
  }

  return (
    <button ref={btnRef} onClick={toggleDarkMode} className="dark-mode-btn">
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
