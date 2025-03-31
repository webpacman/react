import { FC, PropsWithChildren } from "react";

import styles from "./List.module.scss";

interface ListProps {}

export const List: FC<PropsWithChildren<ListProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
