import { FC } from "react";

import { Section } from "@/common/Section";
import { Title } from "@/common/Title";
import { useLang } from "@/services/LangContext";

import { List } from "../List/List";
import { translator } from "./translator";
import styles from "./Work.module.scss";

export const Work: FC = () => {
  const lang = useLang();

  return (
    <Section scrollId="work" className={styles.section} grey>
      <Title as="h2">{translator.title[lang]}</Title>

      <List />
    </Section>
  );
};
