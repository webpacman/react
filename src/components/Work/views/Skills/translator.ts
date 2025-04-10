import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.RU]: "Навыки",
    [LangVariant.ENG]: "Skills",
    [LangVariant.CHI]: "技能",
  },
};
