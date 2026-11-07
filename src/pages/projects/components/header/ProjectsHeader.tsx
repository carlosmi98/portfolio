import Button from "../../../../components/common/button/Button";
import { projectsPage } from "../../../../data/portfolioData";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProjectsHeader.module.css";
const ProjectsHeader = () => {
    return (
        <header className={styles.header}>
            <Button texto={projectsPage.backButtonText} to="/" icon={<FaArrowLeft />} className={styles.button} />
            <div className={styles.info}>
                <h2>{projectsPage.title}</h2>
                <p>{projectsPage.subtitle}</p>
            </div>
        </header>
    );
};

export default ProjectsHeader;