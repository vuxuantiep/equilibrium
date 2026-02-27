
import React from 'react';
import { MediaSection } from '../components/MediaSection';
import { Calendar, User, Tag, ArrowRight, Bookmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { content, language } = useLanguage();
  const { news } = content;

  return (
    <div key={language} className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#1a1412] mb-16 border-b border-stone-200 pb-8">
          {news.title}
        </h1>
        
        <div className="space-y-16 mb-24">
          {news.posts.map((post, i) => (
            <div key={i} className="flex flex-col bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-shadow duration-500">
               
               {/* Content Container */}
               <div className="flex flex-col md:flex-row">
                  {/* Image (if exists) */}
                  {post.img && (
                      <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                          <img 
                            src={post.img} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                      </div>
                  )}

                  {/* Text Content */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${post.img ? 'md:w-3/5' : 'w-full'}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1a1412] mb-6 leading-tight group-hover:text-[#3fb0e3] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-stone-600 mb-8 font-medium leading-relaxed text-lg line-clamp-4">
                        {post.excerpt}
                      </p>
                      
                      {/* Metadata Footer */}
                      <div className="mt-auto pt-6 border-t border-stone-100 flex flex-wrap gap-y-2 items-center text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wide">
                          <div className="flex items-center mr-6">
                             <User size={14} className="mr-2" />
                             <span>{post.author || "Admin"}</span>
                          </div>
                          <div className="flex items-center mr-6">
                             <Calendar size={14} className="mr-2" />
                             <span>{post.date}</span>
                          </div>
                          {post.category && (
                             <div className="flex items-center mr-auto">
                                <Tag size={14} className="mr-2" />
                                <span>{post.category}</span>
                             </div>
                          )}

                          <a href={(post as { link?: string }).link || news.newsPageUrl || "#"} target="_blank" rel="noopener noreferrer" className="ml-auto bg-[#0c4a6e] hover:bg-[#3fb0e3] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 inline-flex">
                             <span>{language === "de" ? "Weiterlesen" : "Read more"}</span>
                             <ArrowRight size={14} />
                          </a>
                      </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      <MediaSection />
      
      <section className="py-32 bg-[#1a1412] text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <Bookmark size={40} className="mx-auto mb-8 text-[#3fb0e3]" />
            <h2 className="text-4xl md:text-5xl font-black mb-8">Subscribe to Newsletter.</h2>
            <p className="text-stone-400 text-xl max-w-xl mx-auto mb-12">Get monthly updates on our projects and success stories.</p>
            <div className="max-w-md mx-auto flex gap-4">
               <input type="email" placeholder="Your E-Mail" className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3fb0e3] transition-colors" />
               <button className="bg-[#3fb0e3] px-8 py-4 rounded-2xl font-black">Send</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default News;
