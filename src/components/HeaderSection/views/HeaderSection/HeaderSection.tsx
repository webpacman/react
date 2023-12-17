import React, { type FC } from 'react';
import { Left } from '../Left/Left';
import { Right } from '../Right/Right';

export const HeaderSection: FC = () => {
  return (
    <header className="header observer-section" id="home" data-id="home">
      <Left />
      <Right />
    </header>
  );
};
