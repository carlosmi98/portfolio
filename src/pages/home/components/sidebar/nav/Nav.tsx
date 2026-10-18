import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to="#" className={styles.navLink}>About me</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="#" className={styles.navLink}>Technologies</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="#" className={styles.navLink}>Experience</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="#" className={styles.navLink}>Projects</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="#" className={styles.navLink}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;