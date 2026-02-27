
import React from 'react';
import { Layers, Briefcase, Users, Zap, CheckCircle2 } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const activities = [
    {
      title: "Kapazitätsaufbau",
      desc: "Wir stärken die individuellen und kollektiven Kompetenzen unserer Partner durch gezieltes Training.",
      icon: <Layers size={32} />
    },
    {
      title: "Projektmanagement",
      desc: "Professionelle Planung und Durchführung innovativer Projekte in den Bereichen Bildung und Umwelt.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Personalvermittlung",
      desc: "Wir schließen die Lücke zwischen Ausbildung und Arbeitsmarkt für Menschen mit Behinderung.",
      icon: <Users size={32} />
    },
    {
      title: "Ressourcenmobilisierung",
      desc: "Beschaffung und Bereitstellung von kritischer IT-Infrastruktur und Bildungsmaterialien.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <section className="py-32 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#c05a11] font-black uppercase tracking-widest text-xs mb-6">
              <div className="w-8 h-[2px] bg-[#c05a11]"></div>
              <span>Strategischer Ansatz</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[#2a1f18] mb-8 leading-tight">
              Wir investieren in <br /> <span className="text-[#ea580c]">Nachhaltigkeit</span>.
            </h3>
            <p className="text-xl text-stone-600 mb-12 leading-relaxed font-medium">
              Durch unsere Aktivitäten stärken wir die Leistung lokaler Partner im globalen Süden, um deren Autonomie langfristig zu sichern.
            </p>
            
            <div className="grid gap-6">
              {[
                "Evidenzbasierte Projektführung",
                "Partnerschaft mit lokalen NGOs",
                "Fokus auf skalierbare KI-Software"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                  <div className="bg-[#ea580c]/10 p-2 rounded-full">
                    <CheckCircle2 className="text-[#ea580c]" size={20} />
                  </div>
                  <span className="text-[#2a1f18] font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {activities.map((act, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#ea580c]/20 group-hover:scale-110 transition-transform">
                  {act.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#2a1f18] mb-4">{act.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
