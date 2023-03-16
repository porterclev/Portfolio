import "./About.css";
import Profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <section className="about-container">
      <img className="profile-image" src={Profile} />

      <div className="about-text-box">
        <h1>About Me</h1>
        <p>
          I'm a current student at California State University of Long Beach
          working towards my bachalors in Computer Science.
        </p>
      </div>
    </section>
  );
};

export default About;
