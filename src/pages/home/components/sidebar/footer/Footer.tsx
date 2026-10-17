import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-icons">
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={32} />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={32} />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <SiGmail size={32} />
                    </a>
                </li>
            </ul>
        </div>
    )
}