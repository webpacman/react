import clsx from "clsx";
import { FC, useCallback } from "react";

import { Flex, FlexDirection } from "../Flex";
import styles from "./ImagePopup.module.scss";

export interface ImageProps {
  src: string;
  description: string;
}

interface ImagePopupProps {
  index: number;
  fullScreen?: boolean;
  className?: string;
  handleImageClick?: (index: number) => void;
}

export const ImagePopup: FC<ImagePopupProps & ImageProps> = ({
  index,
  src,
  description,
  fullScreen = false,
  className,
  handleImageClick,
}) => {
  const onClickHandler = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (fullScreen) return;

      handleImageClick?.(index);
    },
    [handleImageClick, index, fullScreen]
  );

  return (
    <Flex
      center={fullScreen}
      direction={FlexDirection.COLUMN}
      className={clsx(styles.container, fullScreen && styles.fullScreen)}
    >
      <Flex
        tag="img"
        center
        src={src}
        alt={description}
        className={clsx(
          styles.image,
          fullScreen && styles.imageFullScreen,
          className
        )}
        onClick={onClickHandler}
        loading="lazy"
      />
      {fullScreen && <span className={styles.description}>{description}</span>}
    </Flex>
  );
};
