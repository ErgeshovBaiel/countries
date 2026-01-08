
import React from 'react';
import { Language, User } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  user: User | null;
  onAuthClick: (mode: 'login' | 'register') => void;
  onLogout: () => void;
  t: (key: string) => string;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, user, onAuthClick, onLogout, t }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
            G
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            {t('appName')}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex bg-slate-800/50 p-1 rounded-full border border-slate-700">
            {(['en', 'ru', 'ky'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === l ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-slate-700 hidden sm:block"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm hidden md:block">
                Hello, <span className="font-semibold text-white">{user.name}</span>
              </span>
              <button 
                onClick={onLogout}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {t('logout')}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onAuthClick('login')}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {t('login')}
              </button>
              <button 
                onClick={() => onAuthClick('register')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
              >
                {t('register')}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
