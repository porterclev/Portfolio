import React from "react";
import "./ProjectTable";

const Project = ({ project, onToggle }) => {
  return (
    <div className="project" onClick={() => onToggle(project.id)}>
      <div className="project-box">
        <h4>{project.Prod}</h4>
      </div>
      {project.expand ? <p>{project.P}</p> : ""}
    </div>
  );
};

export default Project;
