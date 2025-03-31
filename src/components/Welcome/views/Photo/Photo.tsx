import { FC, PropsWithChildren } from "react";

import styles from "./Photo.module.scss";

interface PhotoProps {}

export const Photo: FC<PropsWithChildren<PhotoProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
