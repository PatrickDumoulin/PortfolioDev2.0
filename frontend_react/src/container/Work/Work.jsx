import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "ACEF De Québec",
    description: "Application de gestion budgétaire",
    imgUrl: images.acef,
    projectLink: "/acef",
    codeLink: "https://github.com/yourusername/acef",
    category: "Client Projects",
    tech: "ASP.NET"
  },
  {
    title: "SpaceGame",
    description: "Un jeu spatial développé avec Unity",
    imgUrl: images.spacegame,
    projectLink: "/spacegame",
    codeLink: "https://github.com/yourusername/spacegame",
    category: "Personal Projects",
    tech: "Unity"
  },
  {
    title: "BulkyBook",
    description: "Application de gestion de livres",
    imgUrl: images.bulkybook,
    projectLink: "/bulkybook",
    codeLink: "https://github.com/yourusername/bulkybook",
    category: "Personal Projects",
    tech: "ASP.NET"
  },
  {
    title: "ModernRecruit",
    description: "Plateforme de recrutement moderne",
    imgUrl: images.modernRecruit,
    projectLink: "/modernrecruit",
    codeLink: "https://github.com/yourusername/modernrecruit",
    category: "Personal Projects",
    tech: "ASP.NET"
  },
  {
    title: "Animal Species",
    description: "Application d'analyse prédictive",
    imgUrl: images.AnimalSpecies,
    projectLink: "/asc",
    codeLink: "https://github.com/yourusername/asc",
    category: "Personal Projects",
    tech: "ML.NET + React"
  },
  {
    title: "My Portfolio",
    description: "Mon portfolio personnel",
    imgUrl: images.portfolio,
    projectLink: "/portfolio",
    codeLink: "https://github.com/yourusername/portfolio",
    category: "Personal Projects",
    tech: "React"
  },
  
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      if (item === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((project) => project.category === item));
      }
    }, 500);
  };

  const handleProjectClick = (projectLink) => {
    if (projectLink) {
      navigate(projectLink);
    }
  };

  return (
    <>
      <h2 className="head-text">
        Mes <span>Projets</span>
      </h2>

      <div className="app__work-filter">
        {["All", "Client Projects", "Personal Projects"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__work-portfolio"
      >
        {filteredProjects.map((project, index) => (
          <div 
            className="app__work-item app__flex" 
            key={index}
            onClick={() => handleProjectClick(project.projectLink)}
            style={{ cursor: 'pointer' }}
          >
            <div className="app__work-img app__flex">
              <img src={project.imgUrl} alt={project.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
              <p className="tech-text">{project.tech}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
