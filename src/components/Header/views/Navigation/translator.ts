import { Section } from "@/constants";
import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<Exclude<Section, Section.HOME>> = {
  [Section.ABOUT_ME]: {
    [LangVariant.RU]: "Обо мне",
    [LangVariant.ENG]: "About me",
    [LangVariant.CHI]: "关于 我",
  },
  [Section.ACHIEVEMENTS]: {
    [LangVariant.RU]: "Достижения",
    [LangVariant.ENG]: "Achievements",
    [LangVariant.CHI]: "成就",
  },
  [Section.SKILLS]: {
    [LangVariant.RU]: "Навыки",
    [LangVariant.ENG]: "Skills",
    [LangVariant.CHI]: "技能",
  },
  [Section.WORK]: {
    [LangVariant.RU]: "Работа",
    [LangVariant.ENG]: "Work",
    [LangVariant.CHI]: "工作",
  },
  [Section.INTERESTS]: {
    [LangVariant.RU]: "Интересы",
    [LangVariant.ENG]: "Interests",
    [LangVariant.CHI]: "兴趣",
  },
  [Section.BOOKS]: {
    [LangVariant.RU]: "Книги",
    [LangVariant.ENG]: "Books",
    [LangVariant.CHI]: "书籍",
  },
  [Section.CONTACT_ME]: {
    [LangVariant.RU]: "Связаться",
    [LangVariant.ENG]: "Contact me",
    [LangVariant.CHI]: "联系我",
  },
};
