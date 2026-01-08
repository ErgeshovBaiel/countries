
import React, { useState, useMemo, useEffect } from 'react';
import { User, Language, CountryBasic } from './types';
import { UI_STRINGS, COUNTRIES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountryCard from './components/CountryCard';
import CountryDetail from './components/CountryDetail';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryBasic | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter(c => 
      c.name[lang].toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, lang]);

  const t = (key: string) => UI_STRINGS[key]?.[lang] || key;

  return (
    <div className="min-h-screen pb-20">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        user={user} 
        onAuthClick={(mode) => {
          setAuthMode(mode);
          setIsAuthOpen(true);
        }}
        onLogout={() => setUser(null)}
        t={t}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {!selectedCountry ? (
          <>
            <Hero t={t} search={search} setSearch={setSearch} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {filteredCountries.map((country) => (
                <CountryCard 
                  key={country.id} 
                  country={country} 
                  lang={lang} 
                  onClick={() => setSelectedCountry(country)}
                  t={t}
                />
              ))}
            </div>
            
            {filteredCountries.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">No countries found matching your search.</p>
              </div>
            )}
          </>
        ) : (
          <CountryDetail 
            country={selectedCountry} 
            lang={lang} 
            onBack={() => setSelectedCountry(null)}
            t={t}
          />
        )}
      </main>

      {isAuthOpen && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setIsAuthOpen(false)} 
          onSuccess={(u) => {
            setUser(u);
            setIsAuthOpen(false);
          }}
          t={t}
        />
      )}
      
      {/* Footer Decoration */}
      <footer className="mt-20 border-t border-slate-800 py-10 text-center">
        <p className="text-slate-500 text-sm">
          &copy; 2024 GlobalExplorer. All geographical data powered by advanced AI models.
        </p>
      </footer>
    </div>
  );
};

export default App;
