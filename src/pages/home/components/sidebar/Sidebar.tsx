import { sidebarData } from "../../../../data/portfolioData";
import perfilImg from "../../../../assets/home/perfil.png";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="profile-img-container">
          <img
            src={perfilImg}
            alt={sidebarData.name}
            className="profile-img"
          />
        </div>

        <h1 className="profile-name">{sidebarData.name}</h1>
        <p className="profile-role">{sidebarData.role}</p>
        <p className="profile-tagline">{sidebarData.tagline}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
