
import React from 'react';
import { Users, Trophy, Recycle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const MainProjects: React.FC = () => {
  const { content } = useLanguage();
  const { mainProjects } = content.home;

  const icons = [<Users size={40} />, <Trophy size={40} />, <Recycle size={40} />];

  return (
    <section id="projekte" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="serif-italic text-[#3fb0e3] text-3xl mb-4 italic">{mainProjects.subtitle}</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1a1412] leading-tight">
            {mainProjects.titleStart} <span className="text-[#0c4a6e]">{mainProjects.titleEnd}</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {mainProjects.items.map((card, i) => (
            <div key={i} className="group glass-warm rounded-[3rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-700">
              <div className="h-64 overflow-hidden relative">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className={`absolute bottom-6 right-6 ${card.color.startsWith('bg') ? card.color : 'bg-['+card.color+']'} text-white p-5 rounded-2xl shadow-xl z-10`}>
                  {icons[i]}
                </div>
              </div>
              <div className="p-10">
                <div className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">{card.subtitle}</div>
                <h4 className="text-2xl font-black text-[#1a1412] mb-6 leading-tight group-hover:text-[#ea580c] transition-colors">{card.title}</h4>
                <p className="text-stone-600 text-lg leading-relaxed mb-10 font-medium">
                  {card.desc}
                </p>
                <button className="flex items-center space-x-3 text-[#1a1412] font-black group-hover:text-[#ea580c] transition-colors text-lg">
                  <span>{mainProjects.readMore}</span>
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
