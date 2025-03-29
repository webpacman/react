import { FC, PropsWithChildren } from "react";

import { LangVariant } from "@/services/LangContext/constants";
import { useLangContext } from "@/services/LangContext/LangContext";

import { translator } from "./translator";
import styles from "./Welcome.module.scss";

export const Welcome: FC<PropsWithChildren> = () => {
  const { lang, setLang } = useLangContext();

  return (
    <div className={styles.wrapper}>
      <h1>{translator.title[lang]}</h1>
      <p>{translator.description[lang]}</p>

      <button onClick={() => setLang(LangVariant.ENG)}>ENG</button>
      <button onClick={() => setLang(LangVariant.RU)}>RU</button>
      <button onClick={() => setLang(LangVariant.CHI)}>CHI</button>
    </div>
  );
};
