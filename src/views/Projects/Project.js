import React from "react";
import "./ProjectTable";
import { Button } from "@mui/material";

const Project = ({ project, onToggle }) => {
  return (
    /* Defining Variables initialized in PorjectTable */
    <div className="project">
      {/* Project Icon */}
      <img
        src={project.Icon}
        className="project-icon"
        onClick={() => onToggle(project.id)}
      />
      {/* Main Project Box */}
      <div className="project-box">
        <div className="header-box">
          {/* Header of Project */}
          <h4>{project.Prod}</h4>
          <Button
            variant="outlined"
            color="success"
            className="buttom"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = project.demo;
            }}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="buttom"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = project.git;
            }}
          >
            GitHub
          </Button>
        </div>

        {/* short description */}
        <p>{project.ShortD}</p>

        {/* shows long description on click */}
        {project.expand ? <p>{project.LongD}</p> : ""}
      </div>
    </div>
  );
};

export default Project;
