import "./About.css";
import Profile from "../../assets/profile.jpg";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <div className="social-buttons">
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/porterclev";
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/porter-clevidence-554927220/";
            }}
          >
            <LinkedInIcon color="primary" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default About;
