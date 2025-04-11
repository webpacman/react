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
  AROUND = "justifyAround",
}

export enum FlexAlign {
  START = "alignStart",
  CENTER = "alignCenter",
  END = "alignEnd",
}

export enum FlexDirection {
  ROW = "row",
  COLUMN = "column",
}

type FlexProps<T extends ElementType = "div" | "img"> = {
  children?: ReactNode;
  display?: FlexDisplay;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  center?: boolean;
  className?: string;
  tag?: T;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

export const Flex = <T extends ElementType = "div">({
  children,
  display = FlexDisplay.FLEX,
  justify,
  align,
  direction,
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
        direction && styles[direction],
        center && styles.center,
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
