import "./style.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* Социальные ссылки */}
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="mailto:your.email@example.com">
                <FaEnvelope className="social__icon" />
              </a>
            </li>
          </ul>
          
          {/* Авторские права */}
          <div className="copyright">
            <p>© {new Date().getFullYear()} Anastasiia Sevastianova</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
