import React, { type FC } from 'react';
import { Left } from '../Left/Left';
import { Right } from '../Right/Right';

import styles from './HeaderSection.module.scss';

export const HeaderSection: FC = () => {
  return (
    <header className={styles.headerSection} id="home" data-id="home">
      <Left />
      <Right />
    </header>
  );
};
