import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { Title } from "@/common/Title";

import { List } from "../List/List";
import styles from "./Achievements.module.scss";

export const Achievements: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="achievements" className={styles.wrapper} grey>
      <Title as="h2">Достижения</Title>
      <List />
    </Section>
  );
};
