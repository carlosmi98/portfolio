import type { ProjectItem } from "../../../../types/portfolio";
import { ProjectHero } from "./project-hero/ProjectHero";
import { ProjectFeatures } from "./features/ProjectFeatures";
import { TechnicalHighlights } from "./highlights/TechnicalHighlights";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className={styles.projectCard}>
            <ProjectHero project={project} />
            <ProjectFeatures project={project} />
            <TechnicalHighlights project={project} />
        </article>
    );
};


