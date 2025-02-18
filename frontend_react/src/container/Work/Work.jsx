import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";
import DALLE_Mobile from "../../assets/DALLE_Mobile.png";

const projects = [
  {
    title: "ACEF De Québec",
    description: "ASP-NET",
    imgUrl: DALLE_Mobile,
    projectLink: "https://project1-link.com",
    codeLink: "https://github.com/your-username/project1",
    category: "Projets Clients"
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imgUrl: "/path/to/your/image2.jpg",
    projectLink: "https://project2-link.com",
    codeLink: "https://github.com/your-username/project2",
    category: "Projets Perso"
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      if (item === 'Tous') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((project) => project.category === item));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Mes <span>Projets</span>
      </h2>

      <div className="app__work-filter">
        {["Tous", "Projets Clients", "Projets Perso"].map(
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
          <div className="app__work-item app__flex" key={index}>
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
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
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
