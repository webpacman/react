import { ReactNode, useMemo } from "react";

import { useLang } from "@/services/LangContext";

import AddressIcon from "./assets/address.svg?react";
import BirthdayIcon from "./assets/birthday.svg?react";
import CoursesIcon from "./assets/courses.svg?react";
import EducationIcon from "./assets/education.svg?react";
import { DetailExtraKeys } from "./constants";
import styles from "./DetailExtra.module.scss";
import { translator } from "./translator";

interface ExtraDetailProps {
  icon: ReactNode;
  title: string;
  value: string | string[];
}

export const useExtraDetails = (): ExtraDetailProps[] => {
  const lang = useLang();

  return useMemo(
    () => [
      {
        icon: <BirthdayIcon className={styles.icon} />,
        title: translator[DetailExtraKeys.BIRTHDAY][lang].title,
        value: translator[DetailExtraKeys.BIRTHDAY][lang].value,
      },
      {
        icon: <AddressIcon className={styles.icon} />,
        title: translator[DetailExtraKeys.ADDRESS][lang].title,
        value: translator[DetailExtraKeys.ADDRESS][lang].value,
      },
      {
        icon: <EducationIcon className={styles.icon} />,
        title: translator[DetailExtraKeys.EDUCATION][lang].title,
        value: translator[DetailExtraKeys.EDUCATION][lang].value,
      },
      {
        icon: <CoursesIcon className={styles.icon} />,
        title: translator[DetailExtraKeys.COURSES][lang].title,
        value: translator[DetailExtraKeys.COURSES][lang].value,
      },
    ],
    [lang]
  );
};
