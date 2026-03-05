import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 transition-all hover:bg-black/50">
      <button
        onClick={() => setLanguage('es')}
        className={`text-sm font-medium transition-colors ${
          language === 'es' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        ES
      </button>
      <span className="text-gray-600 text-xs">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`text-sm font-medium transition-colors ${
          language === 'en' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};
