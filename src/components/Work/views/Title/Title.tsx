import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  isBlock?: boolean;
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  isBlock = false,
  children,
}) => {
  return (
    <p className={clsx(styles.title, isBlock && styles.block)}>{children}</p>
  );
};
