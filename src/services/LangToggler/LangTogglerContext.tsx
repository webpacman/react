import React, {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

export enum LangVariants {
  RU = 'ru',
  ENG = 'eng',
  CHI = 'chi',
}

interface LangContextProps {
  lang: LangVariants;
  setLang: (lang: LangVariants) => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const useLangContext = (): LangContextProps => {
  const langContext = useContext(LangContext);

  if (!langContext) {
    throw new Error('Missing LangContext');
  }

  return langContext;
};

export const LangContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<LangVariants>(LangVariants.RU);

  const value = {
    lang,
    setLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
