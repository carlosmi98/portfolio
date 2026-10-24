import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { sidebarData } from "../../../../../data/portfolioData";
import styles from "./Footer.module.css";

export const Footer = () => {
    const { social } = sidebarData;

    return (
        <div className={styles.footer}>
            <ul className={styles.footerIcons}>
                <li>
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        href={social.email}
                        aria-label="Email"
                    >
                        <SiGmail />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;