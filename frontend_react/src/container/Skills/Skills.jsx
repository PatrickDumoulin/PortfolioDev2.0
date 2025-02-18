import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const education = [
  {
    name: "AEC Secure Application Development",
    institution: "Cégep Limoilou",
    period: "2022-2024",
    description: "1800-hour intensive training focused on secure web and mobile application development. Learning programming best practices, security principles, and modern web development technologies."
  }
];

const experiences = [
  {
    name: "ACEF De Québec",
    role: "Full Stack Developer (Contract)",
    period: "2024",
    description: "Development of a complete web application for managing budget consultations. Technologies used: ASP.NET Core, React, SQL Server.",
  }
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Education <span>& Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__education-list">
          <h3 className="section-title">Education</h3>
          {education.map((edu) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-item app__flex"
              key={edu.name}
            >
              <div className="app__education-content">
                <h3 className="bold-text">{edu.name}</h3>
                <p className="p-text institution">{edu.institution}</p>
                <p className="p-text period">{edu.period}</p>
                <p className="p-text description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__experience-list">
          <h3 className="section-title">Experience</h3>
          {experiences.map((work) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__experience-item"
              key={work.name}
            >
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text role">{work.role}</p>
              <p className="p-text period">{work.period}</p>
              <p className="p-text description">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');