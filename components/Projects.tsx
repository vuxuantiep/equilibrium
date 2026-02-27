
import React from 'react';
import { Code2, Brain, Users, ArrowUpRight, GraduationCap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Software & KI Akademie",
      description: "Berufliche Ausbildung für Gehörlose und Autisten. Wir entwickeln eigene KI-Schnittstellen, die Barrieren am Arbeitsplatz eliminieren.",
      tag: "Technologie",
      icon: <Code2 className="text-white" size={32} />,
      color: "bg-[#ea580c]",
      accent: "text-[#ea580c]",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Inklusions-Plattform",
      description: "Entwicklung von Open-Source Software, die Minderheiten weltweit über Bildungswege und Jobchancen informiert.",
      tag: "Empowerment",
      icon: <Users className="text-white" size={32} />,
      color: "bg-[#c05a11]",
      accent: "text-[#c05a11]",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Resiliente Gemeinschaften",
      description: "Nachhaltige Infrastruktur und Kapazitätsaufbau für Partnerorganisationen in Guatemala und Afrika.",
      tag: "Struktur",
      icon: <GraduationCap className="text-white" size={32} />,
      color: "bg-[#3c2a1a]",
      accent: "text-[#3c2a1a]",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projekte" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-[#ea580c] font-black uppercase tracking-widest text-sm mb-4">Wirkungsbereiche</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#2a1f18] leading-tight mb-8">
            Lösungen für eine <br /> <span className="text-[#c05a11]">gerechtere Welt</span>.
          </h3>
          <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {projectList.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-[#fcfaf7] rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-3xl transition-all duration-700">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className={`absolute top-0 left-0 ${project.color} p-6 rounded-br-[2rem] shadow-2xl z-10`}>
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-[#2a1f18]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white text-[#2a1f18] px-8 py-3 rounded-full font-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                     Details ansehen
                   </button>
                </div>
              </div>
              <div className="p-12 flex flex-col flex-grow">
                <span className={`text-xs font-black uppercase tracking-[0.25em] mb-6 ${project.accent} flex items-center`}>
                  <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
                  {project.tag}
                </span>
                <h4 className="text-3xl font-bold text-[#2a1f18] mb-6 leading-tight group-hover:text-[#4a5d23] transition-colors">
                  {project.title}
                </h4>
                <p className="text-stone-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                  {project.description}
                </p>
                <div className="pt-8 border-t border-stone-200">
                  <button className={`flex items-center space-x-3 ${project.accent} font-black text-lg group/btn hover:translate-x-1 transition-transform`}>
                    <span>Mehr erfahren</span>
                    <ArrowUpRight size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
