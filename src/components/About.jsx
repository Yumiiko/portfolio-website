import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaBolt, FaCode, FaVideo, FaPaintBrush, FaRocket, FaBrain, FaLightbulb, FaTools } from 'react-icons/fa';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const skills = [
    { 
      icon: <FaCode />, 
      title: language === 'en' ? 'Frontend Development' : 'Frontend Fejlesztés', 
      description: language === 'en' ? 'React, Vite, Tailwind CSS' : 'React, Vite, Tailwind CSS',
      items: language === 'en' 
        ? ['React Components', 'Vite Build Tool', 'Tailwind Styling', 'Responsive Design']
        : ['React Komponensek', 'Vite Build Tool', 'Tailwind Stílus', 'Reszponzív Design']
    },
    { 
      icon: <FaVideo />, 
      title: language === 'en' ? 'Video Editing' : 'Videó Szerkesztés', 
      description: language === 'en' ? 'DaVinci Resolve, After Effects' : 'DaVinci Resolve, After Effects',
      items: language === 'en' 
        ? ['Color Grading', 'Motion Graphics', 'Audio Editing', 'Visual Effects']
        : ['Színezés', 'Mozgógrafika', 'Audio Szerkesztés', 'Vizuális Effektek']
    },
    { 
      icon: <FaPaintBrush />, 
      title: language === 'en' ? 'UI/UX Design' : 'UI/UX Design', 
      description: language === 'en' ? 'Figma, Adobe XD, Canva' : 'Figma, Adobe XD, Canva',
      items: language === 'en' 
        ? ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
        : ['Vázlat', 'Prototípus', 'Felhasználói Kutatás', 'Design Rendszer']
    },
    { 
      icon: <FaBrain />, 
      title: language === 'en' ? 'Fast Learner' : 'Gyors Tanuló', 
      description: language === 'en' ? 'Always exploring new tech' : 'Mindig új technológiákat fedezek fel',
      items: language === 'en' 
        ? ['Quick Adaptation', 'Problem Solving', 'Continuous Learning', 'Tech Exploration']
        : ['Gyors Adaptáció', 'Problémamegoldás', 'Folyamatos Tanulás', 'Tech Felfedezés']
    }
  ];

  const quickFacts = language === 'en' 
    ? [
        { icon: '⚡', text: '5+ years of experience' },
        { icon: '🎯', text: '50+ projects completed' },
        { icon: '🌍', text: 'Worked with clients worldwide' },
        { icon: '🚀', text: 'Always learning new technologies' },
        { icon: '💡', text: 'Creative problem solver' },
        { icon: '🤝', text: 'Strong collaboration skills' }
      ]
    : [
        { icon: '⚡', text: '5+ év tapasztalat' },
        { icon: '🎯', text: '50+ befejezett projekt' },
        { icon: '🌍', text: 'Világszerte dolgoztam ügyfelekkel' },
        { icon: '🚀', text: 'Mindig tanulok új technológiákat' },
        { icon: '💡', text: 'Kreatív problémamegoldó' },
        { icon: '🤝', text: 'Erős együttműködési készségek' }
      ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{translations[language].aboutTitle}</h2>
          <div className={`h-1 w-24 mx-auto ${theme === 'dark' ? 'bg-red-500' : 'bg-red-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {translations[language].aboutText1}
              </p>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {translations[language].aboutText2}
              </p>
            </div>
            
            {/* Quick Facts */}
            <div className={`p-8 rounded-xl border-2 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaBolt className={`text-2xl ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'} animate-flash`} />
                {language === 'en' ? 'Quick Facts' : 'Gyors Tények'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-100'}`}
                  >
                    <span className="text-2xl">{fact.icon}</span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {fact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-xl border-2 transition-all duration-500 hover:scale-105 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]' : 'border-gray-200 bg-white hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]'}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-zinc-800 text-red-400' : 'bg-red-100 text-red-600'}`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{skill.title}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-red-300' : 'text-red-700'} font-medium`}>
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <span className={`${theme === 'dark' ? 'text-red-500' : 'text-orange-500'}`}>•</span>
                      {item}
                    </div>
                  ))}
                </div>
                
                {/* Hover Indicator */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}></div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-1 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20' : 'bg-gradient-to-r from-red-100 to-orange-100'}`}>
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} border ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <FaRocket className={`text-2xl ${theme === 'dark' ? 'text-red-500' : 'text-orange-600'} animate-bounce`} />
                {language === 'en' ? 'Ready to Bring Your Ideas to Life?' : 'Készen Állsz Életre Kelteni Az Ötleteidet?'}
              </h3>
              <p className={`text-lg mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'en' 
                  ? "Whether it's a website, video project, or design work, I'm here to help turn your vision into reality."
                  : "Legyen az weboldal, videó projekt vagy design munka, itt vagyok, hogy segítsek a víziódat valósággá változtatni."}
              </p>
              <a 
                href="#contact"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-red-600 to-red-700 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]'}`}
              >
                {translations[language].contact}
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;