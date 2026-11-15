import styles from "./MainContainer.module.css";
import { AboutMe } from "./about-me/AboutMe";
import { Technologies } from "./technologies/Technologies";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import Footer from "../../../../components/common/footer/Footer";

export const MainContainer = () => {
    return (
        <main className={styles.mainContent}>
            <AboutMe />
            <Technologies />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
};

export default MainContainer;
