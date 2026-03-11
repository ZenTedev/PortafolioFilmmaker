import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, TranslationState } from '../data/translations';

// Contexto simple de i18n: mantiene el idioma actual y expone el diccionario traducido (t).
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationState;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
