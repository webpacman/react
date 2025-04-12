import clsx from "clsx";
import { FC, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Flex, FlexAlign, FlexDirection, FlexDisplay } from "../Flex";
import { ImagePopup, ImageProps } from "../ImagePopup";
import { Slider } from "../Slider/Slider";
import styles from "./FullScreenPopup.module.scss";

interface FullScreenPopupProps {
  images: ImageProps[];
  initialIndex?: number;
  onClose: () => void;
}

export const FullScreenPopup: FC<FullScreenPopupProps> = ({
  images,
  initialIndex = 0,
  onClose,
}) => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = useCallback(() => {
    setIsShow(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleEscape]);

  return createPortal(
    <Flex
      center
      className={clsx(styles.overlay, isShow ? styles.show : styles.hide)}
      onClick={handleClose}
    >
      <Flex
        direction={FlexDirection.COLUMN}
        align={FlexAlign.CENTER}
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
      >
        <Flex
          tag="button"
          display={FlexDisplay.INLINE_FLEX}
          center
          className={styles.close}
          onClick={handleClose}
        />
        <Slider
          countInView={1}
          startsWith={initialIndex + 1}
          withArrows={true}
          withControls={false}
          infinity={true}
          fullScreen
          sliderData={images.map((image, index) => (
            <ImagePopup
              key={index}
              src={image.src}
              description={image.description}
              fullScreen
              index={index}
            />
          ))}
        />
      </Flex>
    </Flex>,
    document.body
  );
};
