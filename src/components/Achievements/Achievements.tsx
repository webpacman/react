import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./Achievements.module.scss";

export const Achievements: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="achievements" className={styles.wrapper} grey>
      <SectionTitle>Достижения</SectionTitle>
      <div className="achievements-list"></div>
    </Section>
  );
};
