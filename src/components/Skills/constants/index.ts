export enum SkillFilter {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASE = "database",
  OTHER = "other",
}

export enum SkillName {
  BITRIX = "bitrix",
  CONCOURSE = "concourse",
  CSS = "css",
  DOCKER = "docker",
  FIGMA = "figma",
  GIT = "git",
  GOOGLE = "google",
  CURSOR = "cursor",
  WEBSTORM = "webstorm",
  HTML = "html",
  JEST = "jest",
  JIRA = "jira",
  JS = "js",
  LARAVEL = "laravel",
  LINUX = "linux",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  NEXTJS = "nextjs",
  PHP = "php",
  POSTGRESQL = "postgresql",
  REACT = "react",
  REDIS = "redis",
  REDUX = "redux",
  TYPESCRIPT = "typescript",
  WEBPACK = "webpack",
  NESTJS = "nestjs",
  CICD = "cicd",
  NODEJS = "nodejs",
  PYTHON = "python",
  POSTMAN = "postman",
  VITE = "vite",
  SENTRY = "sentry",
  ESLINT = "eslint",
  STORYBOOK = "storybook",
  PRISMA = "prisma",
}

export const skillsMapper: Record<SkillFilter, SkillName[]> = {
  [SkillFilter.ALL]: Object.values(SkillName),
  [SkillFilter.FRONTEND]: [
    SkillName.HTML,
    SkillName.CSS,
    SkillName.JS,
    SkillName.REACT,
    SkillName.REDUX,
    SkillName.NEXTJS,
    SkillName.TYPESCRIPT,
  ],
  [SkillFilter.BACKEND]: [
    SkillName.NESTJS,
    SkillName.NODEJS,
    SkillName.PHP,
    SkillName.LARAVEL,
    SkillName.PYTHON,
  ],
  [SkillFilter.DATABASE]: [
    SkillName.MYSQL,
    SkillName.REDIS,
    SkillName.POSTGRESQL,
    SkillName.PRISMA,
    SkillName.MONGODB,
  ],
  [SkillFilter.OTHER]: [
    SkillName.CONCOURSE,
    SkillName.DOCKER,
    SkillName.FIGMA,
    SkillName.GIT,
    SkillName.GOOGLE,
    SkillName.CURSOR,
    SkillName.WEBSTORM,
    SkillName.JEST,
    SkillName.JIRA,
    SkillName.LINUX,
    SkillName.WEBPACK,
    SkillName.CICD,
    SkillName.POSTMAN,
    SkillName.VITE,
    SkillName.SENTRY,
    SkillName.ESLINT,
    SkillName.STORYBOOK,
    SkillName.PRISMA,
  ],
};
