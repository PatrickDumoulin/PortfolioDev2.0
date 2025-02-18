import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './ModernRecruit.scss';

const ModernRecruit = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">ModernRecruit<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              A modern recruitment platform built with ASP.NET Core, featuring advanced job matching algorithms, applicant tracking, and automated recruitment workflows. This application streamlines the hiring process with intuitive interfaces and powerful backend functionality.
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8pRRcjN07Vg"
                  title="ModernRecruit Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Advanced Job Matching</li>
                <li>Applicant Tracking System</li>
                <li>Resume Parsing</li>
                <li>Interview Scheduling</li>
                <li>Automated Workflows</li>
                <li>Analytics Dashboard</li>
                <li>Email Integration</li>
                <li>Multi-tenant Architecture</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>ASP.NET Core</span>
                <span>C#</span>
                <span>Entity Framework</span>
                <span>SQL Server</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Azure</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>System Architecture</li>
                <li>Database Design</li>
                <li>API Development</li>
                <li>Cloud Services</li>
                <li>Performance Optimization</li>
                <li>Security Implementation</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">4 Months (Personal Project)</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/PatrickDumoulin/ModernRecruit" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(ModernRecruit, 'project');
