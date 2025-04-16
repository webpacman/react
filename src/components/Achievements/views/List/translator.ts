import { LangVariant, Translator } from "@/services/LangContext";

import { AchievementsKeys } from "./constants";

export const translator: Translator<AchievementsKeys, string> = {
  bitrix: {
    [LangVariant.RU]:
      "Прошел тестирования на официальном портале Bitrix. На гуру bitrix не претендую, но всегда разберусь с поставленной задачей!",
    [LangVariant.ENG]:
      "Passed the Bitrix test on the official Bitrix portal. I'm not a guru in Bitrix, but I always figure out the task!",
    [LangVariant.CHI]:
      "通过官方Bitrix平台进行Bitrix测试。我不是Bitrix专家，但总能解决任务！",
  },
  eldorado: {
    [LangVariant.RU]:
      'Грамота за победу в конкурсе "Лучший сотрудник". Получил её за реализацию интерфейсов для операторов и call-центра.',
    [LangVariant.ENG]:
      'Certificate for winning the "Best Employee" contest. I received it for implementing interfaces for operators and the call center.',
    [LangVariant.CHI]:
      '证书在"最佳员工"竞赛中获胜。我因实现操作员和呼叫中心的接口而获得此证书。',
  },
  html: {
    [LangVariant.RU]: "Сертификат о прохождении тестирования по HTML",
    [LangVariant.ENG]: "HTML certificate",
    [LangVariant.CHI]: "HTML证书",
  },
  php: {
    [LangVariant.RU]: "Сертификат о прохождении тестирования по PHP",
    [LangVariant.ENG]: "PHP certificate",
    [LangVariant.CHI]: "PHP证书",
  },
  skillbox: {
    [LangVariant.RU]:
      "Обучение php разработке на skillbox, где прокачал навыки ООП и познакомился с Laravel.",
    [LangVariant.ENG]:
      "Learning php development at skillbox, where I improved my OOP skills and got acquainted with Laravel.",
    [LangVariant.CHI]:
      "在skillbox学习php开发，在这里我提高了OOP技能，并熟悉了Laravel框架。",
  },
  teamlead: {
    [LangVariant.RU]:
      "На данный момент, стать хорошим team lead - моя главная цель, поэтому стараюсь укреплять свои менеджерские позиции.",
    [LangVariant.ENG]:
      "At the moment, becoming a good team lead is my main goal, so I try to strengthen my managerial positions.",
    [LangVariant.CHI]:
      "目前，成为优秀的团队领导者是我的主要目标，因此我努力加强我的管理职位。",
  },
  python: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по Python",
    [LangVariant.ENG]: "Python certificate",
    [LangVariant.CHI]: "Python证书",
  },
};
