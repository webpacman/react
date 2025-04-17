import { Dispatch, SetStateAction } from "react";

import { SectionType } from "@/constants";

export interface SectionContextProps {
  activeSection: SectionType;
  setActiveSection: Dispatch<SetStateAction<SectionType>>;
}
