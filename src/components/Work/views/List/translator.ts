import { LangVariant, Translator } from "@/services/LangContext";

import { WorkCode } from "../../constants";
import { WorkProps } from "../../types";

interface WorkTranslatorProps
  extends Omit<WorkProps, "code" | "dateStart" | "dateEnd"> {
  extraDateText?: string;
}

export const translator: Translator<WorkCode, WorkTranslatorProps> = {
  [WorkCode.WAITER]: {
    [LangVariant.RU]: {
      title: "Официант и менеджер заведения",
      skills: ["Коммуникабельность", "Стрессоустойчивость", "Внимательность"],
    },
    [LangVariant.ENG]: {
      title: "Waiter and Venue Manager",
      skills: ["Communication", "Stress Resistance", "Attention to Detail"],
    },
    [LangVariant.CHI]: {
      title: "服务员和场地经理",
      skills: ["沟通能力", "抗压能力", "注重细节"],
    },
  },
  [WorkCode.STROY_SERVICE]: {
    [LangVariant.RU]: {
      title: "Верстальщик в проект",
      skills: ["html", "css", "Организованность"],
      projects: [{ name: "Сайт РСК Стройсервис", description: "......" }],
    },
    [LangVariant.ENG]: {
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "Organization"],
      projects: [{ name: "RSK StroyService Website", description: "......" }],
    },
    [LangVariant.CHI]: {
      title: "前端开发人员",
      skills: ["HTML", "CSS", "组织能力"],
      projects: [{ name: "RSK建筑服务网站", description: "......" }],
    },
  },
  [WorkCode.CHAYNX]: {
    [LangVariant.RU]: {
      title: "Верстальщик в проект",
      skills: ["html", "css", "Организованность"],
      projects: [{ name: "Сайт РСК Стройсервис", description: "......" }],
    },
    [LangVariant.ENG]: {
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "Organization"],
      projects: [{ name: "RSK StroyService Website", description: "......" }],
    },
    [LangVariant.CHI]: {
      title: "前端开发人员",
      skills: ["HTML", "CSS", "组织能力"],
      projects: [{ name: "RSK建筑服务网站", description: "......" }],
    },
  },
  [WorkCode.M_TECH]: {
    [LangVariant.RU]: {
      title: "Верстальщик в проект",
      skills: ["html", "css", "Организованность"],
      projects: [
        { name: "Сайт РСК Стройсервис", description: "......" },
        {
          name: "Стройсервис",
          description: "kjfjfsj js jsj jfsj jsjf jsjf jsj fjs",
        },
        {
          name: "РСК Стройсервис",
          description: " sfs fjs jfjs fjsj fjsj",
        },
        { name: "Сайт РСК", description: "sfsfsfsf" },
        {
          name: "Сайт",
          description: " sf skfks kfs kfskfkskfk kskfsfs",
        },
      ],
    },
    [LangVariant.ENG]: {
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "Organization"],
      projects: [{ name: "RSK StroyService Website", description: "......" }],
    },
    [LangVariant.CHI]: {
      title: "前端开发人员",
      skills: ["HTML", "CSS", "组织能力"],
      projects: [{ name: "RSK建筑服务网站", description: "......" }],
    },
  },
};
