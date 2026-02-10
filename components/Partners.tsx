
import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* Typografische Logos basierend auf Ihrem Screenshot */}
          <div className="text-stone-300 font-black text-sm tracking-[0.25em] uppercase hover:text-stone-500 transition-colors cursor-default">
            Kiez Helden
          </div>
          <div className="text-stone-300 font-black text-sm tracking-[0.25em] uppercase hover:text-stone-500 transition-colors cursor-default">
            Bingo!
          </div>
          <div className="text-stone-300 font-black text-sm tracking-[0.25em] uppercase hover:text-stone-500 transition-colors cursor-default">
            NUE
          </div>
          <div className="text-stone-300 font-black text-[10px] tracking-[0.2em] uppercase max-w-[140px] leading-tight hover:text-stone-500 transition-colors cursor-default text-center">
            Transparente <br /> Zivilgesellschaft
          </div>
        </div>
      </div>
    </section>
  );
};
