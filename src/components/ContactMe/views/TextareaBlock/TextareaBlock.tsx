import { FC } from "react";

import { useLang } from "@/services/LangContext";

import { Label } from "../Label/Label";
import styles from "./TextareaBlock.module.scss";
import { translator } from "./translator";

export const TextareaBlock: FC = () => {
  const lang = useLang();

  return (
    <div className={styles.wrapper}>
      <Label htmlFor="message">{translator.message[lang].label}</Label>
      <textarea
        className={styles.textarea}
        name="message"
        placeholder={translator.message[lang].placeHolder}
        id="message"
        cols={30}
        rows={10}
        required
      ></textarea>
    </div>
  );
};
