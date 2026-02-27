
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Share2, MessageCircle, ThumbsUp, ArrowRight } from 'lucide-react';

export const SocialFeed: React.FC = () => {
  const { content } = useLanguage();
  const { socialFeed } = content.home;

  return (
    <section className="py-24 bg-[#fdfaf7] border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Column: Blog Card - Styled to match Facebook Card */}
          <div className="flex flex-col h-full">
             <h2 className="text-3xl md:text-4xl font-black text-[#3fb0e3] text-center mb-8 leading-tight">
               {socialFeed.blogTitle}
             </h2>
             
             <div className="w-full max-w-lg mx-auto bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-shadow duration-300">
                {/* Header (Mimic FB Header) */}
                <div className="p-4 border-b border-stone-100 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white border border-stone-200 rounded-full p-1 flex items-center justify-center">
                        <img src={content.brand.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#1a1412] text-sm">Equilibrium Blog</h4>
                        <span className="text-xs text-stone-500">Latest Updates</span>
                    </div>
                </div>

                {/* Main Image */}
                <div className="relative h-64 overflow-hidden">
                    <img 
                      src={socialFeed.blogImage} 
                      alt="Blog" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow items-center justify-center text-center">
                    <h3 className="text-xl font-bold text-[#1a1412] mb-3">Explore Our Stories</h3>
                    <p className="text-stone-500 text-sm mb-6 max-w-xs">
                        Read about our latest successes in Guatemala, Malawi, and Angola.
                    </p>
                    <a 
                      href={socialFeed.blogLink || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#0c4a6e] hover:bg-[#075985] text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 shadow-md"
                    >
                        <span>{socialFeed.blogButtonText || "Zum Blog"}</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
             </div>
          </div>

          {/* Right Column: Simulated Facebook Feed */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl font-black text-[#3fb0e3] text-center mb-8 leading-tight">
               {socialFeed.facebookTitle}
            </h2>
            
            {/* Facebook Card Mockup */}
            <div className="w-full max-w-lg mx-auto bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
               {/* Header Info */}
               <div className="p-4 border-b border-stone-100 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-3">
                     <div className="w-12 h-12 bg-white border border-stone-200 rounded-lg p-1">
                        <img src={content.brand.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#1a1412] text-sm leading-tight">Equilibrium Foundation</h4>
                        <span className="text-xs text-stone-500">770 Follower</span>
                     </div>
                  </div>
               </div>

               {/* Action Bar */}
               <div className="px-4 py-3 bg-[#f0f2f5] flex justify-between items-center border-b border-stone-100 shrink-0">
                  <a 
                    href={socialFeed.facebookPageUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white border border-stone-300 px-3 py-1.5 rounded font-bold text-xs text-stone-600 hover:bg-stone-50"
                  >
                     <Facebook size={14} className="text-[#1877F2]" />
                     <span>Seite folgen</span>
                  </a>
                  <button className="flex items-center space-x-2 bg-white border border-stone-300 px-3 py-1.5 rounded font-bold text-xs text-stone-600 hover:bg-stone-50">
                     <Share2 size={14} />
                     <span>Teilen</span>
                  </button>
               </div>

               {/* Post Content */}
               <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-10 h-10 rounded-full border border-stone-100 overflow-hidden bg-white p-1">
                        <img src={content.brand.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                     </div>
                     <div>
                        <div className="font-bold text-sm text-[#1a1412]">Equilibrium Foundation</div>
                        <div className="text-xs text-stone-500">{socialFeed.post.date}</div>
                     </div>
                     <Facebook size={16} className="text-[#1877F2] ml-auto" />
                  </div>

                  <p className="text-sm font-bold text-[#1a1412] mb-1">
                     {socialFeed.post.contentTitle}
                  </p>
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                     {socialFeed.post.content}
                     {socialFeed.post.contentDate && (
                       <span className="text-stone-400 text-xs block mt-1">{socialFeed.post.contentDate}</span>
                     )}
                     <span className="text-stone-400 text-xs ml-1 cursor-pointer hover:underline">Mehr anzeigen</span>
                  </p>

                  {/* Post Images */}
                  <div className="grid grid-cols-2 gap-1 mb-4 mt-auto">
                     <img src={socialFeed.post.images[0]} className="w-full h-32 object-cover rounded-l-lg" alt="Post 1" />
                     <img src={socialFeed.post.images[1]} className="w-full h-32 object-cover rounded-r-lg" alt="Post 2" />
                  </div>

                  {/* Footer Stats/Actions */}
                  <div className="flex items-center justify-between text-stone-500 text-xs border-t border-stone-100 pt-2 shrink-0">
                     <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1 cursor-pointer hover:text-[#0c4a6e]">
                           <ThumbsUp size={14} />
                           <span>Gefällt mir</span>
                        </span>
                        <span className="flex items-center space-x-1 cursor-pointer hover:text-[#0c4a6e]">
                           <MessageCircle size={14} />
                           <span>Kommentieren</span>
                        </span>
                     </div>
                     <span className="flex items-center space-x-1 cursor-pointer hover:text-[#0c4a6e]">
                        <Share2 size={14} />
                        <span>Teilen</span>
                     </span>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Bottom Social Links */}
        <div className="mt-24 text-center">
           <h3 className="text-2xl md:text-3xl font-black text-[#3fb0e3] mb-8">
              {socialFeed.connectTitle}
           </h3>
           <div className="flex justify-center space-x-4 md:space-x-6">
              {[
                 { icon: <Facebook size={24} />, color: "bg-[#3b5998]" },
                 { icon: <Instagram size={24} />, color: "bg-[#e1306c]" },
                 { icon: <Twitter size={24} />, color: "bg-[#1da1f2]" },
                 { icon: <Youtube size={24} />, color: "bg-[#ff0000]" }
              ].map((social, idx) => (
                 <a 
                   key={idx} 
                   href="#" 
                   className={`${social.color} text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                 >
                    {social.icon}
                 </a>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};
