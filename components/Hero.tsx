
import React from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { images } = content.home.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3fb0e3]/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ea580c]/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 relative">
            <div className="inline-flex items-center space-x-3 bg-white/60 border border-white/40 px-5 py-2 rounded-full mb-8 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles size={14} className="text-[#ea580c]" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0c4a6e]">{content.home.hero.tagline}</span>
            </div>
            
            <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1] tracking-tighter mb-8 text-[#1a1412] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              {content.home.hero.title.split(' ')[0]} <br />
              <span className="serif-italic text-[#3fb0e3] font-normal italic">
                {content.home.hero.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 mb-12 leading-relaxed font-medium max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {content.home.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button className="bg-[#0c4a6e] hover:bg-[#3fb0e3] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/10 active:scale-95 flex items-center justify-center space-x-3 group">
                <span>{content.home.hero.btnPrimary}</span>
                <Heart size={20} className="group-hover:scale-110 transition-transform fill-current" />
              </button>
              <button className="bg-white hover:bg-stone-50 text-[#1a1412] border border-stone-200 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-stone-200/50 active:scale-95 flex items-center justify-center space-x-3 group">
                <span>{content.home.hero.btnSecondary}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* VISUALS */}
          <div className="lg:col-span-5 animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="relative h-[600px] w-full">
              {/* Main Image (Tall) */}
              <div className="absolute left-0 top-0 w-[65%] h-[85%] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src={images.main} 
                    alt="Main Hero" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 to-transparent"></div>
              </div>

              {/* Secondary Image (Top Right) */}
              <div className="absolute right-0 top-12 w-[45%] h-[35%] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl z-20 hover:scale-[1.02] transition-transform duration-700 delay-100">
                  <img 
                    src={images.side} 
                    alt="Side Hero" 
                    className="w-full h-full object-cover" 
                  />
              </div>

              {/* Bottom Card (Floating) */}
              <div className="absolute right-4 bottom-12 w-[55%] h-[35%] rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl z-30 p-2 flex items-center justify-center hover:scale-[1.02] transition-transform duration-700 delay-200">
                 <img 
                    src={images.sustainableCard} 
                    alt="Sustainable" 
                    className="w-full h-full object-cover rounded-[2rem]" 
                 />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#ea580c] shadow-sm">
                    {content.home.hero.sustainableBox}
                 </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute right-10 bottom-1/2 w-32 h-32 bg-[#ea580c] rounded-full blur-[60px] opacity-40 z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
