import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 100 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vite', level: 80 },
        { name: 'React Router', level: 75 },
      ]
    },
    {
      category: 'Video Editing',
      skills: [
        { name: 'After Effects', level: 95 },
        { name: 'DaVinci Resolve', level: 100 },
        { name: 'CapCut', level: 95 },
        { name: 'Color Grading', level: 90 },
        { name: 'Motion Graphics', level: 90 },
        { name: 'Audio Syncing', level: 80 },
      ]
    },
    {
      category: 'Design Tools',
      skills: [
        { name: 'Canva', level: 95 },
        { name: 'Adobe Express', level: 80 },
        { name: 'Procreate', level: 100 },
        { name: 'Photoshop', level: 90 },
        { name: 'Logo Design', level: 95 },
        { name: 'Social Media Graphics', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{translations[language].skillsTitle}</h2>
          <div className={`h-1 w-24 mx-auto ${theme === 'dark' ? 'bg-red-500' : 'bg-orange-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'}`}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={theme === 'dark' ? 'text-red-400' : 'text-orange-600'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full rounded-full skill-bar ${theme === 'dark' ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.3)]'}`}
                        style={{ 
                          '--target-width': `${skill.level}%`,
                          width: `${skill.level}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;