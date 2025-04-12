import { LangVariant, Translator } from "@/services/LangContext";

import { FieldProps } from "../../types";

export const translator: Translator<"message", Omit<FieldProps, "name">> = {
  message: {
    [LangVariant.RU]: {
      label: "Сообщение",
      placeHolder: "Подробно опишите, с какой целью хотите связаться со мной",
    },
    [LangVariant.ENG]: {
      label: "Message",
      placeHolder: "Please describe in detail why you would like to contact me",
    },
    [LangVariant.CHI]: {
      label: "消息",
      placeHolder: "请详细说明您想与我联系的目的",
    },
  },
};
