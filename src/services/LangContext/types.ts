import { Dispatch, SetStateAction } from "react";

import { LangVariant } from "./constants";

export interface LangContextProps {
  lang: LangVariant;
  setLang: Dispatch<SetStateAction<LangVariant>>;
}

export type Translator<T extends string> = Record<
  T,
  Record<LangVariant, string>
>;
