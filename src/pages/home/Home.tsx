import SidebarContainer from "./components/sidebar/SidebarContainer";
import MainContainer from "./components/main/MainContainer";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <SidebarContainer />
      <MainContainer />
    </div>
  );
};

export default Home;
