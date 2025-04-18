import { FC, PropsWithChildren } from "react";

import { Flex, FlexAlign, FlexJustify } from "@/common/Flex";
import { Section } from "@/common/Section";
import { SectionType } from "@/constants";

import { Background } from "../Background/Background";
import { Photo } from "../Photo/Photo";
import { TextBlock } from "../TextBlock/TextBlock";
import styles from "./Welcome.module.scss";

export const Welcome: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId={SectionType.HOME} className={styles.wrapper}>
      <Background />

      <Flex
        align={FlexAlign.CENTER}
        justify={FlexJustify.CENTER}
        className={styles.content}
      >
        <Photo />
        <TextBlock />
      </Flex>
    </Section>
  );
};
