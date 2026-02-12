
import React from 'react';
import { ArrowRight, Heart, TreeDeciduous } from 'lucide-react';
import { CONTENT } from '../content';

export const Hero: React.FC = () => {
  const { images } = CONTENT.home.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-3 bg-white/80 border border-[#3fb0e3]/20 px-4 py-2 rounded-full mb-8 backdrop-blur-xl">
              <Heart size={16} className="text-[#3fb0e3] fill-[#3fb0e3]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">Equilibrium Foundation</span>
            </div>
            
            <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1.05] tracking-tighter mb-8 text-[#1a1412]">
              Schaffe eine <br />
              <span className="serif-italic text-[#3fb0e3] font-normal italic">gerechtere Welt</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 mb-12 leading-relaxed font-medium max-w-xl">
              Wir fördern Gehörlose und Autisten durch spezialisierte IT-Bildung und unterstützen nachhaltige Projekte für Kinder weltweit.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all btn-shadow active:scale-95 flex items-center justify-center space-x-3 group">
                <span>Jetzt fördern</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/50 border border-stone-200 hover:bg-white text-[#1a1412] px-10 py-5 rounded-2xl font-bold text-xl transition-all backdrop-blur-md flex items-center justify-center">
                Unsere Projekte
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              {/* Layout entspricht dem Screenshot: Links Großes Bild, Rechts Tech-Bild & Grüne Box */}
              <div className="grid grid-cols-2 gap-4 h-[550px]">
                
                {/* Linke Spalte: Großes Hochformat-Bild (Kinder) */}
                <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl group relative h-full">
                  <img 
                    src={images.main} 
                    alt="Community Impact" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Rechte Spalte: 2 Elemente untereinander */}
                <div className="flex flex-col gap-4 h-full">
                   
                   {/* Oben: Quadratisches Tech-Bild */}
                   <div className="h-1/2 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl group relative">
                     <img 
                       src={images.side} 
                       alt="Tech Education" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                     />
                     <div className="absolute inset-0 bg-[#3fb0e3]/10"></div>
                   </div>

                   {/* Unten: Grüne Box "100% Nachhaltig" */}
                   <div className="h-1/2 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-[#4a5d23] flex flex-col items-center justify-center text-white relative group hover:bg-[#5a6d33] transition-colors">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                     <TreeDeciduous size={48} className="mb-4" />
                     <span className="block text-sm font-black uppercase tracking-[0.2em] shadow-black drop-shadow-md">100% Nachhaltig</span>
                   </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
