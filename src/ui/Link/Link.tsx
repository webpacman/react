import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';

import clsx from 'clsx';
import styles from './Link.module.scss';

export enum LinkTheme {
  DEFAULT = 'default',
  WHITE = 'white',
}

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  theme?: LinkTheme;
  center?: boolean;
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  theme = LinkTheme.DEFAULT,
  center = false,
  className,
  children,
  ...rest
}) => {
  return (
    <a
      className={clsx(
        styles.link,
        styles[theme],
        center && styles.center,
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
