import { Link } from "@/common/Link";
import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title" | "desc1" | "desc2" | "btn"> = {
  title: {
    [LangVariant.ENG]: "YouTube channel",
    [LangVariant.RU]: "YouTube канал",
    [LangVariant.CHI]: "YouTube 频道",
  },
  desc1: {
    [LangVariant.ENG]: (
      <>
        I'm a web developer, and I'm also developing a YouTube channel{" "}
        <Link target="_blank" href="https://www.youtube.com/@webpacman">
          Webpacman
        </Link>
        . On the channel, I try to help beginners immerse themselves in the
        wonderful world of web development!
      </>
    ),
    [LangVariant.RU]: (
      <>
        Немного занимаюсь ютубом, а именно, развитием канала{" "}
        <Link target="_blank" href="https://www.youtube.com/@webpacman">
          Webpacman
        </Link>
        . На канале стараюсь помочь начинающим разработчикам погрузиться в
        прекрасный мир web разработки!
      </>
    ),
    [LangVariant.CHI]: (
      <>
        我是一名网页开发人员，我也在发展一个 YouTube 频道{" "}
        <Link target="_blank" href="https://www.youtube.com/@webpacman">
          Webpacman
        </Link>
        . 在频道上，我努力帮助初学者沉浸在 web 开发的美好世界中！
      </>
    ),
  },
  desc2: {
    [LangVariant.ENG]: (
      <>
        When I first started my journey in web development, finding the right
        information was very difficult. I hope my channel will help solve this
        problem for many people!
      </>
    ),
    [LangVariant.RU]: (
      <>
        Когда я только начинал свой путь в разработке сайтов, найти нужную
        информацию было очень сложно. Надеюсь, мой канал поможет решить данную
        проблему для многих людей!
      </>
    ),
    [LangVariant.CHI]: (
      <>
        当我刚开始我的 web
        开发之旅时，找到正确的信息非常困难。我希望我的频道能帮助解决这个问题，
        为许多人提供帮助！
      </>
    ),
  },
  btn: {
    [LangVariant.ENG]: "Support the channel",
    [LangVariant.RU]: "Поддержать канал",
    [LangVariant.CHI]: "支持频道",
  },
};
