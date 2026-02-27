
import React from 'react';
import { Calendar, Users, Globe, Download as DownloadIcon, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhoWeAre: React.FC = () => {
  const { content, language } = useLanguage();
  const { whoWeAre } = content;
  
  const factIcons = [
    <Calendar className="text-white" size={32} />,
    <Users className="text-white" size={32} />,
    <Globe className="text-white" size={32} />
  ];

  const colors = ["bg-[#3fb0e3]", "bg-[#0c4a6e]", "bg-[#ea580c]"];

  return (
    <div key={language} className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      
      {/* 1. Modern Hero Section */}
      <section className="relative px-6 pb-20 pt-10 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3fb0e3]/10 rounded-full blur-[100px] -mr-32 -mt-32 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-7">
              <span className="text-[#ea580c] font-black uppercase tracking-[0.3em] text-xs mb-6 block">{whoWeAre.heroTag || "Über uns"}</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-8 leading-[1.1]">
                 {whoWeAre.title}
              </h1>
              <div className="space-y-6 text-xl md:text-2xl text-stone-600 font-medium leading-relaxed">
                 <p className="border-l-4 border-[#3fb0e3] pl-6">{whoWeAre.description}</p>
                 <p>{whoWeAre.subDescription}</p>
              </div>
           </div>
           
           {/* Abstract Visual / Stats Card */}
           <div className="lg:col-span-5">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-stone-100 relative">
                 <div className="absolute -top-6 -right-6 bg-[#0c4a6e] text-white p-6 rounded-[2rem] shadow-lg rotate-3 z-20">
                    <p className="text-3xl font-black text-center">{whoWeAre.foundedYear || "2014"}</p>
                    <p className="text-[10px] uppercase tracking-widest text-center">{whoWeAre.foundedLabel || "Gegründet"}</p>
                 </div>
                 <p className="text-2xl font-serif italic text-stone-500 leading-relaxed">
                   "{whoWeAre.motto}"
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Timeline / Quick Facts (Redesigned) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {whoWeAre.quickFacts.map((fact, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-lg border border-stone-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className={`w-16 h-16 ${colors[i]} rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform`}>
                {factIcons[i]}
              </div>
              <p className="text-stone-600 text-lg font-medium leading-relaxed">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Information Grid */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1412] mb-6 tracking-tighter">
              {whoWeAre.detailsTitle}
            </h2>
            <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-24">
            {whoWeAre.details.map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                
                {/* Image Side */}
                <div className="lg:w-1/2 relative">
                   <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#fdfaf7] relative z-10 aspect-[4/3]">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop";
                        }}
                      />
                   </div>
                   {/* Background Decor */}
                   <div className={`absolute top-10 ${i % 2 !== 0 ? 'left-10' : 'right-10'} w-full h-full bg-[#f0f9ff] rounded-[3rem] -z-0`}></div>
                </div>

                {/* Text Side */}
                <div className="lg:w-1/2">
                   <h3 className="text-3xl md:text-4xl font-black text-[#0c4a6e] mb-6">
                      {item.title}
                   </h3>
                   <p className="text-xl text-stone-600 leading-relaxed font-medium mb-8">
                      {item.text}
                   </p>
                   <a 
                      href={item.link} 
                      className="inline-flex items-center space-x-2 text-[#ea580c] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform group"
                   >
                      <span>{item.linkText}</span>
                      <ChevronRight size={18} className="group-hover:text-[#0c4a6e] transition-colors" />
                   </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Downloads Sektion (Card Style) */}
      <section className="py-24 px-6 bg-[#0c4a6e] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter">
            {whoWeAre.downloads.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whoWeAre.downloads.items.map((dl, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="bg-[#3fb0e3] p-4 rounded-full mb-6 shadow-lg shadow-[#3fb0e3]/30">
                   <DownloadIcon size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-8 text-white">
                  {dl.title}
                </h4>
                <a 
                  href={dl.link} 
                  className="bg-white text-[#0c4a6e] px-8 py-3 rounded-xl font-black shadow-lg transition-all active:scale-95 hover:bg-stone-100"
                >
                  {dl.btn}
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
