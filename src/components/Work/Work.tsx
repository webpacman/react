import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./Work.module.scss";

export const Work: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="work" className={styles.wrapper} grey>
      <SectionTitle>Работа</SectionTitle>
      <div className="work-wrapper block-center">
        <div
          className="work-element work-element__animation left"
          data-year="2015"
        >
          <div className="work-element__content">
            <p className="work-element__title bold">
              Официант и менеджер заведения
            </p>
            <p className="work-element__description">
              декабрь 2015 - июль 2017
            </p>

            <p className="work-element__block-title bold">Навыки</p>
            <ul className="work-element__skills">
              <li className="work-element__skills-element">
                Коммуникабельность
              </li>
              <li className="work-element__skills-element">
                Стрессоустойчивость
              </li>
              <li className="work-element__skills-element">Внимательность</li>
            </ul>
          </div>
        </div>

        <div
          className="work-element work-element__animation right"
          data-year="2016"
        >
          <div className="work-element__content">
            <p className="work-element__title bold">Верстальщик в проект</p>
            <p className="work-element__description">
              апрель 2017 - октябрь 2017
            </p>

            <p className="work-element__block-title bold">Проекты</p>
            <ul className="work-element__projects">
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">
                  Сайт РСК Стройсервис
                </span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Вёрстка, поддержка и раскрутка сайта gksts.ru (сейчас
                    недоступен)
                  </p>
                </div>
              </li>
            </ul>

            <p className="work-element__block-title bold">Навыки</p>
            <ul className="work-element__skills">
              <li className="work-element__skills-element">html</li>
              <li className="work-element__skills-element">css</li>
              <li className="work-element__skills-element">sass</li>
              <li className="work-element__skills-element">javascript</li>
              <li className="work-element__skills-element">gulp</li>
              <li className="work-element__skills-element">seo</li>
            </ul>
          </div>
        </div>

        <div
          className="work-element work-element__animation left"
          data-year="2017"
        >
          <div className="work-element__content">
            <p className="work-element__title bold">ООО "Чейнкс"</p>
            <p className="work-element__description">
              октябрь 2017 - ноябрь 2018
            </p>

            <p className="work-element__block-title bold">Проекты</p>
            <ul className="work-element__projects">
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">Blockchain</span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Интеграция с блокчейн проектом через javascript
                  </p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">WebTMA</span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Сайт для российской команды поддержки WebTMA webtma.ru
                    (сейчас недоступен)
                  </p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">QRCodeNavigation</span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Проект по навигационным карточкам с использованием QR-кодов.
                    Сервер на node.js, БД - sqlite3 + mongoDB
                  </p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">BrandCheck</span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Блог-интеграция с проектом BrandCheck. Реализация на Django
                    Framework
                  </p>
                </div>
              </li>
            </ul>

            <p className="work-element__block-title bold">Навыки</p>
            <ul className="work-element__skills">
              <li className="work-element__skills-element">html+</li>
              <li className="work-element__skills-element">css+</li>
              <li className="work-element__skills-element">javascript+</li>
              <li className="work-element__skills-element">blockchain</li>
              <li className="work-element__skills-element">node.js</li>
              <li className="work-element__skills-element">python</li>
              <li className="work-element__skills-element">django</li>
              <li className="work-element__skills-element">mongodb</li>
              <li className="work-element__skills-element">postgresql</li>
            </ul>
          </div>
        </div>

        <div
          className="work-element work-element__animation right"
          data-year="2018"
        >
          <div className="work-element__content">
            <p className="work-element__title bold">ООО "М Тех"</p>
            <p className="work-element__description">
              с ноября 2018 по настоящее время
            </p>

            <p className="work-element__block-title bold">Проекты</p>
            <ul className="work-element__projects">
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">Интерфейсы support</span>
                <div className="work-tooltip">
                  <p className="work-project__description">...</p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">WebTMA</span>
                <div className="work-tooltip">
                  <p className="work-project__description">
                    Сайт для российской команды поддержки WebTMA webtma.ru
                    (сейчас недоступен)
                  </p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">
                  RR, DY, Flocktory, Diginetica, Mindbox...
                </span>
                <div className="work-tooltip">
                  <p className="work-project__description">...</p>
                </div>
              </li>
              <li className="work-element__projects-element work-project">
                <span className="work-project__title">more...</span>
                <div className="work-tooltip">
                  <p className="work-project__description">...</p>
                </div>
              </li>
            </ul>

            <p className="work-element__block-title bold">Навыки</p>
            <ul className="work-element__skills">
              <li className="work-element__skills-element">html+</li>
              <li className="work-element__skills-element">css+</li>
              <li className="work-element__skills-element">javascript+</li>
              <li className="work-element__skills-element">blockchain</li>
              <li className="work-element__skills-element">node.js</li>
              <li className="work-element__skills-element">python</li>
              <li className="work-element__skills-element">django</li>
              <li className="work-element__skills-element">mongodb</li>
              <li className="work-element__skills-element">postgresql</li>
              <li className="work-element__skills-element">team lead skills</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
