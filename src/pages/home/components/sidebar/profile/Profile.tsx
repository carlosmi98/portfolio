import { sidebarData } from "../../../../../data/portfolioData";
import perfilImg from "../../../../../assets/home/perfil.png";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <header className={styles.profile}>
      <div className={styles.imgContainer}>
        <img
          src={perfilImg}
          alt={sidebarData.name}
          className={styles.img}
        />
      </div>

      <h1 className={styles.name}>{sidebarData.name}</h1>
      <p className={styles.role}>{sidebarData.role}</p>
      <p className={styles.tagline}>{sidebarData.tagline}</p>
    </header>
  );
};

export default Profile;
