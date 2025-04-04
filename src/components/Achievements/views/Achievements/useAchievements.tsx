import { ReactNode } from "react";

import { Flex } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import styles from "./Achievements.module.scss";
import BitrixImage from "./assets/bitrix.webp";
import CSSImage from "./assets/css-3.png";
import EldoradoImage from "./assets/eldorado2020.webp";
import HTMLImage from "./assets/html.webp";
import JSImage from "./assets/js.png";
import PHPImage from "./assets/php.webp";
import SkillboxImage from "./assets/skillbox.webp";
import TeamleadImage from "./assets/teamlead.webp";
import { AchievementsKeys } from "./constants";
import { translator } from "./translator";

interface Achievement {
  name: AchievementsKeys;
  image: string;
}

const achievements: Achievement[] = [
  {
    name: AchievementsKeys.BITRIX,
    image: BitrixImage,
  },
  {
    name: AchievementsKeys.CSS,
    image: CSSImage,
  },
  {
    name: AchievementsKeys.ELDORADO,
    image: EldoradoImage,
  },
  {
    name: AchievementsKeys.HTML,
    image: HTMLImage,
  },
  {
    name: AchievementsKeys.JS,
    image: JSImage,
  },
  {
    name: AchievementsKeys.PHP,
    image: PHPImage,
  },
  {
    name: AchievementsKeys.SKILLBOX,
    image: SkillboxImage,
  },
  {
    name: AchievementsKeys.TEAMLEAD,
    image: TeamleadImage,
  },
];

export const useAchievements = (): ReactNode[] => {
  const lang = useLang();

  return achievements.map((achievement) => (
    <Flex
      tag="img"
      center
      key={achievement.name}
      src={achievement.image}
      alt={translator[achievement.name][lang]}
      className={styles.image}
    />
  ));
};
