
import React, { useState, useEffect } from 'react';
import { CountryBasic, Language, CountryDetails } from '../types';
import { getCountryDetails } from '../geminiService';

interface CountryDetailProps {
  country: CountryBasic;
  lang: Language;
  onBack: () => void;
  t: (key: string) => string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, lang, onBack, t }) => {
  const [details, setDetails] = useState<Partial<CountryDetails> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      const data = await getCountryDetails(country.name.en, lang);
      setDetails(data);
      setLoading(false);
    };
    fetchInfo();
  }, [country, lang]);

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to list
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="glass-panel p-8 rounded-3xl text-center">
            <div className="text-9xl mb-4 drop-shadow-2xl">{country.flag}</div>
            <h1 className="text-3xl font-bold text-white mb-2">{country.name[lang]}</h1>
            <p className="text-indigo-400 font-medium">Capital: {country.capital}</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              {t('emblem')}
            </h2>
            <div className="flex justify-center bg-white/5 p-6 rounded-2xl border border-white/5">
              <img 
                src={country.emblem} 
                alt="National Coat of Arms" 
                className="max-h-48 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {details && (
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Population</h3>
                <p className="text-white text-lg font-semibold">{details.population}</p>
              </div>
              <div>
                <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Region</h3>
                <p className="text-white text-lg font-semibold">{details.region}</p>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {loading ? (
            <div className="h-full min-h-[400px] glass-panel rounded-3xl flex flex-col items-center justify-center p-12 text-center">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-400">{t('loading')}</p>
            </div>
          ) : (
            <>
              <div className="glass-panel p-10 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-indigo-600 pl-4">
                  {t('history')}
                </h2>
                <div className="text-slate-300 leading-relaxed text-lg whitespace-pre-line prose prose-invert max-w-none">
                  {details?.history}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-3xl">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    {t('languages')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {details?.languages?.map(l => (
                      <span key={l} className="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-500/20">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    {t('ethnicities')}
                  </h2>
                  <ul className="space-y-3">
                    {details?.ethnicities?.map(e => (
                      <li key={e} className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
