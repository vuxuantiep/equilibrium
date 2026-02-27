import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { CONTENT_EN, CONTENT_DE } from '../content';

type Language = 'en' | 'de';

const STORAGE_KEY = 'equilibrium-lang';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof CONTENT_EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
  } catch (_) {}
  return 'de'; // Standard: Deutsch (Seite ist primär DE)
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }, []);

  const content = useMemo(() => (language === 'en' ? CONTENT_EN : CONTENT_DE), [language]);

  const value = useMemo(
    () => ({ language, setLanguage, content }),
    [language, setLanguage, content]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
