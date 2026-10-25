
import styles from "./MainContainer.module.css";
import { AboutMe } from "./about-me/AboutMe";
import { Technologies } from "./technologies/Technologies";

export const MainContainer = () => {
    return (
        <main className={styles.mainContent}>
            <AboutMe />
            <Technologies />
        </main>
    )
}

export default MainContainer