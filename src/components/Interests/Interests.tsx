import { FC, PropsWithChildren } from "react";

import styles from "./Interests.module.scss";

interface InterestsProps {}

export const Interests: FC<PropsWithChildren<InterestsProps>> = ({
  children,
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
