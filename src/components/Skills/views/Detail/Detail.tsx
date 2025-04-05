import clsx from "clsx";
import { FC } from "react";

import { Flex, FlexAlign, FlexDirection } from "@/common/Flex";

import { SkillName } from "../../constants";
import styles from "./Detail.module.scss";
import { useSkillDetail } from "./useSkillDetail";

interface DetailProps {
  skill: SkillName;
  full?: boolean;
  className?: string;
}

export const Detail: FC<DetailProps> = ({ skill, full = false, className }) => {
  const { percent, description, title, icon: Icon } = useSkillDetail(skill);

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      className={clsx(
        full ? styles.fullWrapper : styles.smallWrapper,
        className
      )}
    >
      {full && (
        <Flex align={FlexAlign.CENTER} className={styles.header}>
          <Icon className={styles.icon} />
          <span className={styles.title}>{title}</span>
        </Flex>
      )}

      {percent !== undefined && (
        <Flex
          direction={FlexDirection.COLUMN}
          align={FlexAlign.END}
          className={styles.progress}
        >
          <span className={styles.progressPercent}>{percent}%</span>
          <div className={styles.progressBar}>
            <div style={{ width: `${percent}%` }}></div>
          </div>
        </Flex>
      )}

      <p className={styles.description}>{description}</p>
    </Flex>
  );
};
