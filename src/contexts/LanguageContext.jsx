import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      frontend: 'Frontend Development',
      videoEditing: 'Video Editing',
      design: 'Graphic Design',
      viewProject: 'View Project',
      backToHome: 'Back to Home',
      projectDetails: 'Project Details',
      description: 'Description',
      technologies: 'Technologies',
      features: 'Features',
      liveDemo: 'Live Demo',
      challengesAndSolutions: 'Challenges & Solutions',
      challenges: 'Challenges',
      solutions: 'Solutions',
      sendMessage: 'Send Message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      discord: 'Discord',
      heroTitle: 'Frontend Developer & Video Editor',
      heroSubtitle: 'Creating stunning websites and engaging video content',
      aboutTitle: 'About Me',
      aboutText1: 'I am a passionate beginner Frontend Developer and a Video Editor with years of experience specializing in creating responsive portfolio websites and e-commerce platforms. With expertise in modern web technologies and video editing software.',
      aboutText2: 'I create engaging gameplay edits, montages, and custom video content using After Effects, DaVinci Resolve, and CapCut. For design work, I use Canva, Adobe Express, Procreate, and Photoshop to create logos and graphics.',
      skillsTitle: 'My Skills',
      contactTitle: 'Get In Touch',
      contactText: 'Have a project or need video editing? Contact me on Discord or send an email!',
      copyright: '© 2025 Portfolio. All rights reserved.',
      viewDetails: 'View Details',
      portfolioProjects: 'Portfolio Websites',
      ecommerceProjects: 'E-commerce Websites',
      gameplayEdits: 'Gameplay Edits',
      montageEdits: 'Montage Edits',
      customVideos: 'Custom Videos',
      logoDesign: 'Logo Design',
      graphicDesign: 'Graphic Design'
    },
    hu: {
      home: 'Kezdőlap',
      about: 'Rólam',
      projects: 'Projektek',
      skills: 'Készségek',
      contact: 'Kapcsolat',
      frontend: 'Frontend Fejlesztés',
      videoEditing: 'Videó Szerkesztés',
      design: 'Grafikai Design',
      viewProject: 'Projekt Megtekintése',
      backToHome: 'Vissza a kezdőlapra',
      projectDetails: 'Projekt Részletek',
      description: 'Leírás',
      technologies: 'Technológiák',
      features: 'Funkciók',
      liveDemo: 'Élő Demó',
      challengesAndSolutions: 'Kihívások és Megoldások',
      challenges: 'Kihívások',
      solutions: 'Megoldások',
      sendMessage: 'Üzenet Küldése',
      name: 'Név',
      email: 'Email',
      message: 'Üzenet',
      discord: 'Discord',
      heroTitle: 'Frontend Fejlesztő & Videó Szerkesztő',
      heroSubtitle: 'Lenyűgöző weboldalak és lebilincselő videó tartalmak készítése',
      aboutTitle: 'Rólam',
      aboutText1: 'Szenvedélyes Frontend Fejlesztő és Videó Szerkesztő vagyok, aki reszponzív portfolio weboldalakra és e-commerce platformokra specializálódott. Szakértelmem magában foglalja a modern web technológiákat és videó szerkesztő szoftvereket.',
      aboutText2: 'Érdekes gameplay szerkesztéseket, montázsokat és egyedi videó tartalmakat készítek After Effects, DaVinci Resolve és CapCut használatával. Design munkákhoz Canva, Adobe Express, Procreate és Photoshop alkalmazásokat használok logók és grafikák készítéséhez.',
      skillsTitle: 'Készségeim',
      contactTitle: 'Lépj Velem Kapcsolatba',
      contactText: 'Van egy projekt ötleted vagy videó szerkesztésre van szükséged? Keress Discord-on vagy küldj emailt!',
      copyright: '© 2024 Portfolio. Minden jog fenntartva.',
      viewDetails: 'Részletek',
      portfolioProjects: 'Portfólió Weboldalak',
      ecommerceProjects: 'E-commerce Weboldalak',
      gameplayEdits: 'Gameplay Szerkesztések',
      montageEdits: 'Montázs Szerkesztések',
      customVideos: 'Egyedi Videók',
      logoDesign: 'Logó Design',
      graphicDesign: 'Grafikai Design'
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hu' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};