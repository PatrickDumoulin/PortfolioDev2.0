import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './AnimalSpecies.scss';

const AnimalSpecies = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">Animal Species Classifier<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              An advanced machine learning application built with ML.NET and React, capable of classifying animal species from images. This project demonstrates the integration of AI/ML capabilities with modern web technologies for practical applications.
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/J0W-rCyOOgY"
                  title="Animal Species Classifier Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Image Classification</li>
                <li>Real-time Processing</li>
                <li>Species Database</li>
                <li>Interactive UI</li>
                <li>ML Model Integration</li>
                <li>Data Visualization</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>ML.NET</span>
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>React</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>Machine Learning</li>
                <li>Data Processing</li>
                <li>API Development</li>
                <li>Frontend Development</li>
                <li>Model Training</li>
                <li>System Integration</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">2 Months (Personal Project)</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/PatrickDumoulin/Animal-Species-Classifier.git" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(AnimalSpecies, 'project');
