import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useLanguage } from '../../context/LanguageContext';
import "./About.scss";

const translations = {
  EN: {
    title: ["My", "Expertise"],
    sections: {
      backend: {
        title: "Backend Development",
        description: "Expertise in building robust server-side applications with C# and ASP.NET Core. Proficient in database management with Entity Framework Core, SQL Server, and MySQL. Experience in developing RESTful APIs and Node.js applications."
      },
      frontend: {
        title: "Frontend Development",
        description: "Skilled in modern frontend frameworks and libraries, with a focus on creating responsive and interactive user interfaces. Strong foundation in TypeScript and JavaScript, with expertise in various CSS frameworks."
      },
      ai: {
        title: "Artificial Intelligence & Automation",
        description: "Specialized in implementing AI solutions and automation systems. Experienced in developing chatbots, voice assistants, and process automation using cutting-edge AI technologies and tools."
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "Strong background in cloud services and DevOps practices. Experienced in implementing CI/CD pipelines and managing cloud infrastructure using various platforms and tools."
      },
      game: {
        title: "Game Development",
        description: "Passionate about game development with experience in multiple game engines and programming languages. Skilled in creating immersive gaming experiences."
      },
      mobile: {
        title: "Mobile Development",
        description: "Experienced in cross-platform mobile app development using modern frameworks and tools. Skilled in creating responsive and native-like mobile applications."
      },
      creative: {
        title: "Creative Tools",
        description: "Proficient in various creative software tools for design, video editing, and 3D modeling. Experienced in creating engaging visual content and user interfaces."
      }
    }
  },
  FR: {
    title: ["Mon", "Expertise"],
    sections: {
      backend: {
        title: "Développement Backend",
        description: "Expert dans la création d'applications serveur robustes avec C# et ASP.NET Core. Compétent en gestion de bases de données avec Entity Framework Core, SQL Server et MySQL. Expérience dans le développement d'APIs RESTful et d'applications Node.js."
      },
      frontend: {
        title: "Développement Frontend",
        description: "Spécialisé dans les frameworks et bibliothèques frontend modernes, avec un accent sur la création d'interfaces utilisateur réactives et interactives. Solide base en TypeScript et JavaScript, avec expertise dans divers frameworks CSS."
      },
      ai: {
        title: "Intelligence Artificielle & Automation",
        description: "Spécialisé dans l'implémentation de solutions d'IA et de systèmes d'automatisation. Expérimenté dans le développement de chatbots, assistants vocaux et l'automatisation des processus utilisant les technologies et outils d'IA de pointe."
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "Solide expérience en services cloud et pratiques DevOps. Expérimenté dans l'implémentation de pipelines CI/CD et la gestion d'infrastructure cloud utilisant diverses plateformes et outils."
      },
      game: {
        title: "Développement de Jeux",
        description: "Passionné par le développement de jeux avec expérience dans plusieurs moteurs de jeu et langages de programmation. Compétent dans la création d'expériences de jeu immersives."
      },
      mobile: {
        title: "Développement Mobile",
        description: "Expérimenté dans le développement d'applications mobiles multiplateformes utilisant des frameworks et outils modernes. Compétent dans la création d'applications mobiles réactives et natives."
      },
      creative: {
        title: "Outils Créatifs",
        description: "Maîtrise de divers outils logiciels créatifs pour le design, l'édition vidéo et la modélisation 3D. Expérimenté dans la création de contenu visuel et d'interfaces utilisateur engageantes."
      }
    }
  }
};

const abouts = [
  {
    key: "ai",
    categories: [
      {
        nameEN: "AI Chatbots & Voice Bots",
        nameFR: "Chatbots & Voice Bots AI",
        skills: ["OpenAI GPT", "ElevenLabs", "Twilio", "Botpress", "ManyChat"]
      },
      {
        nameEN: "No-Code & Low-Code Automation",
        nameFR: "Automatisation No-Code & Low-Code",
        skills: ["n8n", "Zapier", "Make", "Uncanny Automator"]
      },
      {
        nameEN: "AI & Business Process Automation",
        nameFR: "AI & Automatisation de Processus Métier",
        skills: ["OpenAI API", "Claude 3.5"]
      },
      {
        nameEN: "AI Content Generation",
        nameFR: "Génération de Contenu AI",
        skills: ["MidJourney", "DALL·E", "Stable Diffusion"]
      },
      {
        nameEN: "Machine Learning & Data AI",
        nameFR: "Machine Learning & Data AI",
        skills: ["ML.Net"]
      },
      {
        nameEN: "AI Development & Optimization Tools",
        nameFR: "Outils d'Optimisation & Développement AI",
        skills: ["Cursor", "Auto-GPT", "ChatGPT Plugins"]
      }
    ],
    imgUrl: images.DALLE_AI
  },
  {
    key: "backend",
    skills: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server, MySQL", "REST APIs", "Node.js"],
    imgUrl: images.DALLE_BackEnd
  },
  {
    key: "frontend",
    skills: ["React, Next.js", "TypeScript, JavaScript", "HTML5, CSS3, SASS", "Tailwind CSS, Bootstrap", "Angular, Vue.js", "WordPress, Elementor"],
    imgUrl: images.DALLE_FrontEnd
  },
  
  {
    key: "cloud",
    skills: ["Azure, DevOps", "CI/CD Pipelines", "YAML, Docker", "Git, GitHub", "Vercel, Firebase, Appwrite", "Agile, Jira"],
    imgUrl: images.DALLE_Cloud
  },
  {
    key: "game",
    skills: ["Unity", "Unreal Engine", "C++"],
    imgUrl: images.DALLE_Game
  },
  {
    key: "mobile",
    skills: ["React Native", "MAUI", "Framer Motion", "NativeWind"],
    imgUrl: images.DALLE_Mobile
  },
  {
    key: "creative",
    skills: ["Premiere Pro", "Photoshop", "After Effects", "Figma", "Blender", "Ableton Live", "Office 365"],
    imgUrl: images.DALLE_Creative
  }
];

const About = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="head-text">
        {translations[language].title[0]}{" "}
        <span>{translations[language].title[1]}</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.key + index}
            data-category={about.key}
          >
            <img src={about.imgUrl} alt={translations[language].sections[about.key].title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {translations[language].sections[about.key].title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {translations[language].sections[about.key].description}
            </p>
            <div className="skills-container">
              {about.key === "ai" ? (
                about.categories.map((category, catIndex) => (
                  <div key={catIndex} className="skill-category">
                    <h3 className="category-title">
                      {language === 'EN' ? category.nameEN : category.nameFR}
                    </h3>
                    <ul className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="skill-item"
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul className="skills-list">
                  {about.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="skill-item"
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
