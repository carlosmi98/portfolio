import ProjectsHeader from "./components/header/ProjectsHeader";
import { ProjectHero } from "./components/project-card/project-hero/ProjectHero";
import { projectsPage } from "../../data/portfolioData";
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <main className={styles.projectsContainer}>
            <ProjectsHeader />
            <ProjectHero project={projectsPage.projects[0]} />
        </main>
    );
};

export default Projects;