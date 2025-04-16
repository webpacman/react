import { Link } from "@/common/Link";
import { LangVariant, Translator } from "@/services/LangContext";

const workExperience = new Date().getFullYear() - 2017;

export const translator: Translator<
  | "title"
  | "smallDescription"
  | "description1"
  | "description2"
  | "description3"
> = {
  title: {
    [LangVariant.RU]: "Шевчук Виталий Геннадьевич",
    [LangVariant.ENG]: "Shevchuk Vitaliy Gennadievich",
    [LangVariant.CHI]: "谢瓦尔恰克维塔利根纳季耶维奇",
  },
  smallDescription: {
    [LangVariant.RU]: "Все мы немножко fullstack...",
    [LangVariant.ENG]: "You know, I'm something of a fullstack myself...",
    [LangVariant.CHI]: "我们都是全栈开发人员...",
  },
  description1: {
    [LangVariant.RU]: (
      <>
        Я веб-разработчик со стажем {workExperience} лет. Начинал свой путь с
        написания небольших сайтов для знакомых, успел поработать в стартапе
        (больше не хочу), попробовал множество языков программирования и
        технологий.
      </>
    ),
    [LangVariant.ENG]: (
      <>
        I'm a web developer with {workExperience} years of experience. I started
        my journey with writing small websites for friends, worked in a startup
        (no more, thank you), tried many programming languages and technologies.
      </>
    ),
    [LangVariant.CHI]: (
      <>
        我是一名有{workExperience}
        年经验的资深网页开发人员。我最初从为朋友编写小型网站开始，在创业公司工作过，尝试过多种编程语言和技术。
      </>
    ),
  },
  description2: {
    [LangVariant.RU]: (
      <>
        Сейчас работаю в компании{" "}
        <Link href="https://mtech.mvideoeldorado.ru/ru/" target="_blank">
          М Тех
        </Link>
        , а именно - развиваю и сопровождаю сайт{" "}
        <Link href="https://eldorado.ru/" target="_blank">
          eldorado.ru
        </Link>
        . Тут я полюбил php, познакомился с React, научился работать в команде,
        активно общаться с "бизнесом", обучать и управлять.
      </>
    ),
    [LangVariant.ENG]: (
      <>
        I'm working in the company{" "}
        <Link href="https://mtech.mvideoeldorado.ru/ru/" target="_blank">
          M Tech
        </Link>
        , namely - I'm developing and supporting the{" "}
        <Link href="https://eldorado.ru/" target="_blank">
          eldorado.ru
        </Link>{" "}
        website. Here I fell in love with php, got acquainted with React,
        learned to work in a team, actively communicating with business
      </>
    ),
    [LangVariant.CHI]: (
      <>
        我现在在公司{" "}
        <Link href="https://mtech.mvideoeldorado.ru/ru/" target="_blank">
          M Tech
        </Link>
        工作，即：我正在开发和维护{" "}
        <Link href="https://eldorado.ru/" target="_blank">
          eldorado.ru
        </Link>
        网站。在这里，我爱上了php，熟悉了React，学会了在团队中工作，积极与业务沟通
      </>
    ),
  },
  description3: {
    [LangVariant.RU]: (
      <>
        Свободное время посвящаю развитию и поддержке сторонних проектов,
        например,{" "}
        <Link href="https://moydameti.ru/" target="_blank">
          Мой&nbsp;да&nbsp;мети
        </Link>
        . Стараюсь стабильно заниматься спортом и побольше времени проводить с{" "}
        семьей.
      </>
    ),
    [LangVariant.ENG]: (
      <>
        I dedicate my free time to the development and support of external
        projects, for example,{" "}
        <Link href="https://moydameti.ru/" target="_blank">
          Moy&nbsp;da&nbsp;meti
        </Link>
        . I try to exercise regularly and spend more time with my family.
      </>
    ),
    [LangVariant.CHI]: (
      <>
        我将自己的空闲时间用于开发和维护外部项目，例如：{" "}
        <Link href="https://moydameti.ru/" target="_blank">
          Moy&nbsp;da&nbsp;meti
        </Link>
        。我尝试定期锻炼并花更多时间陪伴家人。
      </>
    ),
  },
};
