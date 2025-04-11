import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.RU]: "Интересы",
    [LangVariant.ENG]: "Interests",
    [LangVariant.CHI]: "兴趣",
  },
};
