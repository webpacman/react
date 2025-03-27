import { FC, PropsWithChildren } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({ title }) => {
  return <div className={styles.header}>...</div>;
};
