import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title" | "description"> = {
  title: {
    [LangVariant.RU]: "Навыки",
    [LangVariant.ENG]: "Skills",
    [LangVariant.CHI]: "技能",
  },
  description: {
    [LangVariant.RU]:
      "Все оценки являются субъективными и показывают уровень, который, как по мне, необходим для работы.",
    [LangVariant.ENG]:
      "All ratings are subjective and show the level that, in my opinion, is necessary for work.",
    [LangVariant.CHI]: "所有评分都是主观的，显示我认为在工作中必要的水平。",
  },
};
