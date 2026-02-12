
import React from 'react';
import { Partners } from '../components/Partners';
import { ImpactStats } from '../components/ImpactStats';
import { ShieldCheck, Globe, Share2, Home, Building2, Users, Banknote } from 'lucide-react';
import { CONTENT } from '../content';

const Network: React.FC = () => {
  const { network } = CONTENT;

  const getIcon = (type: string) => {
    switch(type) {
      case 'community': return <Home size={40} className="text-[#3fb0e3]" />;
      case 'government': return <Building2 size={40} className="text-[#3fb0e3]" />;
      case 'nonprofit': return <Users size={40} className="text-[#3fb0e3]" />;
      case 'forprofit': return <Banknote size={40} className="text-[#3fb0e3]" />;
      default: return <Home size={40} />;
    }
  };

  return (
    <div className="pt-32 animate-in fade-in duration-1000">
      {/* 1. Intro Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-8">
          {network.pageTitle.split(" ")[0]} <span className="serif-italic font-normal italic text-[#00a1e1]">{network.pageTitle.split(" ")[1]}</span>.
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          {network.pageSubtitle}
        </p>
      </section>

      {/* 2. Partner Categories & List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-black text-[#3fb0e3] text-center mb-16 tracking-tight">
             {network.collaboration.title}
           </h2>

           {/* Categories */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
             {network.collaboration.categories.map((cat, i) => (
               <div key={i} className="flex flex-col items-center text-center group">
                 <div className="bg-[#fdfaf7] w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                   {getIcon(cat.type)}
                 </div>
                 <span className="text-[#1a1412] font-bold text-lg">{cat.title}</span>
               </div>
             ))}
           </div>

           {/* Divider */}
           <div className="w-full h-px bg-stone-100 mb-24"></div>

           {/* Partner Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16">
             {network.collaboration.partners.map((partnerName, i) => (
               <div key={i} className="flex flex-col items-center text-center group">
                 {/* Placeholder for Logo */}
                 <div className="w-24 h-24 rounded-full bg-white border-2 border-stone-50 shadow-md flex items-center justify-center mb-6 overflow-hidden group-hover:border-[#3fb0e3] transition-colors relative">
                    {/* Generative Placeholder using Initials */}
                    <div className="text-2xl font-black text-stone-300 group-hover:text-[#3fb0e3] transition-colors">
                      {partnerName.substring(0, 2).toUpperCase()}
                    </div>
                    {/* Optional: If we had real URLs, img would go here */}
                 </div>
                 <span className="text-stone-600 font-bold text-sm leading-tight group-hover:text-[#3fb0e3] transition-colors">
                   {partnerName}
                 </span>
               </div>
             ))}
           </div>
        </div>
      </section>

      <ImpactStats />

      {/* 3. Transparency & Call to Action */}
      <section className="py-32 bg-[#fdfaf7] border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-black mb-8 text-[#1a1412]">Transparenz schafft Vertrauen.</h2>
                <p className="text-stone-600 text-xl leading-relaxed mb-10 font-medium">
                  Wir sind Teil der Initiative Transparente Zivilgesellschaft und legen unsere Mittelverwendung jährlich offen. Das gibt unseren Partnern die Sicherheit, dass jeder Euro wirkt.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-50">
                      <ShieldCheck className="text-[#4a5d23]" size={28} />
                      <span className="font-bold text-lg text-[#1a1412]">Geprüfte Stiftungsarbeit</span>
                   </div>
                   <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-50">
                      <Globe className="text-[#f37021]" size={28} />
                      <span className="font-bold text-lg text-[#1a1412]">Globaler Partner-Pool</span>
                   </div>
                </div>
             </div>
             <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 bg-[#3fb0e3] text-white p-8 rounded-full shadow-xl rotate-12">
                   <Share2 size={40} />
                </div>
                <h3 className="text-2xl font-black mb-6 text-[#1a1412]">Werde Teil des Netzwerks</h3>
                <p className="text-stone-500 mb-8 font-medium leading-relaxed">Suchen Sie nach einem CSR-Projekt mit echtem Impact? Wir bieten Partnerschaften für Unternehmen und Stiftungen.</p>
                <button className="w-full bg-[#1a1412] hover:bg-[#3fb0e3] transition-colors text-white py-5 rounded-2xl font-black shadow-xl text-lg">Anfrage stellen</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
