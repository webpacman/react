import { useLang } from "@/services/LangContext";

import { InterestKey } from "../../constants";
import { InterestDetailProps } from "../../types";
import CarImage from "./assets/car.webp";
import ChillImage from "./assets/chill.webp";
import GameImage from "./assets/game.webp";
import HookahImage from "./assets/hookah.webp";
import ProgrammingImage from "./assets/program.webp";
import SpiderImage from "./assets/spider.webp";
import { translator } from "./translator";

export const useInterests = (): Record<InterestKey, InterestDetailProps> => {
  const lang = useLang();

  return {
    [InterestKey.DEVELOPMENT]: {
      title: translator[InterestKey.DEVELOPMENT][lang].title,
      descriptions: translator[InterestKey.DEVELOPMENT][lang].descriptions,
      image: ProgrammingImage,
      imageDescription:
        translator[InterestKey.DEVELOPMENT][lang].imageDescription,
    },
    [InterestKey.COMICS]: {
      title: translator[InterestKey.COMICS][lang].title,
      descriptions: translator[InterestKey.COMICS][lang].descriptions,
      image: SpiderImage,
      imageDescription: translator[InterestKey.COMICS][lang].imageDescription,
    },
    [InterestKey.GAMES]: {
      title: translator[InterestKey.GAMES][lang].title,
      descriptions: translator[InterestKey.GAMES][lang].descriptions,
      image: GameImage,
      imageDescription: translator[InterestKey.GAMES][lang].imageDescription,
    },
    [InterestKey.SPORT]: {
      title: translator[InterestKey.SPORT][lang].title,
      descriptions: translator[InterestKey.SPORT][lang].descriptions,
      image: ChillImage,
      imageDescription: translator[InterestKey.SPORT][lang].imageDescription,
    },
    [InterestKey.HOOKAH]: {
      title: translator[InterestKey.HOOKAH][lang].title,
      descriptions: translator[InterestKey.HOOKAH][lang].descriptions,
      image: HookahImage,
      imageDescription: translator[InterestKey.HOOKAH][lang].imageDescription,
      isAdult: true,
    },
    [InterestKey.OTHER]: {
      title: translator[InterestKey.OTHER][lang].title,
      descriptions: translator[InterestKey.OTHER][lang].descriptions,
      image: CarImage,
      imageDescription: translator[InterestKey.OTHER][lang].imageDescription,
    },
  };
};
