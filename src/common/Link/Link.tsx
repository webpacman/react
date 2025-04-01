import clsx from "clsx";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";

import styles from "./Link.module.scss";

export enum LinkTheme {
  DEFAULT = "default",
  WHITE = "white",
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: LinkTheme;
  className?: string;
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  children,
  theme = LinkTheme.DEFAULT,
  className,
  ...props
}) => {
  return (
    <a className={clsx(styles.link, styles[theme], className)} {...props}>
      {children}
    </a>
  );
};
