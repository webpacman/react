import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./ContactMe.module.scss";

export const ContactMe: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="contact-me" className={styles.wrapper}>
      <SectionTitle>Обратная связь</SectionTitle>
      <form action="" className="contact-me__form">
        <div className="input-wrapper left">
          <label className="label bold" htmlFor="name">
            Имя
          </label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div className="input-wrapper right">
          <label className="label bold" htmlFor="email">
            E-mail
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Введите ваш e-mail адрес"
            required
          />
        </div>
        <div className="cls"></div>

        <div className="textarea-wrapper">
          <label className="label bold" htmlFor="message">
            Сообщение
          </label>
          <textarea
            className="textarea"
            name="message"
            placeholder="Подробно опишите, с какой целью хотите связаться со мной"
            id="message"
            cols={30}
            rows={10}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit">
          Отправить
        </button>
      </form>
    </Section>
  );
};
