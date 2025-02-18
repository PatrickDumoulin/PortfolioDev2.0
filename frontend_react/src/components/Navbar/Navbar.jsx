import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  
  const getHref = (item) => {
    if (location.pathname !== '/') {
      return `/#${item}`;
    }
    return `#${item}`;
  };

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <a href={getHref(item)}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-social">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            style={{ opacity: 0 }}
            whileInView={{ x: [300, 0], opacity: [0.9, 1] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={getHref(item)} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
