import clsx from 'clsx';
import React, { type FC, type PropsWithChildren } from 'react';
import { Flex, FlexAlign, FlexJustify } from '../Flex';
import styles from './Section.module.scss';

interface SectionProps {
  scrollId: string;
  className?: string;
  grey?: boolean;
  center?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  scrollId,
  className,
  children,
  grey = false,
  center = false,
}) => {
  return (
    <>
      <div className={styles.scrollId} id={scrollId} />
      <Flex
        className={clsx(styles.Section, grey && styles.grey, className)}
        data-id={scrollId}
        isSection
        align={center ? FlexAlign.CENTER : FlexAlign.NORMAL}
        justify={center ? FlexJustify.CENTER : FlexJustify.NORMAL}
      >
        {children}
      </Flex>
    </>
  );
};
