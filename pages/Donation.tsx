
import React from 'react';
import { Heart, ShieldCheck, CreditCard, Landmark, Coins } from 'lucide-react';

const Donation: React.FC = () => {
  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-[#3fb0e3]/10 p-5 rounded-full inline-block mb-8">
           <Heart size={48} className="text-[#3fb0e3] fill-[#3fb0e3]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-8">
          Jeder Beitrag <span className="serif-italic font-normal italic text-[#3fb0e3]">wirkt</span>.
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-16">
          Ihre Spende ermöglicht Bildung, Inklusion und Hoffnung. Gemeinsam schaffen wir Chancen für Menschen, die oft vergessen werden.
        </p>

        <div className="grid lg:grid-cols-12 gap-12 text-left">
           <div className="lg:col-span-8">
              <div className="glass-warm p-12 rounded-[4rem] shadow-2xl border border-white mb-8">
                 <h3 className="text-3xl font-black mb-10">Wählen Sie Ihren Betrag</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                    {["25 €", "50 €", "100 €", "Individuell"].map((val, i) => (
                       <button key={i} className={`py-6 rounded-3xl font-black text-xl border-2 transition-all ${i === 1 ? 'bg-[#3fb0e3] text-white border-[#3fb0e3]' : 'bg-white border-stone-100 hover:border-[#3fb0e3]'}`}>
                          {val}
                       </button>
                    ))}
                 </div>
                 <h3 className="text-3xl font-black mb-10">Zahlungsweise</h3>
                 <div className="grid sm:grid-cols-3 gap-6 mb-12">
                    <button className="flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border-2 border-[#3fb0e3] shadow-xl">
                       <CreditCard size={32} className="mb-4 text-[#3fb0e3]" />
                       <span className="font-bold">Kreditkarte</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border-2 border-stone-100 hover:border-[#3fb0e3]">
                       <Landmark size={32} className="mb-4 text-stone-400" />
                       <span className="font-bold">Banküberweisung</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border-2 border-stone-100 hover:border-[#3fb0e3]">
                       <Coins size={32} className="mb-4 text-stone-400" />
                       <span className="font-bold">PayPal</span>
                    </button>
                 </div>
                 <button className="w-full bg-[#3fb0e3] text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:bg-[#60c5f1] transition-all">Jetzt sicher spenden</button>
              </div>
           </div>
           
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#4a5d23] text-white p-12 rounded-[4rem] shadow-xl">
                 <ShieldCheck size={48} className="mb-6 opacity-50" />
                 <h4 className="text-2xl font-bold mb-4">Sicherheit & Vertrauen</h4>
                 <p className="opacity-80 leading-relaxed font-medium">Ihre Daten werden verschlüsselt übertragen. Als gGmbH sind wir zur Transparenz verpflichtet.</p>
              </div>
              <div className="glass-warm p-12 rounded-[4rem] border border-stone-200 shadow-xl">
                 <h4 className="text-xl font-black mb-6 uppercase tracking-widest text-[#1a1412]">Was wir erreichen</h4>
                 <ul className="space-y-6 font-medium text-stone-600">
                    <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 rounded-full bg-[#3fb0e3]"></div>
                       <span>IT-Hardware für Schüler</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 rounded-full bg-[#3fb0e3]"></div>
                       <span>Gebärdensprach-Dolmetscher</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 rounded-full bg-[#3fb0e3]"></div>
                       <span>Lebensmittel für Kinderheime</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// Fix: Add missing default export
export default Donation;
