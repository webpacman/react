import { FC, PropsWithChildren } from "react";

import styles from "./Books.module.scss";

interface BooksProps {}

export const Books: FC<PropsWithChildren<BooksProps>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
