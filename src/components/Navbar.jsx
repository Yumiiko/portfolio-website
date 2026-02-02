import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: translations[language].home },
    { id: 'about', label: translations[language].about },
    { id: 'projects', label: translations[language].projects },
    { id: 'skills', label: translations[language].skills },
    { id: 'contact', label: translations[language].contact },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${theme === 'dark' ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800' : 'bg-white/90 backdrop-blur-md border-b border-gray-200'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-red-500 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-600'}`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'hover:bg-zinc-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                aria-label="Toggle language"
              >
                <FaGlobe className="w-5 h-5" />
                <span className="ml-1 text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'hover:bg-zinc-800 text-yellow-300' : 'hover:bg-gray-100 text-gray-700'}`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <FaGlobe className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'text-yellow-300' : 'text-gray-700'}`}
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-50'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-medium transition-all ${theme === 'dark' ? 'text-gray-300 hover:text-red-400 hover:bg-zinc-700' : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;