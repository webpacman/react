import { LangVariant, Translator } from "@/services/LangContext";

import { SkillName } from "../constants";

interface SkillDetail {
  name: string;
  description: string;
}

export const translator: Translator<SkillName, SkillDetail> = {
  [SkillName.HTML]: {
    [LangVariant.RU]: {
      name: "HTML",
      description:
        "Отлично ориентируюсь в вёрстке, способен быстро и качественно составить скелет сайта, очень стараюсь содержать вёрстку в чистоте и уюте, разделять все по компонентам.",
    },
    [LangVariant.ENG]: {
      name: "HTML",
      description:
        "I'm good at HTML, I can quickly and qualitatively create a website skeleton, I really try to keep the HTML clean and cozy, divide everything into components.",
    },
    [LangVariant.CHI]: {
      name: "HTML",
      description:
        "我擅长HTML，可以快速且高质量地创建网站骨架，我真的很努力地保持HTML的整洁和温馨，将所有内容分成组件。",
    },
  },
  [SkillName.CSS]: {
    [LangVariant.RU]: {
      name: "CSS/SCSS",
      description:
        "Хорошо владею навыком написания стилей для сайта, достаточно легко могу определить проблемные места и найти решение. Чаще всего использую scss, либо чистый css. В работе использую css modules, стараюсь соблюдать БЭМ методологию, где это нужно и возможно.",
    },
    [LangVariant.ENG]: {
      name: "CSS/SCSS",
      description:
        "I'm good at writing styles for a website, I can easily determine problematic places and find a solution. I mostly use scss, or pure css. In work I use css modules, I try to follow the BEM methodology, where it is necessary and possible.",
    },
    [LangVariant.CHI]: {
      name: "CSS/SCSS",
      description:
        "我擅长写网站样式，可以很容易地确定问题区域并找到解决方案。我大部分使用scss，或者纯css。在工作中使用css modules，我努力遵循BEM方法论，在需要和可能的情况下。",
    },
  },
  [SkillName.JS]: {
    [LangVariant.RU]: {
      name: "JS",
      description:
        "На работе использую как чистый js, так и jQuery. Стараюсь следить за современными стандартами и лучшими практиками, но версии ecmaScript наизусть не скажу :)",
    },
    [LangVariant.ENG]: {
      name: "JS",
      description:
        "I use both pure js and jQuery at work. I try to follow modern standards and best practices, but I don't know the versions of ecmaScript by heart :)",
    },
    [LangVariant.CHI]: {
      name: "JS",
      description:
        "我在工作中使用纯js和jQuery。我努力遵循现代标准和最佳实践，但我不记得ecmaScript的版本 :)",
    },
  },
  [SkillName.REACT]: {
    [LangVariant.RU]: {
      name: "React",
      description:
        'По работе я также познакомился с React. Прошел курсы по "React + Redux", "Продвинутый Frontend. В Production на React", изучил множество материалов и видео. Текущий сайт был переписан с помощью данной библиотеки. Очень люблю React, стараюсь писать качественный модульный код.',
    },
    [LangVariant.ENG]: {
      name: "React",
      description:
        "I also got acquainted with React at work. I took courses on 'React + Redux', 'Advanced Frontend. In Production on React', studied a lot of materials and videos. The current site was rewritten using this library. I really love React, I try to write high-quality modular code.",
    },
    [LangVariant.CHI]: {
      name: "React",
      description:
        "我在工作中也接触到了React。我参加了'React + Redux'、'高级前端。在React中生产'的课程，学习了大量材料和视频。当前网站是用这个库重写的。我很喜欢React，我努力写高质量的模块化代码。",
    },
  },
  [SkillName.TYPESCRIPT]: {
    [LangVariant.RU]: {
      name: "TypeScript",
      description:
        "Использую typescript везде, где это возможно. Люблю типизацию, она позволяет избежать множества ошибок и упрощает понимание кода.",
    },
    [LangVariant.ENG]: {
      name: "TypeScript",
      description:
        "I use typescript everywhere, where it is possible. I love typization, it allows you to avoid many errors and simplifies the code understanding.",
    },
    [LangVariant.CHI]: {
      name: "TypeScript",
      description:
        "我在工作中也使用typescript。我喜欢类型化，它允许你避免许多错误并简化代码理解。",
    },
  },
  [SkillName.NEXTJS]: {
    [LangVariant.RU]: {
      name: "Next.js",
      description:
        "По работе познакомился с данным фреймворком, вместе мы пережили много болей и страданий, но я всё равно его люблю <3",
    },
    [LangVariant.ENG]: {
      name: "Next.js",
      description:
        "I got acquainted with this framework at work. Together we went through a lot of pain and suffering, but I still love it <3",
    },
    [LangVariant.CHI]: {
      name: "Next.js",
      description:
        "我在工作中也接触到了Next.js。我们一起经历了许多痛苦和苦难，但我仍然很喜欢它 <3",
    },
  },
  [SkillName.PHP]: {
    [LangVariant.RU]: {
      name: "PHP",
      description:
        "Я люблю php. Это красивый и цельный язык программирования, который дает разработчику то, что ему нужно. В плохом коде всегда нужно задавать вопросы людям, а не языку программирования, поэтому, как бы php не хейтили - для меня он прекрасен!",
    },
    [LangVariant.ENG]: {
      name: "PHP",
      description:
        "I love php. It's a beautiful and complete programming language that gives the developer what he needs. In bad code, always ask questions to people, not to the programming language, so, no matter how php is hated - for me it's perfect!",
    },
    [LangVariant.CHI]: {
      name: "PHP",
      description:
        "我喜欢php。这是一个美丽的完整编程语言，它给了开发者他需要的东西。在坏代码中，总是向人而不是编程语言提问，所以，不管php怎么被讨厌，对我来说它都是完美的！",
    },
  },
  [SkillName.LARAVEL]: {
    [LangVariant.RU]: {
      name: "Laravel",
      description:
        "Очень приятный и продуманный для работы фреймворк, который дает огромный выбор в реализации и при этом большую свободу действий. Дополнительно с прекрасной документацией, которая поможет в 90% случаев, можно писать быстрые и качественные сайты. На данный момент имею 2 проекта на нем, один из них - Мой да мети.",
    },
    [LangVariant.ENG]: {
      name: "Laravel",
      description:
        "A very pleasant and thought-out for work framework, which gives a huge choice in implementation and at the same time a great deal of freedom of action. In addition to the excellent documentation, which will help in 90% of cases, you can write fast and high-quality sites. At the moment, I have 2 projects on it, one of which is my own да мети.",
    },
    [LangVariant.CHI]: {
      name: "Laravel",
      description:
        "一个非常愉快且为工作而设计的框架，它提供了巨大的实现选择，同时又给予了极大的自由度。此外，还有出色的文档，在90%的情况下都会有所帮助，可以快速且高质量地编写网站。目前，我有两个项目在上面，其中一个是我自己的 да мети.",
    },
  },
  [SkillName.MYSQL]: {
    [LangVariant.RU]: {
      name: "MySQL",
      description:
        "Моя рабочая СУБД. На данный момент использую её во всех проектах и на работе. Имею опыт построения структуры БД, неплохо пишу и ориентируюсь в запросах. В последнее время редко пишу запросы, но руки помнят.",
    },
    [LangVariant.ENG]: {
      name: "MySQL",
      description:
        "My working DBMS. At the moment, I use it in all projects and at work. I have experience building a database structure, I write well and orient myself in queries. In recent years, I rarely write queries, but my hands remember.",
    },
    [LangVariant.CHI]: {
      name: "MySQL",
      description:
        "我的工作DBMS。目前，我在所有项目和工作中都使用它。我有构建数据库结构的经验，我写得很好，并且能够处理查询。近年来，我很少写查询，但我的手还记得。",
    },
  },
  [SkillName.MONGODB]: {
    [LangVariant.RU]: {
      name: "MongoDB",
      description:
        "Имел опыт работы с данной СУБД на первой работе (через библиотеку mongoose), очень понравилась, но в последнее время не использовал.",
    },
    [LangVariant.ENG]: {
      name: "MongoDB",
      description:
        "I had experience working with this DBMS at my first job (through the mongoose library), I really liked it, but in recent years I have not used it.",
    },
    [LangVariant.CHI]: {
      name: "MongoDB",
      description:
        "我在第一份工作（通过mongoose库）中使用过这个DBMS，我很喜欢它，但近年来我没有使用过它。",
    },
  },
  [SkillName.POSTGRESQL]: {
    [LangVariant.RU]: {
      name: "PostgreSQL",
      description:
        "Имел небольшой опыт работы с данной СУБД. Т.к. это SQL СУБД, с радостью готов с ней работать, однако, в её тонкостях и отличиях от MySql не разбирался",
    },
    [LangVariant.ENG]: {
      name: "PostgreSQL",
      description:
        "I had a small experience working with this DBMS. Since it is an SQL DBMS, I am happy to work with it, however, I did not delve into its subtleties and differences from MySql.",
    },
    [LangVariant.CHI]: {
      name: "PostgreSQL",
      description:
        "我有一些使用这个DBMS的经验。由于它是SQL DBMS，我很乐意与它一起工作，然而，我没有深入研究它的细微差别和与MySql的区别。",
    },
  },
  [SkillName.BITRIX]: {
    [LangVariant.RU]: {
      name: "Bitrix",
      description:
        'Работая с сайтом eldorado.ru я постоянно имею дело с битриксом. Написал множество компонентов, "проревьювил" и изучил очень много кода. Хоть bitrix и не очень любят, я позитивно отношусь к данному фреймворку. Для качественного решения задач постоянно пользуюсь документацией. В последних проектах даже довелось использовать Bitrix24.',
    },
    [LangVariant.ENG]: {
      name: "Bitrix",
      description:
        "Working with the eldorado.ru website, I constantly have to deal with bitrix. I wrote many components, 'reviewed' and studied a lot of code. Although bitrix is not very popular, I have a positive attitude towards this framework. For quality problem solving, I constantly use documentation. In the last projects, I even had to use Bitrix24.",
    },
    [LangVariant.CHI]: {
      name: "Bitrix",
      description:
        "在 eldorado.ru 网站工作期间，我经常需要使用 Bitrix。我编写了许多组件，并“审阅”和研究了大量代码。虽然 Bitrix 并不那么流行，但我对这个框架持积极态度。为了解决质量问题，我经常参考文档。在最近的项目中，我甚至不得不使用 Bitrix24。",
    },
  },
  [SkillName.CONCOURSE]: {
    [LangVariant.RU]: {
      name: "Concourse",
      description:
        "Использовал на работе для управления и контроля внердений в продектив и дев, перешли на gitlab ci.",
    },
    [LangVariant.ENG]: {
      name: "Concourse",
      description:
        "I used it at work to manage and control the deployment of projects in production and development, we switched to gitlab ci.",
    },
    [LangVariant.CHI]: {
      name: "Concourse",
      description:
        "我在工作中使用它来管理并控制项目在生产环境和开发环境中的部署，我们切换到了gitlab ci。",
    },
  },
  [SkillName.DOCKER]: {
    [LangVariant.RU]: {
      name: "Docker",
      description:
        "Иногда использую для запуска локальных сервисов, также на работе для настройки CI/CD.",
    },
    [LangVariant.ENG]: {
      name: "Docker",
      description:
        "I sometimes use it to run local services, also at work to configure CI/CD.",
    },
    [LangVariant.CHI]: {
      name: "Docker",
      description: "我有时会使用它来运行本地服务，在工作中用于配置CI/CD。",
    },
  },
  [SkillName.FIGMA]: {
    [LangVariant.RU]: {
      name: "Figma",
      description:
        "Умею пользоваться figma для вёрстки страниц по макетам. Также по работе совместно с дизайнерами делали UI Kit.",
    },
    [LangVariant.ENG]: {
      name: "Figma",
      description:
        "I know how to use figma to lay out pages according to the layouts. Also, at work, I collaborated with designers to create a UI Kit.",
    },
    [LangVariant.CHI]: {
      name: "Figma",
      description:
        "我知道如何使用 figma 根据布局来布局页面。此外，在工作中，我与设计师合作创建了 UI Kit。",
    },
  },
  [SkillName.GIT]: {
    [LangVariant.RU]: {
      name: "Git",
      description:
        "Хорошо владею командами, работаю как в консоли, так и через GUI IDE. Лично использую Bitbucket и Github. На работе - Gitlab.",
    },
    [LangVariant.ENG]: {
      name: "Git",
      description:
        "I know how to use commands, I work both in the console and through GUI IDE. Personally, I use Bitbucket and Github. At work - Gitlab.",
    },
    [LangVariant.CHI]: {
      name: "Git",
      description:
        "我熟悉命令，我可以在控制台和GUI IDE中工作。我个人使用Bitbucket和Github。在工作中 - Gitlab。",
    },
  },
  [SkillName.GOOGLE]: {
    [LangVariant.RU]: {
      name: "Google",
      description:
        "Прекрасно владею механизмом поиска, 10 раз погугли, 1 раз спроси у коллег. За вопросами всегда в первую очередь лезу в google, активно пользуюсь всеми возможностями глобальной сети интернет. Лучшее решение можно написать за 3 дня, ну или найти за 3 минуты :)",
    },
    [LangVariant.ENG]: {
      name: "Google",
      description:
        "I know how to use commands, I work both in the console and through GUI IDE. Personally, I use Bitbucket and Github. At work - Gitlab.",
    },
    [LangVariant.CHI]: {
      name: "Google",
      description:
        "我非常擅长搜索，10次搜索，1次问同事。遇到问题时，我总是首先去谷歌，积极利用互联网的全部功能。最好的解决方案可以在3天内写出来，或者在3分钟内找到 :)",
    },
  },
  [SkillName.JEST]: {
    [LangVariant.RU]: {
      name: "Jest",
      description:
        "По работе познакомился с данной библиотекой. Стараюсь покрывать тестами бизнес логику.",
    },
    [LangVariant.ENG]: {
      name: "Jest",
      description:
        "I got acquainted with this library at work. I try to cover the business logic with tests.",
    },
    [LangVariant.CHI]: {
      name: "Jest",
      description: "我在工作中接触到了这个库。我努力用测试覆盖业务逻辑。",
    },
  },
  [SkillName.JIRA]: {
    [LangVariant.RU]: {
      name: "Jira",
      description:
        "Рабочий инструмент, умею настраивать и писать фильтры, хорошо ориентируюсь в программе. С точки зрения сотрудника сопровождения - инструмент незаменимый, особенно, если правильно настроить все процессы.",
    },
    [LangVariant.ENG]: {
      name: "Jira",
      description:
        "Working tool, I know how to configure and write filters, I'm good at the program. From the point of view of the support employee - an indispensable tool, especially if you correctly configure all the processes.",
    },
    [LangVariant.CHI]: {
      name: "Jira",
      description:
        "工作工具，我知道如何配置和编写过滤器，我擅长该程序。从支持员工的角度来看，这是一个不可或缺的工具，特别是如果正确配置所有流程。",
    },
  },
  [SkillName.LINUX]: {
    [LangVariant.RU]: {
      name: "Linux",
      description:
        "Очень люблю эту ОС, на первой работе на ноутбук ставил себе 16-ю Ubuntu и целый год с радостью ею пользовался. На данный момент работаю на Mac, на котором есть любимая командная строка! В основном, навыки базовые, но пару лет назад проходил курсы на stepik, где близко знакомился с многими вещами. P.s. я даже смогу выйти из vim :)",
    },
    [LangVariant.ENG]: {
      name: "Linux",
      description:
        "I really love this OS, on the first job I installed 16-th Ubuntu on my laptop and wholeheartedly used it. At the moment, I mainly work on Windows, but I have a Mac, on which I have my favorite command line! In general, I have basic skills, but a few years ago I passed courses on stepik, where I got acquainted with many things. P.s. I even managed to get out of vim :)",
    },
    [LangVariant.CHI]: {
      name: "Linux",
      description:
        "我非常喜欢这个操作系统，在第一份工作时，我在笔记本电脑上安装了16-th Ubuntu，并很高兴使用它。目前，我主要在Windows上工作，但拥有Mac，上面有我最喜欢的命令行！总的来说，我有一些基础技能，但几年前我在stepik上参加了课程，在那里我熟悉了很多东西。P.s. 我甚至可以退出vim :)",
    },
  },
  [SkillName.REDUX]: {
    [LangVariant.RU]: {
      name: "Redux Toolkit",
      description:
        "На работе изначально использовали redux вместе с saga, но по моей инициативе перешли на redux toolkit + rtq. Немного saga осталось, но больше для простой реализации слушателей событий.",
    },
    [LangVariant.ENG]: {
      name: "Redux Toolkit",
      description:
        "At work, we initially used redux together with saga, but by my initiative, we switched to redux toolkit + rtq. A little saga remains, but more for simple implementation of event listeners.",
    },
    [LangVariant.CHI]: {
      name: "Redux Toolkit",
      description:
        "在工作中，我们最初使用redux和saga，但根据我的建议，我们切换到了redux toolkit + rtq。稍微保留了一些saga，但更多的是为了简单实现事件监听器。",
    },
  },
  [SkillName.WEBPACK]: {
    [LangVariant.RU]: {
      name: "Webpack",
      description:
        "Имею опыт настройки webpack. На работе проводил декомпозицию next.config совместно с настройкой webpack.",
    },
    [LangVariant.ENG]: {
      name: "Webpack",
      description:
        "I have experience setting up webpack. At work, I conducted a decomposition of next.config jointly with the webpack configuration.",
    },
    [LangVariant.CHI]: {
      name: "Webpack",
      description:
        "我有一些webpack的经验。在工作中，我与webpack配置一起分解了next.config。",
    },
  },
  [SkillName.REDIS]: {
    [LangVariant.RU]: {
      name: "Redis",
      description:
        "Мне кажется, что redis сейчас используют практически везде, т.к. это очень удобная СУБД для хранения данных в формате ключ - значение. На работе и в личных проектах постоянно использую redis.",
    },
    [LangVariant.ENG]: {
      name: "Redis",
      description:
        "I think redis is now used practically everywhere, since it is a very convenient DBMS for storing data in the key-value format. I constantly use redis at work and in personal projects.",
    },
    [LangVariant.CHI]: {
      name: "Redis",
      description:
        "我认为redis现在几乎无处不在，因为它是一种非常方便的键值数据库。我在工作和个人项目中经常使用redis。",
    },
  },
  [SkillName.CURSOR]: {
    [LangVariant.RU]: {
      name: "Cursor",
      description:
        "Стараюсь использовать данную IDE, но пока не привык к ней. В основном использую для сложных вопросов и личных проектов.",
    },
    [LangVariant.ENG]: {
      name: "Cursor",
      description:
        "I try to use this IDE, but I haven't got used to it yet. I mainly use it for complex questions and personal projects.",
    },
    [LangVariant.CHI]: {
      name: "Cursor",
      description:
        "我试着使用这个IDE，但还没有习惯它。我主要用它来解决复杂的问题和个人的项目。",
    },
  },
  [SkillName.WEBSTORM]: {
    [LangVariant.RU]: {
      name: "WebStorm",
      description:
        "Моя любимая IDE для разработки. Больше всего нравится GUI и маршрутизация между файлами, в основном из-за этого не могу перейти на тот же cursor или vscode.",
    },
    [LangVariant.ENG]: {
      name: "WebStorm",
      description:
        "My favorite IDE for development. I like the GUI and file routing, mainly because of this, I can't switch to the same cursor or vscode.",
    },
    [LangVariant.CHI]: {
      name: "WebStorm",
      description:
        "我的最爱IDE。最喜欢GUI和文件路由，主要是因为这个，我不能切换到同样的cursor或vscode。",
    },
  },
  [SkillName.NESTJS]: {
    [LangVariant.RU]: {
      name: "NestJS",
      description:
        "Познакомился с фреймворком на работе, когда пришла задача сделать универсальный API для нескольких фронтов. С нуля настроил проект и активно его развиваю.",
    },
    [LangVariant.ENG]: {
      name: "NestJS",
      description:
        "I got acquainted with the framework at work, when the task was to make a universal API for several fronts. I set up the project from scratch and actively develop it.",
    },
    [LangVariant.CHI]: {
      name: "NestJS",
      description:
        "我在工作中接触到了这个框架，当有一个任务需要为多个前端制作一个通用的API时。我从零开始设置了这个项目，并积极发展它。",
    },
  },
  [SkillName.CICD]: {
    [LangVariant.RU]: {
      name: "CI/CD",
      description:
        "Есть опыт настройки CI/CD в gitlab, bitbucket и github. В основном это простые настройки, но доводилось делать и более сложные вещи, такие как кеширование и настройка окружений.",
    },
    [LangVariant.ENG]: {
      name: "CI/CD",
      description:
        "I have experience setting up CI/CD in gitlab, bitbucket and github. Mostly, this is simple configuration, but I also did more complex things, such as caching and environment configuration.",
    },
    [LangVariant.CHI]: {
      name: "CI/CD",
      description:
        "我有在gitlab、bitbucket和github上设置CI/CD的经验。主要这是简单的配置，但我也做了更复杂的事情，比如缓存和环境配置。",
    },
  },
  [SkillName.NODEJS]: {
    [LangVariant.RU]: {
      name: "NodeJS",
      description:
        "Чистый NodeJS использовал мало, в основном в личных проектах, но множество особенностей использую внутри NestJS.",
    },
    [LangVariant.ENG]: {
      name: "NodeJS",
      description:
        "I used pure NodeJS little, mainly in personal projects, but many features I use inside NestJS.",
    },
    [LangVariant.CHI]: {
      name: "NodeJS",
      description:
        "我很少使用纯NodeJS，主要在个人项目中使用，但许多特性我用于内部NestJS。",
    },
  },
  [SkillName.PYTHON]: {
    [LangVariant.RU]: {
      name: "Python",
      description:
        "На старте своей карьеры изучал python, даже прошёл курсы на geekbrains. Сейчас не использую, но иногда приходится читать чужой код. Очень понравится framework Django, даже делал небольшой проект на нём на первой работе.",
    },
    [LangVariant.ENG]: {
      name: "Python",
      description:
        "I studied python at the beginning of my career, even passed courses on geekbrains. Now I don't use it, but sometimes I have to read someone else's code. I really like the Django framework, I even made a small project on it at my first job.",
    },
    [LangVariant.CHI]: {
      name: "Python",
      description:
        "我在职业生涯的开始时学习了python，甚至参加了geekbrains的课程。现在我不使用它，但有时我必须阅读别人的代码。我真的很喜欢Django框架，甚至在第一份工作时也做了一个小项目。",
    },
  },
  [SkillName.POSTMAN]: {
    [LangVariant.RU]: {
      name: "Postman",
      description:
        "Постоянно использую postman на работе, создал и поддерживаю большую коллекцию для нашего API.",
    },
    [LangVariant.ENG]: {
      name: "Postman",
      description:
        "I constantly use postman at work, created and maintain a large collection for our API.",
    },
    [LangVariant.CHI]: {
      name: "Postman",
      description: "我在工作中经常使用postman，创建并维护了我们API的大量集合。",
    },
  },
  [SkillName.VITE]: {
    [LangVariant.RU]: {
      name: "Vite",
      description:
        "Недавно познакомился с vite, очень понравился, особенно в сочетании с react. Использую в новых проектах.",
    },
    [LangVariant.ENG]: {
      name: "Vite",
      description:
        "I recently got acquainted with vite, I really like it, especially in combination with react. I use it in new projects.",
    },
    [LangVariant.CHI]: {
      name: "Vite",
      description:
        "我最近接触了vite，非常喜欢，尤其是在与react结合使用时。我在新项目中使用它。",
    },
  },
  [SkillName.SENTRY]: {
    [LangVariant.RU]: {
      name: "Sentry",
      description:
        "Одна из интересных задач, которые довелось делать на работе - это подключение sentry к проекту. Это был интересный опыт, библиотека работает на 1% пользователей и динамически подключается в коде.",
    },
    [LangVariant.ENG]: {
      name: "Sentry",
      description:
        "One of the interesting tasks that I had to do at work was connecting sentry to the project. It was an interesting experience, the library works on 1% of users and dynamically connects in the code.",
    },
    [LangVariant.CHI]: {
      name: "Sentry",
      description:
        "我遇到的一个有趣的任务是连接sentry到项目。这是一个有趣的体验，库在1%的用户中工作，并在代码中动态连接。",
    },
  },
  [SkillName.ESLINT]: {
    [LangVariant.RU]: {
      name: "ESLint",
      description:
        "Постоянно и везде использую eslint, в том числе stylelint. Очень удобная библиотека, особенно в сочетании с prettier.",
    },
    [LangVariant.ENG]: {
      name: "ESLint",
      description:
        "I constantly use eslint, including stylelint. It's a very convenient library, especially in combination with prettier.",
    },
    [LangVariant.CHI]: {
      name: "ESLint",
      description:
        "我经常使用eslint，包括stylelint。这是一个非常方便的库，尤其是在与prettier结合使用时。",
    },
  },
  [SkillName.STORYBOOK]: {
    [LangVariant.RU]: {
      name: "Storybook",
      description:
        "С нуля настроил storybook для проекта, перенесли туда много ui компонентов.",
    },
    [LangVariant.ENG]: {
      name: "Storybook",
      description:
        "I set up storybook from scratch for the project, moved many ui components there.",
    },
    [LangVariant.CHI]: {
      name: "Storybook",
      description: "我从零开始为项目设置storybook，将许多ui组件迁移到那里。",
    },
  },
  [SkillName.PRISMA]: {
    [LangVariant.RU]: {
      name: "Prisma",
      description:
        "Есть небольшой опыт работы с данной ORM. Однако, сталкивались с проблемой нагрузки на поды при выполнении миграций в контейнере. ",
    },
    [LangVariant.ENG]: {
      name: "Prisma",
      description:
        "I have a small experience with this ORM. However, we encountered a problem with the load on the pods when performing migrations in the container.",
    },
    [LangVariant.CHI]: {
      name: "Prisma",
      description:
        "我有一些使用这个ORM的经验。然而，我们在执行容器中的迁移时遇到了问题。",
    },
  },
};
