import { FC } from "react";

import styles from "./About.module.scss";

export const About: FC = () => {
  return (
    <p className={styles.about}>
      &copy;&nbsp;Шевчук&nbsp;Виталий 1995&nbsp;-&nbsp;
      {new Date().getFullYear()}
    </p>
  );
};
