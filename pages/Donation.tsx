
import React, { useState } from 'react';
import { Heart, Copy, Check, Building2, Globe, CreditCard } from 'lucide-react';
import { CONTENT } from '../content';

const Donation: React.FC = () => {
  const { donationPage } = CONTENT;
  const [amount, setAmount] = useState<string>("20");
  const [interval, setInterval] = useState<'once' | 'monthly' | 'annually'>('monthly');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(donationPage.german.bankDetails.iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 animate-in fade-in duration-1000 bg-[#fdfaf7]">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
         <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-[#3fb0e3] mb-8 tracking-tighter">
                {donationPage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium max-w-4xl mx-auto">
                {donationPage.hero.text}
            </p>
         </div>
         
         {/* Emotional Image Banner */}
         <div className="w-full h-64 md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl mb-12 border-4 border-white">
            <img 
                src={donationPage.hero.img} 
                alt="Equilibrium Impact" 
                className="w-full h-full object-cover" 
            />
         </div>
      </section>

      {/* 2. CONTENT GRID */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Modern Donation Form */}
          <div className="lg:col-span-7">
             <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-xl border border-stone-100 relative overflow-hidden">
                {/* Decorative Blob */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3fb0e3]/5 rounded-full blur-3xl"></div>

                <div className="flex items-center space-x-4 mb-10 relative z-10">
                   <div className="bg-[#3fb0e3]/10 p-4 rounded-2xl">
                      <CreditCard size={32} className="text-[#3fb0e3]" />
                   </div>
                   <h2 className="text-3xl font-black text-[#1a1412]">Online Spenden</h2>
                </div>

                {/* Interval Selector */}
                <div className="bg-stone-50 p-2 rounded-2xl flex mb-10 relative z-10">
                   {[
                      { id: 'once', label: 'Einmalig' },
                      { id: 'monthly', label: 'Monatlich' },
                      { id: 'annually', label: 'Jährlich' }
                   ].map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => setInterval(opt.id as any)}
                        className={`flex-1 py-4 rounded-xl font-bold text-sm md:text-base transition-all shadow-sm ${interval === opt.id ? 'bg-white text-[#3fb0e3] shadow-md transform scale-[1.02]' : 'bg-transparent text-stone-500 hover:text-stone-700'}`}
                      >
                         {opt.label}
                      </button>
                   ))}
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
                   {['10', '20', '50', '100', '200', '500'].map(val => (
                      <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`py-5 rounded-2xl text-xl font-black transition-all border-2 ${amount === val ? 'border-[#3fb0e3] bg-[#3fb0e3] text-white shadow-lg shadow-blue-200' : 'border-stone-100 bg-white text-stone-400 hover:border-[#3fb0e3]/30'}`}
                      >
                         €{val}
                      </button>
                   ))}
                </div>

                {/* Custom Amount Input */}
                <div className="relative mb-12 z-10">
                   <input 
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white border-2 border-stone-100 rounded-2xl py-6 pl-12 pr-6 text-2xl font-black text-[#1a1412] focus:border-[#3fb0e3] outline-none transition-colors shadow-inner"
                      placeholder="Eigener Betrag"
                   />
                   <span className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400 text-xl font-bold">€</span>
                </div>

                <button className="w-full bg-[#1a1412] hover:bg-[#3fb0e3] text-white py-6 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-95 flex items-center justify-center space-x-3 relative z-10">
                   <Heart size={24} className="fill-current text-[#e07a7a]" />
                   <span>Jetzt Spenden</span>
                </button>
                <div className="mt-6 text-center text-stone-400 text-xs font-bold uppercase tracking-widest">
                   Sicher bezahlen via PayPal & Kreditkarte
                </div>
             </div>
          </div>

          {/* RIGHT: Info Cards (German & US) */}
          <div className="lg:col-span-5 space-y-8">
             
             {/* German Bank Details - Styled as Trust Card */}
             <div className="bg-[#4a5d23] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                
                <div className="flex items-center space-x-4 mb-8 relative z-10">
                   <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                      <Building2 size={24} />
                   </div>
                   <h3 className="text-2xl font-black">{donationPage.german.title}</h3>
                </div>
                
                <p className="text-stone-200 mb-8 font-medium leading-relaxed relative z-10 border-b border-white/10 pb-8">
                   {donationPage.german.text}
                </p>

                <div className="space-y-6 relative z-10">
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-1">Empfänger</p>
                     <p className="font-bold text-lg">{donationPage.german.bankDetails.holder}</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-1">Bank</p>
                     <p className="font-bold text-lg">{donationPage.german.bankDetails.bank}</p>
                   </div>
                   
                   <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm cursor-pointer group/copy hover:bg-black/30 transition-colors" onClick={handleCopy}>
                     <p className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-2">IBAN (Klicken zum Kopieren)</p>
                     <div className="flex items-center justify-between">
                        <p className="font-mono text-xl tracking-wider truncate mr-4 text-[#c7d5a0]">{donationPage.german.bankDetails.iban}</p>
                        {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-white/50 group-hover/copy:text-white transition-colors" />}
                     </div>
                   </div>
                </div>
             </div>

             {/* US Details - Clean Light Card */}
             <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="bg-[#f37021]/10 p-3 rounded-2xl">
                      <Globe size={24} className="text-[#f37021]" />
                   </div>
                   <h3 className="text-2xl font-black text-[#1a1412]">{donationPage.us.title}</h3>
                </div>
                
                <p className="text-stone-600 mb-8 font-medium">
                   {donationPage.us.text}
                </p>

                <div className="bg-[#fdfaf7] border border-stone-100 p-6 rounded-3xl mb-8">
                   <p className="text-xs font-black text-[#f37021] uppercase tracking-widest mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-[#f37021]"></span>
                     Wichtiger Hinweis
                   </p>
                   <p className="text-sm text-stone-600 mb-4 font-medium">{donationPage.us.important}</p>
                   <div className="bg-white p-4 rounded-xl border border-stone-200 font-mono text-sm font-bold text-center text-[#1a1412] shadow-sm select-all">
                      {donationPage.us.code}
                   </div>
                </div>

                <a 
                  href={donationPage.us.link} 
                  className="block w-full text-center bg-[#1a1412] hover:bg-[#f37021] text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95"
                >
                   {donationPage.us.btn}
                </a>
             </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Donation;
