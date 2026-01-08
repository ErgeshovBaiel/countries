
import React from 'react';
import { CountryBasic, Language } from '../types';

interface CountryCardProps {
  country: CountryBasic;
  lang: Language;
  onClick: () => void;
  t: (key: string) => string;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, lang, onClick, t }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer glass-panel rounded-3xl overflow-hidden hover:scale-[1.02] hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full shadow-lg"
    >
      <div className="h-40 bg-slate-800/50 flex items-center justify-center text-7xl select-none group-hover:bg-slate-800 transition-colors relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <span className="z-10 transform group-hover:scale-110 transition-transform duration-500">
          {country.flag}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
          {country.name[lang]}
        </h3>
        <p className="text-slate-500 text-sm mb-4">Capital: {country.capital}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex -space-x-2">
             <img src={country.emblem} alt="Emblem" className="w-8 h-8 object-contain drop-shadow-md" />
          </div>
          <span className="text-indigo-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            {t('readMore')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
