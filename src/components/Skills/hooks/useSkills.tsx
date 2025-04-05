import { useMemo } from "react";

import { useLang } from "@/services/LangContext";

import { SkillName } from "../constants";
import { SkillProps } from "../types";
import BitrixIcon from "./assets/bitrix.svg?react";
import BootstrapIcon from "./assets/bootstrap.svg?react";
import ConcourseIcon from "./assets/concourse.svg?react";
import CSSIcon from "./assets/css.svg?react";
import DockerIcon from "./assets/docker.svg?react";
import FigmaIcon from "./assets/figma.svg?react";
import GitIcon from "./assets/git.svg?react";
import GoogleIcon from "./assets/google.svg?react";
import HTMLIcon from "./assets/html.svg?react";
import JestIcon from "./assets/jest.svg?react";
import JiraIcon from "./assets/jira.svg?react";
import JSIcon from "./assets/js.svg?react";
import LaravelIcon from "./assets/laravel.svg?react";
import LinuxIcon from "./assets/linux.svg?react";
import MongoDBIcon from "./assets/mongodb.svg?react";
import MySQLIcon from "./assets/mysql.svg?react";
import NextJSIcon from "./assets/nextjs.svg?react";
import PHPIcon from "./assets/php.svg?react";
import PostgreSQLIcon from "./assets/postgresql.svg?react";
import ReactIcon from "./assets/react.svg?react";
import RedisIcon from "./assets/redis.svg?react";
import ReduxIcon from "./assets/redux.svg?react";
import TypeScriptIcon from "./assets/typescript.svg?react";
import WebpackIcon from "./assets/webpack.svg?react";
import { translator } from "./translator";

type Skills = Record<SkillName, SkillProps>;

export const useSkills = (): Skills => {
  const lang = useLang();

  const skills: Skills = useMemo(() => {
    return {
      [SkillName.HTML]: {
        name: SkillName.HTML,
        title: translator[SkillName.HTML][lang].name,
        description: translator[SkillName.HTML][lang].description,
        icon: HTMLIcon,
        percent: 90,
      },
      [SkillName.CSS]: {
        name: SkillName.CSS,
        title: translator[SkillName.CSS][lang].name,
        description: translator[SkillName.CSS][lang].description,
        icon: CSSIcon,
        percent: 90,
      },
      [SkillName.JS]: {
        name: SkillName.JS,
        title: translator[SkillName.JS][lang].name,
        description: translator[SkillName.JS][lang].description,
        icon: JSIcon,
      },
      [SkillName.REACT]: {
        name: SkillName.REACT,
        title: translator[SkillName.REACT][lang].name,
        description: translator[SkillName.REACT][lang].description,
        icon: ReactIcon,
        percent: 90,
      },
      [SkillName.TYPESCRIPT]: {
        name: SkillName.TYPESCRIPT,
        title: translator[SkillName.TYPESCRIPT][lang].name,
        description: translator[SkillName.TYPESCRIPT][lang].description,
        icon: TypeScriptIcon,
      },
      [SkillName.NEXTJS]: {
        name: SkillName.NEXTJS,
        title: translator[SkillName.NEXTJS][lang].name,
        description: translator[SkillName.NEXTJS][lang].description,
        icon: NextJSIcon,
      },
      [SkillName.PHP]: {
        name: SkillName.PHP,
        title: translator[SkillName.PHP][lang].name,
        description: translator[SkillName.PHP][lang].description,
        icon: PHPIcon,
      },
      [SkillName.LARAVEL]: {
        name: SkillName.LARAVEL,
        title: translator[SkillName.LARAVEL][lang].name,
        description: translator[SkillName.LARAVEL][lang].description,
        icon: LaravelIcon,
        percent: 90,
      },
      [SkillName.MYSQL]: {
        name: SkillName.MYSQL,
        title: translator[SkillName.MYSQL][lang].name,
        description: translator[SkillName.MYSQL][lang].description,
        icon: MySQLIcon,
      },
      [SkillName.MONGODB]: {
        name: SkillName.MONGODB,
        title: translator[SkillName.MONGODB][lang].name,
        description: translator[SkillName.MONGODB][lang].description,
        icon: MongoDBIcon,
      },
      [SkillName.POSTGRESQL]: {
        name: SkillName.POSTGRESQL,
        title: translator[SkillName.POSTGRESQL][lang].name,
        description: translator[SkillName.POSTGRESQL][lang].description,
        icon: PostgreSQLIcon,
        percent: 90,
      },
      [SkillName.BITRIX]: {
        name: SkillName.BITRIX,
        title: translator[SkillName.BITRIX][lang].name,
        description: translator[SkillName.BITRIX][lang].description,
        icon: BitrixIcon,
      },
      [SkillName.BOOTSTRAP]: {
        name: SkillName.BOOTSTRAP,
        title: translator[SkillName.BOOTSTRAP][lang].name,
        description: translator[SkillName.BOOTSTRAP][lang].description,
        icon: BootstrapIcon,
      },
      [SkillName.CONCOURSE]: {
        name: SkillName.CONCOURSE,
        title: translator[SkillName.CONCOURSE][lang].name,
        description: translator[SkillName.CONCOURSE][lang].description,
        icon: ConcourseIcon,
      },
      [SkillName.DOCKER]: {
        name: SkillName.DOCKER,
        title: translator[SkillName.DOCKER][lang].name,
        description: translator[SkillName.DOCKER][lang].description,
        icon: DockerIcon,
      },
      [SkillName.FIGMA]: {
        name: SkillName.FIGMA,
        title: translator[SkillName.FIGMA][lang].name,
        description: translator[SkillName.FIGMA][lang].description,
        icon: FigmaIcon,
      },
      [SkillName.GIT]: {
        name: SkillName.GIT,
        title: translator[SkillName.GIT][lang].name,
        description: translator[SkillName.GIT][lang].description,
        icon: GitIcon,
      },
      [SkillName.GOOGLE]: {
        name: SkillName.GOOGLE,
        title: translator[SkillName.GOOGLE][lang].name,
        description: translator[SkillName.GOOGLE][lang].description,
        icon: GoogleIcon,
        percent: 50,
      },
      [SkillName.JEST]: {
        name: SkillName.JEST,
        title: translator[SkillName.JEST][lang].name,
        description: translator[SkillName.JEST][lang].description,
        icon: JestIcon,
      },
      [SkillName.JIRA]: {
        name: SkillName.JIRA,
        title: translator[SkillName.JIRA][lang].name,
        description: translator[SkillName.JIRA][lang].description,
        icon: JiraIcon,
      },
      [SkillName.LINUX]: {
        name: SkillName.LINUX,
        title: translator[SkillName.LINUX][lang].name,
        description: translator[SkillName.LINUX][lang].description,
        icon: LinuxIcon,
      },
      [SkillName.REDUX]: {
        name: SkillName.REDUX,
        title: translator[SkillName.REDUX][lang].name,
        description: translator[SkillName.REDUX][lang].description,
        icon: ReduxIcon,
      },
      [SkillName.WEBPACK]: {
        name: SkillName.WEBPACK,
        title: translator[SkillName.WEBPACK][lang].name,
        description: translator[SkillName.WEBPACK][lang].description,
        icon: WebpackIcon,
      },
      [SkillName.REDIS]: {
        name: SkillName.REDIS,
        title: translator[SkillName.REDIS][lang].name,
        description: translator[SkillName.REDIS][lang].description,
        icon: RedisIcon,
        percent: 25,
      },
    };
  }, [lang]);

  return skills;
};
