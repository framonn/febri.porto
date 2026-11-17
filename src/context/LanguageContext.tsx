import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../types';
import { translations, type TranslationContent } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('febri_portfolio_lang');
      if (saved === 'EN' || saved === 'ID') {
        return saved;
      }
    } catch {
      // ignore storage error
    }
    return 'EN';
  });

  useEffect(() => {
    try {
      localStorage.setItem('febri_portfolio_lang', language);
      document.documentElement.lang = language.toLowerCase();
    } catch {
      // ignore storage error
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'EN' ? 'ID' : 'EN'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
