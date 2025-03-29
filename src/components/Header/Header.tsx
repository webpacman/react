import { FC, PropsWithChildren } from "react";

import { useLangContext } from "@/services/LangContext/LangContext";

import styles from "./Header.module.scss";

export const Header: FC<PropsWithChildren> = () => {
  const { lang } = useLangContext();

  return <div className={styles.header}>...</div>;
};
