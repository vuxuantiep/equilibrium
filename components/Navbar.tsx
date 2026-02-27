
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}>
      {/* Container breiter machen (max-w-screen-2xl), damit lange DE Texte Platz haben */}
      <div className="w-full max-w-[95%] md:max-w-screen-2xl mx-auto px-4 md:px-6">
        
        <div className={`flex justify-between items-center glass-warm p-3 md:p-4 rounded-full transition-all duration-500 border-white/50 ${isScrolled ? 'bg-white/90 shadow-2xl' : 'bg-white/60 backdrop-blur-md'}`}>
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 pl-2 md:pl-4 group shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center">
              <img src={content.brand.logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none text-[#1a1412] uppercase">{content.brand.name}</span>
              <span className="text-[7px] md:text-[8px] font-bold tracking-[0.3em] text-[#3fb0e3] uppercase">{content.brand.suffix}</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center justify-center flex-grow px-4">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {content.navigation.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-[10px] xl:text-[11px] font-black uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${location.pathname === item.path ? 'text-[#3fb0e3]' : 'text-stone-600 hover:text-[#3fb0e3]'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 pr-2 md:pr-4 shrink-0">
            
            {/* Language Switcher - Stabilized Width */}
            <div className="flex items-center border-l border-stone-300 pl-4 h-8 space-x-2">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-[10px] font-black uppercase tracking-widest transition-colors ${language === 'en' ? 'text-[#1a1412]' : 'text-stone-400 hover:text-stone-600'}`}
                >
                  EN
                </button>
                <span className="text-stone-300">|</span>
                <button 
                  onClick={() => setLanguage('de')}
                  className={`text-[10px] font-black uppercase tracking-widest transition-colors ${language === 'de' ? 'text-[#1a1412]' : 'text-stone-400 hover:text-stone-600'}`}
                >
                  DE
                </button>
            </div>

            <Link to="/spenden" className="bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center space-x-2 whitespace-nowrap">
              <Heart size={14} fill="currentColor" />
              <span>{content.general.donate}</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex lg:hidden items-center gap-4 pr-2">
             {/* Mobile Donate Icon only */}
             <Link to="/spenden" className="bg-[#3fb0e3] text-white p-2 rounded-full shadow-md active:scale-95">
                <Heart size={18} fill="currentColor" />
             </Link>
             <button onClick={() => setIsOpen(!isOpen)} className="text-[#1a1412] p-1">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#fdfaf7]/95 backdrop-blur-xl z-[110] p-8 flex flex-col animate-in fade-in zoom-in-95 duration-200">
           <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="p-2 bg-white rounded-full shadow-sm text-[#1a1412] hover:rotate-90 transition-transform">
                <X size={32} />
              </button>
           </div>
           
           <div className="flex flex-col space-y-6 items-center justify-center flex-grow">
             {content.navigation.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-2xl md:text-3xl font-black uppercase tracking-tighter ${location.pathname === item.path ? 'text-[#3fb0e3]' : 'text-[#1a1412]'}`}
                >
                  {item.name}
                </Link>
              ))}
           </div>

           <div className="flex flex-col items-center gap-8 mb-8">
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-6 bg-white px-8 py-4 rounded-full shadow-sm border border-stone-100">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`text-lg font-black ${language === 'en' ? 'text-[#3fb0e3]' : 'text-stone-400'}`}
                  >
                    English
                  </button>
                  <div className="w-px h-6 bg-stone-200"></div>
                  <button 
                    onClick={() => setLanguage('de')}
                    className={`text-lg font-black ${language === 'de' ? 'text-[#3fb0e3]' : 'text-stone-400'}`}
                  >
                    Deutsch
                  </button>
              </div>

              <Link 
                to="/spenden" 
                onClick={() => setIsOpen(false)} 
                className="w-full bg-[#3fb0e3] text-white py-5 rounded-2xl font-black text-center text-xl shadow-xl flex items-center justify-center gap-3"
              >
                <Heart fill="currentColor" />
                {content.general.donate}
              </Link>
           </div>
        </div>
      )}
    </nav>
  );
};
