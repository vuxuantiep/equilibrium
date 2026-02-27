
import React from 'react';
import { Users, Globe } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2a1f18] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-[#c7d5a0] font-black uppercase tracking-widest text-sm mb-6">
              <Users size={20} />
              <span>Unser Team</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              12 Aktivisten. <br />
              <span className="text-[#c05a11]">Eine Mission.</span>
            </h3>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              Lernen Sie unser interdisziplinäres und internationales Team kennen. Wir sind leidenschaftliche Aktivisten aus verschiedenen Fachrichtungen, die gemeinsam für eine gerechtere Welt und echte Inklusion kämpfen.
            </p>
            <div className="flex items-center space-x-4 text-[#c7d5a0] font-bold">
              <Globe size={24} />
              <span>Hamburg • Guatemala City • Remote Worldwide</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f18] via-transparent to-transparent lg:bg-gradient-to-l"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
