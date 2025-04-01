import { FC } from "react";

import { LangVariant, useLangContext } from "@/services/LangContext";

import styles from "./SwitchElement.module.scss";

interface SwitchElementProps {
  lang: LangVariant;
}

export const SwitchElement: FC<SwitchElementProps> = ({ lang }) => {
  const { setLang, lang: currentLang } = useLangContext();

  return (
    <>
      <input
        className={styles.input}
        type="radio"
        name="lang"
        id={lang}
        checked={currentLang === lang}
        onChange={() => setLang(lang)}
      />
      <label className={styles.label} htmlFor={lang}>
        {lang.charAt(0).toUpperCase() + lang.slice(1)}
      </label>
    </>
  );
};
