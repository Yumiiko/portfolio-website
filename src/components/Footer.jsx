import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaHeart, FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaDiscord />, url: 'https://discord.com', label: 'Discord' },
    { icon: <FaEnvelope />, url: 'https://gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`py-8 border-t ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className={`mb-4 md:mb-0 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>{translations[language].copyright}</p>
            <p className="text-sm mt-1 flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Rowen
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'text-gray-400 hover:text-red-400 hover:bg-zinc-800' : 'text-gray-600 hover:text-red-600 hover:bg-gray-200'}`}
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`mt-4 md:mt-0 px-4 py-2 rounded-lg transition-all ${theme === 'dark' ? 'text-red-400 hover:text-red-300 hover:bg-zinc-800' : 'text-red-600 hover:text-red-500 hover:bg-gray-100'}`}
          >
            ↑ {language === 'en' ? 'Back to Top' : 'Vissza a tetejére'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;