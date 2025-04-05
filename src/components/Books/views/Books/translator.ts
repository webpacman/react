import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title" | "description"> = {
  title: {
    [LangVariant.RU]: "Прочитанные книги",
    [LangVariant.ENG]: "Read books",
    [LangVariant.CHI]: "阅读书籍",
  },
  description: {
    [LangVariant.RU]:
      "Тут указаны не все прочитанные мной книги, а только те книги, которые произвели на меня наибольшее впечатление.",
    [LangVariant.ENG]:
      "Here are listed not all the books I have read, but only those that have had the most impact on me.",
    [LangVariant.CHI]:
      "这里列出了我读过的所有书籍，但只有那些给我留下最深刻印象的书籍。",
  },
};
