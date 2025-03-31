import { FC } from "react";

import { useLang } from "@/services/LangContext";

import { translator } from "./translator";

export const TextBlock: FC = () => {
  const lang = useLang();

  return (
    <div>
      <h1>{translator.title[lang]}</h1>
      <p>{translator.description[lang]}</p>
    </div>
  );
};
