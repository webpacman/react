import { FC } from "react";

import { useLang } from "@/services/LangContext";

import styles from "./TextBlock.module.scss";
import { translator } from "./translator";

export const TextBlock: FC = () => {
  const lang = useLang();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>{translator.title[lang]}</h1>
      <p className={styles.description}>{translator.description[lang]}</p>
    </div>
  );
};
