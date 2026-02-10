
import React from 'react';
import { Globe, ArrowRight, CheckCircle2, Layout, Award, Users, Trophy } from 'lucide-react';
import { CONTENT } from '../content';

const ProjectCard: React.FC<{
  title: string;
  subtitle: string;
  text: string;
  link: string;
  img: string;
  reverse?: boolean;
}> = ({ title, subtitle, text, link, img, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-20 overflow-hidden rounded-[3rem] shadow-xl border border-stone-100 bg-white group`}>
    <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
    <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-[#F2F2F2]">
      <h4 className="text-sm font-black text-[#3fb0e3] uppercase tracking-[0.2em] mb-4">{subtitle}</h4>
      <h3 className="text-3xl md:text-4xl font-black text-[#1a1412] mb-6 leading-tight tracking-tighter">
        {title}
      </h3>
      <p className="text-stone-600 text-lg leading-relaxed mb-8 font-medium">
        {text}
      </p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-[#ff0000] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
      >
        <span>Weiterlesen</span>
        <ArrowRight size={18} />
      </a>
    </div>
  </div>
);

const SectorCard: React.FC<{
  sector: string;
  subtitle: string;
  text: string;
  img: string;
  link: string;
}> = ({ sector, subtitle, text, img, link }) => (
  <div className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-stone-50 hover:shadow-2xl transition-all duration-500">
    <div className="h-56 overflow-hidden relative">
      <img src={img} alt={sector} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#3fb0e3]">{sector}</span>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h4 className="text-xl font-black text-[#1a1412] mb-2">{subtitle}</h4>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow font-medium">{text}</p>
      <a href={link} className="text-[#ff0000] font-black uppercase tracking-widest text-xs hover:translate-x-1 transition-transform inline-flex items-center">
        <span>Weiterlesen</span>
        <ArrowRight size={14} className="ml-1" />
      </a>
    </div>
  </div>
);

const WhatWeDoPage: React.FC = () => {
  const { whatWeDo } = CONTENT;

  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      {/* 1. Header & Einleitung */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1a1412] mb-12">
          Was wir <span className="serif-italic font-normal italic text-[#3fb0e3]">tun</span>.
        </h1>
        <div className="max-w-4xl mx-auto space-y-10">
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium">
            {whatWeDo.description}
          </p>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-stone-100 italic text-lg text-stone-500 leading-relaxed">
            {whatWeDo.activitiesInfo}
          </div>
          <p className="text-xl text-stone-600 leading-relaxed font-medium">
            {whatWeDo.impactGoal}
          </p>
        </div>
      </section>

      {/* 2. Impact Stats Summary */}
      <section className="py-20 bg-[#4a5d23] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Layout size={40} className="mx-auto text-[#3fb0e3]" />
              <p className="text-lg font-bold leading-snug">{whatWeDo.stats.projectsCount}</p>
            </div>
            <div className="space-y-4">
              <Users size={40} className="mx-auto text-[#3fb0e3]" />
              <p className="text-lg font-bold leading-snug">{whatWeDo.stats.peopleCount}</p>
            </div>
            <div className="space-y-4">
              <Award size={40} className="mx-auto text-[#3fb0e3]" />
              <p className="text-lg font-bold leading-snug">{whatWeDo.stats.equipment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Laufende Projekte */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-[#3fb0e3] text-center mb-24 tracking-tighter uppercase">
          {whatWeDo.ongoing.title}
        </h2>
        {whatWeDo.ongoing.items.map((project, i) => (
          <ProjectCard 
            key={i}
            title={project.title}
            subtitle={project.subtitle}
            text={project.text}
            link={project.link}
            img={project.img}
            reverse={i % 2 !== 0}
          />
        ))}
      </section>

      {/* 4. Abgeschlossene Projekte */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#3fb0e3] text-center mb-24 tracking-tighter uppercase">
            {whatWeDo.completed.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDo.completed.items.map((item, i) => (
              <SectorCard 
                key={i}
                sector={item.sector}
                subtitle={item.subtitle}
                text={item.text}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-32 bg-[#fdfaf7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-6xl font-black text-[#1a1412] mb-10 tracking-tighter">
            {whatWeDo.cta.title}
          </h3>
          <p className="text-xl text-stone-600 mb-12 font-medium leading-relaxed">
            {whatWeDo.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95">
              Mitwirken
            </button>
            <button className="bg-[#4a5d23] hover:bg-[#5a6d33] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95">
              Jetzt Spenden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
