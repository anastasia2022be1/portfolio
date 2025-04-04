import { FaGithub } from "react-icons/fa";

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
      <FaGithub className="btn-icon" />
      GitHub
    </a>
  );
}
