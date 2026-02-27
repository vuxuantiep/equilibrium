
import React from 'react';
import { Globe, ArrowRight, Layout, Users, Layers, Briefcase, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Icon Helper
const getActivityIcon = (index: number) => {
  const icons = [<Layers size={32} />, <Briefcase size={32} />, <Users size={32} />, <Zap size={32} />];
  return icons[index % icons.length];
};

const WhatWeDoPage: React.FC = () => {
  const { content, language } = useLanguage();
  const { whatWeDo } = content;
  const strategyIcons = [<Layers size={28} />, <Briefcase size={28} />, <Users size={28} />, <Zap size={28} />];
  const strategies = (whatWeDo.strategies || []).map((s, i) => ({ ...s, icon: strategyIcons[i] }));

  return (
    <div key={language} className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      
      {/* 1. HERO & STRATEGY SECTION */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#ea580c] font-black uppercase tracking-[0.3em] text-xs mb-6 block">{whatWeDo.heroTag}</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1a1412] mb-10 leading-[1.1]">
              {whatWeDo.heroLine1} <br />
              <span className="serif-italic font-normal italic text-[#3fb0e3]">{whatWeDo.heroLine2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium">
              {whatWeDo.description}
            </p>
        </div>

        {/* 4 Strategy Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="w-16 h-16 bg-[#fdfaf7] rounded-2xl flex items-center justify-center mb-6 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors shadow-inner">
                        {strat.icon}
                    </div>
                    <h3 className="text-xl font-black text-[#1a1412] mb-3 leading-tight">{strat.title}</h3>
                    <p className="text-stone-500 font-medium text-sm leading-relaxed">{strat.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 2. IMPACT STATS STRIP (Dark Blue) */}
      <section className="py-20 bg-[#0c4a6e] relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Stat 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                    <div className="bg-[#3fb0e3] p-4 rounded-full text-[#0c4a6e] shadow-lg shadow-[#3fb0e3]/20">
                        <Globe size={32} />
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-2">{whatWeDo.stats.projectsCount}</div>
                        <p className="text-[#bae6fd] text-sm font-medium leading-relaxed">{whatWeDo.stats.projectsText}</p>
                    </div>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                    <div className="bg-[#ea580c] p-4 rounded-full text-white shadow-lg shadow-[#ea580c]/20">
                        <Users size={32} />
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-2">{whatWeDo.stats.peopleCount}</div>
                        <p className="text-orange-100 text-sm font-medium leading-relaxed">{whatWeDo.stats.peopleText}</p>
                    </div>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="bg-white p-4 rounded-full text-[#0c4a6e] shadow-lg">
                        <Layout size={32} />
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-2">{whatWeDo.stats.equipment}</div>
                        <p className="text-stone-300 text-sm font-medium leading-relaxed">{whatWeDo.stats.equipmentText}</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. ONGOING PROJECTS (Feature Cards) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
            <div>
                <h2 className="text-[#3fb0e3] font-black uppercase tracking-widest text-sm mb-4">{whatWeDo.sectionOngoingLabel}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#1a1412]">{whatWeDo.ongoing.title}</h3>
            </div>
            <div className="hidden md:block w-32 h-px bg-stone-200 mb-4"></div>
        </div>

        <div className="space-y-20">
            {whatWeDo.ongoing.items.map((project, i) => (
                <div key={i} className={`group flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-[3rem] shadow-xl border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-700`}>
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-[#0c4a6e]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest text-[#1a1412] flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#ea580c]' : 'bg-[#3fb0e3]'}`}></div>
                            {project.subtitle}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-black text-[#1a1412] mb-6 leading-tight group-hover:text-[#3fb0e3] transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-stone-600 text-lg leading-relaxed mb-10 font-medium">
                            {project.text}
                        </p>
                        <a 
                            href={project.link} 
                            className="inline-flex items-center space-x-3 text-[#1a1412] font-black text-lg group/btn"
                        >
                            <span className="border-b-2 border-[#ea580c] pb-1">{whatWeDo.viewProject}</span>
                            <ArrowUpRight size={20} className="text-[#ea580c] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 4. COMPLETED PROJECTS (Masonry/Grid Style) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black text-[#1a1412] mb-6 tracking-tighter">
                {whatWeDo.completed.title}
             </h2>
             <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {whatWeDo.completed.items.map((item, i) => (
              <div key={i} className="flex flex-col bg-[#fdfaf7] rounded-[2.5rem] overflow-hidden border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                 <div className="h-72 overflow-hidden relative">
                    <img src={item.img} alt={item.sector} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute bottom-6 left-6 bg-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-[#0c4a6e] shadow-lg">
                        {item.sector}
                    </div>
                 </div>
                 <div className="p-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-black text-[#1a1412] mb-4 group-hover:text-[#ea580c] transition-colors">{item.subtitle}</h4>
                    <p className="text-stone-600 font-medium leading-relaxed mb-8 flex-grow">
                        {item.text}
                    </p>
                    <a href={item.link} className="flex items-center space-x-2 text-[#3fb0e3] font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform mt-auto">
                        <span>{whatWeDo.learnMore}</span>
                        <ArrowRight size={16} />
                    </a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Dunkelblau, einheitlich mit anderen Abschnitten) */}
      <section className="py-32 px-6 bg-[#0c4a6e] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            {whatWeDo.cta.title}
          </h3>
          <p className="text-xl md:text-2xl text-[#bae6fd] mb-12 font-medium leading-relaxed">
            {whatWeDo.cta.text}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link 
                to="/spenden" 
                className="bg-white text-[#0c4a6e] px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-transform active:scale-95 hover:bg-[#fdfaf7] flex items-center space-x-3"
             >
                <span>{whatWeDo.cta.link2}</span>
                <Zap size={20} fill="currentColor" />
             </Link>
             <Link 
                to="/engagieren" 
                className="bg-white/10 border-2 border-white text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl transition-transform active:scale-95 hover:bg-white hover:text-[#0c4a6e] flex items-center space-x-3"
             >
                <span>{whatWeDo.cta.link1}</span>
                <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
