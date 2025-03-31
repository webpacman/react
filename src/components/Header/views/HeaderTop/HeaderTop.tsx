import { FC } from "react";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Switcher } from "../Switcher/Switcher";

export const HeaderTop: FC = () => {
  return (
    <div className="header-top">
      <Logo />

      <Navigation />

      <Switcher />
    </div>
  );
};
