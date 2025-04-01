import clsx from "clsx";
import { FC } from "react";

import { Flex, FlexAlign, FlexJustify } from "@/common/Flex";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Switcher } from "../Switcher/Switcher";
import styles from "./HeaderTop.module.scss";

interface HeaderTopProps {
  isMenuOpen: boolean;
}

export const HeaderTop: FC<HeaderTopProps> = ({ isMenuOpen }) => {
  return (
    <Flex
      align={FlexAlign.CENTER}
      justify={FlexJustify.EVENLY}
      className={clsx(styles.wrapper, isMenuOpen && styles.open)}
    >
      <Logo />

      <Navigation />

      <Switcher />
    </Flex>
  );
};
