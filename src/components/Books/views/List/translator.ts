import { LangVariant, Translator } from "@/services/LangContext";

import { BooksKeys } from "./constants";

export const translator: Translator<BooksKeys, string> = {
  html: {
    [LangVariant.RU]: "HTML",
    [LangVariant.ENG]: "HTML",
    [LangVariant.CHI]: "HTML",
  },
  css: {
    [LangVariant.RU]: "CSS",
    [LangVariant.ENG]: "CSS",
    [LangVariant.CHI]: "CSS",
  },
  js: {
    [LangVariant.RU]: "JavaScript",
    [LangVariant.ENG]: "JavaScript",
    [LangVariant.CHI]: "JavaScript",
  },
  php: {
    [LangVariant.RU]: "PHP",
    [LangVariant.ENG]: "PHP",
    [LangVariant.CHI]: "PHP",
  },
};
