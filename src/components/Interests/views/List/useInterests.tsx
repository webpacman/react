import { useLang } from "@/services/LangContext";

import { InterestKey } from "../../constants";
import { InterestDetailProps } from "../../types";
import VShevchukImage from "./assets/vshevchuk.webp";
import { translator } from "./translator";

export const useInterests = (): Record<InterestKey, InterestDetailProps> => {
  const lang = useLang();

  return {
    [InterestKey.DEVELOPMENT]: {
      title: translator[InterestKey.DEVELOPMENT][lang].title,
      descriptions: translator[InterestKey.DEVELOPMENT][lang].descriptions,
      image: VShevchukImage,
      imageDescription:
        translator[InterestKey.DEVELOPMENT][lang].imageDescription,
    },
    [InterestKey.COMICS]: {
      title: translator[InterestKey.COMICS][lang].title,
      descriptions: translator[InterestKey.COMICS][lang].descriptions,
      image: VShevchukImage,
      imageDescription: translator[InterestKey.COMICS][lang].imageDescription,
    },
    [InterestKey.GAMES]: {
      title: translator[InterestKey.GAMES][lang].title,
      descriptions: translator[InterestKey.GAMES][lang].descriptions,
      image: VShevchukImage,
      imageDescription: translator[InterestKey.GAMES][lang].imageDescription,
    },
    [InterestKey.SPORT]: {
      title: translator[InterestKey.SPORT][lang].title,
      descriptions: translator[InterestKey.SPORT][lang].descriptions,
      image: VShevchukImage,
      imageDescription: translator[InterestKey.SPORT][lang].imageDescription,
      isAdult: true,
    },

    [InterestKey.OTHER]: {
      title: translator[InterestKey.OTHER][lang].title,
      descriptions: translator[InterestKey.OTHER][lang].descriptions,
      image: VShevchukImage,
      imageDescription: translator[InterestKey.OTHER][lang].imageDescription,
    },
  };
};
