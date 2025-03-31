import { LangVariant } from "./constants";
import { useLangContext } from "./LangContext";

export const useLang = (): LangVariant => {
  const { lang } = useLangContext();

  return lang;
};
