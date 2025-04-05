import { LangVariant, Translator } from "@/services/LangContext";

import { SkillFilter } from "../../constants";

export const translator: Translator<SkillFilter> = {
  [SkillFilter.ALL]: {
    [LangVariant.RU]: "Все",
    [LangVariant.ENG]: "All",
    [LangVariant.CHI]: "全部",
  },
  [SkillFilter.FRONTEND]: {
    [LangVariant.RU]: "Frontend",
    [LangVariant.ENG]: "Frontend",
    [LangVariant.CHI]: "前端",
  },
  [SkillFilter.BACKEND]: {
    [LangVariant.RU]: "Backend",
    [LangVariant.ENG]: "Backend",
    [LangVariant.CHI]: "后端",
  },
  [SkillFilter.DATABASE]: {
    [LangVariant.RU]: "БД",
    [LangVariant.ENG]: "DB",
    [LangVariant.CHI]: "数据库",
  },
  [SkillFilter.OTHER]: {
    [LangVariant.RU]: "Другое",
    [LangVariant.ENG]: "Other",
    [LangVariant.CHI]: "其他",
  },
};
