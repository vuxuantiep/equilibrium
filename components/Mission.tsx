
import React from 'react';
import { ArrowRight, Sparkles, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../content';

export const Mission: React.FC = () => {
  const { missionGallery } = CONTENT.home;

  return (
    <section id="mission" className="py-32 bg-[#4a5d23] relative overflow-hidden">
      {/* Dekorative Elemente im Hintergrund für Tiefe */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Linke Seite: Textinhalte auf dunklem Grund */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#3fb0e3] font-black uppercase tracking-[0.3em] text-xs mb-2">
              <Sparkles size={18} />
              <span>Handle lokal, denk global</span>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-stone-100 leading-relaxed font-medium">
                Die Equilibrium Foundation ist eine gemeinnützige Organisation für soziale Auswirkungen in Deutschland, die benachteiligte Menschen im globalen Süden in den Bereichen <span className="text-[#3fb0e3] font-bold">Bildung, Kultur und Umwelt</span> stärkt.
              </p>
              
              <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-medium">
                Unsere Aktivitäten basieren auf den grundlegenden Prinzipien des <span className="serif-italic text-white text-3xl">Humanismus</span>, der <span className="serif-italic text-white text-3xl">Ethik</span> und des <span className="serif-italic text-white text-3xl">Positivismus</span>. Erfahren Sie mehr über unsere soziale Vision, soziale Mission und gemeinsamen Werte.
              </p>

              <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-medium">
                Lernen Sie unser interdisziplinäres und internationales Team von <span className="font-bold text-white">12 leidenschaftlichen Aktivisten</span> kennen, die für eine gerechtere Welt kämpfen.
              </p>
            </div>

            <div className="pt-6">
              <Link 
                to="/wer-wir-sind" 
                className="inline-flex items-center space-x-3 bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-black/20 active:scale-95 group"
              >
                <span>Wer wir sind</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Rechte Seite: Bild-Collage angepasst an den Screenshot */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
              
              {/* Spalte 1: 2 Bilder (Kinder & Hände) */}
              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src={missionGallery.col1_top} alt="Impact Kids" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src={missionGallery.col1_bottom} alt="Impact Nature" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Spalte 2: 2 Bilder (Klassenzimmer & Bucht) - Leicht versetzt */}
              <div className="col-span-4 space-y-3 md:gap-4 -translate-y-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/20 hover:border-white/40 transition-colors">
                   <img src={missionGallery.col2_top} alt="Education" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-inner aspect-square border-4 border-white transform scale-110 z-10 shadow-2xl">
                   <img src={missionGallery.col2_bottom} alt="Environment" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Spalte 3: 1 Bild (Fußball) & Text Box */}
              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src={missionGallery.col3_top} alt="Sports" className="w-full h-full object-cover" />
                </div>
                
                {/* Grüne Box aus dem Screenshot */}
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square bg-[#3a4a1c] border-4 border-white/10 flex flex-col items-center justify-center p-4 relative group hover:bg-[#4a5d23] transition-colors">
                   <Sprout size={32} className="text-white/30 mb-auto ml-auto" />
                   <div className="text-center mt-auto mb-6">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3fb0e3] mb-1">Gelebte</span>
                      <span className="serif-italic text-2xl text-stone-100">Inklusion</span>
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
