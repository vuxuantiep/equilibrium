
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { CONTENT } from '../content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center glass-warm p-4 rounded-[2.5rem] transition-all duration-500 border-white/50 ${isScrolled ? 'bg-white/90 shadow-2xl' : 'bg-white/40'}`}>
          <Link to="/" className="flex items-center space-x-4 pl-4 group">
            <div className="w-10 h-10 bg-white rounded-xl p-1.5 shadow-md">
              <img src={CONTENT.brand.logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-[#1a1412]">{CONTENT.brand.name}</span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-[#3fb0e3]">{CONTENT.brand.suffix}</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 pr-4">
            {CONTENT.navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${location.pathname === item.path ? 'text-[#3fb0e3]' : 'text-stone-600 hover:text-[#3fb0e3]'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/spenden" className="bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center space-x-2">
              <Heart size={14} fill="currentColor" />
              <span>Spenden</span>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#1a1412]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#fdfaf7] z-[110] p-10 flex flex-col justify-center items-center space-y-8">
           <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-[#1a1412]"><X size={40} /></button>
           {CONTENT.navigation.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-2xl font-black text-[#1a1412] hover:text-[#3fb0e3] transition-colors uppercase tracking-tighter">
                {item.name}
              </Link>
            ))}
            <Link to="/spenden" onClick={() => setIsOpen(false)} className="w-full bg-[#3fb0e3] text-white py-5 rounded-2xl font-black text-center text-xl shadow-xl">Jetzt Spenden</Link>
        </div>
      )}
    </nav>
  );
};
