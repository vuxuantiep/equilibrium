import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type PartnerItem = { name: string; logo: string };

export const Partners: React.FC = () => {
  const { content } = useLanguage();
  const { partners } = content.home;
  const items = (partners.items as PartnerItem[]);
  const scrollingPartners = [...items, ...items, ...items];

  return (
    <section className="bg-white py-6 border-b border-stone-100 relative z-10">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1.5 rounded-full border border-stone-100 text-[10px] font-black uppercase tracking-widest text-stone-400 z-20 shadow-sm">
          {partners.label || "Unser Netzwerk"}
       </div>

      <div className="max-w-[1920px] mx-auto relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-full group">
          <div className="flex animate-scroll space-x-8 items-center py-3 group-hover:[animation-play-state:paused]">
            {scrollingPartners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function PartnerLogo({ partner }: { partner: PartnerItem }) {
  const [imgError, setImgError] = useState(false);
  const showLogo = partner.logo && !imgError;

  return (
    <div
      className="flex flex-col items-center justify-center shrink-0 w-[180px] h-16 text-stone-300 font-bold text-xs tracking-widest uppercase hover:text-[#3fb0e3] transition-colors cursor-default select-none"
      title={partner.name}
    >
      {showLogo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-14 w-[160px] object-contain object-center"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-center leading-tight">{partner.name}</span>
      )}
    </div>
  );
}
