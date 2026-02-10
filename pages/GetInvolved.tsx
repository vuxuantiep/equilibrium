
import React from 'react';
import { HowToHelp } from '../components/HowToHelp';
import { StrategicCall } from '../components/StrategicCall';
import { Code, Users, HeartHandshake } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <div className="pt-32 animate-in fade-in duration-1000">
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1412] mb-8">
          Teil der <span className="serif-italic font-normal italic text-[#4a5d23]">Lösung</span> werden.
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Es gibt viele Wege, die Equilibrium Foundation zu unterstützen. Ob als Zeitspender, Entwickler oder Partner.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-8">
         <div className="glass-warm p-12 rounded-[4rem] flex items-start space-x-8">
            <div className="bg-[#f37021] text-white p-5 rounded-3xl"><Code size={32} /></div>
            <div>
               <h3 className="text-3xl font-bold mb-4">Für Entwickler</h3>
               <p className="text-stone-600 text-lg mb-6">Hilf uns dabei, Open-Source Tools für Gehörlose und Autisten zu bauen. Wir suchen KI-Experten und Web-Developer.</p>
               <button className="text-[#f37021] font-black uppercase tracking-widest text-sm hover:underline">Zum GitHub Repo</button>
            </div>
         </div>
         <div className="glass-warm p-12 rounded-[4rem] flex items-start space-x-8">
            <div className="bg-[#4a5d23] text-white p-5 rounded-3xl"><Users size={32} /></div>
            <div>
               <h3 className="text-3xl font-bold mb-4">Als Volunteer</h3>
               <p className="text-stone-600 text-lg mb-6">Unterstütze uns vor Ort in Hamburg oder bei unseren internationalen Projekten in Guatemala und Afrika.</p>
               <button className="text-[#4a5d23] font-black uppercase tracking-widest text-sm hover:underline">Mehr erfahren</button>
            </div>
         </div>
      </div>

      <HowToHelp />
      <StrategicCall />
    </div>
  );
};

// Fix: Add missing default export
export default GetInvolved;
