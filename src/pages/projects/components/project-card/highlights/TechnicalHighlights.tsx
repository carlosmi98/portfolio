import { ProjectItem } from "../../../../../types/portfolio";
import { HighlightCard } from "./HighlightCard";
import styles from "./TechnicalHighlights.module.css";

export const TechnicalHighlights = ({ project }: { project: ProjectItem }) => {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <h2>{project.technicalHighlightsTitle}</h2>
                <p>{project.technicalHighlightsSubtitle}</p>
            </header>
            <div className={styles.grid}>
                {project.technicalHighlights.map((highlight) => (
                    <HighlightCard key={highlight.id} highlight={highlight} />
                ))}
            </div>
        </section>
    );
};