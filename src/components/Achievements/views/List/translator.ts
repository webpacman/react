import { LangVariant, Translator } from "@/services/LangContext";

import { AchievementsKeys } from "./constants";

export const translator: Translator<AchievementsKeys, string> = {
  bitrix: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по Bitrix",
    [LangVariant.ENG]: "Bitrix certificate",
    [LangVariant.CHI]: "比特里克斯证书",
  },
  css: {
    [LangVariant.RU]: "CSS",
    [LangVariant.ENG]: "CSS",
    [LangVariant.CHI]: "CSS",
  },
  eldorado: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по El Dorado",
    [LangVariant.ENG]: "El Dorado certificate",
    [LangVariant.CHI]: "埃尔多拉多证书",
  },
  html: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по HTML",
    [LangVariant.ENG]: "HTML certificate",
    [LangVariant.CHI]: "HTML证书",
  },
  js: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по JavaScript",
    [LangVariant.ENG]: "JavaScript certificate",
    [LangVariant.CHI]: "JavaScript证书",
  },
  php: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по PHP",
    [LangVariant.ENG]: "PHP certificate",
    [LangVariant.CHI]: "PHP证书",
  },
  skillbox: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по Skillbox",
    [LangVariant.ENG]: "Skillbox certificate",
    [LangVariant.CHI]: "Skillbox证书",
  },
  teamlead: {
    [LangVariant.RU]: "Сертификат о прохождении курсов по Teamlead",
    [LangVariant.ENG]: "Teamlead certificate",
    [LangVariant.CHI]: "Teamlead证书",
  },
};
