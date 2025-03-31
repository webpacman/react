import { FC, PropsWithChildren } from "react";

import styles from "./SectionDescription.module.scss";

export const SectionDescription: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};
