import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.RU]: "Работа",
    [LangVariant.ENG]: "Work",
    [LangVariant.CHI]: "工作",
  },
};
