import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import styles from "./DetailElement.module.scss";

interface DetailElementProps {
  className?: string;
}

export const DetailElement: FC<PropsWithChildren<DetailElementProps>> = ({
  className,
  children,
}) => {
  return <li className={clsx(styles.element, className)}>{children}</li>;
};
