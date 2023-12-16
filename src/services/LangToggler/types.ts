import { type LangVariants } from './LangTogglerContext';

type TextLang = Record<LangVariants, string>;

export type Translator<T extends string> = Record<T, TextLang>;
