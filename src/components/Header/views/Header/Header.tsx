import { FC, useState } from "react";

import { Hamburger } from "../Hamburger/Hamburger";
import { HeaderTop } from "../HeaderTop/HeaderTop";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeaderTop isMenuOpen={isMenuOpen} />
    </>
  );
};
