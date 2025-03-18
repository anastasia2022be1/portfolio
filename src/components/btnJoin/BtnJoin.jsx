import "./style.css";
import { FaRocket } from "react-icons/fa";

export default function BtnJoin({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
      <FaRocket className="btn-icon" />
      Live Test
    </a>
  );
}
