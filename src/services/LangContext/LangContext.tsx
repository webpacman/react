import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import { LangVariant } from "./constants";
import { LangContextProps } from "./types";

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const useLangContext = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLangContext must be used within a LangContextProvider");
  }

  return context;
};

export const LangContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<LangVariant>(LangVariant.RU);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
