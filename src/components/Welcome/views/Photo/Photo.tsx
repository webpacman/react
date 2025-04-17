import { FC } from "react";

import { Flex, FlexAlign } from "@/common/Flex";
import VshevchukPhoto from "~/images/vshevchuk2.png";

import styles from "./Photo.module.scss";

export const Photo: FC = () => {
  return (
    <Flex align={FlexAlign.CENTER} className={styles.wrapper}>
      <img className={styles.photo} src={VshevchukPhoto} alt="photo" />
    </Flex>
  );
};
