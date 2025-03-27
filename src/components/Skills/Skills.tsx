import { FC, PropsWithChildren } from "react";

import styles from "./Skills.module.scss";

interface SkillsProps {}

export const Skills: FC<PropsWithChildren<SkillsProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
