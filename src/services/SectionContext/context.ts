import { createContext } from "react";

import { SectionContextProps } from "./types";

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);
