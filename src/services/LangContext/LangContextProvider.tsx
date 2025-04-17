import { FC, PropsWithChildren, useState } from "react";

import { LangVariant } from "./constants";
import { LangContext } from "./context";

export const LangContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<LangVariant>(LangVariant.RU);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
