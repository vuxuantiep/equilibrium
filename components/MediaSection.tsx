
import React from 'react';
import { PlayCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const MediaSection: React.FC = () => {
  const { content } = useLanguage();
  const { mediaSection } = content.home;

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src={mediaSection.background} 
            alt="Impact Background" 
            className="w-full h-full object-cover"
         />
         {/* Light gradient overlay to ensure text readability matching the screenshot style */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-[#ea580c] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
            <Sparkles size={16} />
            <span>{mediaSection.subtitle}</span>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
            <span className="text-white drop-shadow-md block mb-2">{mediaSection.titleStart}</span>
            <span className="serif-italic font-normal italic text-[#1a1412] opacity-80">{mediaSection.titleEnd}</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {mediaSection.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {mediaSection.items.map((vid, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group-hover:shadow-orange-950/20 transition-all border-4 border-white">
                <img 
                  src={vid.thumb} 
                  alt={vid.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                
                {/* Darker overlay for video thumb readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ea580c] p-5 md:p-6 rounded-full transform group-hover:scale-110 transition-transform shadow-xl border-4 border-white/20 backdrop-blur-sm">
                    <PlayCircle size={48} className="text-white fill-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black border border-white/10">
                  {vid.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
