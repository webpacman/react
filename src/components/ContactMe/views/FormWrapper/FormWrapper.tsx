import React, { type FC } from 'react';
// import styles from './FormWrapper.module.scss';

interface FormWrapperProps {}

export const FormWrapper: FC<FormWrapperProps> = () => {
  return (
    <>
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

      <div className="form-result">
        <div className="form-result__content">
          <p className="form-result__text"></p>
        </div>
      </div>
    </>
  );
};
