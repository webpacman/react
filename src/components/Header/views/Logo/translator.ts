import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title"> = {
  title: {
    [LangVariant.ENG]: "Vitaly Shevchuk",
    [LangVariant.RU]: "Виталий Шевчук",
    [LangVariant.CHI]: "维塔利·谢夫丘克",
  },
};
