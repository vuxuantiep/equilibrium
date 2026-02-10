
import React from 'react';
import { Target, ShieldCheck, Heart } from 'lucide-react';

export const NarrativeSection: React.FC = () => {
  return (
    <section id="unsere vision" className="py-32 bg-[#fdf8f4] text-[#1c1614] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="serif-italic text-[#d46a4a] text-4xl mb-8 font-normal italic">Das Warum</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-10 text-[#2d2420]">
              Technologie muss <br /> <span className="text-[#8da48e]">menschlich</span> sein.
            </h3>
            <p className="text-2xl text-stone-600 mb-12 leading-relaxed font-medium">
              Weltweit sind Millionen talentierter Menschen aufgrund körperlicher oder neurologischer Merkmale vom IT-Arbeitsmarkt ausgeschlossen. Das ist kein Mangel an Talent, sondern ein Mangel an Infrastruktur.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Target className="text-[#d46a4a]" />, title: "Bildungsgerechtigkeit", desc: "Spezialisierte Curricula für Gehörlose und Autisten." },
                { icon: <ShieldCheck className="text-[#8da48e]" />, title: "KI-Werkzeuge", desc: "Software, die Sprach- und Reizbarrieren am Arbeitsplatz filtert." },
                { icon: <Heart className="text-[#d46a4a]" />, title: "Existenzsicherung", desc: "Vermittlung in langfristige, gut bezahlte IT-Jobs." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="bg-[#1c1614]/5 p-4 rounded-2xl h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1 text-[#2d2420]">{item.title}</h4>
                    <p className="text-stone-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#e8c8a1] p-4 rounded-[3rem] rotate-3 shadow-xl">
               <div className="bg-[#1c1614] rounded-[2.5rem] p-12 text-white -rotate-3 transition-transform hover:rotate-0 duration-700">
                  <h4 className="serif-italic text-5xl mb-8 italic text-[#e8c8a1]">Strategisches Ziel 2025</h4>
                  <p className="text-2xl mb-12 opacity-80 leading-relaxed font-medium">
                    Wir suchen Stiftungs-Partner für die Skalierung unserer <span className="text-white border-b-2 border-[#d46a4a]">KI-Sprachbrücke</span>, um die Kommunikation zwischen Gehörlosen und Teams in Echtzeit zu ermöglichen.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#d46a4a] flex items-center justify-center font-bold">85%</div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-60">des Finanzierungsziels erreicht</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
