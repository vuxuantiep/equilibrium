
import React from 'react';
import { Partners } from '../components/Partners';
import { ImpactStats } from '../components/ImpactStats';
import { ShieldCheck, Globe, Share2 } from 'lucide-react';

const Network: React.FC = () => {
  return (
    <div className="pt-32 animate-in fade-in duration-1000">
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-8">
          Unser <span className="serif-italic font-normal italic text-[#00a1e1]">Netzwerk</span>.
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Wirkung entsteht durch Zusammenarbeit. Wir sind stolz auf unsere Partner und Unterstützer, die Inklusion möglich machen.
        </p>
      </section>

      <Partners />
      <ImpactStats />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-black mb-8">Transparenz schafft Vertrauen.</h2>
                <p className="text-stone-600 text-xl leading-relaxed mb-10">
                  Wir sind Teil der Initiative Transparente Zivilgesellschaft und legen unsere Mittelverwendung jährlich offen. Das gibt unseren Partnern die Sicherheit, dass jeder Euro wirkt.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                      <ShieldCheck className="text-[#4a5d23]" size={28} />
                      <span className="font-bold text-lg">Geprüfte Stiftungsarbeit</span>
                   </div>
                   <div className="flex items-center space-x-4">
                      <Globe className="text-[#f37021]" size={28} />
                      <span className="font-bold text-lg">Globaler Partner-Pool</span>
                   </div>
                </div>
             </div>
             <div className="glass-warm p-12 rounded-[3rem] border border-stone-100 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 bg-[#f37021] text-white p-8 rounded-full shadow-xl rotate-12">
                   <Share2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Werde Teil des Netzwerks</h3>
                <p className="text-stone-500 mb-8 font-medium">Suchen Sie nach einem CSR-Projekt mit echtem Impact? Wir bieten Partnerschaften für Unternehmen und Stiftungen.</p>
                <button className="w-full bg-[#1a1412] text-white py-5 rounded-2xl font-black shadow-xl">Anfrage stellen</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fix: Add missing default export
export default Network;
