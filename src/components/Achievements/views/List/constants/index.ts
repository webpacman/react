import { ImageDataProps } from "@/common/hooks/useImagePopup";

import BitrixImage from "../assets/bitrix.webp";
import EldoradoImage from "../assets/eldorado2020.webp";
import HTMLImage from "../assets/html.webp";
import PHPImage from "../assets/php.webp";
import PythonImage from "../assets/python.webp";
import SkillboxImage from "../assets/skillbox.webp";
import TeamleadImage from "../assets/teamlead.webp";

export enum AchievementsKeys {
  BITRIX = "bitrix",
  ELDORADO = "eldorado",
  HTML = "html",
  PHP = "php",
  SKILLBOX = "skillbox",
  TEAMLEAD = "teamlead",
  PYTHON = "python",
}

export const achievements: ImageDataProps<AchievementsKeys>[] = [
  {
    name: AchievementsKeys.BITRIX,
    image: BitrixImage,
  },
  {
    name: AchievementsKeys.PYTHON,
    image: PythonImage,
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
