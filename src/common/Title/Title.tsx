import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Title.module.scss";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  as = "h2",
  className,
}) => {
  const Tag = as;

  return (
    <Tag className={clsx(styles.title, styles[as], className)}>{children}</Tag>
  );
};
