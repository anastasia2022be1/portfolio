
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n"

createRoot(document.getElementById("root")).render(
  <Router>
      <App />
  </Router>
);
