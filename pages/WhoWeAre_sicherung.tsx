
import React from 'react';
import { Calendar, Users, Globe, Download as DownloadIcon } from 'lucide-react';
import { CONTENT } from '../content';

const WhoWeAre: React.FC = () => {
  const { whoWeAre } = CONTENT;
  const factIcons = [
    <Calendar className="text-[#3fb0e3]" size={32} />,
    <Users className="text-[#3fb0e3]" size={32} />,
    <Globe className="text-[#3fb0e3]" size={32} />
  ];

  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-white">
      {/* 1. Einleitungstext */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#3fb0e3] mb-12">
          {whoWeAre.title}
        </h1>
        <div className="space-y-8 text-stone-600 text-lg md:text-xl leading-relaxed font-medium">
          <p>{whoWeAre.description}</p>
          <p>{whoWeAre.subDescription}</p>
          <p>{whoWeAre.motto}</p>
        </div>
      </section>

      {/* 2. Quick Facts Icon Liste */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          {whoWeAre.quickFacts.map((fact, i) => (
            <div key={i} className="flex items-center space-x-8 md:space-x-12 group">
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full border-2 border-[#3fb0e3] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {factIcons[i]}
              </div>
              <p className="text-stone-500 text-lg md:text-xl font-semibold leading-snug">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detail Grid "Erfahren Sie mehr über uns" */}
      <section className="py-24 px-6 bg-[#fdfaf7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#3fb0e3] text-center mb-24 tracking-tighter">
            {whoWeAre.detailsTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {whoWeAre.details.map((item, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="text-3xl font-black text-[#3fb0e3] mb-8 text-center uppercase tracking-tighter">
                  {item.title}
                </h3>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-10 border border-stone-100 flex items-center justify-center min-h-[300px] p-4">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="max-w-full h-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="bg-[#F2F2F2] p-10 rounded-3xl flex-grow shadow-inner">
                  <p className="text-stone-600 text-lg leading-relaxed font-medium mb-8">
                    {item.text}
                  </p>
                  <a 
                    href={item.link} 
                    className="text-[#ff0000] font-black text-xl hover:translate-x-2 transition-transform inline-block"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Downloads Sektion */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#3fb0e3] mb-20 tracking-tighter">
            {whoWeAre.downloads.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 max-w-5xl mx-auto">
            {whoWeAre.downloads.items.map((dl, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-2xl md:text-3xl font-black text-[#3fb0e3] mb-8">
                  {dl.title}
                </h4>
                <a 
                  href={dl.link} 
                  className="bg-[#60c5f1] hover:bg-[#3fb0e3] text-white px-12 py-4 rounded-xl font-black text-xl shadow-lg transition-all active:scale-95 flex items-center space-x-3"
                >
                  <DownloadIcon size={24} />
                  <span>{dl.btn}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
