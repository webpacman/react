import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { List } from "../List/List";
import styles from "./Interests.module.scss";
import { translator } from "./translator";

export const Interests: FC<PropsWithChildren> = () => {
  const lang = useLang();

  return (
    <Section scrollId="interests" className={styles.wrapper}>
      <Title as="h2">{translator.title[lang]}</Title>

      <List />
    </Section>
  );
};
