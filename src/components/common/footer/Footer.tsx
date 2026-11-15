import { footerData } from "../../../data/portfolioData";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>{footerData.text}</p>
        </footer>
    );
};

export default Footer;
