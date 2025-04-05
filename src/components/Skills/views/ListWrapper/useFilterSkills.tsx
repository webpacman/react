import { SkillFilter, skillsMapper } from "../../constants";
import { useSkills } from "../../hooks/useSkills";
import { SkillProps } from "../../types";

export const useFilterSkills = (filter: SkillFilter): SkillProps[] => {
  const skills = useSkills();

  return skillsMapper[filter].map((skill) => skills[skill]);
};
