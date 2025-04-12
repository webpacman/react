import { LangVariant, Translator } from "@/services/LangContext";

import { FieldProps } from "../../types";

export const translator: Translator<
  "name" | "email" | "submit",
  Omit<FieldProps, "name">
> = {
  name: {
    [LangVariant.RU]: {
      label: "Имя",
      placeHolder: "Введите ваше имя",
    },
    [LangVariant.ENG]: {
      label: "Name",
      placeHolder: "Enter your name",
    },
    [LangVariant.CHI]: {
      label: "姓名",
      placeHolder: "请输入您的姓名",
    },
  },
  email: {
    [LangVariant.RU]: {
      label: "E-mail",
      placeHolder: "Введите ваш e-mail адрес",
    },
    [LangVariant.ENG]: {
      label: "E-mail",
      placeHolder: "Enter your email address",
    },
    [LangVariant.CHI]: {
      label: "电子邮箱",
      placeHolder: "请输入您的电子邮箱",
    },
  },
  submit: {
    [LangVariant.RU]: {
      label: "Отправить",
      placeHolder: "Отправить",
    },
    [LangVariant.ENG]: {
      label: "Send",
      placeHolder: "Send",
    },
    [LangVariant.CHI]: {
      label: "发送",
      placeHolder: "发送",
    },
  },
};
