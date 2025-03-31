import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionDescription } from "@/common/SectionDescription";
import { Title } from "@/common/Title";

import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { Filters } from "../Filters/Filters";
import styles from "./Skills.module.scss";

export const Skills: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="skills" className={styles.wrapper}>
      <Title as="h2">Навыки</Title>

      <SectionDescription>
        Все оценки являются субъективными и показывают уровень, который, как по
        мне, необходим для работы.
      </SectionDescription>

      <Filters />

      <ContentWrapper />
    </Section>
  );
};
