import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { images } from '../../../constants';
import './Bulky.scss';

const Bulky = () => {
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">BulkyBook<span>.</span></h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              A comprehensive book management system built with ASP.NET Core, featuring robust CRUD operations, user authentication, and role-based access control. This application demonstrates modern web development practices and secure data handling.
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4RZuedj6grU"
                  title="BulkyBook Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>User Authentication & Authorization</li>
                <li>Role-based Access Control</li>
                <li>Book Management System</li>
                <li>Shopping Cart Implementation</li>
                <li>Order Processing System</li>
                <li>Admin Dashboard</li>
                <li>Email Notifications</li>
                <li>Secure Payment Integration</li>
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-stack">
                <span>ASP.NET Core</span>
                <span>C#</span>
                <span>Entity Framework</span>
                <span>SQL Server</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>Azure</span>
              </div>
            </div>

            <div className="app__project-skills">
              <h3>Skills Developed:</h3>
              <ul>
                <li>Full Stack Development</li>
                <li>Database Design</li>
                <li>Authentication Systems</li>
                <li>Payment Integration</li>
                <li>Cloud Deployment</li>
                <li>Security Best Practices</li>
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>Project Duration:</h3>
              <p className="p-text">2 Months (Personal Project)</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/PatrickDumoulin/Bulky" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(Bulky, 'project');
