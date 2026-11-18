import { contactInfo } from "../../../../../data/portfolioData";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Button from "../../../../../components/common/button/Button";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2>{contactInfo.title}</h2>
            <p className={styles.description}>{contactInfo.description}</p>
            <Button texto={contactInfo.buttonText} href={contactInfo.email} icon={<MdOutlineMarkEmailRead />} className={styles.button} />
        </section>
    );
};

export default Contact;
