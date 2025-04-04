import { Dispatch, ReactNode, SetStateAction } from "react";

import { LangVariant } from "./constants";

export interface LangContextProps {
  lang: LangVariant;
  setLang: Dispatch<SetStateAction<LangVariant>>;
}

export type TranslatorItem<T = string | ReactNode> = Record<LangVariant, T>;

export type Translator<T extends string, K = string | ReactNode> = Record<
  T,
  TranslatorItem<K>
>;

export type TranslatorArray = TranslatorItem[];
