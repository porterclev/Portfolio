import React from "react";
import "./ProjectTable";
import { Button } from "@mui/material";

const Project = ({ project, onToggle }) => {
  return (
    /* Defining Variables initialized in PorjectTable */
    <div className="project">
      {/* Project Icon */}
      <img src={project.Icon} className="project-icon" />
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

        {project.expand === false ? (
          <Button onClick={() => onToggle(project.id)}>show more...</Button>
        ) : (
          <div>
            <p>{project.LongD}</p>
            <Button onClick={() => onToggle(project.id)}>show less...</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
