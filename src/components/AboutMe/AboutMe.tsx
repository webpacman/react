import { FC, PropsWithChildren } from "react";

import styles from "./AboutMe.module.scss";

interface AboutMeProps {}

export const AboutMe: FC<PropsWithChildren<AboutMeProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
