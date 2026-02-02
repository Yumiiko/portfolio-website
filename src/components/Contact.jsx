import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const contactMethods = [
    {
      icon: <FaDiscord className="w-6 h-6" />,
      title: translations[language].discord,
      value: 'Lyumiko',
      color: 'indigo',
      action: 'copy'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: translations[language].email,
      value: 'rowivok@gmail.com',
      color: 'red',
      action: 'mailto'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/Yumiiko',
      color: 'gray',
      action: 'link',
      url: 'https://github.com/Yumiiko'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com',
      color: 'blue',
      action: 'link',
      url: 'https://linkedin.com'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(language === 'en' ? 'Copied to clipboard!' : 'Vágólapra másolva!');
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translations[language].contactTitle}</h2>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              {translations[language].contactText}
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-gray-200 bg-white hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]'}`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'} ${method.color === 'indigo' ? 'text-indigo-500' : method.color === 'red' ? 'text-red-500' : method.color === 'blue' ? 'text-blue-500' : 'text-gray-600'}`}>
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-center">{method.title}</h3>
                
                <div className="text-center">
                  {method.action === 'copy' ? (
                    <button
                      onClick={() => copyToClipboard(method.value)}
                      className={`text-sm font-mono px-3 py-1 rounded transition-all ${theme === 'dark' ? 'bg-zinc-800 text-gray-300 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {method.value}
                    </button>
                  ) : method.action === 'mailto' ? (
                    <a 
                      href={`mailto:${method.value}`}
                      className={`text-sm font-mono px-3 py-1 rounded transition-all ${theme === 'dark' ? 'bg-zinc-800 text-gray-300 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <a 
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-mono px-3 py-1 rounded transition-all ${theme === 'dark' ? 'bg-zinc-800 text-gray-300 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {method.value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability & Response Time */}
          <div className={`p-8 rounded-2xl mb-12 ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-gray-50 border border-gray-200'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-3xl mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  ⚡
                </div>
                <h3 className="text-lg font-bold mb-1">
                  {language === 'en' ? 'Fast Response' : 'Gyors Válasz'}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Usually within 24 hours' : 'Általában 24 órán belül'}
                </p>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  🌍
                </div>
                <h3 className="text-lg font-bold mb-1">
                  {language === 'en' ? 'Available Worldwide' : 'Világszerte Elérhető'}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Remote work & collaboration' : 'Távmunka & együttműködés'}
                </p>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl mb-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                  💬
                </div>
                <h3 className="text-lg font-bold mb-1">
                  {language === 'en' ? 'Free Consultation' : 'Ingyenes Konzultáció'}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? '30-minute initial discussion' : '30 perces kezdeti megbeszélés'}
                </p>
              </div>
            </div>
          </div>

          {/* Simple Message Section */}
          <div className={`p-8 rounded-2xl text-center ${theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to Start a Project?' : 'Készen Állsz egy Projekt Megkezdésére?'}
            </h3>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'en' 
                ? "Reach out through any of the platforms above. I'm excited to hear about your ideas and discuss how we can work together!"
                : "Lépj kapcsolatba bármelyik fenti platformon keresztül. Alig várom, hogy halljam az ötleteidet, és megbeszéljük, hogyan dolgozhatunk együtt!"}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:rowivok@gmail.com"
                className={`px-6 py-3 rounded-lg font-bold transition-all ${theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
              >
                {language === 'en' ? 'Send Email' : 'Email Küldése'}
              </a>
              <a 
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${theme === 'dark' ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-500/10' : 'border-indigo-500 text-indigo-600 hover:bg-indigo-50'}`}
              >
                {language === 'en' ? 'Message on Discord' : 'Üzenet Discord-on'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;