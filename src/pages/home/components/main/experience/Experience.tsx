import { experience } from "../../../../../data/portfolioData";


import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <h2 className={styles.h2}>Experience</h2>
            <ul className={styles.experienceList}>
                {experience.map((expItem) => (
                    <li key={expItem.id} className={styles.expItem}>
                        <h3 className={styles.title}>{expItem.title}</h3>
                        <p className={styles.company}>{expItem.company}</p>
                        <p className={styles.period}>{expItem.period}</p>
                        <p className={styles.type}>{expItem.type}</p>
                        <p className={styles.description}>{expItem.description}</p>
                        <ul>
                            {expItem.bulletPoints.map((point, id) => (
                                <li key={id} className={styles.bulletPoint}>{point}</li>
                            ))}
                        </ul>

                        <div className={styles.tagsContainer}>
                            {expItem.tags.map((tag, id) => (
                                <span key={id} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience;