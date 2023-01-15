import "./ProjectTable.css";
import Projects from "./Projects";
import { useState } from "react";
import Bot from "./assets/discord-bot-icon.jpg";
import DnD from "./assets/DnD-icon.png";
import Calc from "./assets/Calc-Book-icon.png";

const ProjectTable = () => {
  //Defined Project Table
  const [projects, setProjects] = useState([
    {
      //Project Icon
      Icon: Bot,
      //Project Title
      Prod: "Discord Bot",
      //Project Description
      ShortD: (
        <>
          Short
          <br />
        </>
      ),
      LongD: <>Long</>,
      //Project id
      id: 1,
      //Expand bool
      expand: false,
    },

    {
      Icon: DnD,
      Prod: "Dungeons and Dragons RPG Game",
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
      id: 1,
      expand: false,
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
      id: 1,
      expand: false,
    },
  ]);

  /* 
    maps each project defined to Projects grouping
  */
  const toggleProject = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };

  return (
    <section className="projects-container">
      {/* Header */}
      <h1>Projects</h1>

      {/* Table */}
      <div className="project-table">
        {projects.length > 0 ? (
          <Projects projects={projects} onToggle={toggleProject} />
        ) : (
          "None"
        )}
      </div>
    </section>
  );
};

export default ProjectTable;
