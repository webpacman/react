import { FC, PropsWithChildren } from "react";

import styles from "./Youtube.module.scss";

export const Youtube: FC<PropsWithChildren<YoutubeProps>> = ({ children }) => {
  return (
    <div className="about-me__youtube block-center">
      <h3 className="second-title">YouTube канал</h3>
      <div className={styles.wrapper}>
        <div className="left">
          <iframe
            className="about-me__iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hjx07lEoSiQ?si=kbY4uZHM-d4UrgJN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right">
          <p className="about-me__description">
            Немного занимаюсь ютубом, а именно, развитием канала{" "}
            <a
              className="link"
              target="_blank"
              href="https://www.youtube.com/@webpacman"
            >
              Webpacman
            </a>
            . На канале стараюсь помочь начинающим разработчикам погрузиться в
            прекрасный мир web разработки!
          </p>
          <p className="about-me__description">
            Когда я только начинал свой путь в разработке сайтов, найти нужную
            информацию было очень сложно. Надеюсь, мой канал поможет решить
            данную проблему для многих людей!
          </p>
          <a
            href="https://www.tinkoff.ru/rm/shevchuk.vitaliy3/vfO8w2403"
            target="_blank"
            className="support-button"
          >
            Поддержать канал
          </a>
        </div>
      </div>
    </div>
  );
};
