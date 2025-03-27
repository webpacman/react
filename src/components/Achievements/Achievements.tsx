import { FC, PropsWithChildren } from "react";

import styles from "./Achievements.module.scss";

interface AchievementsProps {}

export const Achievements: FC<PropsWithChildren<AchievementsProps>> = ({
  children,
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
