import ProjectsHeader from "./components/header/ProjectsHeader";
import { ProjectCard } from "./components/project-card/ProjectCard";
import { projectsPage } from "../../data/portfolioData";
import Footer from "../../components/common/footer/Footer";
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <main className={styles.projectsContainer}>
            <div className={styles.contentWrapper}>
                <ProjectsHeader />
                {projectsPage.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <Footer />
            </div>
        </main>
    );
};

export default Projects;
