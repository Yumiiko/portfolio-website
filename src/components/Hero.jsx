import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaArrowDown, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { translations, language } = useContext(LanguageContext);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${theme === 'dark' ? 'bg-red-500/20' : 'bg-orange-500/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated Name with theme-specific colors */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className={`inline-block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Rowen
          </span>
          <span className={`${theme === 'dark' ? 'text-red-400 neon-glow' : 'text-orange-600'} animate-pulse-glow`}>
            {" "} B.
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          <span className={theme === 'dark' ? 'text-red-400' : 'text-orange-600'}>
            {translations[language].heroTitle}
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {translations[language].heroSubtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToAbout}
            className={`px-8 py-3 rounded-lg font-bold text-white transition-all hover:scale-105 ${theme === 'dark' ? 'bg-red-600 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]'}`}
          >
            {language === 'en' ? 'Explore My Work' : 'Fedezd Fel Munkáim'}
          </button>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-lg font-bold transition-all border-2 hover:scale-105 ${theme === 'dark' ? 'border-red-500 text-red-400 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-orange-500 text-orange-600 hover:bg-orange-50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'}`}
          >
            {translations[language].contact}
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com' },
            { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com' },
            { icon: <FaDiscord />, label: 'Discord', url: 'https://discord.com' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-800 text-gray-300 hover:text-red-400 hover:bg-zinc-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-gray-100 text-gray-700 hover:text-orange-600 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'}`}
              aria-label={social.label}
            >
              <span className="text-xl">{social.icon}</span>
            </a>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className={`animate-bounce p-2 rounded-full ${theme === 'dark' ? 'text-red-400' : 'text-orange-600'}`}
          aria-label="Scroll down"
        >
          <FaArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;