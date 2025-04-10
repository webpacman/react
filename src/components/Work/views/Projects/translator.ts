import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.RU]: "Проекты",
    [LangVariant.ENG]: "Projects",
    [LangVariant.CHI]: "项目",
  },
};
