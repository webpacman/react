import { FC, PropsWithChildren } from "react";

interface DetailsProps {}

export const Details: FC<PropsWithChildren<DetailsProps>> = ({ children }) => {
  return (
    <div className="right">
      <h2 className="about-me__title">Шевчук Виталий Геннадьевич</h2>
      <p className="about-me__description gray">Все мы немножко fullstack...</p>

      <p className="about-me__description">
        Я веб-разработчик уровня middle+ со стажем 7 лет. Начинал свой путь с
        написания небольших сайтов для знакомых, успел поработать в стартапе
        (больше не хочу), попробовал множество языков программирования и
        технологий.
      </p>
      <p className="about-me__description">
        Сейчас работаю в компании
        <a
          href="https://mtech.mvideoeldorado.ru/ru/"
          target="_blank"
          className="link"
        >
          М Тех
        </a>
        , а именно - развиваю и сопровождаю сайт{" "}
        <a href="https://eldorado.ru/" target="_blank" className="link">
          eldorado.ru
        </a>
        . Тут я полюбил php, познакомился с React, научился работать в команде,
        активно общаться с "бизнесом", обучать и управлять.
      </p>
      <p className="about-me__description">
        Свободное время посвящаю развитию и поддержке сторонних проектов,
        например,
        <a href="https://moydameti.ru/" target="_blank" className="link">
          Мой&nbsp;да&nbsp;мети
        </a>
        , стараюсь активно изучать framework Laravel или React и побольше
        времени проводить с семьей.
      </p>

      <ul className="about-me__extra">
        <li className="about-me__extra-element">
          <span className="about-me__extra-icon birthday">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
            </svg>
          </span>
          <div className="about-me__extra-content">
            <span className="about-me__extra-title bold">Дата рождения:</span>
            <span className="about-me__extra-description">25.05.1995</span>
          </div>
        </li>
        <li className="about-me__extra-element">
          <span className="about-me__extra-icon address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <div className="about-me__extra-content">
            <span className="about-me__extra-title bold">Адрес:</span>
            <span className="about-me__extra-description">
              г. Москва, Россия
            </span>
          </div>
        </li>
        <li className="about-me__extra-element">
          <span className="about-me__extra-icon education">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
          </span>
          <div className="about-me__extra-content">
            <span className="about-me__extra-title bold">Образование:</span>
            <span className="about-me__extra-description">
              МАДИ(ГТУ), специальность - Автоматизированные системы управления
              (АСУ)
            </span>
          </div>
        </li>
        <li className="about-me__extra-element">
          <span className="about-me__extra-icon courses">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </span>
          <div className="about-me__extra-content">
            <span className="about-me__extra-title bold">Курсы:</span>
            <span className="about-me__extra-description">
              Python-разработчик (geekbrains)
            </span>
            <span className="about-me__extra-description block">
              Php от 0 до PRO (Skillbox)
            </span>
            <span className="about-me__extra-description block">
              React + Redux (Udemy)
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
