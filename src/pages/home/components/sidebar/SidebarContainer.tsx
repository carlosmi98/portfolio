import styles from "./SidebarContainer.module.css";
import Profile from "./profile/Profile";
import { Nav } from "./nav/Nav";
import { Footer } from "./footer/Footer";


export const SidebarContainer = () => {
    return (
        <aside className={styles.sidebar}>
            <Profile />
            <Nav />
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </aside>
    )
}

export default SidebarContainer