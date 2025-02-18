import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './SpaceGame.scss';

const SpaceGame = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">SpaceGame<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              A space-themed game developed with Unity, featuring dynamic combat mechanics, procedural level generation, and immersive gameplay elements. This project showcases advanced game development techniques and interactive design principles.
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qlJrzye2OLU"
                  title="SpaceGame Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Level Design</li>
                <li>SpaceShip design in blender</li>
                <li>Particle Effects & VFX</li>
                <li>Power-up System</li>
                <li>Score System</li>
                <li>Responsive Controls</li>
                <li>Sound Effects & Music design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>Unity</span>
                <span>C#</span>
                <span>Visual Studio 2022</span>
                <span>Git</span>
                <span>Blender</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>Game Development</li>
                <li>3D Modeling & Animation</li>
                <li>Performance Optimization</li>
                <li>UI/UX Design</li>
                <li>Version Control</li>
                <li>Project Architecture</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">3 Months (Personal Project)</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/PatrickDumoulin/Space-Game" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(SpaceGame, 'project');
