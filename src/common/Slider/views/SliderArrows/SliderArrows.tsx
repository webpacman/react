import clsx from "clsx";
import { FC } from "react";

import { Flex, FlexDisplay } from "@/common/Flex";

import ArrowIcon from "./assets/arrow.svg?react";
import styles from "./SliderArrows.module.scss";

interface SliderArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const SliderArrows: FC<SliderArrowsProps> = ({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <>
      <Flex
        tag="button"
        center
        display={FlexDisplay.INLINE_FLEX}
        className={clsx(styles.arrow, styles.prev)}
        onClick={onPrev}
        disabled={isPrevDisabled}
        aria-label="Предыдущий слайд"
      >
        <ArrowIcon className={styles.arrowIcon} />
      </Flex>
      <Flex
        tag="button"
        center
        display={FlexDisplay.INLINE_FLEX}
        className={clsx(styles.arrow, styles.next)}
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Следующий слайд"
      >
        <ArrowIcon className={styles.arrowIcon} />
      </Flex>
    </>
  );
};
