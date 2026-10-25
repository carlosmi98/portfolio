import { NavLink } from "react-router-dom";
import { sidebarData } from "../../../../../data/portfolioData";
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {sidebarData.navLinks.map((link) => (
                    <li key={link.id} className={styles.navItem}>
                        {link.path ? (
                            <NavLink to={link.path} className={styles.navLink}>
                                {link.label}
                            </NavLink>
                        ) : (
                            <a href={link.href} className={styles.navLink}>
                                {link.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;