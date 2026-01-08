
import React from 'react';

interface HeroProps {
  t: (key: string) => string;
  search: string;
  setSearch: (s: string) => void;
}

const Hero: React.FC<HeroProps> = ({ t, search, setSearch }) => {
  return (
    <div className="relative py-16 sm:py-24 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 blur-[120px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 animate-in slide-in-from-bottom-4 duration-700">
        {t('welcome')}
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 animate-in fade-in duration-1000">
        Discover the rich history, diverse cultures, and unique symbols of 190 nations across our beautiful planet.
      </p>

      <div className="max-w-xl mx-auto relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="block w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-5 pl-14 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
