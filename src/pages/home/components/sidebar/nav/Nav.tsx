import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { sidebarData } from "../../../../../data/portfolioData";

import { Footer } from "../footer/Footer";
import styles from "./Nav.module.css";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className={styles.nav}>
                <button onClick={handleNavbar} className={styles.menuButton} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
                    <ul className={`${styles.navList}`}>
                        {sidebarData.navLinks.map((link) => (
                            <li key={link.id} className={styles.navItem}>
                                {link.path ? (
                                    <NavLink onClick={handleNavClick} to={link.path} className={styles.navLink}>
                                        {link.label}
                                    </NavLink>
                                ) : (
                                    <a onClick={handleNavClick} href={link.href} className={styles.navLink}>
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileFooter}>
                        <Footer />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;