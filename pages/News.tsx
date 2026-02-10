
import React from 'react';
import { MediaSection } from '../components/MediaSection';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';
import { CONTENT } from '../content';

const News: React.FC = () => {
  const { news } = CONTENT;

  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-16 text-center">
          {news.title.split(news.italicPart)[0]}
          <span className="serif-italic font-normal italic text-[#3fb0e3]">{news.italicPart}</span>
          {news.title.split(news.italicPart)[1]}
        </h1>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {news.posts.map((post, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
               <div className="h-64 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-[#1a1412] flex items-center space-x-2">
                     <Calendar size={12} />
                     <span>{post.date}</span>
                  </div>
               </div>
               <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#3fb0e3] transition-colors">{post.title}</h3>
                  <p className="text-stone-500 mb-8 font-medium leading-relaxed">{post.excerpt}</p>
                  <button className="flex items-center space-x-2 font-black uppercase tracking-widest text-xs text-[#1a1412] group-hover:translate-x-2 transition-transform">
                     <span>Lesen</span>
                     <ArrowRight size={14} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      <MediaSection />
      
      <section className="py-32 bg-[#1a1412] text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <Bookmark size={40} className="mx-auto mb-8 text-[#3fb0e3]" />
            <h2 className="text-4xl md:text-5xl font-black mb-8">Newsletter abonnieren.</h2>
            <p className="text-stone-400 text-xl max-w-xl mx-auto mb-12">Erhalten Sie monatlich Updates zu unseren Projekten und Erfolgsgeschichten.</p>
            <div className="max-w-md mx-auto flex gap-4">
               <input type="email" placeholder="Deine E-Mail" className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3fb0e3] transition-colors" />
               <button className="bg-[#3fb0e3] px-8 py-4 rounded-2xl font-black">Senden</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default News;
