
import React from 'react';
import { Users, Trophy, Recycle, ArrowRight } from 'lucide-react';

export const MainProjects: React.FC = () => {
  const mainCards = [
    {
      title: "Berufliche Inklusion",
      subtitle: "Software & Coding in Guatemala",
      desc: "Wir bilden Mayas mit Hörbehinderung in Guatemala darin, Softwareprogrammierer zu werden und ihren Lebensunterhalt im Team zu verdienen.",
      icon: <Users size={40} />,
      color: "bg-[#3fb0e3]",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" // Workshop/Team Meeting
    },
    {
      title: "Train-the-Trainer",
      subtitle: "Sportförderung in Malawi",
      desc: "Wir bilden und zertifizieren Trainer in Malawi, die körperliche Fähigkeiten und die Persönlichkeit benachteiligter Kinder entwickeln.",
      icon: <Trophy size={40} />,
      color: "bg-[#0c94d2]",
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=600&auto=format&fit=crop" // Kinder Fußball/Sandplatz
    },
    {
      title: "Recycling & Fair Trade",
      subtitle: "Handwerk in Angola",
      desc: "Wir unterstützen Recycling, Handwerk und fairen Handel in Angola, um Einkommen zu generieren und die Umwelt zu schützen.",
      icon: <Recycle size={40} />,
      color: "#4a5d23",
      img: "https://images.unsplash.com/photo-1605289355680-75fbbee5c324?q=80&w=600&auto=format&fit=crop" // Nähen/Handwerk
    }
  ];

  return (
    <section id="projekte" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="serif-italic text-[#3fb0e3] text-3xl mb-4 italic">Wie wir wirken</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1a1412] leading-tight">
            Wir investieren in <span className="text-[#4a5d23]">Mensch & Natur.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {mainCards.map((card, i) => (
            <div key={i} className="group glass-warm rounded-[3rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-700">
              <div className="h-64 overflow-hidden relative">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className={`absolute bottom-6 right-6 ${card.color.startsWith('bg') ? card.color : 'bg-['+card.color+']'} text-white p-5 rounded-2xl shadow-xl z-10`}>
                  {card.icon}
                </div>
              </div>
              <div className="p-10">
                <div className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">{card.subtitle}</div>
                <h4 className="text-2xl font-black text-[#1a1412] mb-6 leading-tight group-hover:text-[#3fb0e3] transition-colors">{card.title}</h4>
                <p className="text-stone-600 text-lg leading-relaxed mb-10 font-medium">
                  {card.desc}
                </p>
                <button className="flex items-center space-x-3 text-[#1a1412] font-black group-hover:text-[#3fb0e3] transition-colors text-lg">
                  <span>Weiterlesen</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
