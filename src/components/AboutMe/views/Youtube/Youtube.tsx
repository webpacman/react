import { FC } from "react";

import { Flex, FlexAlign, FlexDirection, FlexDisplay } from "@/common/Flex";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { DescriptionElement } from "../DescriptionElement/DescriptionElement";
import { translator } from "./translator";
import styles from "./Youtube.module.scss";

export const Youtube: FC = () => {
  const lang = useLang();

  return (
    <Flex direction={FlexDirection.COLUMN} align={FlexAlign.CENTER}>
      <Title as="h2">{translator.title[lang]}</Title>

      <div className={styles.wrapper}>
        <iframe
          className={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hjx07lEoSiQ?si=kbY4uZHM-d4UrgJN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <DescriptionElement>{translator.desc1[lang]}</DescriptionElement>

      <DescriptionElement>{translator.desc2[lang]}</DescriptionElement>

      <Flex
        tag="a"
        display={FlexDisplay.INLINE_FLEX}
        href="https://www.tinkoff.ru/rm/shevchuk.vitaliy3/vfO8w2403"
        target="_blank"
        className={styles.supportButton}
      >
        {translator.btn[lang]}
      </Flex>
    </Flex>
  );
};
