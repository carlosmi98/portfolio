import styles from "./SidebarContainer.module.css";
import Profile from "./profile/Profile";
import { Nav } from "./nav/Nav";
import { Footer } from "./footer/Footer";


export const SidebarContainer = () => {
    return (
        <aside className={styles.sidebar}>
            <Profile />
            <Nav />
            <Footer />
        </aside>
    )
}

export default SidebarContainer