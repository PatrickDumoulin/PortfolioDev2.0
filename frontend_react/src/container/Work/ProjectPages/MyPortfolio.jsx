import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './MyPortfolio.scss';

const MyPortfolio = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">My Portfolio<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              A modern, responsive portfolio website built with React and Framer Motion. This project showcases my work, skills, and experience through an interactive and visually appealing interface. The design focuses on user experience while maintaining performance and accessibility.
            </p>

            <motion.div className="app__project-img">
              <div className="image-container">
                <img 
                  src={images.portfolio}
                  alt="Portfolio Project"
                  className="project-thumbnail"
                />
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Responsive Design</li>
                <li>Smooth Animations</li>
                <li>Project Showcase</li>
                <li>Skills Visualization</li>
                <li>Dynamic Content</li>
                <li>Dark Theme</li>
                <li>Performance Optimized</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>React</span>
                <span>Framer Motion</span>
                <span>SCSS</span>
                <span>JavaScript</span>
                <span>React Router</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>Frontend Development</li>
                <li>UI/UX Design</li>
                <li>Animation Implementation</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
                <li>Component Architecture</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">2 Weeks (Personal Project)</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noreferrer" className="code-button">
                View Code
              </a>
              <a href="/" className="back-button">
                Back
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(MyPortfolio, 'project');
