import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./Interests.module.scss";

export const Interests: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="interests" className={styles.wrapper} grey>
      <SectionTitle>Интересы</SectionTitle>
      <div className="interests__list">
        <div className="interest-wrapper">
          <div className="overlay block-center">
            <div className="overlay__block block-center">
              <p className="overlay__text bold">
                Нажимая, Вы подтверждаете свой возраст&nbsp;&nbsp;18&nbsp;лет.
              </p>
            </div>
            <img
              src="images/vshevchuk.webp"
              alt=""
              className="interest-image overlay__image"
            />
          </div>

          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            est iure laborum magni neque nihil nostrum, nulla quam quia sint?
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            est iure laborum magni neque nihil nostrum, nulla quam quia sint?
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            est iure laborum magni neque nihil nostrum, nulla quam quia sint?
          </p>
        </div>
        <div className="interest-wrapper">
          <img
            src="images/vshevchuk.webp"
            alt="Красивая фотография"
            className="interest-image"
            data-full-screen
          />
          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            assumenda, distinctio doloremque eligendi eos iure magni quos
            repellat sit suscipit.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            assumenda, distinctio doloremque eligendi eos iure magni quos
            repellat sit suscipit.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            assumenda, distinctio doloremque eligendi eos iure magni quos
            repellat sit suscipit.
          </p>
        </div>
        <div className="interest-wrapper">
          <img
            src="images/vshevchuk.webp"
            alt="Ещё одна красивая фотография"
            className="interest-image"
            data-full-screen
          />
          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            delectus nisi odit quisquam sequi sint tenetur! Doloribus labore
            laborum tempore.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            delectus nisi odit quisquam sequi sint tenetur! Doloribus labore
            laborum tempore.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            delectus nisi odit quisquam sequi sint tenetur! Doloribus labore
            laborum tempore.
          </p>
        </div>
        <div className="interest-wrapper">
          <img src="images/vshevchuk.webp" alt="" className="interest-image" />
          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolorem soluta voluptatem? Aperiam blanditiis dignissimos earum
            eligendi facere in, incidunt!
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolorem soluta voluptatem? Aperiam blanditiis dignissimos earum
            eligendi facere in, incidunt!
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolorem soluta voluptatem? Aperiam blanditiis dignissimos earum
            eligendi facere in, incidunt!
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolorem soluta voluptatem? Aperiam blanditiis dignissimos earum
            eligendi facere in, incidunt!
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolorem soluta voluptatem? Aperiam blanditiis dignissimos earum
            eligendi facere in, incidunt!
          </p>
        </div>
        <div className="interest-wrapper">
          <img src="images/vshevchuk.webp" alt="" className="interest-image" />
          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi
            debitis doloremque, earum facilis illum molestiae molestias quis
            quisquam voluptatibus.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi
            debitis doloremque, earum facilis illum molestiae molestias quis
            quisquam voluptatibus.
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi
            debitis doloremque, earum facilis illum molestiae molestias quis
            quisquam voluptatibus.
          </p>
        </div>
        <div className="interest-wrapper">
          <img src="images/vshevchuk.webp" alt="" className="interest-image" />
          <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium atque culpa deserunt eius explicabo laboriosam modi
            numquam odio reprehenderit voluptates?
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium atque culpa deserunt eius explicabo laboriosam modi
            numquam odio reprehenderit voluptates?
          </p>
          <p className="interest-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium atque culpa deserunt eius explicabo laboriosam modi
            numquam odio reprehenderit voluptates?
          </p>
        </div>
      </div>
    </Section>
  );
};
