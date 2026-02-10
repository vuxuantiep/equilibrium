
import React from 'react';

export const ImpactStats: React.FC = () => {
  const stats = [
    { value: "600+", label: "Absolventen", color: "text-[#3fb0e3]", glow: "shadow-blue-500/20" },
    { value: "4", label: "Länder", color: "text-white", glow: "shadow-green-500/20" },
    { value: "12", label: "Aktivisten", color: "text-white", glow: "shadow-orange-500/20" },
    { value: "24/7", label: "KI Support", color: "text-[#3fb0e3]", glow: "shadow-purple-500/20" }
  ];

  return (
    <section className="py-24 bg-[#4a5d23] border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-6xl md:text-8xl font-black mb-4 tracking-tighter transition-all duration-700 group-hover:scale-110 ${stat.color} drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                {stat.value}
              </div>
              <div className="text-stone-200 font-bold uppercase tracking-[0.4em] text-[11px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
