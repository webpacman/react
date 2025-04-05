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
      description: "HTML - язык гипертекстовой разметки",
    },
    [LangVariant.ENG]: {
      name: "HTML",
      description: "HTML - HyperText Markup Language",
    },
    [LangVariant.CHI]: {
      name: "HTML",
      description: "HTML - 超文本标记语言",
    },
  },
  [SkillName.CSS]: {
    [LangVariant.RU]: {
      name: "CSS",
      description: "CSS - каскадные таблицы стилей",
    },
    [LangVariant.ENG]: {
      name: "CSS",
      description: "CSS - Cascading Style Sheets",
    },
    [LangVariant.CHI]: {
      name: "CSS",
      description: "CSS - 层叠样式表",
    },
  },
  [SkillName.JS]: {
    [LangVariant.RU]: {
      name: "JS",
      description: "JS - язык программирования JavaScript",
    },
    [LangVariant.ENG]: {
      name: "JS",
      description: "JS - JavaScript",
    },
    [LangVariant.CHI]: {
      name: "JS",
      description: "JS - 编程语言 JavaScript",
    },
  },
  [SkillName.REACT]: {
    [LangVariant.RU]: {
      name: "React",
      description:
        "React - JavaScript библиотека для создания пользовательских интерфейсов",
    },
    [LangVariant.ENG]: {
      name: "React",
      description: "React - JavaScript library for creating user interfaces",
    },
    [LangVariant.CHI]: {
      name: "React",
      description: "React - JavaScript 库用于创建用户界面",
    },
  },
  [SkillName.TYPESCRIPT]: {
    [LangVariant.RU]: {
      name: "TypeScript",
      description:
        "TypeScript - язык программирования, разработанный Microsoft",
    },
    [LangVariant.ENG]: {
      name: "TypeScript",
      description: "TypeScript - programming language developed by Microsoft",
    },
    [LangVariant.CHI]: {
      name: "TypeScript",
      description: "TypeScript - 编程语言，由微软开发",
    },
  },
  [SkillName.NEXTJS]: {
    [LangVariant.RU]: {
      name: "Next.js",
      description: "Next.js - JavaScript фреймворк для создания веб-приложений",
    },
    [LangVariant.ENG]: {
      name: "Next.js",
      description:
        "Next.js - JavaScript framework for creating web applications",
    },
    [LangVariant.CHI]: {
      name: "Next.js",
      description: "Next.js - JavaScript 框架用于创建 Web 应用程序",
    },
  },
  [SkillName.PHP]: {
    [LangVariant.RU]: {
      name: "PHP",
      description:
        "PHP - язык программирования, используемый для создания веб-приложений",
    },
    [LangVariant.ENG]: {
      name: "PHP",
      description: "PHP - programming language used to create web applications",
    },
    [LangVariant.CHI]: {
      name: "PHP",
      description: "PHP - 用于创建 Web 应用程序的编程语言",
    },
  },
  [SkillName.LARAVEL]: {
    [LangVariant.RU]: {
      name: "Laravel",
      description: "Laravel - PHP фреймворк для создания веб-приложений",
    },
    [LangVariant.ENG]: {
      name: "Laravel",
      description: "Laravel - PHP framework for creating web applications",
    },
    [LangVariant.CHI]: {
      name: "Laravel",
      description: "Laravel - PHP 框架用于创建 Web 应用程序",
    },
  },
  [SkillName.MYSQL]: {
    [LangVariant.RU]: {
      name: "MySQL",
      description:
        "MySQL - реляционная база данных, разработанная компанией Oracle",
    },
    [LangVariant.ENG]: {
      name: "MySQL",
      description: "MySQL - relational database developed by Oracle",
    },
    [LangVariant.CHI]: {
      name: "MySQL",
      description: "MySQL - 关系型数据库，由甲骨文公司开发",
    },
  },
  [SkillName.MONGODB]: {
    [LangVariant.RU]: {
      name: "MongoDB",
      description:
        "MongoDB - NoSQL база данных, разработанная компанией MongoDB, Inc.",
    },
    [LangVariant.ENG]: {
      name: "MongoDB",
      description: "MongoDB - NoSQL database developed by MongoDB, Inc.",
    },
    [LangVariant.CHI]: {
      name: "MongoDB",
      description: "MongoDB - NoSQL 数据库，由 MongoDB, Inc. 开发",
    },
  },
  [SkillName.POSTGRESQL]: {
    [LangVariant.RU]: {
      name: "PostgreSQL",
      description:
        "PostgreSQL - реляционная база данных, разработанная компанией PostgreSQL Global Development Group",
    },
    [LangVariant.ENG]: {
      name: "PostgreSQL",
      description:
        "PostgreSQL - relational database developed by PostgreSQL Global Development Group",
    },
    [LangVariant.CHI]: {
      name: "PostgreSQL",
      description:
        "PostgreSQL - 关系型数据库，由 PostgreSQL Global Development Group 开发",
    },
  },
  [SkillName.BITRIX]: {
    [LangVariant.RU]: {
      name: "Bitrix",
      description: "Bitrix - PHP фреймворк для создания веб-приложений",
    },
    [LangVariant.ENG]: {
      name: "Bitrix",
      description: "Bitrix - PHP framework for creating web applications",
    },
    [LangVariant.CHI]: {
      name: "Bitrix",
      description: "Bitrix - PHP 框架用于创建 Web 应用程序",
    },
  },
  [SkillName.BOOTSTRAP]: {
    [LangVariant.RU]: {
      name: "Bootstrap",
      description: "Bootstrap - CSS фреймворк для создания веб-приложений",
    },
    [LangVariant.ENG]: {
      name: "Bootstrap",
      description: "Bootstrap - CSS framework for creating web applications",
    },
    [LangVariant.CHI]: {
      name: "Bootstrap",
      description: "Bootstrap - CSS 框架用于创建 Web 应用程序",
    },
  },
  [SkillName.CONCOURSE]: {
    [LangVariant.RU]: {
      name: "Concourse",
      description: "Concourse - инструмент для автоматизации процессов",
    },
    [LangVariant.ENG]: {
      name: "Concourse",
      description: "Concourse - tool for automating processes",
    },
    [LangVariant.CHI]: {
      name: "Concourse",
      description: "Concourse - 自动化流程的工具",
    },
  },
  [SkillName.DOCKER]: {
    [LangVariant.RU]: {
      name: "Docker",
      description: "Docker - платформа для контейнеризации приложений",
    },
    [LangVariant.ENG]: {
      name: "Docker",
      description: "Docker - platform for containerizing applications",
    },
    [LangVariant.CHI]: {
      name: "Docker",
      description: "Docker - 应用程序容器化平台",
    },
  },
  [SkillName.FIGMA]: {
    [LangVariant.RU]: {
      name: "Figma",
      description: "Figma - инструмент для дизайна интерфейсов",
    },
    [LangVariant.ENG]: {
      name: "Figma",
      description: "Figma - interface design tool",
    },
    [LangVariant.CHI]: {
      name: "Figma",
      description: "Figma - 界面设计工具",
    },
  },
  [SkillName.GIT]: {
    [LangVariant.RU]: {
      name: "Git",
      description: "Git - система контроля версий",
    },
    [LangVariant.ENG]: {
      name: "Git",
      description: "Git - version control system",
    },
    [LangVariant.CHI]: {
      name: "Git",
      description: "Git - 版本控制系统",
    },
  },
  [SkillName.GOOGLE]: {
    [LangVariant.RU]: {
      name: "Google",
      description: "Google - поисковая система и набор сервисов",
    },
    [LangVariant.ENG]: {
      name: "Google",
      description: "Google - search engine and set of services",
    },
    [LangVariant.CHI]: {
      name: "Google",
      description: "Google - 搜索引擎和服务套件",
    },
  },
  [SkillName.JEST]: {
    [LangVariant.RU]: {
      name: "Jest",
      description: "Jest - фреймворк для тестирования JavaScript",
    },
    [LangVariant.ENG]: {
      name: "Jest",
      description: "Jest - JavaScript testing framework",
    },
    [LangVariant.CHI]: {
      name: "Jest",
      description: "Jest - JavaScript 测试框架",
    },
  },
  [SkillName.JIRA]: {
    [LangVariant.RU]: {
      name: "Jira",
      description: "Jira - система управления проектами",
    },
    [LangVariant.ENG]: {
      name: "Jira",
      description: "Jira - project management system",
    },
    [LangVariant.CHI]: {
      name: "Jira",
      description: "Jira - 项目管理系统",
    },
  },
  [SkillName.LINUX]: {
    [LangVariant.RU]: {
      name: "Linux",
      description: "Linux - операционная система с открытым исходным кодом",
    },
    [LangVariant.ENG]: {
      name: "Linux",
      description: "Linux - open source operating system",
    },
    [LangVariant.CHI]: {
      name: "Linux",
      description: "Linux - 开源操作系统",
    },
  },
  [SkillName.REDUX]: {
    [LangVariant.RU]: {
      name: "Redux",
      description: "Redux - библиотека для управления состоянием приложения",
    },
    [LangVariant.ENG]: {
      name: "Redux",
      description: "Redux - state management library",
    },
    [LangVariant.CHI]: {
      name: "Redux",
      description: "Redux - 状态管理库",
    },
  },
  [SkillName.WEBPACK]: {
    [LangVariant.RU]: {
      name: "Webpack",
      description: "Webpack - сборщик модулей для JavaScript",
    },
    [LangVariant.ENG]: {
      name: "Webpack",
      description: "Webpack - JavaScript module bundler",
    },
    [LangVariant.CHI]: {
      name: "Webpack",
      description: "Webpack - JavaScript 模块打包工具",
    },
  },
  [SkillName.REDIS]: {
    [LangVariant.RU]: {
      name: "Redis",
      description: "Redis - хранилище данных типа ключ-значение",
    },
    [LangVariant.ENG]: {
      name: "Redis",
      description: "Redis - key-value data store",
    },
    [LangVariant.CHI]: {
      name: "Redis",
      description: "Redis - 键值数据存储",
    },
  },
};
