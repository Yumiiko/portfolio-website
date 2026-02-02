import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaVideo, FaPalette } from 'react-icons/fa';

const ProjectDetail = () => {
  const { type, id } = useParams();
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projects[type]?.find(proj => proj.id === parseInt(id));
    setProject(foundProject);
    setCurrentImageIndex(0);
  }, [type, id]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setCurrentImageIndex(0);
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className="text-3xl mb-4">
            {language === 'en' ? 'Project not found' : 'Projekt nem található'}
          </h1>
          <Link to="/" className={`px-6 py-3 rounded-lg font-bold transition-all ${theme === 'dark' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-500 hover:bg-orange-600'} text-white`}>
            {translations[language].backToHome}
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = () => {
    switch(type) {
      case 'frontend': return '🚀';
      case 'video': return '🎬';
      case 'design': return '🎨';
      default: return '📁';
    }
  };

  const getCategoryColor = () => {
    switch(type) {
      case 'frontend': return theme === 'dark' ? 'text-red-400' : 'text-orange-600';
      case 'video': return theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
      case 'design': return theme === 'dark' ? 'text-purple-400' : 'text-purple-600';
      default: return theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getCategoryBgColor = () => {
    switch(type) {
      case 'frontend': return theme === 'dark' ? 'bg-red-500/10' : 'bg-orange-500/10';
      case 'video': return theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/10';
      case 'design': return theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/10';
      default: return theme === 'dark' ? 'bg-gray-500/10' : 'bg-gray-500/10';
    }
  };

  const images = project.images || [project.mainImage];

  const switchImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-zinc-950 to-zinc-900 text-gray-200' : 'bg-gradient-to-b from-white to-gray-50 text-gray-800'}`}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Back Button */}
        <Link 
          to="/" 
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-red-400 hover:text-red-300' : 'bg-gray-100 hover:bg-gray-200 text-orange-600 hover:text-orange-500'}`}
        >
          <FaArrowLeft /> {translations[language].backToHome}
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Project Header with Category */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`text-4xl ${getCategoryColor()} animate-pulse`}>
                {getCategoryIcon()}
              </div>
              <span className={`px-5 py-2 rounded-full text-sm font-bold ${getCategoryBgColor()} ${getCategoryColor()} border ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-300'}`}>
                {type === 'frontend' ? translations[language].frontend : 
                 type === 'video' ? translations[language].videoEditing : 
                 translations[language].design}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron tracking-tight">
              {project.title[language]}
            </h1>
            <p className={`text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
              {project.subtitle?.[language] || project.description[language].substring(0, 120)}...
            </p>
          </div>

          {/* Main Gallery Section */}
          <div className={`rounded-2xl overflow-hidden border-2 mb-12 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'} shadow-2xl`}>
            {/* Main Hero Image with Overlay */}
            <div className="relative h-80 md:h-[500px] overflow-hidden">
              <img 
                src={images[currentImageIndex]} 
                alt={project.title[language]} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/90 via-black/50 to-transparent' : 'from-white/90 via-white/50 to-transparent'}`}></div>
              
              {/* Image Counter */}
              <div className="absolute top-6 right-6">
                <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${theme === 'dark' ? 'bg-black/60 text-red-400 border border-red-500/30' : 'bg-white/80 text-orange-600 border border-orange-500/30'}`}>
                  📸 {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery (if multiple images) */}
            {images.length > 1 && (
              <div className={`p-6 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'}`}>
                <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  👆 Click thumbnails to view images:
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => switchImage(index)}
                      className={`flex-shrink-0 w-32 h-24 rounded-xl overflow-hidden transition-all duration-300 border-2 ${currentImageIndex === index ? (theme === 'dark' ? 'border-red-500 scale-105 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-orange-500 scale-105 shadow-[0_0_20px_rgba(249,115,22,0.2)]') : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'} ${theme === 'dark' ? 'hover:border-zinc-600' : 'hover:border-gray-300'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title[language]} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description Section */}
              <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'} shadow-lg`}>
                <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}>
                  <span className="text-3xl">📖</span>
                  {translations[language].description}
                </h2>
                <p className={`text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description[language]}
                </p>
              </div>

              {/* Features Section */}
              {project.features && (
                <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'} shadow-lg`}>
                  <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}>
                    <span className="text-3xl">✨</span>
                    {translations[language].features}
                  </h2>
                  <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.features[language].map((feature, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                        <span className={`text-2xl mt-1 ${theme === 'dark' ? 'text-red-500' : 'text-orange-500'}`}>⚡</span>
                        <span className="text-xl">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions Section */}
              {(project.challenges || project.solutions) && (
                <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'} shadow-lg`}>
                  <h2 className={`text-3xl font-bold mb-8 text-center font-orbitron ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}>
                    {translations[language].challengesAndSolutions}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.challenges && (
                      <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-red-900/10 border border-red-800/30' : 'bg-red-50 border border-red-200'}`}>
                        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                          <span className="text-2xl">🔥</span>
                          {translations[language].challenges}
                        </h3>
                        <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {project.challenges[language].map((challenge, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-red-500 mt-2">⚠️</span>
                              <span className="text-lg">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.solutions && (
                      <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-green-900/10 border border-green-800/30' : 'bg-green-50 border border-green-200'}`}>
                        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-green-300' : 'text-green-600'}`}>
                          <span className="text-2xl">✅</span>
                          {translations[language].solutions}
                        </h3>
                        <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {project.solutions[language].map((solution, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-green-500 mt-2">✓</span>
                              <span className="text-lg">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Technologies Card */}
              <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'} shadow-lg`}>
                <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}>
                  <span className="text-3xl">🛠️</span>
                  {translations[language].technologies}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-5 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-800 text-red-300 hover:bg-zinc-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-zinc-700' : 'bg-gray-100 text-orange-700 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] border border-gray-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info Card */}
              <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'} shadow-lg`}>
                <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}>
                  <span className="text-3xl">ℹ️</span>
                  Project Info
                </h2>
                <div className={`space-y-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-zinc-800/50 dark:bg-gray-100">
                    <span className="font-bold text-lg">Category:</span>
                    <span className={`font-bold text-xl ${getCategoryColor()}`}>
                      {type === 'frontend' ? 'Frontend' : type === 'video' ? 'Video' : 'Design'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-zinc-800/50 dark:bg-gray-100">
                    <span className="font-bold text-lg">Images:</span>
                    <span className="font-bold text-xl">{images.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-zinc-800/50 dark:bg-gray-100">
                    <span className="font-bold text-lg">Status:</span>
                    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${theme === 'dark' ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-700'}`}>
                      ✅ Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-10 border-t border-zinc-800 dark:border-gray-300">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <Link 
                to="/" 
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]'}`}
              >
                <FaArrowLeft className="w-5 h-5" />
                {translations[language].backToHome}
              </Link>
              
              <div className="text-center">
                <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Like this project?' : 'Tetszik ez a projekt?'}
                </p>
                <p className={`font-bold text-2xl font-orbitron ${theme === 'dark' ? 'text-red-400 animate-pulse' : 'text-orange-600 animate-pulse'}`}>
                  {language === 'en' ? 'Let\'s work together!' : 'Dolgozzunk együtt!'}
                </p>
              </div>
              
              <a 
                href="#contact" 
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-red-600 to-red-700 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] text-white' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] text-white'}`}
              >
                {language === 'en' ? 'Contact Me' : 'Kapcsolat'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;