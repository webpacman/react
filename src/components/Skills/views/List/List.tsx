import clsx from "clsx";
import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useCallback,
  useState,
} from "react";

import { Flex, FlexAlign, FlexJustify } from "@/common/Flex";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";

import { SkillName } from "../../constants";
import { SkillProps } from "../../types";
import { Detail } from "../Detail/Detail";
import styles from "./List.module.scss";

interface SkillsListProps {
  selectedSkill: SkillName | undefined;
  setSelectedSkill: Dispatch<SetStateAction<SkillName | undefined>>;
  skills: SkillProps[];
}

export const List: FC<SkillsListProps> = memo(
  ({ selectedSkill, setSelectedSkill, skills }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const [hide, setHide] = useState(false);

    const onClickHandler = useCallback(
      (skillName: SkillName) => {
        if (!selectedSkill) {
          setSelectedSkill(skillName);
          return;
        }

        setHide(true);

        setTimeout(() => {
          setHide(false);
          setSelectedSkill((prev) =>
            prev === skillName ? undefined : skillName
          );
        }, 100);
      },
      [selectedSkill, setSelectedSkill]
    );

    return (
      <Flex justify={FlexJustify.START} className={styles.wrapper}>
        {skills.map((skill) => {
          const isActive = selectedSkill === skill.name;

          return (
            <Flex
              key={skill.name}
              align={FlexAlign.CENTER}
              className={clsx(
                styles.skill,
                isActive && styles.active,
                isActive && isMobile && !hide && styles.show
              )}
              onClick={() => onClickHandler(skill.name)}
            >
              <Flex align={FlexAlign.CENTER} className={styles.skillWrapper}>
                <skill.icon className={styles.icon} />
                <span className={styles.title}>{skill.title}</span>
              </Flex>

              {isMobile && isActive && (
                <Detail skill={skill.name} className={styles.detail} />
              )}
            </Flex>
          );
        })}
      </Flex>
    );
  }
);
