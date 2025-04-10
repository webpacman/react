import { FC } from "react";

import { useLang } from "@/services/LangContext";

import { DetailElement } from "../DetailElement/DetailElement";
import { DetailsWrapper } from "../DetailsWrapper/DetailsWrapper";
import { translator } from "./translator";

interface SkillsProps {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const lang = useLang();

  return (
    <DetailsWrapper title={translator.title[lang]}>
      {skills.map((skill) => (
        <DetailElement key={skill}>{skill}</DetailElement>
      ))}
    </DetailsWrapper>
  );
};
