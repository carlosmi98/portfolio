
import styles from "./MainContainer.module.css";
import { AboutMe } from "./about-me/AboutMe";
import { Technologies } from "./technologies/Technologies";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
export const MainContainer = () => {
    return (
        <main className={styles.mainContent}>
            <AboutMe />
            <Technologies />
            <Experience />
            <Contact />
        </main>
    )
}

export default MainContainer