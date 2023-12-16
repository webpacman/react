import React, { type FC } from 'react';

export const HeaderSection: FC = () => {
  return (
    <header className="header observer-section" id="home" data-id="home">
      <img
        className="header__background"
        src="images/pacman-bg.webp"
        alt="background"
      />
      <div className="header__background-wrapper"></div>

      <div className="header-center">
        <div className="header-center__wrapper">
          <h1 className="name">Шевчук&nbsp;Виталий</h1>
          <p className="description">
            Привет! Меня зовут Виталий. <span>Я веб-разработчик,</span> давайте
            знакомиться!
          </p>
        </div>
      </div>
    </header>
  );
};
