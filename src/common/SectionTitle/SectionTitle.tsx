import { FC, PropsWithChildren } from "react";

import styles from "./SectionTitle.module.scss";

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
