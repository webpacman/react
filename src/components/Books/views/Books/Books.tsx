import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionDescription } from "@/common/SectionDescription";
import { Title } from "@/common/Title";
import { SectionType } from "@/constants";
import { useLang } from "@/services/LangContext";

import { List } from "../List/List";
import styles from "./Books.module.scss";
import { translator } from "./translator";

export const Books: FC<PropsWithChildren> = () => {
  const lang = useLang();

  return (
    <Section
      scrollId={SectionType.BOOKS}
      className={styles.wrapper}
      center
      grey
    >
      <Title as="h2">{translator.title[lang]}</Title>
      <SectionDescription>{translator.description[lang]}</SectionDescription>

      <List />
    </Section>
  );
};
