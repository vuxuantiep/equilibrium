
import React from 'react';
import { Wallet, Code2, HeartHandshake, Heart } from 'lucide-react';

export const HowToHelp: React.FC = () => {
  const options = [
    {
      title: "Spenden",
      description: "Unterstütze unsere Sozialprojekte für Kinder und IT-Bildung finanziell.",
      button: "Jetzt Spenden",
      icon: <Wallet size={40} className="text-[#3fb0e3]" />,
      btnColor: "bg-[#3fb0e3] hover:bg-[#60c5f1]",
    },
    {
      title: "Engagement",
      description: "Bringe dein Wissen als Entwickler ein oder unterstütze uns als Volunteer.",
      button: "Mitwirken",
      icon: <Code2 size={40} className="text-[#4a5d23]" />,
      btnColor: "bg-[#4a5d23] hover:bg-[#5a6d33]",
    },
    {
      title: "Partnerschaft",
      description: "Stiftungen und Organisationen finden bei uns transparente Zusammenarbeit.",
      button: "Kooperieren",
      icon: <HeartHandshake size={40} className="text-[#3fb0e3]" />,
      btnColor: "bg-[#3fb0e3]/80 hover:bg-[#3fb0e3]",
    }
  ];

  return (
    <section id="engagement" className="py-32 relative overflow-hidden bg-fixed-social">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-warm p-16 md:p-24 rounded-[4rem] shadow-3xl">
          <div className="text-center mb-20">
            <div className="bg-[#3fb0e3]/10 p-5 rounded-full inline-block mb-6">
              <Heart className="text-[#3fb0e3] fill-[#3fb0e3]" size={40} />
            </div>
            <h2 className="serif-italic text-[#3fb0e3] text-3xl mb-4 italic">Deine Hilfe macht den Unterschied</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#1a1412] mb-8 tracking-tighter">Gemeinsam Zukunft <span className="text-[#4a5d23]">gestalten.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {options.map((opt, i) => (
              <div key={i} className="flex flex-col h-full bg-white/60 p-10 rounded-[2.5rem] border border-white hover:bg-white transition-all shadow-xl group">
                <div className="bg-white p-6 rounded-3xl inline-block mb-8 w-fit shadow-md group-hover:scale-110 transition-transform">
                  {opt.icon}
                </div>
                <h4 className="text-2xl font-bold mb-6 text-[#1a1412]">{opt.title}</h4>
                <p className="text-stone-600 leading-relaxed mb-10 flex-grow font-medium">
                  {opt.description}
                </p>
                <button className={`w-full ${opt.btnColor} text-white font-black py-5 rounded-2xl transition-all shadow-xl active:scale-95 text-lg`}>
                  {opt.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};