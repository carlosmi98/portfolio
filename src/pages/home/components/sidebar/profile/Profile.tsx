import { sidebarData } from "../../../../../data/portfolioData";
import perfilImg from "../../../../../assets/home/perfil.png";
import "./Profile.css";

export const Profile = () => {
  return (
    <header className="sidebar-profile">
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
    </header>
  );
};

export default Profile;
