import { FC, PropsWithChildren } from "react";

import { Hamburger } from "./views/Hamburger/Hamburger";
import { HeaderTop } from "./views/HeaderTop/HeaderTop";

export const Header: FC<PropsWithChildren> = () => {
  return (
    <>
      <Hamburger />
      <HeaderTop />
    </>
  );
};
