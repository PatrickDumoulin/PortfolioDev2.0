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
    role: "FullStack Web Developer",
    founder: "Developer & Founder of 2 SaaS in AI & Automation",
    bio: "I'm Patrick, a passionate full-stack developer & SaaS founder based in Québec City. I specialize in building AI-powered applications, automation systems, and high-converting funnels. My expertise spans web development, AI integration, and business automation."
  },
  FR: {
    title: "LANGAGES & FRAMEWORKS",
    experience: "ANNÉES D'EXPÉRIENCE",
    role: "Développeur Web FullStack",
    founder: "Développeur & Fondateur de 2 SaaS en IA & Automation",
    bio: "Je suis Patrick, un développeur full-stack passionné & fondateur de SaaS basé à Québec. Je me spécialise dans la création d'applications propulsées par l'IA, de systèmes d'automation et de tunnels de conversion performants. Mon expertise couvre le développement web, l'intégration d'IA et l'automatisation d'entreprise."
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
