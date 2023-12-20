import React, { type FC } from 'react';
// import styles from './Menu.module.scss';
import HomeIcon from './home.svg';

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  return (
    <nav className="navigation">
      <ul className="menu block-center">
        <li className="menu-element block-center">
          <a
            className="link menu-element__link active home block-center"
            href="#home"
          >
            <HomeIcon width={10} height={10} />
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#about-me">
            Обо&nbsp;мне
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#achievements">
            Достижения
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#skills">
            Навыки
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#work">
            Работа
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#interests">
            Интересы
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#books">
            Книги
          </a>
        </li>
        <li className="menu-element block-center">
          <a className="link menu-element__link" href="#contact-me">
            Связаться
          </a>
        </li>
      </ul>
    </nav>
  );
};
