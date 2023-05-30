import "./ProjectTable.css";
import Projects from "./Projects";
import { useState } from "react";
import Bot from "./assets/discord-bot-icon.jpg";
import DnD from "./assets/DnD-icon.png";
import Calc from "./assets/Calc-Book-icon.png";

const ProjectTable = () => {
  //Defined Project Table
  const [personalProjects, setPersonalProjects] = useState([
    {
      //Project Icon
      Icon: Bot,
      //Project Title
      Prod: "Discord Bot",
      //Project Description
      ShortD: (
        <>
          This ongoing passion project is a discord bot with over 80+ active
          users.
          <br />
        </>
      ),
      LongD: <>Long</>,
      //Project id
      id: 1,
      //Expand bool
      expand: false,
      git: "https://github.com/porterclev/Discord-Bot",
    },
    {
      Icon: Bot,
      Prod: "Discord Game",
      ShortD: (
        <>
          Multiplayer Isometric Game that connects users from discord into a
          shared world with loot, combat, and PVE gameplay.
        </>
      ),
      LongD: <>Long</>,
      id: 2,
      expand: false,
      git: "https://github.com/porterclev/Discord-Bot-Webpage",
    },
  ]);

  const [collegeProjects, setCollegeProjects] = useState([
    {
      Icon: DnD,
      Prod: "Dungeons and Dragons RPG Game",
      ShortD: (
        <>
          A java based RPG dungeon crawler played in the terminal.
          <br />
        </>
      ),
      LongD: (
        <>
          Long
          <br />
        </>
      ),
      id: 5,
      expand: false,
      git: "https://github.com/porterclev/DnDGame",
    },
    {
      Icon: Calc,
      Prod: "Calculator/Bookstore",
      ShortD: (
        <>
          Short
          <br />
        </>
      ),
      LongD: (
        <>
          Long
          <br />
        </>
      ),
      id: 6,
      expand: false,
    },
  ]);

  const [competitionProjects, setCompetitionProjects] = useState([]);
  /* 
    maps each project defined to Projects grouping
  */
  const togglePersonalProject = (id) => {
    setPersonalProjects(
      personalProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };
  const toggleCollegeProject = (id) => {
    setPersonalProjects(
      personalProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };
  const toggleCompetitionProject = (id) => {
    setPersonalProjects(
      personalProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };

  return (
    <section className="projects-container">
      {/* Header */}
      <h1>Personal Projects</h1>

      {/* Table */}
      <div className="project-table">
        {personalProjects.length > 0 ? (
          <Projects
            projects={personalProjects}
            onToggle={togglePersonalProject}
          />
        ) : (
          "None"
        )}
      </div>

      <h1>College Course Projects</h1>
      <div className="project-table">
        {collegeProjects.length > 0 ? (
          <Projects
            projects={collegeProjects}
            onToggle={toggleCollegeProject}
          />
        ) : (
          "None"
        )}
      </div>

      <h1>Competition Projects</h1>
      <div className="project-table">
        {competitionProjects.length > 0 ? (
          <Projects
            projects={competitionProjects}
            onToggle={toggleCompetitionProject}
          />
        ) : (
          "None"
        )}
      </div>
    </section>
  );
};

export default ProjectTable;
