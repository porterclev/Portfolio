import "./ProjectTable.css";
import Projects from "./Projects";
import { useState } from "react";
import Bot from "./assets/discord-bot-icon.jpg";
import DnD from "./assets/DnD.jpg";
import threexplus1 from "./assets/3xplus1.jpg";
import Hack1 from "./assets/Hack1.png";
import bh from "./assets/beachhack.png";
import game from "./assets/game.png";
import db from "./assets/database.png";
import sync from "./assets/synch.png";
const ProjectTable = () => {
  //Defined Project Table
  const [personalProjects, setPersonalProjects] = useState([
    {
      //Project Icon
      Icon: Bot,
      //Project Title
      Prod: "Discord Bot",
      //Project Description
      ShortD: (
        <>
          This ongoing passion project is a discord bot with over{" "}
          <b>80+ active users</b>. Using Discord's API, the bot interacts with
          the users in the form of commands or basic conversation.
          <br />
        </>
      ),
      LongD: (
        <>
          This bot is primary coded in <b>Javascript</b> using a custom file
          management system. The hosting service used is <b>AWS</b>. Backend is
          coded using <b>PHP</b> to a <b>MySQL</b> database shared with the
          website used to host the game below.
        </>
      ),
      //Project id
      id: 1,
      //Expand bool
      expand: false,
      git: "https://github.com/porterclev/Discord-Bot",
      demo: "https://youtu.be/RBvTxvsq3uo",
    },
    {
      Icon: game,
      Prod: "Discord Game",
      ShortD: (
        <>
          Multiplayer Isometric Game that connects users from discord into a
          shared world with loot, combat, and PVE gameplay. The game is made
          hosted on a website made with <b>Laravel</b>, <b>PHP</b>, <b>MySQL</b>
          , <b>React.js</b>, and <b>Unity</b>.
        </>
      ),
      LongD: (
        <>
          The current form of the game is only a dungeons and dragons dice
          movement system. The player rolls three die and gets to move within
          the returned number range.{" "}
        </>
      ),
      id: 2,
      expand: false,
      git: "https://github.com/porterclev/Discord-Bot-Webpage",
      demo: "https://youtu.be/562AznwK8Wc",
    },
  ]);

  const [collegeProjects, setCollegeProjects] = useState([
    {
      Icon: db,
      Prod: "University Enrollment System",
      ShortD: (
        <>
          A fully functional student enrollment system for a university. This was made using
          a <b>PostgreSQL</b> database and <b>Python</b> frontend/backend console system.
        </>
      ),
      LongD: (
        <>
          The system allows for students to  be assigned a major and department. They are able to enroll in
          courses in that department along with a one section per course. The system logs whether the student chose
          a pass/fail or letter grading system. Not only does the system log student information, but faculty information as well.
          Professors are assigned to a course along with an office and department.
        </>
      ),
      id: 5,
      expand: false,
      git: "https://github.com/porterclev/Student-Enrollment-System",
      demo: "",
    },
    {
      Icon: sync,
      Prod: "Process Syncronization Demo",
      ShortD: (
        <>
          Five assignments that were worked on throughout my journey through Operating Systems. These
          assignments were primarly made using <b>C</b>, <b>C++</b>, and <b>Linux</b>.
        </>
      ),
      LongD: (
        <>
          These assignments are meant to demonstrate parent and child synchronization techniques to prevent deadlocks and race conditons.
        </>
      ),
      id: 6,
      expand: false,
      git: "https://github.com/porterclev/Master-Slave",
      demo: "",
    },
    {
      Icon: DnD,
      Prod: "Dungeons and Dragons RPG Game",
      ShortD: (
        <>
          A small dungeon crawler game in the terminal made for an OOP
          <b> java</b> app development course. You go through each level looking
          for a key to unlock the door to the next level. Each spot has a chance
          to encounter a monster or find loot.
          <br />
        </>
      ),
      LongD: (
        <>
          The The game allows you to create a character and fight Goblins, Orcs,
          Giant Rats, Trolls, etc. that have randomly generated stats, loot, and
          classes (ranger, warrior, or wizard). The maps are custom made and
          have up to three levels.
          <br />
        </>
      ),
      id: 7,
      expand: false,
      git: "https://github.com/porterclev/DnDGame",
      demo: "https://www.youtube.com/watch?v=jDAHkZrj-9k",
    },
    {
      Icon: threexplus1,
      Prod: "BigInt 3x + 1 Recursive Calculator",
      ShortD: (
        <>
          The final project in my Systems Programming course was to create a
          recurisive calculator to show all the steps of any number in the 3x +
          1 sequence.
          <br />
        </>
      ),
      LongD: (
        <>
          The calculator was made using <b>C++</b> and a custom BigInt class to
          get around overflow and implemented in a <b>linux</b> system.
        </>
      ),
      id: 8,
      expand: false,
      git: "https://github.com/porterclev/BigInt-3x-plus-1",
      demo: "https://youtu.be/sUYAR0F05D8",
    },
    // {
    //   Icon: threexplus1,
    //   Prod: "Bookstore/Calculator Application",
    //   ShortD: (
    //     <>

    //     </>
    //   ),
    //   LongD: (
    //     <>

    //     </>
    //   ),
    //   id: 9,
    //   expand: false,
    //   git: "",
    //   demo: "",
    // },
  ]);

  const [competitionProjects, setCompetitionProjects] = useState([
    {
      Icon: bh,
      Prod: "BeachHacks 7.0 Competition Page",
      ShortD: (
        <>
          A club I'm apart of at my University was hosting a anual hackathon. We
          created a landing page for people in the University or in the
          surrounding area could sign up and attend. The website was built using{" "}
          <b>React.js</b>.
        </>
      ),
      LongD: (
        <>
          The team consisted of a software development core, busniss core, and
          design core that all worked together to make the event possible. I was
          apart of the software development core and was assigned to make the
          FAQ portion or the website.
        </>
      ),
      id: 10,
      expand: false,
      git: "https://github.com/BeachHacks/BeachHacks-Website-2023",
      demo: "https://beachhacks.com/",
    },
    {
      Icon: Hack1,
      Prod: "BeachHacks 2023 Submission",
      ShortD: (
        <>
          The concept of our submission was to create a website app for fitness
          or gym instructors to market and message their service. The Website
          was made using <b>React.js</b>, <b>firebase</b>, <b>python</b>,{" "}
          <b>tailwind</b>, <b>Google Maps API</b>.
        </>
      ),
      LongD: (
        <>
          The idea was that someone could mark the location as a specific type
          of gym (yoga, crossfit, etc.) and make it easy for people to find what
          service they wanted. The website would have a built in messaging
          system, gym browser, and health statistics page.
        </>
      ),
      id: 11,
      expand: false,
      git: "https://github.com/c00lme/Nuclei",
    },
  ]);

  const togglePersonalProject = (id) => {
    setPersonalProjects(
      personalProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };
  const toggleCollegeProject = (id) => {
    setCollegeProjects(
      collegeProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };
  const toggleCompetitionProject = (id) => {
    setCompetitionProjects(
      competitionProjects.map((project) =>
        project.id === id ? { ...project, expand: !project.expand } : project
      )
    );
  };

  return (
    <section className="projects-container">
      {/* Header */}

      <h1>Personal Projects</h1>

      {/* Table */}
      <div className="project-table">
        {personalProjects.length > 0 ? (
          <Projects
            projects={personalProjects}
            onToggle={togglePersonalProject}
          />
        ) : (
          "None"
        )}
      </div>

      <h1>College Course Projects</h1>
      <div className="project-table">
        {collegeProjects.length > 0 ? (
          <Projects
            projects={collegeProjects}
            onToggle={toggleCollegeProject}
          />
        ) : (
          "None"
        )}
      </div>

      <h1>Competitions/Contributions</h1>
      <div className="project-table">
        {competitionProjects.length > 0 ? (
          <Projects
            projects={competitionProjects}
            onToggle={toggleCompetitionProject}
          />
        ) : (
          "None"
        )}
      </div>
    </section>
  );
};

export default ProjectTable;
