import { FC, PropsWithChildren } from "react";

import styles from "./Tooltip.module.scss";

interface TooltipProps {
  closeHandler: () => void;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  closeHandler,
  children,
}) => {
  return (
    <div className={styles.tooltip}>
      <button className={styles.close} onClick={closeHandler}>
        x
      </button>
      <div className={styles.mobile}>{children}</div>
    </div>
  );
};
