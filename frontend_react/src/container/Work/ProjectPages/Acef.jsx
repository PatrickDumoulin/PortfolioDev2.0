import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './Acef.scss';

const Acef = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">ACEF De Québec<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              The Cooperative Association of Family Economics of Quebec (ACEF of Quebec) project involved developing a software solution to replace their Excel-based system, implementing data manipulation and query mechanisms. The solution securely stores data in a relational database and provides comprehensive tools for client management.
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/E5vh8U33VEk"
                  title="ACEF Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Client Account Management</li>
                <li>Intervention Management</li>
                <li>Workshop Management</li>
                <li>Attachment System</li>
                <li>Comment System</li>
                <li>Master Data Management</li>
                <li>Custom Report Generation</li>
                <li>Data Analytics Dashboard</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>ASP.NET Core 6.0</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>Entity Framework Core</span>
                <span>NInject</span>
                <span>Git</span>
                <span>Jira</span>
                <span>Scrum</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>Professional Client Interaction</li>
                <li>Application Design Collaboration</li>
                <li>Database Integration</li>
                <li>Team Development with Git/Scrum</li>
                <li>Testing & Deployment</li>
                <li>Client Solution Presentation</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">June to October 2024 (Temporary Contract)</p>
            </div>

            <div className="app__project-buttons">
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

export default AppWrap(Acef, 'project');
