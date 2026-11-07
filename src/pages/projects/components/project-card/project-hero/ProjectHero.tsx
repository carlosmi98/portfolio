import type { ProjectItem } from "../../../../../types/portfolio";
import pc from "../../../../../assets/project/hero/pc.png";
import styles from "./ProjectHero.module.css";
export const ProjectHero = ({ project }: { project: ProjectItem }) => {
    return (
        <header className={styles.header}>
            <figure className={styles.figure}>
                <img src={project.image} alt={`${project.title} interface preview`} className={styles.img} />
            </figure>
            <div className={styles.info}>
                <p className={styles.badge}>
                    <span className={styles.dot} />
                    {project.badge}
                </p>
                <h1 className={styles.title}>{project.title}</h1>
                {project.paragraphs.map((paragraph, index) => (
                    <p key={index} className={styles.paragraph}>
                        {paragraph}
                    </p>
                ))}

                <ul className={styles.techList}>
                    {project.tags.map((tag, index) => (
                        <li key={index} className={styles.techTag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}