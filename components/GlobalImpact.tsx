
import React from 'react';
import { Recycle, Scissors, Trophy } from 'lucide-react';

export const GlobalImpact: React.FC = () => {
  const projects = [
    {
      title: "Recycling & Umwelt",
      desc: "Upcycling von Abfällen zu hochwertigen Taschen in Angola. Förderung von Umweltbewusstsein durch Bildung.",
      icon: <Recycle />,
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Frauen & Handwerk",
      desc: "Nähschulen und Design-Werkstätten zur Stärkung der wirtschaftlichen Unabhängigkeit von Frauen.",
      icon: <Scissors />,
      img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sport & Integration",
      desc: "Fußball-Akademien zur Förderung des sozialen Zusammenhalts und der Inklusion von Minderheiten.",
      icon: <Trophy />,
      img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-[#4a5d23] font-black uppercase tracking-[0.3em] text-xs mb-6">Weitere Standbeine</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#2a1f18] mb-8">
            Ganzheitliche <span className="text-[#c05a11]">Entwicklung.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="h-64 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-xl text-[#4a5d23]">
                  {p.icon}
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-[#2a1f18] mb-4">{p.title}</h4>
                <p className="text-stone-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
