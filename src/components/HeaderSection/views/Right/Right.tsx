import React, { type FC } from 'react';
// import styles from './Right.module.scss';

interface RightProps {}

export const Right: FC<RightProps> = () => {
  return (
    <div className="header-center">
      <div className="header-center__wrapper">
        <h1 className="name">Шевчук&nbsp;Виталий</h1>
        <p className="description">
          Привет! Меня зовут Виталий. <span>Я веб-разработчик,</span> давайте
          знакомиться!
        </p>
      </div>
    </div>
  );
};
