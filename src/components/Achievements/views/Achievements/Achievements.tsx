import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { Slider } from "@/common/Slider";
import { Title } from "@/common/Title";

import styles from "./Achievements.module.scss";
import { useAchievements } from "./useAchievements";

export const Achievements: FC<PropsWithChildren> = () => {
  const achievements = useAchievements();

  return (
    <Section scrollId="achievements" className={styles.wrapper} grey center>
      <Title as="h2">Достижения</Title>
      <Slider sliderData={achievements} centered autoplay infinity withArrows />
    </Section>
  );
};
