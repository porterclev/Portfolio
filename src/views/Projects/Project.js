import React from "react";
import "./ProjectTable";

const Project = ({ project, onToggle }) => {
  return (
    <div className="project" onClick={() => onToggle(project.id)}>
      {/* Defining Variables initialized in PorjectTable */}
      <div className="project-box">
        {/* Header of Project */}
        <h4>{project.Prod}</h4>
      </div>

      {/* shows description on click */}
      {project.expand ? <p>{project.P}</p> : ""}
    </div>
  );
};

export default Project;
