import { FC, PropsWithChildren } from "react";

import styles from "./Welcome.module.scss";

interface WelcomeProps {}

export const Welcome: FC<PropsWithChildren<WelcomeProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
