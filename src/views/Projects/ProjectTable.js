import "./ProjectTable.css";
import Projects from "./Projects";
import { useState } from "react";
import Bot from "./assets/discord-bot-icon.jpg";

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
