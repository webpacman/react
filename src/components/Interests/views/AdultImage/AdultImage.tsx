import clsx from "clsx";
import { FC, SyntheticEvent, useCallback, useState } from "react";

import { Flex } from "@/common/Flex";
import { FullScreenPopup } from "@/common/FullScreenPopup";

import styles from "./AdultImage.module.scss";

interface AdultImageProps {
  src: string;
  description: string;
  isAdult?: boolean;
}

export const AdultImage: FC<AdultImageProps> = ({
  src,
  description,
  isAdult,
}) => {
  const [approve, setApprove] = useState(!isAdult);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowPopup(false);
  }, []);

  const approveHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    setApprove(true);
  }, []);

  return (
    <Flex
      center
      className={clsx(styles.wrapper, !approve && styles.overlay)}
      onClick={approveHandler}
    >
      {!approve && (
        <Flex center className={styles.block}>
          <p className={styles.text}>
            Нажимая, Вы подтверждаете свой возраст&nbsp;&gt;&nbsp;18&nbsp;лет.
          </p>
        </Flex>
      )}
      <img
        src={src}
        alt={description}
        className={clsx(styles.image, !approve && styles.overlay)}
        onClick={handleClick}
      />
      {showPopup && (
        <FullScreenPopup
          images={[{ src, description }]}
          onClose={handleClose}
        />
      )}
    </Flex>
  );
};
