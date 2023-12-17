import clsx from 'clsx';
import React, { type FC, type PropsWithChildren } from 'react';
import styles from './SectionDescription.module.scss';

interface SectionDescriptionProps {
  className?: string;
}

export const SectionDescription: FC<
  PropsWithChildren<SectionDescriptionProps>
> = ({ className, children }) => {
  return <p className={clsx(styles.description, className)}>{children}</p>;
};
