import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Project from "./pages/Project.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skills from "./pages/Skills.jsx";
import ScrollToTop from "./utils/scrollToTop.js";
import BackToTop from "./components/backToTop/BackToTop.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <ScrollToTop />
      <Navbar />

      <ToastContainer position="top-center" autoClose={3000} />

<main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
