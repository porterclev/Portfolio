import React from "react";
import "./ProjectTable";

const Project = ({ project, onToggle }) => {
  return (
    /* Defining Variables initialized in PorjectTable */
    <div className="project" onClick={() => onToggle(project.id)}>
      {/* Main Project Box */}
      <div className="project-box">
        {/* Project Icon */}
        <img src={project.Icon} />
        {/* Header of Project */}
        <h4>{project.Prod}</h4>
      </div>

      {/* shows description on click */}
      {project.expand ? <p>{project.P}</p> : ""}
    </div>
  );
};

export default Project;
