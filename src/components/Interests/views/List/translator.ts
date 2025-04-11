import { LangVariant, Translator } from "@/services/LangContext";

import { InterestKey } from "../../constants";
import { InterestDetailProps } from "../../types";

export const translator: Translator<
  InterestKey,
  Pick<InterestDetailProps, "title" | "descriptions" | "imageDescription">
> = {
  [InterestKey.DEVELOPMENT]: {
    [LangVariant.RU]: {
      title: "Программирование",
      descriptions: [
        "Как бы банально это не звучало, но я ОЧЕНЬ люблю программировать!",
        "Процесс программирования меня затягивает и вдохновляет. Мне очень нравится уникальная возможность создавать что-то новое и красивое.",
      ],
      imageDescription:
        "Фотография рабочего места с монитором, на котором открыт код",
    },
    [LangVariant.ENG]: {
      title: "Programming",
      descriptions: [
        "As cliché as it may sound, I REALLY love programming!",
        "The programming process captivates and inspires me. I really enjoy the unique opportunity to create something new and beautiful.",
      ],
      imageDescription: "Photo of a workspace with a monitor showing code",
    },
    [LangVariant.CHI]: {
      title: "编程",
      descriptions: [
        "虽然听起来很老套，但我非常喜欢编程！",
        "编程过程让我着迷并激励着我。我非常喜欢创造新事物和美丽事物的独特机会。",
      ],
      imageDescription: "显示代码的工作空间照片",
    },
  },
  [InterestKey.COMICS]: {
    [LangVariant.RU]: {
      title: "Комиксы",
      descriptions: [
        "С детства увлекаюсь комиксами, особенно Marvel и DC.",
        "Люблю изучать вселенную супергероев и следить за развитием персонажей.",
      ],
      imageDescription: "Коллекция комиксов на полке",
    },
    [LangVariant.ENG]: {
      title: "Comics",
      descriptions: [
        "I've been into comics since childhood, especially Marvel and DC.",
        "I love exploring the superhero universe and following character development.",
      ],
      imageDescription: "Collection of comics on a shelf",
    },
    [LangVariant.CHI]: {
      title: "漫画",
      descriptions: [
        "我从小就喜欢漫画，尤其是漫威和DC。",
        "我喜欢探索超级英雄宇宙并关注角色发展。",
      ],
      imageDescription: "书架上的漫画收藏",
    },
  },
  [InterestKey.GAMES]: {
    [LangVariant.RU]: {
      title: "Видеоигры",
      descriptions: [
        "Игры - это не только развлечение, но и искусство.",
        "Особенно люблю стратегии и RPG, где можно погрузиться в другой мир.",
      ],
      imageDescription: "Игровая консоль и геймпад",
    },
    [LangVariant.ENG]: {
      title: "Video Games",
      descriptions: [
        "Games are not just entertainment, but also art.",
        "I especially love strategies and RPGs where you can immerse yourself in another world.",
      ],
      imageDescription: "Gaming console and controller",
    },
    [LangVariant.CHI]: {
      title: "电子游戏",
      descriptions: [
        "游戏不仅是娱乐，更是一种艺术。",
        "我特别喜欢策略游戏和角色扮演游戏，可以沉浸在另一个世界中。",
      ],
      imageDescription: "游戏机和控制器",
    },
  },
  [InterestKey.SPORT]: {
    [LangVariant.RU]: {
      title: "Спорт",
      descriptions: [
        "Регулярно занимаюсь спортом для поддержания здоровья и энергии.",
        "Предпочитаю командные виды спорта и плавание.",
      ],
      imageDescription: "Спортивный зал с тренажерами",
    },
    [LangVariant.ENG]: {
      title: "Sports",
      descriptions: [
        "I regularly exercise to maintain health and energy.",
        "I prefer team sports and swimming.",
      ],
      imageDescription: "Gym with exercise equipment",
    },
    [LangVariant.CHI]: {
      title: "运动",
      descriptions: [
        "我定期锻炼以保持健康和精力。",
        "我更喜欢团队运动和游泳。",
      ],
      imageDescription: "配有健身器材的健身房",
    },
  },
  [InterestKey.OTHER]: {
    [LangVariant.RU]: {
      title: "Другие интересы",
      descriptions: [
        "Всегда открыт для новых увлечений и хобби.",
        "Люблю путешествовать, фотографировать и изучать новые технологии.",
      ],
      imageDescription: "Разнообразные хобби и интересы",
    },
    [LangVariant.ENG]: {
      title: "Other Interests",
      descriptions: [
        "Always open to new hobbies and interests.",
        "I love traveling, photography, and learning about new technologies.",
      ],
      imageDescription: "Various hobbies and interests",
    },
    [LangVariant.CHI]: {
      title: "其他兴趣",
      descriptions: [
        "始终对新爱好和兴趣持开放态度。",
        "我喜欢旅行、摄影和学习新技术。",
      ],
      imageDescription: "各种爱好和兴趣",
    },
  },
};
