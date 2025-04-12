import { LangVariant, Translator } from "@/services/LangContext";

import { ResultCode } from "../../constants";

export const translator: Translator<ResultCode, string> = {
  [ResultCode.ALREADY_SEND]: {
    [LangVariant.RU]:
      "Вы уже отправляли сообщение, я обязательно с вами свяжусь! :)",
    [LangVariant.ENG]:
      "You have already sent a message, I will contact you soon! :)",
    [LangVariant.CHI]: "您已经发送了消息，我会尽快联系您！:)",
  },
  [ResultCode.ERROR_FIELD]: {
    [LangVariant.RU]: "Некорректно заполнены поля!",
    [LangVariant.ENG]: "Fields are filled incorrectly!",
    [LangVariant.CHI]: "字段填写不正确！",
  },
  [ResultCode.ERROR_MIN_LENGTH]: {
    [LangVariant.RU]: "Текст сообщения должен быть больше 20 символов!",
    [LangVariant.ENG]: "Message text must be longer than 20 characters!",
    [LangVariant.CHI]: "消息文本必须超过20个字符！",
  },
  [ResultCode.ERROR_REQUEST]: {
    [LangVariant.RU]:
      "Ошибка запроса! Пожалуйста, обновите страницу и попробуйте ещё раз",
    [LangVariant.ENG]: "Request error! Please refresh the page and try again",
    [LangVariant.CHI]: "请求错误！请刷新页面后重试",
  },
  [ResultCode.ERROR]: {
    [LangVariant.RU]: "Произошла ошибка! Пожалуйста, попробуйте позже",
    [LangVariant.ENG]: "An error occurred! Please try again later",
    [LangVariant.CHI]: "发生错误！请稍后再试",
  },
  [ResultCode.SUCCESS]: {
    [LangVariant.RU]: "Сообщение отправлено! Я обязательно с вами свяжусь :)",
    [LangVariant.ENG]: "Message sent! I will contact you soon :)",
    [LangVariant.CHI]: "消息已发送！我会尽快与您联系 :)",
  },
};
