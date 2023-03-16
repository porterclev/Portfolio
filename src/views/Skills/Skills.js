import "./Skills.css";
import { Button, ButtonGroup } from "@mui/material";
import Langs from "./Langs";
import { useState } from "react";
const Skills = () => {
  const [langs, useLang] = useState([
    { id: 2, name: "Java", proficiency: "high" },
    { id: 3, name: "Javascript", proficiency: "high" },
    { id: 1, name: "Python", proficiency: "intermediate" },
    { id: 4, name: "PHP", proficiency: "low" },
    { id: 5, name: "C++", proficiency: "low" },
  ]);

  return (
    <section className="skills-container">
      <h1>Skills</h1>
      <h2>Language Proficiency</h2>
      <div className="language-buttons">
        {langs.length > 0 ? <Langs langs={langs} onClick={() => {}} /> : "None"}
      </div>

      <h2>Frequently Used Tech</h2>
      <p>Insert another map</p>
      <p></p>
    </section>
  );
};

export default Skills;
