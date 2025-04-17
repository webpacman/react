import { FC, PropsWithChildren, useState } from "react";

import { SectionType } from "@/constants";

import { SectionContext } from "./context";

export const SectionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionType>(
    SectionType.HOME
  );

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};
