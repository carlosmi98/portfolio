import { aboutMe } from "../../../../../data/portfolioData";
import styles from "./AboutMe.module.css";


export const AboutMe = () => {
    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.h2}>{aboutMe.title}</h2>
            {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.p}>
                    {paragraph}
                </p>
            ))}
        </section>
    );


}
