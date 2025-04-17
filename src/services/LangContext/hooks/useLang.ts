import { LangVariant } from "../constants";
import { useLangContext } from "./useLangContext";

export const useLang = (): LangVariant => {
  const { lang } = useLangContext();

  return lang;
};
