import { FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <ul className="menu block-center">
        <li className="menu-element block-center">
          <a
            className="link menu-element__link active home block-center"
            href="#home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
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
