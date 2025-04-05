import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionDescription } from "@/common/SectionDescription";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import styles from "./Skills.module.scss";
import { translator } from "./translator";

export const Skills: FC<PropsWithChildren> = () => {
  const lang = useLang();

  return (
    <Section scrollId="skills" className={styles.wrapper}>
      <Title as="h2">{translator.title[lang]}</Title>

      <SectionDescription>{translator.description[lang]}</SectionDescription>

      <ContentWrapper />
    </Section>
  );
};
