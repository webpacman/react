import { useMemo } from "react";

import { useLang } from "@/services/LangContext";

import { workDateMapper, workList } from "../../constants";
import { WorkProps } from "../../types";
import { translator } from "./translator";

export const useWorks = (): WorkProps[] => {
  const lang = useLang();

  return useMemo(
    () =>
      Array.from(workList).map((work) => ({
        code: work,
        title: translator[work][lang].title,
        dateStart: workDateMapper[work].dateStart,
        dateEnd: workDateMapper[work].dateEnd,
        skills: translator[work][lang].skills,
        projects: translator[work][lang].projects,
      })),
    [lang]
  );
};
