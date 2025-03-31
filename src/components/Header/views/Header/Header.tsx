import { FC } from "react";

import { Hamburger } from "../Hamburger/Hamburger";
import { HeaderTop } from "../HeaderTop/HeaderTop";

export const Header: FC = () => {
  return (
    <>
      <Hamburger />
      <HeaderTop />
    </>
  );
};
