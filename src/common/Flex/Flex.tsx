import clsx from 'clsx';
import React, { type FC, type PropsWithChildren } from 'react';
import styles from './Flex.module.scss';

export enum FlexDisplay {
  BLOCK = 'block',
  INLINE = 'inline',
}

export enum FlexAlign {
  NORMAL = 'alignNormal',
  START = 'alignStart',
  CENTER = 'alignCenter',
  END = 'alignEnd',
}

export enum FlexJustify {
  NORMAL = 'justifyNormal',
  START = 'justifyStart',
  CENTER = 'justifyCenter',
  END = 'justifyEnd',
  BETWEEN = 'justifyBetween',
}

export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
}

interface FlexProps {
  display?: FlexDisplay;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  isSection?: boolean; // TODO: refactor by typescript
  className?: string;
}

export const Flex: FC<PropsWithChildren<FlexProps>> = ({
  display = FlexDisplay.BLOCK,
  align,
  justify,
  direction,
  children,
  isSection = false,
  className,
}) => {
  const Tag = isSection ? 'section' : 'div';

  return (
    <Tag
      className={clsx(
        styles[display],
        align && styles[align],
        justify && styles[justify],
        direction && styles[direction],
        className
      )}
    >
      {children}
    </Tag>
  );
};
