
import React from 'react';
import { Image as ImageIcon, Award, Languages, MapPin, Smile } from 'lucide-react';

export const Gallery: React.FC = () => {
  const highlights = [
    {
      title: "Zertifizierung & Erfolg",
      desc: "Über 600 benachteiligte Menschen haben bereits unsere Programme abgeschlossen.",
      icon: <Award className="text-[#c05a11]" />,
      img: "https://images.unsplash.com/photo-1523240632013-da209f354a0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Inklusive Bildung",
      desc: "Vermittlung des Fingeralphabets und Gebärdensprache als Schlüssel zur Welt.",
      icon: <Languages className="text-[#ea580c]" />,
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Lokale Wurzeln",
      desc: "Wir arbeiten in der Mongolei, Afrika und Mittelamerika direkt mit der Gemeinschaft.",
      icon: <MapPin className="text-[#ea580c]" />,
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Freude & Fortschritt",
      desc: "Sport und Kultur als integraler Bestandteil unserer Inklusionsarbeit.",
      icon: <Smile className="text-[#c05a11]" />,
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[#ea580c] font-black uppercase tracking-widest text-sm mb-4">
              <ImageIcon size={20} />
              <span>Unsere Wirkung weltweit</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#2a1f18]">Gelebte <span className="text-[#c05a11]">Inklusion</span></h3>
          </div>
          <p className="text-lg text-stone-600 font-medium max-w-sm">
            Von der spirituellen Begleitung bis zur IT-Zertifizierung – wir fördern Menschen ganzheitlich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg h-[450px]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f18] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-stone-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
