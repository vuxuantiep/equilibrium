
import React from 'react';
import { Wallet, Code2, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const HowToHelp: React.FC = () => {
  const { content } = useLanguage();
  const { howToHelp } = content.home;

  const icons = [
    <Wallet size={32} className="text-white" />,
    <Code2 size={32} className="text-white" />,
    <HeartHandshake size={32} className="text-white" />
  ];

  // Map distinct colors to the cards for variety
  const cardStyles = [
    { bg: "bg-white", iconBg: "bg-[#ea580c]", border: "border-stone-100", hoverBorder: "hover:border-[#ea580c]" },
    { bg: "bg-white", iconBg: "bg-[#0c4a6e]", border: "border-stone-100", hoverBorder: "hover:border-[#0c4a6e]" },
    { bg: "bg-white", iconBg: "bg-[#3fb0e3]", border: "border-stone-100", hoverBorder: "hover:border-[#3fb0e3]" }
  ];

  return (
    <section id="engagement" className="py-32 relative overflow-hidden bg-[#fdfaf7]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 text-[#ea580c] font-black uppercase tracking-[0.3em] text-xs mb-6">
                <Sparkles size={16} />
                <span>{howToHelp.iconTitle}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1412] tracking-tighter leading-tight">
              {howToHelp.titleStart} <span className="serif-italic font-normal italic text-[#3fb0e3]">{howToHelp.titleEnd}</span>
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {howToHelp.items.map((opt, i) => (
            <div key={i} className={`flex flex-col h-full ${cardStyles[i].bg} p-10 rounded-[2.5rem] border ${cardStyles[i].border} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${cardStyles[i].hoverBorder}`}>
              
              {/* Icon Bubble */}
              <div className={`${cardStyles[i].iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {icons[i]}
              </div>
              
              <h4 className="text-2xl font-black mb-4 text-[#1a1412] group-hover:text-[#3fb0e3] transition-colors">{opt.title}</h4>
              
              <p className="text-stone-600 leading-relaxed mb-10 flex-grow font-medium text-lg">
                {opt.desc}
              </p>
              
              <button className={`w-full ${opt.btnColor} text-white font-black py-4 rounded-xl transition-all shadow-md active:scale-95 text-base flex items-center justify-center space-x-2`}>
                <span>{opt.button}</span>
                <ArrowRight size={18} className="opacity-70" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
