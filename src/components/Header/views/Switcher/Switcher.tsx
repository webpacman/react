import clsx from "clsx";
import { FC } from "react";

import { Flex, FlexAlign } from "@/common/Flex";
import { LangVariant, useLang } from "@/services/LangContext";

import { SwitchElement } from "../SwitchElement/SwitchElement";
import styles from "./Switcher.module.scss";

export const Switcher: FC = () => {
  const lang = useLang();

  return (
    <Flex center className={styles.wrapper}>
      <Flex align={FlexAlign.CENTER} className={styles.switcher}>
        {Object.values(LangVariant).map((lang) => (
          <SwitchElement key={lang} lang={lang} />
        ))}

        <span className={clsx(styles.langPlaceholder, styles[lang])}></span>
      </Flex>
    </Flex>
  );
};
