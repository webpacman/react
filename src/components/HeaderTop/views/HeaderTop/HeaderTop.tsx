import React, { type FC } from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { Switcher } from '../Switcher/Switcher';

export const HeaderTop: FC = () => {
  return (
    <>
      <Hamburger />

      <div className="header-top">
        <Logo />
        <Menu />
        <Switcher />
      </div>
    </>
  );
};
