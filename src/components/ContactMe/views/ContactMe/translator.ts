import { LangVariant, Translator } from "@/services/LangContext";

export const translator: Translator<"title" | "already_send", string> = {
  title: {
    [LangVariant.RU]: "Обратная связь",
    [LangVariant.ENG]: "Contact Me",
    [LangVariant.CHI]: "联系我",
  },
  already_send: {
    [LangVariant.RU]:
      "Вы уже отправляли сообщение, я обязательно с вами свяжусь! :)",
    [LangVariant.ENG]:
      "You have already sent a message, I will contact you soon! :)",
    [LangVariant.CHI]: "您已经发送了消息，我会尽快联系您！:)",
  },
};
