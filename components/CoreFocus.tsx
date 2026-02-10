
import React from 'react';
import { Code2, Brain, Globe2, ArrowRight } from 'lucide-react';

export const CoreFocus: React.FC = () => {
  const focuses = [
    {
      title: "Gehörlosen-Akademie",
      desc: "IT-Bildung komplett in Gebärdensprache. Inklusive technischer Zertifizierung und Job-Placement.",
      icon: <Code2 className="text-[#d46a4a]" size={36} />,
      color: "bg-[#d46a4a]/10",
      accent: "border-[#d46a4a]/20"
    },
    {
      title: "Autismus & KI",
      desc: "Wir entwickeln KI-gestützte Filter, die reizarme Arbeitsumgebungen digital simulieren.",
      icon: <Brain className="text-[#8da48e]" size={36} />,
      color: "bg-[#8da48e]/10",
      accent: "border-[#8da48e]/20"
    },
    {
      title: "Minderheiten-Inklusion",
      desc: "Bildungsprogramme für benachteiligte Gruppen weltweit, um IT-Fachkräfte der Zukunft zu fördern.",
      icon: <Globe2 className="text-[#e8c8a1]" size={36} />,
      color: "bg-[#e8c8a1]/10",
      accent: "border-[#e8c8a1]/20"
    }
  ];

  return (
    <section id="projekte" className="py-32 bg-[#1c1614] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="serif-italic text-[#d46a4a] text-3xl mb-4 italic">Unser Handwerk</h2>
            <h3 className="text-5xl md:text-8xl font-extrabold leading-none tracking-tighter">
              Lösungen, die <br /> <span className="serif-italic font-normal italic text-stone-500">verändern.</span>
            </h3>
          </div>
          <p className="text-2xl text-stone-400 max-w-sm leading-relaxed font-medium">
            Jedes Projekt ist eine Brücke in einen fairen Arbeitsmarkt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {focuses.map((f, i) => (
            <div key={i} className={`group p-12 rounded-[4rem] border ${f.accent} bg-[#231d1b] transition-all duration-700 hover:-translate-y-4 hover:bg-[#2d2421]`}>
              <div className={`w-24 h-24 ${f.color} rounded-[2.5rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h4 className="text-3xl font-extrabold text-white mb-6 tracking-tight">{f.title}</h4>
              <p className="text-stone-400 leading-relaxed text-lg mb-12 font-medium">
                {f.desc}
              </p>
              <button className="flex items-center space-x-3 text-[#d46a4a] font-black text-lg group-hover:translate-x-2 transition-transform">
                <span>Konzept ansehen</span>
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
