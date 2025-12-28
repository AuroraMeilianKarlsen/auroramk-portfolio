'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import noTranslations from '../translations/no.json';

type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, fallback: string) => string;
  tArray: (key: string, fallback: string[]) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Henter verdi fra JSON med dot-notation, f.eks. "nav.home"
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current, key) => {
    return current && typeof current === 'object' ? (current as Record<string, unknown>)[key] : undefined;
  }, obj as unknown);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Les språkvalg fra localStorage ved oppstart
  useEffect(() => {
    const stored = localStorage.getItem('language') as Language | null;
    if (stored === 'no') {
      setLanguage('no');
    }
  }, []);

  // Lagre språkvalg til localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'no' ? 'no' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'no' : 'en'));
  };

  // t() - returnerer norsk oversettelse hvis språk er 'no', ellers fallback (engelsk)
  const t = (key: string, fallback: string): string => {
    if (language === 'en') return fallback;
    const value = getNestedValue(noTranslations, key);
    return typeof value === 'string' ? value : fallback;
  };

  // tArray() - for arrays som typingTexts
  const tArray = (key: string, fallback: string[]): string[] => {
    if (language === 'en') return fallback;
    const value = getNestedValue(noTranslations, key);
    return Array.isArray(value) ? value : fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

