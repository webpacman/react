import { ImageDataProps } from "@/common/hooks/useImagePopup";

import BitrixImage from "../assets/bitrix.webp";
import CSSImage from "../assets/css-3.png";
import EldoradoImage from "../assets/eldorado2020.webp";
import HTMLImage from "../assets/html.webp";
import JSImage from "../assets/js.png";
import PHPImage from "../assets/php.webp";
import SkillboxImage from "../assets/skillbox.webp";
import TeamleadImage from "../assets/teamlead.webp";

export enum AchievementsKeys {
  BITRIX = "bitrix",
  CSS = "css",
  ELDORADO = "eldorado",
  HTML = "html",
  JS = "js",
  PHP = "php",
  SKILLBOX = "skillbox",
  TEAMLEAD = "teamlead",
}

export const achievements: ImageDataProps<AchievementsKeys>[] = [
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
