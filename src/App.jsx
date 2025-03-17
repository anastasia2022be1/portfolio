import "./styles/main.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Project from "./pages/Project.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skills from "./pages/Skills.jsx";
import ScrollToTop from "./utils/scrollToTop.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
