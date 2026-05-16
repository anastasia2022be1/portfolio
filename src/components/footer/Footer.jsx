import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/anastasia2022be1" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/anastasia-sevastianova" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="mailto:sevastyanova.anastasia1@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="social__icon" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© {new Date().getFullYear()} Anastasia Sevastianova</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
