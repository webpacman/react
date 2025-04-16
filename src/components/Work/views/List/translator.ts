import { LangVariant, Translator } from "@/services/LangContext";

import { WorkCode } from "../../constants";
import { WorkProps } from "../../types";

interface WorkTranslatorProps
  extends Omit<WorkProps, "code" | "dateStart" | "dateEnd"> {
  extraDateText?: string;
}

export const translator: Translator<WorkCode, WorkTranslatorProps> = {
  [WorkCode.WAITER]: {
    [LangVariant.RU]: {
      title: "Официант и менеджер заведения",
      skills: [
        "Коммуникабельность",
        "Стрессоустойчивость",
        "Активность",
        "Внимательность",
        "Доброжелательность",
      ],
    },
    [LangVariant.ENG]: {
      title: "Waiter and Venue Manager",
      skills: [
        "Communication",
        "Stress Resistance",
        "Attention to Detail",
        "Active",
        "Friendly",
      ],
    },
    [LangVariant.CHI]: {
      title: "服务员和场地经理",
      skills: ["沟通能力", "抗压能力", "注重细节", "积极", "友好"],
    },
  },
  [WorkCode.STROY_SERVICE]: {
    [LangVariant.RU]: {
      title: "Верстальщик",
      skills: [
        "html",
        "css",
        "less",
        "js",
        "gulp",
        "seo",
        "яндекс.директ",
        "instagram",
      ],
      projects: [
        {
          name: "Сайт РСК Стройсервис",
          description:
            "Вёрстка, поддержка и раскрутка сайта gksts.ru (сейчас недоступен)",
        },
      ],
    },
    [LangVariant.ENG]: {
      title: "Frontend Developer",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "gulp",
        "seo",
        "yandex.direct",
        "instagram",
      ],
      projects: [
        {
          name: "RSK StroyService Website",
          description:
            "Frontend development, support and promotion of the gksts.ru website (currently unavailable)",
        },
      ],
    },
    [LangVariant.CHI]: {
      title: "前端开发人员",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "gulp",
        "seo",
        "yandex.direct",
        "instagram",
      ],
      projects: [
        {
          name: "RSK建筑服务网站",
          description: "前端开发, 支持与推广 gksts.ru 网站 (目前不可用)",
        },
      ],
    },
  },
  [WorkCode.CHAYNX]: {
    [LangVariant.RU]: {
      title: 'ООО "Чейнкс"',
      skills: [
        "html+",
        "css+",
        "js+",
        "blockchain",
        "node.js",
        "python",
        "django",
        "solidity",
        "sqlite3",
        "mongodb",
        "postgresql",
        "linux",
        "git",
      ],
      projects: [
        {
          name: "Blockchain",
          description: "Интеграция с блокчейн проектом через javascript",
        },
        {
          name: "WebTMA",
          description: "Сайт для российской команды поддержки WebTMA",
        },
        {
          name: "OMKontrol",
          description: "Сайт для организации OMKontrol и OMKService",
        },
        {
          name: "QRCodeNavigation",
          description:
            "Проект по навигационным карточкам с использованием QR-кодов. Сервер на node.js, БД - sqlite3 + mongoDB",
        },
        {
          name: "BrandCheck",
          description:
            "Блог-интеграция с проектом BrandCheck. Реализация на Django Framework",
        },
      ],
    },
    [LangVariant.ENG]: {
      title: "Chaynx",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "Blockchain",
        "Node.js",
        "Python",
        "Django",
        "Solidity",
        "SQLite3",
        "MongoDB",
        "PostgreSQL",
        "Linux",
        "Git",
      ],
      projects: [
        {
          name: "Blockchain",
          description:
            "Integration with the blockchain project through javascript",
        },
        {
          name: "WebTMA",
          description: "Website for the Russian support team of WebTMA",
        },
        {
          name: "OMKontrol",
          description: "Website for the organization OMKontrol and OMKService",
        },
        {
          name: "QRCodeNavigation",
          description:
            "Project for navigation cards using QR-codes. Server on node.js, DB - sqlite3 + mongoDB",
        },
        {
          name: "BrandCheck",
          description:
            "Blog integration with the BrandCheck project. Implementation on Django Framework",
        },
      ],
    },
    [LangVariant.CHI]: {
      title: "Chaynx",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "Blockchain",
        "Node.js",
        "Python",
        "Django",
        "Solidity",
        "SQLite3",
        "MongoDB",
        "PostgreSQL",
        "Linux",
        "Git",
      ],
      projects: [
        {
          name: "区块链",
          description: "通过javascript集成区块链项目",
        },
        {
          name: "WebTMA",
          description: "俄罗斯WebTMA支持团队的网站",
        },
        {
          name: "OMKontrol",
          description: "OMKontrol和OMKService的组织网站",
        },
        {
          name: "QRCodeNavigation",
          description:
            "使用QR-代码的导航卡项目。服务器在node.js上，数据库 - sqlite3 + mongoDB",
        },
        {
          name: "BrandCheck",
          description: "BrandCheck项目的博客集成。在Django框架上实现",
        },
      ],
    },
  },
  [WorkCode.M_TECH]: {
    [LangVariant.RU]: {
      title: 'ООО "М Тех"',
      skills: [
        "react",
        "typescript",
        "next.js",
        "nest.js",
        "git+",
        "html+",
        "css+",
        "js+",
        "php",
        "bitrix",
        "mysql",
        "redux",
        "redux saga",
        "rtq",
        "mysql",
        "redis",
        "linux+",
        "docker",
        "concourse",
        "ci/cd",
        "ООП",
        "SOLID",
        "jira",
        "soft skills",
        "team lead skills",
      ],
      projects: [
        {
          name: "Checkin",
          description:
            'Запуск акций "Оставайся дома" и "Чекин". Реализация бекенда и фронтенда, начисление бонусных баллов при клике через CRM',
        },
        {
          name: "Интерфейсы поддержки",
          description:
            "Админка для операторов, админов и Call-центра по работе с базовыми операциями магазина. Помогла ускорить решение заявок от бизнеса и пользователей, а также автоматизировала 70% работы call-центра.",
        },
        {
          name: "Реплатформинг",
          description:
            "Реплатформинг сайта eldorado с фронта bitrix на react (next.js). Перенесли на новый фронт карточку товара, страницы магазинов, часть страниц личного кабинета, начали перенос корзины.",
        },
        {
          name: "Предзаказ",
          description:
            "Участвовал в реализации функционала предзаказа в магазине.",
        },
        {
          name: "Universal API",
          description:
            "С нуля реализовал gateway для интеграции с внешними сервисами. Написано на nest.js.",
        },
        {
          name: "Вендоры",
          description:
            "Реализовал множество интеграций с различными сервисами для сбора и получения данных, н-р, retail rocket, gravity field, flocktory, mindbox.",
        },
        {
          name: "GTM",
          description:
            "Оптимизировал интеграцию отправки GTM событий с целью повышения перфоманса сайта. Реализовал бассейн событий, который накапливает события сайта до загрузки GTM скриптов (по сути очередь с использованием redux saga).",
        },
        {
          name: "more...",
          description: "И много других интересных проектов и задач",
        },
      ],
    },
    [LangVariant.ENG]: {
      title: "M Tech",
      skills: [
        "react",
        "typescript",
        "next.js",
        "nest.js",
        "git+",
        "html+",
        "css+",
        "js+",
        "php",
        "bitrix",
        "mysql",
        "redux",
        "redux saga",
        "rtq",
        "mysql",
        "redis",
        "linux+",
        "docker",
        "concourse",
        "ci/cd",
        "SOLID",
        "jira",
        "soft skills",
        "team lead skills",
      ],
      projects: [
        {
          name: "Checkin",
          description:
            "Launch of 'Stay at Home' and 'Checkin' promotions. Implementation of backend and frontend, bonus points accrual through CRM on click",
        },
        {
          name: "Support Interfaces",
          description:
            "Admin panel for operators, admins and Call-center for working with basic store operations. Helped speed up resolution of requests from business and users, and automated 70% of call-center work",
        },
        {
          name: "Replatforming",
          description:
            "Replatforming of eldorado website from bitrix frontend to react (next.js). Migrated product card, store pages, part of personal account pages to new frontend, started cart migration",
        },
        {
          name: "Pre-order",
          description:
            "Participated in implementation of pre-order functionality in the store",
        },
        {
          name: "Universal API",
          description:
            "Implemented gateway from scratch for integration with external services. Written in nest.js",
        },
        {
          name: "Vendors",
          description:
            "Implemented multiple integrations with various services for collecting and receiving data, e.g., retail rocket, gravity field, flocktory, mindbox",
        },
        {
          name: "GTM",
          description:
            "Optimized GTM events integration to improve website performance. Implemented event pool that accumulates site events until GTM scripts are loaded (essentially a queue using redux saga)",
        },
        {
          name: "more...",
          description: "And many other interesting projects and tasks",
        },
      ],
    },
    [LangVariant.CHI]: {
      title: "M Tech",
      skills: [
        "react",
        "typescript",
        "next.js",
        "nest.js",
        "git+",
        "html+",
        "css+",
        "js+",
        "php",
        "bitrix",
        "mysql",
        "redux",
        "redux saga",
        "rtq",
        "mysql",
        "redis",
        "linux+",
        "docker",
        "concourse",
        "ci/cd",
        "SOLID",
        "jira",
        "soft skills",
        "team lead skills",
      ],
      projects: [
        {
          name: "Checkin",
          description:
            "启动'待在家里'和'Checkin'促销活动。通过CRM实现后端和前端，点击时累积奖励积分",
        },
        {
          name: "支持界面",
          description:
            "为操作员、管理员和呼叫中心提供管理面板，用于处理商店基本操作。帮助加快处理来自业务和用户的请求，并自动化了70%的呼叫中心工作",
        },
        {
          name: "平台迁移",
          description:
            "将eldorado网站从bitrix前端迁移到react (next.js)。将产品卡片、商店页面、部分个人账户页面迁移到新前端，开始购物车迁移",
        },
        {
          name: "预购",
          description: "参与实现商店中的预购功能",
        },
        {
          name: "通用API",
          description: "从头开始实现与外部服务集成的网关。使用nest.js编写",
        },
        {
          name: "供应商",
          description:
            "实现与各种服务的数据收集和接收的多个集成，例如retail rocket, gravity field, flocktory, mindbox",
        },
        {
          name: "GTM",
          description:
            "优化GTM事件集成以提高网站性能。实现事件池，在GTM脚本加载前累积网站事件（本质上使用redux saga的队列）",
        },
        {
          name: "更多...",
          description: "以及许多其他有趣的项目和任务",
        },
      ],
    },
  },
};
