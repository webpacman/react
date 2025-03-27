import { FC, PropsWithChildren } from "react";

import styles from "./Work.module.scss";

interface WorkProps {}

export const Work: FC<PropsWithChildren<WorkProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
