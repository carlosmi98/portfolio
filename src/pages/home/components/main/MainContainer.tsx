
import styles from "./MainContainer.module.css";
import { AboutMe } from "./about-me/AboutMe";
import { Technologies } from "./technologies/Technologies";
import { Experience } from "./experience/Experience";

export const MainContainer = () => {
    return (
        <main className={styles.mainContent}>
            <AboutMe />
            <Technologies />
            <Experience />
        </main>
    )
}

export default MainContainer