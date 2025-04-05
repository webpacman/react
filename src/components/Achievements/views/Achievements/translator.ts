import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.RU]: "Достижения",
    [LangVariant.ENG]: "Achievements",
    [LangVariant.CHI]: "成就",
  },
};
