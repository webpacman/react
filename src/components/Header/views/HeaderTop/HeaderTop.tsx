import { FC, PropsWithChildren } from "react";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Switcher } from "../Switcher/Switcher";

interface HeaderProps {}

export const HeaderTop: FC<PropsWithChildren<HeaderProps>> = () => {
  return (
    <div className="header-top">
      <Logo />

      <Navigation />

      <Switcher />
    </div>
  );
};
