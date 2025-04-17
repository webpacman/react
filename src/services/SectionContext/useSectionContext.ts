import { useContext } from "react";

import { SectionContext } from "./context";
import { SectionContextProps } from "./types";

export const useSectionContext = (): SectionContextProps => {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider"
    );
  }

  return context;
};
