import { contactInfo } from "../../../../../data/portfolioData";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <section id="contact">
            <h2>{contactInfo.title}</h2>
            <p>{contactInfo.description}</p>
            <a
                href={contactInfo.email}
                className={styles.emailContainer}
            >
                <MdOutlineMarkEmailRead className={styles.icon} />
                <span>{contactInfo.buttonText}</span>
            </a>
        </section>
    )
}