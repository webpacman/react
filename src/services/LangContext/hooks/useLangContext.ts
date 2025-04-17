import { useContext } from "react";

import { LangContext } from "../context";

export const useLangContext = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLangContext must be used within a LangContextProvider");
  }

  return context;
};
