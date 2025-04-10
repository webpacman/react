import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"date" | "locale", string> = {
  date: {
    [LangVariant.RU]: "по настоящее время",
    [LangVariant.ENG]: "to present",
    [LangVariant.CHI]: "至今",
  },
  locale: {
    [LangVariant.RU]: "ru-RU",
    [LangVariant.ENG]: "en-US",
    [LangVariant.CHI]: "zh-CN",
  },
};
