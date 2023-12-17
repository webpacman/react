import clsx from 'clsx';
import React, {
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';
import styles from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  as = 'h1',
  className,
  children,
}) => {
  const Tag = as;

  return <Tag className={clsx(styles.title, className)}>{children}</Tag>;
};
