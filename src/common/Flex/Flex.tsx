import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./Flex.module.scss";

export enum FlexDisplay {
  FLEX = "flex",
  INLINE_FLEX = "inlineFlex",
}

export enum FlexJustify {
  START = "justifyStart",
  CENTER = "justifyCenter",
  END = "justifyEnd",
  BETWEEN = "justifyBetween",
  EVENLY = "justifyEvenly",
}

export enum FlexAlign {
  START = "alignStart",
  CENTER = "alignCenter",
  END = "alignEnd",
}

type FlexProps<T extends ElementType = "div"> = {
  children: ReactNode;
  display?: FlexDisplay;
  justify?: FlexJustify;
  align?: FlexAlign;
  center?: boolean;
  className?: string;
  tag?: T;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

export const Flex = <T extends ElementType = "div">({
  children,
  display = FlexDisplay.FLEX,
  justify,
  align,
  center = false,
  className,
  tag = "div" as T,
  ...otherProps
}: FlexProps<T>) => {
  const Component = tag as ElementType;

  return (
    <Component
      className={clsx(
        styles[display],
        justify && styles[justify],
        align && styles[align],
        center && styles.center,
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
