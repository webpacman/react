import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./Skills.module.scss";

export const Skills: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="skills" className={styles.wrapper}>
      <SectionTitle>Навыки</SectionTitle>
      <section className="skills observer-section" data-id="skills">
        <h2 className="second-title">Навыки</h2>

        <p className="section-description">
          Все оценки являются субъективными и показывают уровень, который, как
          по мне, необходим для работы.
        </p>

        <ul className="skills-filters block-center"></ul>

        <div className="skills-wrapper">
          <div className="skills-list left"></div>

          <div className="skill-card right">
            <div className="skill-card__title">
              <img src="" alt="" className="skill-card__image" />
              <span className="skill-card__name"></span>
            </div>

            <div className="skill-card__progress">
              <span className="skill-card__progress-percent"></span>
              <div className="skill-card__progress-bar">
                <div></div>
              </div>
            </div>

            <p className="skill-card__description"></p>
          </div>
        </div>
      </section>
    </Section>
  );
};
