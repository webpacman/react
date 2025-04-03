import { LangVariant } from "@/services/LangContext";

import { DetailExtraKeys } from "./constants";

interface ExtraDetailTranslator {
  title: string;
  value: string | string[];
}

export const translator: Record<
  DetailExtraKeys,
  Record<LangVariant, ExtraDetailTranslator>
> = {
  [DetailExtraKeys.BIRTHDAY]: {
    [LangVariant.RU]: {
      title: "Дата рождения",
      value: "25.05.1995",
    },
    [LangVariant.ENG]: {
      title: "Birthday",
      value: "25.05.1995",
    },
    [LangVariant.CHI]: {
      title: "出生日期",
      value: "25.05.1995",
    },
  },
  [DetailExtraKeys.ADDRESS]: {
    [LangVariant.RU]: {
      title: "Адрес",
      value: "г. Москва, Россия",
    },
    [LangVariant.ENG]: {
      title: "Address",
      value: "Moscow, Russia",
    },
    [LangVariant.CHI]: {
      title: "地址",
      value: "莫斯科, 俄罗斯",
    },
  },
  [DetailExtraKeys.EDUCATION]: {
    [LangVariant.RU]: {
      title: "Образование",
      value:
        "МАДИ(ГТУ), специальность - Автоматизированные системы управления (АСУ)",
    },
    [LangVariant.ENG]: {
      title: "Education",
      value:
        "Moscow State Automobile and Highway Institute, specialty - Automated systems of management (ASU)",
    },
    [LangVariant.CHI]: {
      title: "教育",
      value: "莫斯科国立汽车和公路学院, 专业 - 自动化管理系统",
    },
  },
  [DetailExtraKeys.COURSES]: {
    [LangVariant.RU]: {
      title: "Курсы",
      value: [
        "Python-разработчик (geekbrains)",
        "Php от 0 до PRO (Skillbox)",
        "React + Redux (Udemy)",
      ],
    },
    [LangVariant.ENG]: {
      title: "Courses",
      value: [
        "Python developer (geekbrains)",
        "Php from 0 to PRO (Skillbox)",
        "React + Redux (Udemy)",
      ],
    },
    [LangVariant.CHI]: {
      title: "课程",
      value: [
        "Python 开发者 (geekbrains)",
        "Php 从 0 到 PRO (Skillbox)",
        "React + Redux (Udemy)",
      ],
    },
  },
};
