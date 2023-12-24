import React, { memo, type FC } from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { Switcher } from '../Switcher/Switcher';

import styles from './HeaderTop.module.scss';

export const HeaderTop: FC = memo(() => {
  return (
    <>
      <Hamburger />

      <div className={styles.headerTop}>
        <Logo />
        <Menu />
        <Switcher />
      </div>
    </>
  );
});

HeaderTop.displayName = 'HeaderTop';
