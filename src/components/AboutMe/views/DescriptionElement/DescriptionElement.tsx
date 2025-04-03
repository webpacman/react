import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import styles from "./DescriptionElement.module.scss";

interface DescriptionElementProps {
  gray?: boolean;
}

export const DescriptionElement: FC<
  PropsWithChildren<DescriptionElementProps>
> = ({ gray, children }) => {
  return (
    <div className={clsx(styles.description, gray && styles.gray)}>
      {children}
    </div>
  );
};
