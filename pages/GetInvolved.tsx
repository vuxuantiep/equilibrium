
import React from 'react';
import { PiggyBank, Banknote, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { CONTENT } from '../content';

const GetInvolved: React.FC = () => {
  const { getInvolved } = CONTENT;

  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      {/* SECTION 1: Financial Help */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#3fb0e3] text-center mb-16 tracking-tighter">
          {getInvolved.financial.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Donation Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center border border-stone-100 hover:shadow-2xl transition-all">
            <div className="bg-[#3fb0e3]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Banknote size={48} className="text-[#3fb0e3]" />
            </div>
            <h3 className="text-2xl font-black text-[#1a1412] mb-6">{getInvolved.financial.items[0].title}</h3>
            <p className="text-stone-600 leading-relaxed mb-8 font-medium">
              {getInvolved.financial.items[0].text}
            </p>
            <a href={getInvolved.financial.items[0].link} className="inline-block bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-8 py-3 rounded-xl font-black shadow-lg transition-all active:scale-95">
              {getInvolved.financial.items[0].btn}
            </a>
          </div>

          {/* Microcredit Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center border border-stone-100 hover:shadow-2xl transition-all">
            <div className="bg-[#3fb0e3]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <PiggyBank size={48} className="text-[#3fb0e3]" />
            </div>
            <h3 className="text-2xl font-black text-[#1a1412] mb-6">{getInvolved.financial.items[1].title}</h3>
            <p className="text-stone-600 leading-relaxed mb-8 font-medium">
              {getInvolved.financial.items[1].text}
            </p>
            <a href={getInvolved.financial.items[1].link} className="inline-block bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-8 py-3 rounded-xl font-black shadow-lg transition-all active:scale-95">
              {getInvolved.financial.items[1].btn}
            </a>
          </div>
        </div>
        
        <div className="w-full h-px bg-stone-200 mt-20 max-w-4xl mx-auto"></div>
      </section>

      {/* SECTION 2: Project Involvement */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#3fb0e3] text-center mb-16 tracking-tighter">
          {getInvolved.projects.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {getInvolved.projects.items.map((item, i) => (
            <div key={i} className="flex flex-col text-center">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-64 mb-8 border border-white hover:scale-105 transition-transform duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-[#1a1412] mb-4">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-8 font-medium flex-grow px-4">
                {item.text}
              </p>
              <div className="pt-4">
                <a href={item.link} className="inline-block bg-[#3fb0e3] hover:bg-[#60c5f1] text-white px-6 py-3 rounded-xl font-black shadow-md transition-all active:scale-95">
                  Mehr Informationen
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full h-px bg-stone-200 mt-20 max-w-4xl mx-auto"></div>
      </section>

      {/* SECTION 3: Contact Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-[#3fb0e3] mb-12 tracking-tighter text-center md:text-left">
          {getInvolved.contact.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-stone-100">
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="bg-[#3fb0e3]/10 p-4 rounded-2xl">
                <MapPin size={32} className="text-[#3fb0e3]" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1a1412] mb-2 uppercase tracking-widest">Adresse</h4>
                <p className="text-xl text-stone-600 font-medium whitespace-pre-line leading-relaxed">
                  {getInvolved.contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[#4a5d23]/10 p-4 rounded-2xl">
                <Mail size={32} className="text-[#4a5d23]" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1a1412] mb-2 uppercase tracking-widest">Email</h4>
                <a href="mailto:info@equilibrium.foundation" className="text-xl text-stone-600 font-medium hover:text-[#3fb0e3] transition-colors">
                  info@equilibrium.foundation
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-inner border-4 border-stone-50 bg-stone-100 relative">
             <iframe 
               src={getInvolved.contact.mapEmbed}
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Equilibrium Foundation Location"
             ></iframe>
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2">
                <ExternalLink size={12} />
                <span>Google Maps</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
