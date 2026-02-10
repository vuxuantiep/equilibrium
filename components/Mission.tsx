
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Mission: React.FC = () => {
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

          {/* Rechte Seite: Bild-Collage mit weißen Rahmen als Kontrast */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" alt="Impact 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop" alt="Impact 2" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="col-span-4 space-y-3 md:gap-4 -translate-y-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/20 hover:border-white/40 transition-colors">
                   <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" alt="Impact 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-inner aspect-square border-4 border-white transform scale-110 z-10 shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop" alt="Impact 4" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/20 hover:border-white/40 transition-colors">
                   <img src="https://images.unsplash.com/photo-1523240632013-da209f354a0b?q=80&w=400&auto=format&fit=crop" alt="Impact 5" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="col-span-4 space-y-3 md:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=400&auto=format&fit=crop" alt="Impact 6" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white/20 hover:border-white/40 transition-colors">
                  <img src="https://images.unsplash.com/photo-1518107616385-ad30833edec1?q=80&w=400&auto=format&fit=crop" alt="Impact 7" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-stone-100 hidden md:block animate-pulse">
              <div className="text-[#3fb0e3] font-black text-xs uppercase tracking-widest mb-1 text-center">Gelebte</div>
              <div className="serif-italic text-[#4a5d23] text-3xl italic text-center">Inklusion</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
