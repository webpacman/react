import { Dispatch, ReactNode, SetStateAction } from "react";

import { LangVariant } from "./constants";

export interface LangContextProps {
  lang: LangVariant;
  setLang: Dispatch<SetStateAction<LangVariant>>;
}

export type TranslatorItem = Record<LangVariant, string | ReactNode>;

export type Translator<T extends string> = Record<T, TranslatorItem>;

export type TranslatorArray = TranslatorItem[];
