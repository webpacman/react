import { FC, PropsWithChildren } from "react";

import { Flex, FlexAlign, FlexDirection } from "@/common/Flex";

import { About } from "../About/About";
import { Socials } from "../Socials/Socials";
import styles from "./Footer.module.scss";
export const Footer: FC<PropsWithChildren> = () => {
  return (
    <Flex
      tag="footer"
      direction={FlexDirection.COLUMN}
      align={FlexAlign.CENTER}
      className={styles.footer}
    >
      <Socials />

      <About />
    </Flex>
  );
};
