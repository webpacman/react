import clsx from 'clsx';
import React, {
  memo,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
} from 'react';
import styles from './Flex.module.scss';

type Prefer<P, T> = P & Omit<T, keyof P>;

type ElementPropsWithoutRef<T extends ElementType> = Pick<
  ComponentPropsWithoutRef<T>,
  keyof ComponentPropsWithoutRef<T>
>;

type OverwritableType<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>;

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

interface FlexProps<T> {
  as?: T;
  display?: FlexDisplay;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  className?: string;
}

const FlexWrapper = <T extends ElementType = 'div'>({
  as,
  display = FlexDisplay.BLOCK,
  align,
  justify,
  direction,
  children,
  className,
  ...rest
}: OverwritableType<PropsWithChildren<FlexProps<T>>, T>): JSX.Element => {
  const Tag: ElementType = as ?? 'div';

  return (
    <Tag
      className={clsx(
        styles[display],
        align && styles[align],
        justify && styles[justify],
        direction && styles[direction],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const Flex = memo(FlexWrapper);
Flex.displayName = 'Flex';
