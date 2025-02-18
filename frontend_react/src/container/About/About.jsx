import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./About.scss";

const abouts = [
  {
    title: "Backend Development",
    description: "Expertise in building robust server-side applications with C# and ASP.NET Core. Proficient in database management with Entity Framework Core, SQL Server, and MySQL. Experience in developing RESTful APIs and Node.js applications.",
    skills: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server, MySQL",
      "REST APIs",
      "Node.js"
    ],
    imgUrl: images.DALLE_BackEnd
  },
  {
    title: "Frontend Development",
    description: "Skilled in modern frontend frameworks and libraries, with a focus on creating responsive and interactive user interfaces. Strong foundation in TypeScript and JavaScript, with expertise in various CSS frameworks.",
    skills: [
      "React, Next.js",
      "TypeScript, JavaScript",
      "HTML5, CSS3, SASS",
      "Tailwind CSS, Bootstrap",
      "Angular, Vue.js",
      "WordPress, Elementor"
    ],
    imgUrl: images.DALLE_FrontEnd
  },
  {
    title: "AI",
    description: "Experienced in implementing AI solutions using various tools and frameworks. Proficient in working with large language models and AI-assisted development tools.",
    skills: [
      "ML.Net",
      "GPT-4, Claude 3.5 Sonnet",
      "Cursor",
      "MidJourney"
    ],
    imgUrl: images.DALLE_AI
  },
  {
    title: "Cloud & DevOps",
    description: "Strong background in cloud services and DevOps practices. Experienced in implementing CI/CD pipelines and managing cloud infrastructure using various platforms and tools.",
    skills: [
      "Azure, DevOps",
      "CI/CD Pipelines",
      "YAML, Docker",
      "Git, GitHub",
      "Vercel, Firebase, Appwrite",
      "Agile, Jira"
    ],
    imgUrl: images.DALLE_Cloud
  },
  {
    title: "Game Development",
    description: "Passionate about game development with experience in multiple game engines and programming languages. Skilled in creating immersive gaming experiences.",
    skills: [
      "Unity",
      "Unreal Engine",
      "C++"
    ],
    imgUrl: images.DALLE_Game
  },
  {
    title: "Mobile Development",
    description: "Experienced in cross-platform mobile app development using modern frameworks and tools. Skilled in creating responsive and native-like mobile applications.",
    skills: [
      "React Native",
      "MAUI",
      "Framer Motion",
      "NativeWind",
    ],
    imgUrl: images.DALLE_Mobile
  },
  {
    title: "Creative Tools",
    description: "Proficient in various creative software tools for design, video editing, and 3D modeling. Experienced in creating engaging visual content and user interfaces.",
    skills: [
      "Premiere Pro",
      "Photoshop",
      "After Effects",
      "Figma",
      "Blender",
      "Ableton Live"
    ],
    imgUrl: images.DALLE_Creative
  },
  
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span className="white-text">My</span> <span>Expertise</span> <br />
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <div className="skills-container">
              <ul className="skills-list">
                {about.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="skill-dot"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
