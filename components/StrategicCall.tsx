
import React from 'react';
import { Mail, ShieldCheck, FileText, Heart } from 'lucide-react';

export const StrategicCall: React.FC = () => {
  return (
    <section className="py-32 bg-[#1c1614] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2d2420] rounded-[5rem] p-12 md:p-24 relative border border-white/5 overflow-hidden">
          {/* Soft Organic Background Element */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d46a4a]/5 organic-shape blur-[80px] -mr-32 -mt-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-white/5 px-6 py-2 rounded-full mb-10 border border-white/10">
                <Heart size={16} className="text-[#d46a4a]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-300">Für Stiftungs-Partner</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-extrabold leading-[0.85] tracking-tighter mb-12">
                Zukunft <br /> <span className="serif-italic text-[#d46a4a] font-normal italic">mitfinanzieren.</span>
              </h3>
              <p className="text-2xl text-stone-400 mb-16 leading-relaxed font-medium text-balance">
                Wir suchen Verbündete für unsere nächste Wachstumsphase. Unser Ziel: Bis 2026 weitere 2.000 Gehörlose und Autisten in den IT-Arbeitsmarkt zu führen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="mailto:info@equilibrium.foundation" className="bg-[#d46a4a] hover:bg-[#e67a5a] text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl shadow-orange-950/40 active:scale-95 flex items-center justify-center space-x-4">
                  <Mail size={24} />
                  <span>Dossier anfragen</span>
                </a>
                <button className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-4 backdrop-blur-md">
                  <FileText size={24} />
                  <span>Wirkungsbericht</span>
                </button>
              </div>
            </div>

            <div className="bg-[#1c1614]/50 backdrop-blur-xl border border-white/5 p-12 rounded-[4rem] shadow-inner">
              <div className="space-y-12">
                {[
                  { icon: <ShieldCheck size={32} className="text-[#8da48e]" />, label: "Gemeinnützig anerkannt", sub: "Geprüfte Transparenz nach ITZ-Standards." },
                  { icon: <FileText size={32} className="text-[#d46a4a]" />, label: "Geprüfte Berichte", sub: "Lückenlose Nachweise über Mittelverwendung." },
                  { icon: <Heart size={32} className="text-[#e8c8a1]" />, label: "Nachhaltiger Impact", sub: "Fokus auf langfristige Beschäftigung." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="bg-white/5 p-4 rounded-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.label}</h4>
                      <p className="text-stone-500 text-sm font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
