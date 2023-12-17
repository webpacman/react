import React, { type FC } from 'react';
// import styles from './Logo.module.scss';

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <a href="#home" className="link logo block-center">
      Виталий Шевчук
    </a>
  );
};
