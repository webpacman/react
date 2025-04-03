import { FC } from "react";

import { Flex, FlexDirection } from "@/common/Flex";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { DescriptionElement } from "../DescriptionElement/DescriptionElement";
import { DetailExtra } from "../DetailExtra/DetailExtra";
import styles from "./Details.module.scss";
import { translator } from "./translator";

export const Details: FC = () => {
  const lang = useLang();

  return (
    <Flex direction={FlexDirection.COLUMN} className={styles.wrapper}>
      <Title as="h2">{translator.title[lang]}</Title>

      <DescriptionElement gray>
        {translator.smallDescription[lang]}
      </DescriptionElement>

      <DescriptionElement>{translator.description1[lang]}</DescriptionElement>

      <DescriptionElement>{translator.description2[lang]}</DescriptionElement>

      <DescriptionElement>{translator.description3[lang]}</DescriptionElement>

      <DetailExtra />
    </Flex>
  );
};
