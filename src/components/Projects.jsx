import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaArrowRight, FaVideo, FaPalette, FaCode } from 'react-icons/fa';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const projectCategories = [
    {
      type: 'frontend',
      icon: <FaCode />,
      title: translations[language].frontend,
      projects: [
        { 
          id: 1, 
          title: translations[language].portfolioProjects,
          tech: 'React, Tailwind, Vite',
          description: language === 'en' 
            ? 'Modern portfolio websites with dark mode' 
            : 'Modern portfólió weboldalak sötét móddal'
        },
        { 
          id: 2, 
          title: translations[language].ecommerceProjects,
          tech: 'React, Node.js, MongoDB',
          description: language === 'en' 
            ? 'Full-featured online stores' 
            : 'Teljes értékű online áruházak'
        },
      ]
    },
    {
      type: 'video',
      icon: <FaVideo />,
      title: translations[language].videoEditing,
      projects: [
        { 
          id: 1, 
          title: translations[language].gameplayEdits,
          tech: 'After Effects, DaVinci',
          description: language === 'en' 
            ? 'Fast-paced gameplay montages' 
            : 'Gyors tempójú gameplay montázsok'
        },
        { 
          id: 2, 
          title: translations[language].montageEdits,
          tech: 'After Effects, DaVinci',
          description: language === 'en' 
            ? 'Music-synced video edits' 
            : 'Zenéhez szinkronizált videó szerkesztések'
        },
        { 
          id: 3, 
          title: translations[language].customVideos,
          tech: 'DaVinci, After Effects, Capcut',
          description: language === 'en' 
            ? 'Custom video editing projects' 
            : 'Egyedi videó szerkesztési projektek'
        },
      ]
    },
    {
      type: 'design',
      icon: <FaPalette />,
      title: translations[language].design,
      projects: [
        { 
          id: 1, 
          title: translations[language].logoDesign,
          tech: 'Canva, Adobe Express',
          description: language === 'en' 
            ? 'Complete logo design packages' 
            : 'Teljes logó design csomagok'
        },
        { 
          id: 2, 
          title: translations[language].graphicDesign,
          tech: 'Procreate, Photoshop',
          description: language === 'en' 
            ? 'Social media graphics and designs' 
            : 'Közösségi média grafikák és designok'
        },
        { 
          id: 3, 
          title: 'Digital Art',
          tech: 'Procreate, Digital Painting',
          description: language === 'en' 
            ? 'Digital illustrations and artwork(banner, logo etc.)' 
            : 'Digitális illusztrációk és művészet(banner, logo stb.)'
        },
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{translations[language].projects}</h2>
          <div className={`h-1 w-24 mx-auto ${theme === 'dark' ? 'bg-red-500' : 'bg-red-600'}`}></div>
        </div>

        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-zinc-800 text-red-400' : 'bg-red-100 text-red-600'}`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.projects.map((project, projIndex) => (
                <div 
                  key={projIndex}
                  className={`group rounded-xl border-2 p-6 transition-all duration-500 hover:scale-[1.02] ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'border-gray-200 bg-white hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]'}`}
                >
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-zinc-800 text-red-300' : 'bg-orange-100 text-orange-700'}`}>
                      {project.tech}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <Link 
                    to={`/project/${category.type}/${project.id}`}
                    className={`inline-flex items-center gap-2 font-semibold transition-all ${theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-orange-600 hover:text-orange-500'}`}
                  >
                    {translations[language].viewDetails}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;