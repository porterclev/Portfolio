import React from "react";
import "./ProjectTable";

const Project = ({ project, onToggle }) => {
  return (
    /* Defining Variables initialized in PorjectTable */
    <div className="project" onClick={() => onToggle(project.id)}>
      {/* Project Icon */}
      <img src={project.Icon} className="project-icon" />
      {/* Main Project Box */}
      <div className="project-box">
        {/* Header of Project */}
        <h4>{project.Prod}</h4>

        {/* short description */}
        <p>{project.ShortD}</p>

        {/* shows long description on click */}
        {project.expand ? <p>{project.LongD}</p> : ""}
      </div>
    </div>
  );
};

export default Project;
