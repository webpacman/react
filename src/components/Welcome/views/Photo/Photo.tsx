import { FC } from "react";

import VshevchukPhoto from "~/images/vshevchuk2.png";

import styles from "./Photo.module.scss";

export const Photo: FC = () => {
  return <img className={styles.photo} src={VshevchukPhoto} alt="photo" />;
};
