
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const ImpactStats: React.FC = () => {
  const { content } = useLanguage();
  const { impactStats } = content.home;

  return (
    <section className="py-28 bg-[#0c4a6e] relative overflow-hidden">
      {/* Background Texture (Abstract Map Dots) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0c4a6e] via-transparent to-[#0c4a6e] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 border-t border-white/10 pt-10">
          {impactStats.map((stat, i) => (
            <div key={i} className="text-center group relative">
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`text-5xl md:text-7xl font-black mb-3 tracking-tighter transition-transform duration-500 group-hover:-translate-y-2 ${stat.color} relative z-10`}>
                {stat.value}
              </div>
              <div className="text-[#3fb0e3] font-black uppercase tracking-[0.25em] text-xs relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
