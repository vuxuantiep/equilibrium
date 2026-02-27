
import React from 'react';
import { ArrowRight, Sparkles, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Mission: React.FC = () => {
  const { content } = useLanguage();
  const { missionGallery } = content.home;

  return (
    <section id="mission" className="py-32 bg-[#0c4a6e] bg-gradient-to-br from-[#082f49] to-[#0c4a6e] relative overflow-hidden">
      {/* Dekorative Elemente im Hintergrund für Tiefe */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Linke Seite: Textinhalte auf dunklem Grund */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#7dd3fc] font-black uppercase tracking-[0.3em] text-xs mb-2">
              <Sparkles size={18} />
              <span>{missionGallery.textTop}</span>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-stone-100 leading-relaxed font-medium">
                {missionGallery.text1} <span className="text-[#bae6fd] font-bold">{missionGallery.text1Bold}</span> {missionGallery.text1End}
              </p>
              
              <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-medium">
                {missionGallery.text2}
              </p>

              <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-medium">
                {missionGallery.text3}
              </p>
            </div>

            <div className="pt-6">
              <Link 
                to="/wer-wir-sind" 
                className="inline-flex items-center space-x-3 bg-white text-[#0c4a6e] hover:bg-[#f0f9ff] px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-black/30 active:scale-95 group"
              >
                <span>{missionGallery.btn}</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Rechte Seite: Bild-Collage */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
              
              {/* Spalte 1 */}
              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white/10 hover:border-white/20 transition-colors">
                  <img src={missionGallery.col1_top} alt="Impact Kids" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/10 hover:border-white/20 transition-colors">
                  <img src={missionGallery.col1_bottom} alt="Impact Nature" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Spalte 2 */}
              <div className="col-span-4 space-y-3 md:gap-4 -translate-y-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/10 hover:border-white/20 transition-colors">
                   <img src={missionGallery.col2_top} alt="Education" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-inner aspect-square border-4 border-white/20 transform scale-110 z-10 shadow-2xl">
                   <img src={missionGallery.col2_bottom} alt="Environment" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Spalte 3 */}
              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/10 hover:border-white/20 transition-colors">
                  <img src={missionGallery.col3_top} alt="Sports" className="w-full h-full object-cover" />
                </div>
                
                {/* Deep Blue Box */}
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square bg-[#0369a1] border-4 border-white/10 flex flex-col items-center justify-center p-4 relative group hover:bg-[#0284c7] transition-colors">
                   <Sprout size={32} className="text-white/30 mb-auto ml-auto" />
                   <div className="text-center mt-auto mb-6">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#bae6fd] mb-1">{missionGallery.boxTitle}</span>
                      <span className="serif-italic text-2xl text-white">{missionGallery.boxSubtitle}</span>
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
