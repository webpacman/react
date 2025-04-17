import { createContext } from "react";

import { LangContextProps } from "./types";

export const LangContext = createContext<LangContextProps | undefined>(
  undefined
);
