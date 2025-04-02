import { FC } from "react";

import PacmanBg from "~/images/pacman-bg.jpg";

import styles from "./Background.module.scss";

export const Background: FC = () => {
  return (
    <>
      <img className={styles.background} src={PacmanBg} alt="webpacman" />
      <div className={styles.backgroundWrapper}></div>
    </>
  );
};
