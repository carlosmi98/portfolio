import ProjectsHeader from "./components/header/ProjectsHeader";
import { ProjectCard } from "./components/project-card/ProjectCard";
import { projectsPage } from "../../data/portfolioData";
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <main className={styles.projectsContainer}>
            <ProjectsHeader />
            {projectsPage.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </main>
    );
};

export default Projects;