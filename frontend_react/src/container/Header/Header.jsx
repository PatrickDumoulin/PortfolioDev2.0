import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useLanguage } from '../../context/LanguageContext';
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const translations = {
  EN: {
    title: "LANGUAGES & FRAMEWORKS",
    experience: "YEARS OF EXPERIENCE",
    role: "AI Integration Expert & Fullstack Developer",
    founder: "Developer & Founder of 2 SaaS in AI & Automation",
    bio: "With more than 3 years of experience in software development and AI integration, I specialize in building intelligent automated solutions: voice bots, chatbots, and AI-driven automation. I help businesses integrate and leverage AI to optimize their processes. In parallel, I have strong expertise in fullstack development with .NET & React. My approach combines technology and business strategy, with a strong focus on performance and user experience."
  },
  FR: {
    title: "LANGAGES & FRAMEWORKS",
    experience: "ANNÉES D'EXPÉRIENCE",
    role: "Expert en Intégration AI & Développeur Fullstack",
    founder: "Développeur & Fondateur de 2 SaaS en IA & Automation",
    bio: "Avec plus de 3 ans d’expérience en développement logiciel et en intégration AI, je me spécialise dans la création de solutions automatisées intelligentes : voice bots, chatbots et automatisations AI. j’aide les entreprises à intégrer et exploiter l’AI pour optimiser leurs processus. En parallèle, je possède une solide expertise en développement fullstack .NET & React. Mon approche combine technologie et stratégie business, avec un fort focus sur la performance et l’expérience utilisateur"

  }
};

const stats = [
  { titleKey: "title", value: 10, suffix: "+" },
  { titleKey: "experience", value: 3, suffix: "+" }
];

const Counter = ({ value, suffix, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().substring(0, 3));
    const incrementTime = 2000 / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <h2 className="counter-value">
        {count}
        {suffix}
      </h2>
      <p className="counter-title">{title}</p>
    </div>
  );
};

const Header = () => {
  const { language } = useLanguage();
  
  return (
    <div className="app__header app__flex">
      <div className="app__header-content">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <div style={{ marginLeft: 20 }}>
                <h1 className="head-text">Patrick Dumoulin</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">{translations[language].role}</p>
            </div>

            <div className="profile-img">
              <img src={images.Maphoto} alt="profile" />
            </div>

            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__header-stats"
            >
              {stats.map((stat, index) => (
                <Counter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  title={translations[language][stat.titleKey]}
                />
              ))}
            </motion.div>

            <motion.div
              variant={scaleVariants}
              whileInView={{ opacity: [0, 1] }}
              className="app__header-bio"
            >
              <p>{translations[language].bio}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
