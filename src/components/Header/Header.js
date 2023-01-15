import "./Header.css";
import Banner from "./assets/banner.jpg";
import Profile from "./assets/profile.jpg";
const Header = () => {
  return (
    <section className="banner">
      <div className="header"></div>

      <div className="profile">
        <img className="profile-image" src={Profile} />
        <p>Student of California State University Longbeach</p>
      </div>
    </section>
  );
};

export default Header;
