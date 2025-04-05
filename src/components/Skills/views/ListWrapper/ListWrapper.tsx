import { FC, useState } from "react";

import { Flex, FlexAlign } from "@/common/Flex";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";

import { SkillFilter, SkillName } from "../../constants";
import { Detail } from "../Detail/Detail";
import { List } from "../List/List";
import styles from "./ListWrapper.module.scss";
import { useFilterSkills } from "./useFilterSkills";

interface ListWrapperProps {
  filter: SkillFilter;
}

export const ListWrapper: FC<ListWrapperProps> = ({ filter }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const skills = useFilterSkills(filter);

  const [selectedSkill, setSelectedSkill] = useState<SkillName | undefined>(
    skills[0]?.name
  );

  return (
    <Flex align={FlexAlign.START} className={styles.wrapper}>
      <List
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        skills={skills}
      />
      {!isMobile && selectedSkill && <Detail skill={selectedSkill} full />}
    </Flex>
  );
};
