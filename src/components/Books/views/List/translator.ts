import { LangVariant, Translator } from "@/services/LangContext";

import { BooksKeys } from "./constants";

export const translator: Translator<BooksKeys, string> = {
  [BooksKeys.SKILLS7]: {
    [LangVariant.RU]:
      "Данная книга научила меня замечать и соблюдать некоторые паттерны поведения, позволяющие добиваться поставленных целей.",
    [LangVariant.ENG]:
      "This book taught me to notice and follow some behavioral patterns that help achieve the goals set.",
    [LangVariant.CHI]:
      "这本书教我注意并遵循一些行为模式，这些模式有助于实现设定的目标。",
  },
  [BooksKeys.CLEAR_ARCHITECTURE]: {
    [LangVariant.RU]:
      "Книга, которая помогла мне понять, как правильно структурировать проекты, чтобы они были легкими для понимания и поддержки.",
    [LangVariant.ENG]:
      "The book that helped me understand how to properly structure projects to be easy to understand and support.",
    [LangVariant.CHI]:
      "这本书帮助我理解如何正确地结构化项目，以便它们易于理解和维护。",
  },
  [BooksKeys.CLEAR_CODE]: {
    [LangVariant.RU]: "Если кратко - благодаря ей я нашёл текущую работу :)",
    [LangVariant.ENG]: "If briefly - thanks to it I found my current job :)",
    [LangVariant.CHI]: "如果简短地说 - 多亏了它，我找到了我的工作 :)",
  },
  [BooksKeys.COMPUTER_SCIENCE]: {
    [LangVariant.RU]: "Основы программирования в небольшой книжке, рекомендую!",
    [LangVariant.ENG]: "Basic programming in a small book, I recommend!",
    [LangVariant.CHI]: "基础编程在小型书籍中，我推荐！",
  },
  [BooksKeys.MICRO_FRONTEND]: {
    [LangVariant.RU]:
      "Книга познакомила меня с вариантами реализации микрофронтендов, сам пока что их не использовал, но хотя бы понимание есть",
    [LangVariant.ENG]:
      "The book introduced me to the implementation options of micro frontends, I haven't used them myself yet, but at least I have an understanding",
    [LangVariant.CHI]:
      "这本书介绍了我对微前端实现方式的理解，我自己还没有使用过，但至少我有所了解。",
  },
  [BooksKeys.PATTERNS]: {
    [LangVariant.RU]:
      "В совокупности с сайтом refactoring.guru я узнал для себя незаменимые методы и практики разработки.",
    [LangVariant.ENG]:
      "In combination with the refactoring.guru website, I learned invaluable methods and practices for development.",
    [LangVariant.CHI]:
      "与 refactoring.guru 网站结合，我学到了许多宝贵的开发方法和实践。",
  },
  [BooksKeys.PERFECT_CODE]: {
    [LangVariant.RU]:
      "Книга - большой аналог книги Чистый код. Читается сложнее, но содержит в некоторых случаях более развернутые объяснения различных тем.",
    [LangVariant.ENG]:
      "The book is a large counterpart to the Clean Code book. It is more difficult to read, but contains more detailed explanations of various topics in some cases.",
    [LangVariant.CHI]:
      "这本书是 Clean Code 书的较大版本。它更难读，但在某些情况下包含更多详细的解释。",
  },
  [BooksKeys.PROGRAM_FANATIC]: {
    [LangVariant.RU]:
      'Книга учит легко и непринужденно подходить к профессии программист и "выгораниям".',
    [LangVariant.ENG]:
      "The book teaches how to easily and informally approach the profession of a programmer and burnout.",
    [LangVariant.CHI]: "这本书教人们轻松、不拘束地接近编程职业和倦怠。",
  },
  [BooksKeys.SCALE_APPLICATIONS]: {
    [LangVariant.RU]:
      "Книга знакомит с правилами структурирования приложения для дальнейшего лёгкого масштабирования",
    [LangVariant.ENG]:
      "The book introduces the rules of structuring an application for further easy scaling",
    [LangVariant.CHI]: "这本书介绍了结构化应用程序的规则，以便更容易扩展",
  },
  [BooksKeys.TEAM_LEAD]: {
    [LangVariant.RU]:
      "Шикарная книга, которая в лёгкой форме рассказывает о работе в качестве тимлида",
    [LangVariant.ENG]:
      "A great book that tells about the work of a team leader in an easy way",
    [LangVariant.CHI]: "这本书以轻松的方式讲述了作为团队领导的工作",
  },
  [BooksKeys.TYPESCRIPT]: {
    [LangVariant.RU]:
      "Одна из моих любимых книг, которая очень хорошо знакомит с typescript и рассказывает много лайфхаков",
    [LangVariant.ENG]:
      "One of my favorite books that very well introduces typescript and tells many life hacks",
    [LangVariant.CHI]:
      "这本书非常详细地介绍了 TypeScript，并分享了许多生活技巧",
  },
};
