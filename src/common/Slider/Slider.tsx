import clsx from "clsx";
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";
import styles from "./Slider.module.scss";
import { SliderArrows } from "./views/SliderArrows/SliderArrows";
import { SliderDots } from "./views/SliderDots/SliderDots";
import { SliderList } from "./views/SliderList/SliderList";

interface SliderProps {
  /**
   * Количество элементов в слайдере на одной странице
   */
  countInView?: number;
  /**
   * Начальный слайд
   */
  startsWith?: number;
  /**
   * Центрирование слайдера
   */
  centered?: boolean;
  /**
   * Автоматическое пролистывание слайдера
   */
  autoplay?: boolean;
  /**
   * Интервал автоматического пролистывания слайдера
   */
  autoPlayInterval?: number;
  /**
   * Отображение стрелок
   */
  withArrows?: boolean;
  /**
   * Отображение точек
   */
  withControls?: boolean;
  /**
   * Бесконечный слайдер
   */
  infinity?: boolean;
  /**
   * Полноэкранный режим
   */
  fullScreen?: boolean;
  /**
   * Данные слайдера
   */
  sliderData: ReactNode[];
}

export const Slider: FC<SliderProps> = ({
  countInView = 3,
  startsWith = 1,
  centered = false,
  autoplay = false,
  autoPlayInterval = 5,
  withArrows = false,
  withControls = true,
  infinity = false,
  fullScreen = false,
  sliderData,
}) => {
  const [currentSlide, setCurrentSlide] = useState(startsWith - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const totalItems = sliderData.length;
  const totalSlides = Math.ceil(totalItems / countInView);

  const itemWidth = 100 / countInView;

  const translateX = useMemo(
    () => currentSlide * countInView * itemWidth,
    [currentSlide, countInView, itemWidth]
  );

  const handleNext = useCallback(() => {
    if (totalItems <= countInView) return;

    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentSlide >= totalSlides - 1) {
      if (infinity) {
        setCurrentSlide(0);
      } else {
        setIsTransitioning(false);
      }
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [
    totalItems,
    countInView,
    isTransitioning,
    currentSlide,
    totalSlides,
    infinity,
  ]);

  const handlePrev = useCallback(() => {
    if (totalItems <= countInView) return;

    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentSlide <= 0) {
      if (infinity) {
        setCurrentSlide(totalSlides - 1);
      } else {
        setIsTransitioning(false);
      }
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [
    totalItems,
    countInView,
    isTransitioning,
    currentSlide,
    infinity,
    totalSlides,
  ]);

  const handleDotClick = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentSlide(index);
    },
    [isTransitioning]
  );

  const handleSwipe = useCallback(
    (direction: "next" | "prev") => {
      if (isMobile && !fullScreen) return;

      if (direction === "next") {
        handleNext();
      } else {
        handlePrev();
      }
    },
    [fullScreen, handleNext, handlePrev, isMobile]
  );

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (autoplay && totalItems > countInView && !isMobile) {
      const interval = setInterval(handleNext, autoPlayInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [
    autoplay,
    autoPlayInterval,
    handleNext,
    totalItems,
    countInView,
    isMobile,
  ]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        slider.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [handleTransitionEnd]);

  return (
    <div className={clsx(styles.container, fullScreen && styles.fullScreen)}>
      <SliderList
        sliderData={sliderData}
        sliderRef={sliderRef}
        centered={centered}
        currentSlide={currentSlide}
        itemWidth={itemWidth}
        translateX={translateX}
        isTransitioning={isTransitioning}
        onSwipe={handleSwipe}
        fullScreen={fullScreen}
      />

      {withArrows && !isMobile && totalItems > countInView && (
        <SliderArrows
          fullScreen={fullScreen}
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={!infinity && currentSlide === 0}
          isNextDisabled={!infinity && currentSlide >= totalSlides - 1}
        />
      )}

      {withControls && !isMobile && totalItems > countInView && (
        <SliderDots
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          onDotClick={handleDotClick}
        />
      )}
    </div>
  );
};
