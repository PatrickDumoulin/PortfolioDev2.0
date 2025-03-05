import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useLanguage } from '../../context/LanguageContext';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const translations = {
  EN: {
    title: ["Education &", "Experience"],
    education: {
      title: "Education",
      items: [
        {
          name: "AEC Secure Application Development",
          institution: "Cégep Limoilou",
          period: "2022-2024",
          description: "1800-hour intensive training focused on secure web and mobile application development. Learning programming best practices, security principles, and modern web development technologies."
        },
        {
          name: "IT Support Training",
          institution: "COLLEGE MARIE-ROLLET",
          period: "2021-2022",
          description: "IT troubleshooting and network management. Implementation of IT solutions and network infrastructure."
        },
        {
          name: "AEC Business Launch",
          institution: "Centre Maurice-Barbeau",
          period: "2016",
          description: "Business launch training focused on entrepreneurship fundamentals and business development strategies."
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          name: "AI Integration Expert & Founder",
          role: "Sonoria AI",
          period: "2024 - Present",
          description: "Development and integration of an AI Voice Bot for call automation and customer management in auto repair shops. Implementation of AI-powered chatbots & voice bots using OpenAI API, ElevenLabs, and Twilio. Business process automation through n8n, Zapier, and no-code/low-code integrations."
        },
        {
          name: "Software Developer",
          role: "ACEF de Québec (Contract)",
          period: "2024",
          description: "Development of a secure web application replacing an Excel-based system. Design of a client and intervention management system. Technologies: .NET Core, ASP.NET MVC, C#, SQL Server."
        },
        {
          name: "Web Developer",
          role: "Freelance",
          period: "2022 - Present",
          description: "Creation of optimized websites for automation and SEO (WordPress, React, Next.js). Integration of AI solutions and automated sales funnels. Collaboration with entrepreneurs and professionals to improve their digital presence."
        },
        {
          name: "Co-Founder & Technical Manager",
          role: "Productions BRB",
          period: "2019 - 2023",
          description: "Creation and management of an event company specializing in mobile shows and artist management. Organization and management of 500+ events for clients across Quebec. Implementation of digital solutions for event management and reservations. Management of social media and digital communication to optimize visibility and engagement. Development of internal tools for partner management and operations optimization. Management of contracts, commercial prospecting and process optimization."
        }
      ]
    }
  },
  FR: {
    title: ["Formation &", "Expérience"],
    education: {
      title: "Formation",
      items: [
        {
          name: "AEC Développement d'Applications Sécurisées",
          institution: "Cégep Limoilou",
          period: "2022-2024",
          description: "Formation intensive de 1800 heures axée sur le développement d'applications web et mobiles sécurisées. Apprentissage des meilleures pratiques de programmation, des principes de sécurité et des technologies de développement web modernes."
        },
        {
          name: "Formation en Soutien Informatique",
          institution: "COLLEGE MARIE-ROLLET",
          period: "2021-2022",
          description: "Résolution de problématiques informatiques et gestion de réseaux. Mise en place de solutions informatiques et d'infrastructures réseau."
        },
        {
          name: "AEC Lancement d'Entreprise",
          institution: "Centre Maurice-Barbeau",
          period: "2016",
          description: "Formation en lancement d'entreprise axée sur les fondamentaux de l'entrepreneuriat et les stratégies de développement d'entreprise."
        }
      ]
    },
    experience: {
      title: "Expérience",
      items: [
        {
          name: "Expert en Intégration AI & Fondateur ",
          role: "Sonoria AI",
          period: "2024 - Présent",
          description: "Développement et intégration d’un AI Voice Bot pour l'automatisation des appels et la gestion client dans les garages. Mise en place de solutions chatbots & voice bots AI avec OpenAI API, ElevenLabs et Twilio. Automatisation des processus métier via n8n, Zapier et intégrations no-code/low-code."
        },
        {
          name: "Développeur Logiciel",
          role: "ACEF de Québec (Contrat)",
          period: "2024",
          description: "Développement d'une application web sécurisée remplaçant un système Excel. Conception d'un système de gestion de clients et suivi des interventions. Technologies : .NET Core, ASP.NET MVC, C#, SQL Server."
        },
        {
          name: "Développeur Web",
          role: "Freelance",
          period: "2022 - Présent",
          description: "Création de sites web optimisés pour l'automatisation et le SEO (WordPress, React, Next.js). Intégration de solutions AI et funnels de vente automatisés. Collaboration avec entrepreneurs et professionnels pour améliorer leur présence digitale."
        },
        {
          name: "Co-Fondateur & Gestionnaire Technique",
          role: "Productions BRB",
          period: "2019 - 2023",
          description: "Création et gestion d'une entreprise événementielle spécialisée dans l'organisation de spectacles mobiles et la gestion d'artistes. Organisation et gestion de 500+ événements pour des clients à travers le Québec. Mise en place de solutions digitales pour la gestion des événements et des réservations. Gestion des médias sociaux et de la communication digitale pour optimiser la visibilité et l'engagement. Développement d'outils internes pour la gestion des partenaires et l'optimisation des opérations. Gestion des contrats, prospection commerciale et optimisation des processus internes."
        }
      ]
    }
  }
};

const Skills = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="head-text">
        {translations[language].title[0]}{" "}
        <span>{translations[language].title[1]}</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__education-list">
          <h3 className="section-title">{translations[language].education.title}</h3>
          {translations[language].education.items.map((edu) => (
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
          <h3 className="section-title">{translations[language].experience.title}</h3>
          {translations[language].experience.items.map((work) => (
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