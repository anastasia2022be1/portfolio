import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { profileLinks } from "../../utils/profileLinks.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href={`mailto:${profileLinks.email}`} aria-label="Email">
                <FaEnvelope className="social__icon" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© {new Date().getFullYear()} {profileLinks.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
