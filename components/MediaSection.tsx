
import React from 'react';
import { PlayCircle, Video, Camera, Sparkles } from 'lucide-react';

export const MediaSection: React.FC = () => {
  const videos = [
    {
      title: "Vom Alphabet zum Code",
      duration: "4:20",
      thumb: "https://images.unsplash.com/photo-1518107616385-ad30833edec1?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "KI-Technik im Praxistest",
      duration: "3:15",
      thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 text-[#f37021] font-black uppercase tracking-[0.3em] text-xs mb-6">
            <Sparkles size={20} />
            <span>Galerie & Medien</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Wirkung in <br /> <span className="serif-italic font-normal italic text-stone-500">Bild & Ton</span></h3>
          <p className="text-2xl text-stone-400 max-w-2xl mx-auto font-medium">
            Erleben Sie die echten Geschichten hinter unseren digitalen Lösungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {videos.map((vid, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-8 group-hover:shadow-orange-950/40 transition-all border-4 border-white/5">
                <img 
                  src={vid.thumb} 
                  alt={vid.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412] to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#f37021] p-6 rounded-full transform group-hover:scale-110 transition-transform shadow-2xl">
                    <PlayCircle size={60} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 bg-[#231b18]/90 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-sm font-black border border-white/10">
                  {vid.duration}
                </div>
              </div>
              <h4 className="text-3xl font-black text-white group-hover:text-[#f37021] transition-colors px-6 tracking-tight">
                {vid.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};