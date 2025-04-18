import { SectionType } from "@/constants";
import { useLang } from "@/services/LangContext";

import HomeIcon from "./assets/home.svg?react";
import styles from "./Navigation.module.scss";
import { translator } from "./translator";

export const useNavigation = () => {
  const lang = useLang();

  return Object.values(SectionType).map((section) => {
    return {
      section,
      content:
        section === SectionType.HOME ? (
          <HomeIcon className={styles.home} />
        ) : (
          translator[section][lang]
        ),
    };
  });
};
