import { SkillName } from "../../constants";
import { useSkills } from "../../hooks/useSkills";
import { SkillProps } from "../../types";

export const useSkillDetail = (skill: SkillName): SkillProps => {
  const skills = useSkills();

  return skills[skill];
};
