import { useLangContext, type LangVariants } from '../LangTogglerContext';

export const useLang = (): LangVariants => {
  const { lang } = useLangContext();

  return lang;
};
