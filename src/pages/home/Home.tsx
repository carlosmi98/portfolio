import Profile from "./components/sidebar/profile/Profile";
import { Nav } from "./components/sidebar/nav/Nav";
import { Footer } from "./components/sidebar/footer/Footer";
import "./Home.css";
export const Home = () => {
  return (
    <aside className="sidebar">
      <Profile />
      <Nav />
      <Footer />
    </aside>
  );
};

export default Home;
