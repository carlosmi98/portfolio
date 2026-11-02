import styles from "./SidebarContainer.module.css";
import Profile from "./profile/Profile";
import { Nav } from "./nav/Nav";
export const SidebarContainer = () => {
    return (
        <aside className={styles.sidebar}>
            <Profile />
            <Nav />
        </aside>
    )
}

export default SidebarContainer