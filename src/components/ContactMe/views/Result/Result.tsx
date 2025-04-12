import { FC } from "react";

import { Flex } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import { ResultCode } from "../../constants";
import styles from "./Result.module.scss";
import { translator } from "./translator";

interface ResultProps {
  code: ResultCode;
}

export const Result: FC<ResultProps> = ({ code }) => {
  const lang = useLang();

  return (
    <Flex center className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>{translator[code][lang]}</p>
      </div>
    </Flex>
  );
};
