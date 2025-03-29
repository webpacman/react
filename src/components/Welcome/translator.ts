import { LangVariant } from "@/services/LangContext/constants";
import { Translator } from "@/services/LangContext/types";

export const translator: Translator<"title" | "description"> = {
  title: {
    [LangVariant.ENG]: "Shevchuk Vitaliy",
    [LangVariant.RU]: "Шевчук Виталий",
    [LangVariant.CHI]: "谢尔盖·维塔利",
  },
  description: {
    [LangVariant.ENG]:
      "Hello! My name is Vitaliy. I'm a web developer, let's get acquainted!",
    [LangVariant.RU]:
      "Привет! Меня зовут Виталий. Я веб-разработчик, давайте знакомиться!",
    [LangVariant.CHI]: "你好！我的名字是维塔利。让我们互相了解！",
  },
};
