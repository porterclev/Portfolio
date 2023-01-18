import React from "react";
import Project from "./Project";

const Projectlist = ({ projects, onToggle }) => {
  return (
    <>
      {/* places given projects into an array */}
      {projects.map((project) => (
        <Project key={project.id} project={project} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Projectlist;
