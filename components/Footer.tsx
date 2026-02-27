
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { footer, brand } = content;

  return (
    <footer id="footer" className="bg-[#fdfaf7] text-stone-600 py-32 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-10">
              <div className="bg-white p-1 rounded-xl shadow-lg border border-stone-100">
                <img src={brand.logoUrl} alt="Logo" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#1a1412] leading-none tracking-tighter">{brand.name}</span>
                <span className="text-[10px] font-bold text-[#3fb0e3] uppercase tracking-[0.4em]">{brand.suffix}</span>
              </div>
            </div>
            <p className="text-xl leading-relaxed mb-12 font-medium max-w-md text-stone-500">
              {footer.description}
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-4 bg-white border border-stone-200 rounded-2xl text-stone-400 hover:text-[#3fb0e3] hover:border-[#3fb0e3] transition-all shadow-sm">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h5 className="text-[#1a1412] font-black text-xs mb-10 uppercase tracking-[0.3em]">{footer.chapters}</h5>
            <ul className="space-y-6 font-bold text-lg">
              {content.navigation.slice(0, 4).map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-[#3fb0e3] transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[#1a1412] font-black text-xs mb-10 uppercase tracking-[0.3em]">{footer.contact}</h5>
            
            {/* Kontakt Karten Layout gemäß Screenshot */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="bg-white p-5 rounded-[2rem] border border-stone-100 shadow-xl flex items-center space-x-5 hover:-translate-y-1 transition-transform">
                <div className="bg-[#e0f2fe] p-3 rounded-2xl flex-shrink-0">
                  <Mail size={24} className="text-[#3fb0e3]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Email</div>
                  <a href={`mailto:${footer.email}`} className="font-bold text-lg text-[#1a1412] hover:text-[#3fb0e3] transition-colors block leading-tight">
                    {footer.email}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 rounded-[2rem] border border-stone-100 shadow-xl flex items-center space-x-5 hover:-translate-y-1 transition-transform">
                <div className="bg-[#ffedd5] p-3 rounded-2xl flex-shrink-0">
                  <MapPin size={24} className="text-[#ea580c]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Hamburg</div>
                  <span className="font-bold text-lg text-[#1a1412] block leading-tight whitespace-pre-line">
                    {footer.address}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">
             <Heart size={14} className="text-[#3fb0e3]" />
             <span>{footer.partners}</span>
          </div>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} {brand.name} {footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
};
