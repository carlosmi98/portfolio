import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { sidebarData } from "../../../../../data/portfolioData";
import { SocialLinks } from "../social-links/SocialLinks";
import styles from "./Nav.module.css";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Si el usuario cambia el tamaño de pantalla a desktop (>= 1024px), cerramos el menú móvil
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className={styles.nav} aria-label="Main navigation">
                <button
                    onClick={handleNavbar}
                    className={styles.menuButton}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
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
                    <div className={styles.navFooter}>
                        <SocialLinks />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
