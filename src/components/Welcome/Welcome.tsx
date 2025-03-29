import { FC, PropsWithChildren } from "react";

import { LangVariant } from "@/services/LangContext/constants";
import { useLangContext } from "@/services/LangContext/LangContext";

import styles from "./Welcome.module.scss";

interface WelcomeProps {}

export const Welcome: FC<PropsWithChildren<WelcomeProps>> = ({ children }) => {
  const { lang, setLang } = useLangContext();

  return (
    <div className={styles.wrapper}>
      <span>Язык: {lang}</span>
      <button onClick={() => setLang(LangVariant.ENG)}>ENG</button>
      <button onClick={() => setLang(LangVariant.RU)}>RU</button>
      <button onClick={() => setLang(LangVariant.CHI)}>CHI</button>
    </div>
  );
};
