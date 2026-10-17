import { NavLink } from "react-router-dom"
import "./Nav.css"

export const Nav = () => {



    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">About me</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Technologies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Contact</NavLink>
                </li>

            </ul>
        </nav>
    )
}