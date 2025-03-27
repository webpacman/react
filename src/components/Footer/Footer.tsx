import { FC, PropsWithChildren } from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: FC<PropsWithChildren<FooterProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
