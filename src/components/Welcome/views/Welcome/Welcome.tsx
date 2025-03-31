import { FC, PropsWithChildren } from "react";

import { Flex } from "@/common/Flex";

import { Photo } from "../Photo/Photo";
import { TextBlock } from "../TextBlock/TextBlock";
import styles from "./Welcome.module.scss";

export const Welcome: FC<PropsWithChildren> = () => {
  return (
    <Flex className={styles.wrapper}>
      <Photo />
      <TextBlock />
    </Flex>
  );
};
