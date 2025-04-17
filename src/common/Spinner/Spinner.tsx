import clsx from "clsx";
import { FC } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

import { Flex } from "../Flex";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  center?: boolean;
  className?: string;
  fullScreen?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({
  center,
  className,
  fullScreen,
}) => {
  return (
    <Flex
      center={center}
      className={clsx(
        styles.wrapper,
        fullScreen && styles.fullScreen,
        className
      )}
    >
      <PacmanLoader color="#76bc21" size={24} />
    </Flex>
  );
};
