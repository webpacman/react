import clsx from "clsx";
import {
  FC,
  ReactNode,
  RefObject,
  TouchEvent,
  useCallback,
  useState,
} from "react";

import styles from "./SliderList.module.scss";

interface SliderListProps {
  sliderData: ReactNode[];
  sliderRef: RefObject<HTMLDivElement | null>;
  centered: boolean;
  currentSlide: number;
  itemWidth: number;
  translateX: number;
  isTransitioning: boolean;
  onSwipe: (direction: "next" | "prev") => void;
  fullScreen: boolean;
}

export const SliderList: FC<SliderListProps> = ({
  sliderData,
  sliderRef,
  centered,
  itemWidth,
  translateX,
  isTransitioning,
  onSwipe,
  fullScreen,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart(e.touches[0]?.clientX ?? null);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.touches[0]?.clientX ?? null);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onSwipe("next");
    } else if (isRightSwipe) {
      onSwipe("prev");
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, onSwipe]);

  return (
    <div
      ref={sliderRef}
      className={clsx(
        styles.slider,
        centered && styles.centered,
        fullScreen && styles.fullScreen
      )}
      style={{
        transform: `translateX(-${translateX}%)`,
        transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={clsx(styles.slide, fullScreen && styles.fullScreenImage)}
          style={{ width: `${itemWidth}%` }}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};
