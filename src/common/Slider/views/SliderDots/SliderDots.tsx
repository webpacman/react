import clsx from "clsx";
import { FC } from "react";

import { Flex, FlexJustify } from "@/common/Flex";

import styles from "./SliderDots.module.scss";

interface SliderDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export const SliderDots: FC<SliderDotsProps> = ({
  totalSlides,
  currentSlide,
  onDotClick,
}) => {
  return (
    <Flex justify={FlexJustify.CENTER} className={styles.controls}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={clsx(styles.dot, currentSlide === index && styles.active)}
          onClick={() => onDotClick(index)}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </Flex>
  );
};
