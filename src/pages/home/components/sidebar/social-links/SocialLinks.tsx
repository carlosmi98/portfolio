import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { sidebarData } from "../../../../../data/portfolioData";
import styles from "./SocialLinks.module.css";

export const SocialLinks = () => {
    const { social } = sidebarData;

    return (
        <div className={styles.socialContainer}>
            <ul className={styles.socialIcons}>
                <li>
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        href={social.email}
                        aria-label="Send email"
                    >
                        <SiGmail />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;
