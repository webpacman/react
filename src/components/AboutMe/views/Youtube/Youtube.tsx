import { FC, useEffect, useRef, useState } from "react";

import { Flex, FlexAlign, FlexDirection, FlexDisplay } from "@/common/Flex";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { DescriptionElement } from "../DescriptionElement/DescriptionElement";
import ReserveImage from "./assets/image.webp";
import { translator } from "./translator";
import styles from "./Youtube.module.scss";

const TIMEOUT_DURATION = 10000;

export const Youtube: FC = () => {
  const lang = useLang();
  const [error, setError] = useState<boolean | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setError(true);
    }, TIMEOUT_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    if (timeoutRef.current) {
      setError(false);
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      align={FlexAlign.CENTER}
      className={styles.wrapper}
    >
      <Title as="h2">{translator.title[lang]}</Title>

      <div className={styles.container}>
        <div className={styles.iframeWrapper}>
          {(error || error === undefined) && (
            <a
              href="https://www.youtube.com/embed/hjx07lEoSiQ?si=kbY4uZHM-d4UrgJN"
              target="_blank"
              className={styles.imageLink}
            >
              <img src={ReserveImage} alt="YouTube" className={styles.image} />
            </a>
          )}
          {!error && (
            <iframe
              className={styles.iframe}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hjx07lEoSiQ?si=kbY4uZHM-d4UrgJN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              onLoad={handleLoad}
            ></iframe>
          )}
        </div>
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
